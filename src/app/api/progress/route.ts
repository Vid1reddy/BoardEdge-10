import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Board-question practice progress: list for a chapter / toggle one question.
export async function GET(req: NextRequest) {
  const chapterId = req.nextUrl.searchParams.get('chapterId')
  if (!chapterId) return NextResponse.json({ error: 'chapterId required' }, { status: 400 })
  const rows = await db.boardProgress.findMany({ where: { chapterId } })
  return NextResponse.json({ progress: rows.map((r) => ({ qId: r.qId, done: r.done })) })
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { chapterId?: string; qId?: string; done?: boolean }
  if (!body.chapterId || !body.qId) {
    return NextResponse.json({ error: 'chapterId and qId required' }, { status: 400 })
  }
  const row = await db.boardProgress.upsert({
    where: { chapterId_qId: { chapterId: body.chapterId, qId: body.qId } },
    update: { done: Boolean(body.done) },
    create: { chapterId: body.chapterId, qId: body.qId, done: Boolean(body.done) },
  })
  return NextResponse.json({ ok: true, qId: row.qId, done: row.done })
}
