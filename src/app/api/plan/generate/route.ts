import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { generatePlan } from '@/lib/plan'
import { bookShort } from '@/lib/types'

// Rebuild the smart plan from today until the exam date.
// Preserves custom tasks; wipes and regenerates auto items.
export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as { today?: string }
  const settings = await db.settings.findUnique({ where: { id: 'main' } })
  if (!settings) return NextResponse.json({ error: 'Settings missing' }, { status: 500 })

  const now = new Date()
  const today = body.today && /^\d{4}-\d{2}-\d{2}$/.test(body.today) ? body.today : toISODate(now)

  const chapters = await db.chapter.findMany({ orderBy: { order: 'asc' } })
  const items = generatePlan({
    chapters: chapters.map((c) => ({
      id: c.id,
      subjectId: c.subjectId,
      title: c.title,
      book: c.book,
      bookShort: bookShort(c.book),
      number: c.number,
      weightageMarks: c.weightageMarks,
      status: c.status,
    })),
    examDate: settings.examDate,
    dailyMinutes: settings.dailyMinutes,
    today,
  })

  await db.studyItem.deleteMany({ where: { type: { not: 'custom' } } })
  if (items.length) {
    await db.studyItem.createMany({ data: items.map((i) => ({ ...i, done: false })) })
  }

  const planItems = await db.studyItem.findMany({ orderBy: [{ date: 'asc' }, { createdAt: 'asc' }] })
  return NextResponse.json({ ok: true, generated: items.length, items: planItems })
}

function toISODate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}
