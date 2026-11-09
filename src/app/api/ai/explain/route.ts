import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { chatComplete, type ChatMessage } from '@/lib/ai'

// AI Note Explainer: expand one note section with simple explanation, example and a memory trick.
export async function POST(req: NextRequest) {
  const body = (await req.json()) as { chapterId?: string; heading?: string; points?: string[] }
  if (!body.chapterId || !body.heading) {
    return NextResponse.json({ error: 'chapterId and heading required' }, { status: 400 })
  }
  const ch = await db.chapter.findUnique({ where: { id: body.chapterId } })
  if (!ch) return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })

  const points = (body.points ?? []).slice(0, 6).join('\n- ')
  const sections = (ch.sections as unknown as { heading: string; para?: string; points: string[] }[]) ?? []
  const section = sections.find((s) => s.heading === body.heading)
  const para = section?.para?.trim()

  const system =
    'You are BoardEdge AI, an expert CBSE Class 10 tutor who explains concepts the way popular online educators do: simple language, relatable examples, memory tricks, and exam tips. Output plain text with short lines. Use lines starting with "•" for bullets. No markdown headers, no asterisks, no emoji.'
  const user = `Chapter: ${ch.book}, Ch ${ch.number} - ${ch.title}.
Section heading: "${body.heading}"
${para ? `Full note paragraph:\n"${para}"\n` : ''}
Key points from the note:
- ${points}

Explain this section for a 15-year-old in 140-200 words:
1. Start with a one-line intuition (what is it and why it matters).
2. Explain the key points simply with one concrete example.
3. End with a line "TRICK: <a memory trick>" and a line "EXAM TIP: <how CBSE asks this>".`

  const messages: ChatMessage[] = [
    { role: 'system', content: system },
    { role: 'user', content: user },
  ]

  try {
    const result = await chatComplete(messages, { temperature: 0.7, maxTokens: 700 })
    return NextResponse.json({ explanation: result.text.trim(), provider: result.provider })
  } catch (e) {
    return NextResponse.json({ error: `AI explanation failed. ${(e as Error).message}` }, { status: 502 })
  }
}
