import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { chatComplete, extractJson, type ChatMessage } from '@/lib/ai'

type GenQ = { question?: string; marks?: number; type?: string; probability?: string; answer?: string }

// AI Question Bank: generate probable board questions (optionally save them).
export async function POST(req: NextRequest) {
  const body = (await req.json()) as { chapterId?: string; count?: number; save?: boolean }
  const count = Math.max(1, Math.min(6, Number(body.count) || 3))
  if (!body.chapterId) return NextResponse.json({ error: 'chapterId required' }, { status: 400 })

  const ch = await db.chapter.findUnique({ where: { id: body.chapterId } })
  if (!ch) return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })

  const existing = await db.probableQuestion.findMany({ where: { chapterId: ch.id }, take: 4 })
  const hotTopics = (ch.hotTopics as unknown as string[]) ?? []

  const system =
    'You are a CBSE Class 10 board-exam analyst. You output ONLY valid JSON, no commentary, no markdown fences.'
  const user = `Predict the most probable CBSE Class 10 board questions for ${ch.book}, Chapter ${ch.number}: "${ch.title}".
${hotTopics.length ? `High-weightage topics: ${hotTopics.join('; ')}.` : ''}
Avoid repeating these existing questions:
${JSON.stringify(existing.map((e) => e.question).slice(0, 4))}

Generate ${count} questions mixing: 2-mark short answer, 3-mark short answer, 5-mark long answer, or 5-mark case/source-based (type CASE with (a)(b)(c) sub-parts quoted in the question).
Return a JSON array; each item:
{"question": "...", "marks": 2|3|5, "type": "SA"|"LA"|"CASE", "probability": "high"|"very-high", "answer": "model answer as numbered points like 1) ... 2) ..."}
Answer length: 2-mark ~80 words, 3-mark ~130 words, 5-mark ~240 words. Content must be NCERT-accurate.`

  const messages: ChatMessage[] = [
    { role: 'system', content: system },
    { role: 'user', content: user },
  ]

  try {
    const result = await chatComplete(messages, { temperature: 0.5, maxTokens: 2600 })
    const parsed = extractJson<GenQ[]>(result.text)
    const valid = (Array.isArray(parsed) ? parsed : []).filter(
      (q) => q?.question?.trim() && q?.answer?.trim() && [2, 3, 5].includes(Number(q.marks))
    )
    if (!valid.length) return NextResponse.json({ error: 'AI returned no usable questions. Try again.' }, { status: 502 })

    const shaped = valid.slice(0, count).map((q, i) => ({
      id: `ai-${Date.now()}-${i}`,
      question: q.question!.trim(),
      marks: Number(q.marks),
      type: ['SA', 'LA', 'CASE'].includes(q.type ?? '') ? q.type! : 'SA',
      probability: ['high', 'very-high'].includes(q.probability ?? '') ? q.probability! : 'high',
      answer: q.answer!.trim(),
      source: 'ai' as const,
    }))

    if (body.save) {
      await db.probableQuestion.createMany({
        data: shaped.map((q) => ({
          chapterId: ch.id,
          question: q.question,
          marks: q.marks,
          type: q.type,
          probability: q.probability,
          answer: q.answer,
        })),
      })
    }

    return NextResponse.json({ questions: shaped, provider: result.provider, saved: Boolean(body.save) })
  } catch (e) {
    return NextResponse.json({ error: `AI question generation failed. ${(e as Error).message}` }, { status: 502 })
  }
}
