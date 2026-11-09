import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { CHAPTER_STATUSES } from '@/lib/types'

type Ctx = { params: Promise<{ id: string }> }

// Chapter detail: sections (notes) + probable board questions.
export async function GET(_req: NextRequest, ctx: Ctx) {
  const { id } = await ctx.params
  const chapter = await db.chapter.findUnique({
    where: { id },
    include: { probableQuestions: { orderBy: [{ marks: 'asc' }, { id: 'asc' }] } },
  })
  if (!chapter) return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })
  return NextResponse.json(chapter)
}

// Update chapter study status.
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const { id } = await ctx.params
  const body = (await req.json()) as { status?: string }
  const status = body.status
  if (!status || !CHAPTER_STATUSES.includes(status as (typeof CHAPTER_STATUSES)[number])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }
  const chapter = await db.chapter.update({
    where: { id },
    data: {
      status,
      lastRevisedAt: status === 'revised' || status === 'mastered' ? new Date() : undefined,
    },
  })
  return NextResponse.json({ ok: true, status: chapter.status })
}
