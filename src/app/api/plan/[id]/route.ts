import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

type Ctx = { params: Promise<{ id: string }> }

// Update a timetable item (toggle done / edit fields).
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const { id } = await ctx.params
  const body = (await req.json()) as {
    done?: boolean
    title?: string
    date?: string
    minutes?: number
  }
  const data: Record<string, unknown> = {}
  if (typeof body.done === 'boolean') data.done = body.done
  if (body.title && body.title.trim()) data.title = body.title.trim().slice(0, 180)
  if (body.date && /^\d{4}-\d{2}-\d{2}$/.test(body.date)) data.date = body.date
  if (body.minutes) data.minutes = Math.max(5, Math.min(360, Number(body.minutes)))
  const item = await db.studyItem.update({ where: { id }, data })
  return NextResponse.json({ ok: true, item })
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const { id } = await ctx.params
  await db.studyItem.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
