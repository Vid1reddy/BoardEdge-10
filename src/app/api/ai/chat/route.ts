import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { chatComplete, type ChatMessage } from '@/lib/ai'

// AI Doubt Tutor: chat with chapter context injected into the system prompt.
export async function POST(req: NextRequest) {
  const body = (await req.json()) as { messages?: { role: 'user' | 'assistant'; content: string }[]; chapterId?: string | null }

  const history = (body.messages ?? [])
    .filter((m) => m && typeof m.content === 'string' && m.content.trim())
    .slice(-12)

  let context = ''
  if (body.chapterId) {
    const ch = await db.chapter.findUnique({ where: { id: body.chapterId } })
    if (ch) {
      const sections = (ch.sections as unknown as { heading: string; points: string[]; trick?: string }[])
        .map((s) => `## ${s.heading}\n- ${s.points.slice(0, 6).join('\n- ')}`)
        .join('\n')
      context = `The student is currently studying this chapter:\nSubject/Book: ${ch.book}\nChapter ${ch.number}: ${ch.title}\nSummary: ${ch.summary}\nKey notes:\n${sections.slice(0, 9000)}`
    }
  }

  const system = [
    'You are BoardEdge AI, a friendly expert tutor for CBSE Class 10 board students (India).',
    'You help with Mathematics, Science, Social Science and English (NCERT rationalised 2025-26 syllabus).',
    'Rules: answer in simple, exam-focused English; keep answers under 220 words unless asked for more;',
    'use short bullet points and bold key terms sparingly; give memory tricks when useful;',
    'for maths show each step; if a question is outside Class 10 NCERT scope, still help but note it briefly.',
    context,
  ]
    .filter(Boolean)
    .join('\n')

  const messages: ChatMessage[] = [
    { role: 'system', content: system },
    ...history.map((m) => ({ role: m.role, content: m.content.slice(0, 2000) })),
  ]

  try {
    const result = await chatComplete(messages, { temperature: 0.6, maxTokens: 900 })
    return NextResponse.json({ reply: result.text, provider: result.provider })
  } catch (e) {
    return NextResponse.json(
      { error: `AI is unavailable right now. ${(e as Error).message}` },
      { status: 502 }
    )
  }
}
