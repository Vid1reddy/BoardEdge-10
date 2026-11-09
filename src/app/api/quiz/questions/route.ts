import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/quiz/questions?chapterId=xxx&count=10
// Returns MCQs for a chapter (answers included - this is a study app with instant feedback).
export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const chapterId = url.searchParams.get('chapterId')
  const count = Math.max(1, Math.min(30, Number(url.searchParams.get('count')) || 10))
  if (!chapterId) return NextResponse.json({ error: 'chapterId required' }, { status: 400 })

  const all = await db.quizQuestion.findMany({ where: { chapterId } })
  // Shuffle for variety.
  const shuffled = all
    .map((q) => ({ q, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(({ q }) => q)
    .slice(0, count)

  return NextResponse.json({ questions: shuffled })
}
