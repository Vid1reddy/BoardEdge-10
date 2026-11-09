import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

function toISODate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

function shiftISO(iso: string, days: number): string {
  const d = new Date(iso + 'T00:00:00')
  d.setDate(d.getDate() + days)
  return toISODate(d)
}

type DayBucket = {
  date: string
  label: string
  items: {
    id: string
    title: string
    minutes: number
    type: string
    done: boolean
    subjectId: string | null
    chapterId: string | null
  }[]
  doneCount: number
  totalCount: number
  minutesPlanned: number
  minutesDone: number
  quizCount: number
  quizCorrect: number
  quizTotalQs: number
  boardPracticed: number
}

function emptyBucket(date: string, label: string): DayBucket {
  return {
    date,
    label,
    items: [],
    doneCount: 0,
    totalCount: 0,
    minutesPlanned: 0,
    minutesDone: 0,
    quizCount: 0,
    quizCorrect: 0,
    quizTotalQs: 0,
    boardPracticed: 0,
  }
}

// Study memory: what the student did yesterday, what is planned for today,
// and what is coming up tomorrow.
export async function GET(req: NextRequest) {
  const todayParam = req.nextUrl.searchParams.get('today')
  const today = todayParam && /^\d{4}-\d{2}-\d{2}$/.test(todayParam) ? todayParam : toISODate(new Date())
  const yesterday = shiftISO(today, -1)
  const tomorrow = shiftISO(today, 1)

  const yesterdayStart = new Date(yesterday + 'T00:00:00')
  const todayStart = new Date(today + 'T00:00:00')
  const tomorrowStart = new Date(tomorrow + 'T00:00:00')

  const [items, attempts, boardProgress] = await Promise.all([
    db.studyItem.findMany({
      where: { date: { in: [yesterday, today, tomorrow] } },
      orderBy: [{ date: 'asc' }, { createdAt: 'asc' }],
    }),
    db.quizAttempt.findMany({
      where: { createdAt: { gte: yesterdayStart, lt: tomorrowStart } },
      select: { correct: true, total: true, createdAt: true },
    }),
    db.boardProgress.findMany({
      where: { done: true, updatedAt: { gte: yesterdayStart, lt: tomorrowStart } },
      select: { qId: true, updatedAt: true },
    }),
  ])

  const buckets: Record<string, DayBucket> = {
    [yesterday]: emptyBucket(yesterday, 'Yesterday'),
    [today]: emptyBucket(today, 'Today'),
    [tomorrow]: emptyBucket(tomorrow, 'Tomorrow'),
  }

  for (const it of items) {
    const b = buckets[it.date]
    if (!b) continue
    b.items.push({
      id: it.id,
      title: it.title,
      minutes: it.minutes,
      type: it.type,
      done: it.done,
      subjectId: it.subjectId,
      chapterId: it.chapterId,
    })
    b.totalCount++
    b.minutesPlanned += it.minutes
    if (it.done) {
      b.doneCount++
      b.minutesDone += it.minutes
    }
  }

  for (const a of attempts) {
    const key = toISODate(a.createdAt)
    const b = buckets[key]
    if (!b) continue
    b.quizCount++
    b.quizCorrect += a.correct
    b.quizTotalQs += a.total
  }

  for (const bp of boardProgress) {
    const key = toISODate(bp.updatedAt)
    const b = buckets[key]
    if (b) b.boardPracticed++
  }

  const carryOver = buckets[yesterday].totalCount - buckets[yesterday].doneCount

  return NextResponse.json({ yesterday: buckets[yesterday], today: buckets[today], tomorrow: buckets[tomorrow], carryOver })
}
