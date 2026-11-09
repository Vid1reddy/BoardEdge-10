import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Timetable items: list / add custom task.
export async function GET() {
  const items = await db.studyItem.findMany({ orderBy: [{ date: 'asc' }, { createdAt: 'asc' }] })
  return NextResponse.json({ items })
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    date?: string
    title?: string
    subjectId?: string | null
    chapterId?: string | null
    minutes?: number
    type?: string
  }
  if (!body.date || !/^\d{4}-\d{2}-\d{2}$/.test(body.date)) {
    return NextResponse.json({ error: 'date must be YYYY-MM-DD' }, { status: 400 })
  }
  const title = (body.title ?? '').trim()
  if (!title) return NextResponse.json({ error: 'title is required' }, { status: 400 })

  const item = await db.studyItem.create({
    data: {
      date: body.date,
      title: title.slice(0, 180),
      subjectId: body.subjectId ?? null,
      chapterId: body.chapterId ?? null,
      minutes: Math.max(5, Math.min(360, Number(body.minutes) || 45)),
      type: 'custom',
      done: false,
    },
  })
  return NextResponse.json({ ok: true, item })
}
