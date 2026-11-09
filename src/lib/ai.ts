// AI requests use OpenRouter's free-only router so retired model IDs do not break the app.
// Server-side only. Keys are stored ONCE (Settings row / .env) and used for every user.
import { db } from '@/lib/db'

export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string }

export type LLMResult = {
  text: string
  provider: 'openrouter'
  model: string
}

type CallOpts = {
  temperature?: number
  maxTokens?: number
}

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'

// OpenRouter routes this alias only to models currently available on its free tier.
// It avoids pinning model IDs that can lose their free endpoint or be retired.
export const FREE_MODELS = {
  openrouter: ['openrouter/free'],
} as const

type ProviderKeys = { openrouterKey: string; nvidiaKey: string }

// Keys saved once in Settings (admin) take priority; .env is the fallback so the app
// can be shipped with keys baked in.
export async function getProviderKeys(): Promise<ProviderKeys> {
  let openrouterKey = process.env.OPENROUTER_API_KEY?.trim() || ''
  let nvidiaKey =
    process.env.NVIDIA_API_KEY?.trim() || process.env.NVIDIA_NIM_API_KEY?.trim() || ''
  try {
    const s = await db.settings.findUnique({ where: { id: 'main' } })
    if (s?.openrouterKey?.trim()) openrouterKey = s.openrouterKey.trim()
    if (s?.nvidiaKey?.trim()) nvidiaKey = s.nvidiaKey.trim()
  } catch {
    // settings table unavailable: env keys still work
  }
  return { openrouterKey, nvidiaKey }
}

export async function getAIStatus(): Promise<{
  active: string
  providers: { id: string; label: string; configured: boolean }[]
  models: string[]
}> {
  const { openrouterKey } = await getProviderKeys()
  const providers = [
    { id: 'openrouter', label: 'OpenRouter (free-only router)', configured: Boolean(openrouterKey) },
  ]
  const active = openrouterKey ? 'openrouter' : 'none'
  return { active, providers, models: [...FREE_MODELS.openrouter] }
}

function trimMessages(messages: ChatMessage[], maxChars = 24000): ChatMessage[] {
  // Keep the system prompt and the most recent messages within a rough char budget.
  const sys = messages.filter((m) => m.role === 'system')
  const rest = messages.filter((m) => m.role !== 'system')
  const sysChars = sys.reduce((a, m) => a + m.content.length, 0)
  const budget = Math.max(6000, maxChars - sysChars)
  const kept: ChatMessage[] = []
  let used = 0
  for (let i = rest.length - 1; i >= 0; i--) {
    const len = rest[i].content.length
    if (used + len > budget && kept.length > 0) break
    kept.unshift(rest[i])
    used += len
  }
  return [...sys, ...kept]
}

async function callOpenAICompatible(
  url: string,
  apiKey: string,
  model: string,
  messages: ChatMessage[],
  extraHeaders: Record<string, string> = {},
  opts: CallOpts = {}
): Promise<string> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      ...extraHeaders,
    },
    body: JSON.stringify({
      model,
      messages: trimMessages(messages),
      temperature: opts.temperature ?? 0.6,
      max_tokens: opts.maxTokens ?? 1600,
    }),
    signal: AbortSignal.timeout(90_000),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`LLM HTTP ${res.status}: ${body.slice(0, 180)}`)
  }
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] }
  const text = data.choices?.[0]?.message?.content ?? ''
  if (!text.trim()) throw new Error('LLM returned empty response')
  return text
}

// DeepSeek R1 wraps answers in <think> tags on some gateways; strip them.
function stripThinking(text: string): string {
  return text
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/<\|begin_of_thought\|>[\s\S]*?<\|end_of_thought\|>/gi, '')
    .trim()
}

export async function chatComplete(messages: ChatMessage[], opts: CallOpts = {}): Promise<LLMResult> {
  const { openrouterKey } = await getProviderKeys()
  if (!openrouterKey) throw new Error('Add an OpenRouter API key in Settings to use the free AI model router.')

  const model = FREE_MODELS.openrouter[0]
  const text = await callOpenAICompatible(OPENROUTER_URL, openrouterKey, model, messages, {
    'HTTP-Referer': 'https://boardedge10.app',
    'X-Title': 'BoardEdge 10',
  }, opts)
  return { text: stripThinking(text), provider: 'openrouter', model }
}

// Extract a JSON object/array from an LLM reply that may contain prose or code fences.
export function extractJson<T>(text: string): T | null {
  const cleaned = text.replace(/```json/gi, '```').trim()
  const candidates: string[] = []
  const fenceMatch = cleaned.match(/```([\s\S]*?)```/)
  if (fenceMatch) candidates.push(fenceMatch[1].trim())

  // Balanced-brace scan: try arrays first (quiz/question replies), then objects.
  for (const [open, close] of [
    ['[', ']'],
    ['{', '}'],
  ] as const) {
    let searchFrom = 0
    while (searchFrom < cleaned.length) {
      const start = cleaned.indexOf(open, searchFrom)
      if (start === -1) break
      let depth = 0
      let inStr = false
      let esc = false
      let end = -1
      for (let i = start; i < cleaned.length; i++) {
        const c = cleaned[i]
        if (esc) {
          esc = false
          continue
        }
        if (c === '\\') {
          esc = true
          continue
        }
        if (c === '"') inStr = !inStr
        if (inStr) continue
        if (c === open) depth++
        else if (c === close) {
          depth--
          if (depth === 0) {
            end = i
            break
          }
        }
      }
      if (end !== -1) {
        candidates.push(cleaned.slice(start, end + 1))
        searchFrom = end + 1
      } else {
        searchFrom = start + 1
      }
    }
  }

  for (const cand of candidates) {
    try {
      return JSON.parse(cand) as T
    } catch {
      // try next candidate
    }
  }
  return null
}
