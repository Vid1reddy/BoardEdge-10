import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Main data load: subjects, chapter metadata, settings.
export async function GET() {
  const [subjects, chapters, settings] = await Promise.all([
    db.subject.findMany({ orderBy: { order: 'asc' } }),
    db.chapter.findMany({
      select: {
        id: true,
        subjectId: true,
        book: true,
        number: true,
        title: true,
        summary: true,
        weightageMarks: true,
        difficulty: true,
        status: true,
        order: true,
        _count: { select: { questions: true, probableQuestions: true } },
      },
      orderBy: { order: 'asc' },
    }),
    db.settings.findUnique({ where: { id: 'main' } }),
  ])

  const totals = await Promise.all([
    db.quizQuestion.count(),
    db.probableQuestion.count(),
  ])

  // Never send the Settings row raw: it can contain API keys. Send only safe fields.
  const safeSettings = settings
    ? { id: settings.id, examDate: settings.examDate, dailyMinutes: settings.dailyMinutes }
    : { id: 'main', examDate: '2027-02-15', dailyMinutes: 90 }

  return NextResponse.json({
    subjects,
    chapters: chapters.map((c) => ({
      ...c,
      mcqCount: c._count.questions,
      boardQCount: c._count.probableQuestions,
      _count: undefined,
    })),
    settings: safeSettings,
    contentTotals: { mcqs: totals[0], boardQuestions: totals[1] },
  })
}
