import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

function toISODate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

// Dashboard stats: countdown, streak, syllabus completion, today's plan, recent attempts.
export async function GET() {
  const [chapters, subjects, settings, attempts, allItems] = await Promise.all([
    db.chapter.findMany({ select: { subjectId: true, status: true, weightageMarks: true, order: true } }),
    db.subject.findMany({ orderBy: { order: 'asc' } }),
    db.settings.findUnique({ where: { id: 'main' } }),
    db.quizAttempt.findMany({ orderBy: { createdAt: 'desc' }, take: 20 }),
    db.studyItem.findMany({ select: { date: true, done: true, minutes: true }, orderBy: { date: 'asc' } }),
  ])

  const examDate = settings?.examDate ?? '2027-02-15'
  const today = toISODate(new Date())
  const daysLeft = Math.max(
    0,
    Math.round((new Date(examDate + 'T00:00:00').getTime() - new Date(today + 'T00:00:00').getTime()) / 86_400_000)
  )

  const total = chapters.length
  const mastered = chapters.filter((c) => c.status === 'mastered').length
  const learning = chapters.filter((c) => c.status === 'learning' || c.status === 'revised').length
  // Completion: mastered = 1, revised = 0.6, learning = 0.3, not-started = 0
  const completionPct =
    total === 0
      ? 0
      : Math.round(
          (chapters.reduce((acc, c) => {
            if (c.status === 'mastered') return acc + 1
            if (c.status === 'revised') return acc + 0.6
            if (c.status === 'learning') return acc + 0.3
            return acc
          }, 0) /
            total) *
            100
        )

  const subjectProgress = subjects.map((s) => {
    const list = chapters.filter((c) => c.subjectId === s.id)
    const m = list.filter((c) => c.status === 'mastered').length
    const l = list.filter((c) => c.status === 'learning' || c.status === 'revised').length
    return { subjectId: s.id, total: list.length, mastered: m, learning: l, pct: list.length ? Math.round((m / list.length) * 100) : 0 }
  })

  // Streak: consecutive days (ending today; if today empty, ending yesterday) with at least one completed task.
  const doneByDate = new Map<string, boolean>()
  for (const it of allItems) {
    if (it.done) doneByDate.set(it.date, true)
  }
  let streak = 0
  let cursor = new Date(today + 'T00:00:00')
  if (!doneByDate.get(toISODate(cursor))) {
    cursor.setDate(cursor.getDate() - 1)
  }
  while (doneByDate.get(toISODate(cursor))) {
    streak++
    cursor.setDate(cursor.getDate() - 1)
  }

  const todayItems = await db.studyItem.findMany({ where: { date: today } })
  const todayTotal = todayItems.length
  const todayDone = todayItems.filter((i) => i.done).length

  // Analytics: minutes studied per day over the last 7 days.
  const dailyMinutes: { date: string; minutes: number }[] = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today + 'T00:00:00')
    d.setDate(d.getDate() - i)
    const key = toISODate(d)
    const minutes = allItems.filter((it) => it.date === key && it.done).reduce((acc, it) => acc + it.minutes, 0)
    dailyMinutes.push({ date: key, minutes })
  }
  // Analytics: last 15 quiz attempts, oldest first, for the accuracy trend line.
  const attemptTrend = [...attempts].slice(0, 15).reverse().map((a) => ({ correct: a.correct, total: a.total }))

  return NextResponse.json({
    examDate,
    daysLeft,
    streak,
    chaptersTotal: total,
    chaptersMastered: mastered,
    chaptersLearning: learning,
    completionPct,
    subjectProgress,
    todayTotal,
    todayDone,
    recentAttempts: attempts.slice(0, 5),
    dailyMinutes,
    attemptTrend,
  })
}
