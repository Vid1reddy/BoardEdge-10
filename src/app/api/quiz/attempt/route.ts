import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Record a quiz attempt / list recent attempts.
export async function GET() {
  const attempts = await db.quizAttempt.findMany({ orderBy: { createdAt: 'desc' }, take: 8 })
  return NextResponse.json({ attempts })
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    chapterId?: string | null
    subjectId?: string | null
    total?: number
    correct?: number
    wrong?: number
    skipped?: number
    durationSec?: number
  }
  const total = Math.max(0, Math.min(50, Number(body.total) || 0))
  const correct = Math.max(0, Math.min(total, Number(body.correct) || 0))
  const wrong = Math.max(0, Math.min(total, Number(body.wrong) || 0))
  const skipped = Math.max(0, Math.min(total, Number(body.skipped) || 0))
  const durationSec = Math.max(0, Math.min(36000, Math.round(Number(body.durationSec) || 0)))
  const accuracy = total > 0 ? Math.round((correct / total) * 1000) / 10 : 0
  const attempt = await db.quizAttempt.create({
    data: {
      chapterId: body.chapterId ?? null,
      subjectId: body.subjectId ?? null,
      total,
      correct,
      wrong,
      skipped,
      durationSec,
      accuracy,
    },
  })
  return NextResponse.json({ ok: true, attempt })
}
