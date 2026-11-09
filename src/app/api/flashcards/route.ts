import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

type Card = {
  id: string
  chapterId: string
  chapterTitle: string
  book: string
  subjectId: string
  front: string
  back: string
  kind: 'term' | 'trick'
}

// GET /api/flashcards?subjectId=maths  -> sample across chapters
// GET /api/flashcards?chapterId=maths-3 -> all cards of one chapter
export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const subjectId = url.searchParams.get('subjectId')
  const chapterId = url.searchParams.get('chapterId')

  if (chapterId) {
    const chapter = await db.chapter.findUnique({ where: { id: chapterId } })
    if (!chapter) return NextResponse.json({ error: 'chapter not found' }, { status: 404 })
    const sections = (chapter.sections as { heading: string; keyTerms: { term: string; meaning: string }[]; trick?: string }[]) ?? []
    const cards: Card[] = []
    for (let si = 0; si < sections.length; si++) {
      const sec = sections[si]
      for (const kt of sec.keyTerms ?? []) {
        if (!kt?.term) continue
        cards.push({
          id: `${chapterId}:t:${si}:${cards.length}`,
          chapterId,
          chapterTitle: chapter.title,
          book: chapter.book,
          subjectId: chapter.subjectId,
          front: kt.term,
          back: kt.meaning,
          kind: 'term',
        })
      }
      if (sec.trick && sec.trick.trim().length > 10) {
        cards.push({
          id: `${chapterId}:k:${si}`,
          chapterId,
          chapterTitle: chapter.title,
          book: chapter.book,
          subjectId: chapter.subjectId,
          front: `Trick: ${sec.heading}`,
          back: sec.trick,
          kind: 'trick',
        })
      }
    }
    return NextResponse.json({ cards })
  }

  if (!subjectId) return NextResponse.json({ error: 'subjectId or chapterId required' }, { status: 400 })

  const chapters = await db.chapter.findMany({ where: { subjectId }, orderBy: { order: 'asc' } })
  const cards: Card[] = []
  for (const chapter of chapters) {
    const sections = (chapter.sections as { heading: string; keyTerms: { term: string; meaning: string }[]; trick?: string }[]) ?? []
    for (let si = 0; si < sections.length; si++) {
      const sec = sections[si]
      for (const kt of sec.keyTerms ?? []) {
        if (!kt?.term) continue
        cards.push({
          id: `${chapter.id}:t:${si}:${cards.length}`,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          book: chapter.book,
          subjectId: chapter.subjectId,
          front: kt.term,
          back: kt.meaning,
          kind: 'term',
        })
      }
    }
  }
  // Sample up to 60 cards spread across the syllabus for a mixed session.
  const step = Math.max(1, Math.floor(cards.length / 60))
  const sampled = cards.filter((_, i) => i % step === 0).slice(0, 60)
  return NextResponse.json({ cards: sampled })
}
