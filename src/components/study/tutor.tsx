'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Send, Sparkles, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { ChapterMeta, SubjectInfo } from '@/lib/types'
import { bookShort, subjectColorClasses } from '@/lib/types'
import { AIHint, AIText } from './shared'

type Props = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
}

type Msg = { role: 'user' | 'assistant'; content: string; provider?: string }

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-fuchsia-300"
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </span>
  )
}

export default function TutorView({ subjects, chapters }: Props) {
  const { toast } = useToast()
  const [subjectId, setSubjectId] = useState(subjects[0]?.id ?? 'sst')
  const [chapterId, setChapterId] = useState<string>('none')
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const subjectChapters = useMemo(() => chapters.filter((c) => c.subjectId === subjectId), [chapters, subjectId])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  const chapter = chapters.find((c) => c.id === chapterId)
  const chapterMeta = chapter ? `${bookShort(chapter.book)} ${chapter.number}. ${chapter.title}` : null

  async function send(text?: string) {
    const content = (text ?? input).trim()
    if (!content || sending) return
    setInput('')
    const nextMessages: Msg[] = [...messages, { role: 'user', content }]
    setMessages(nextMessages)
    setSending(true)
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
          chapterId: chapterId === 'none' ? null : chapterId,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply, provider: data.provider }])
    } catch (e) {
      toast({ title: 'AI tutor unavailable', description: String((e as Error).message).slice(0, 160), variant: 'destructive' })
      setMessages((prev) => prev.slice(0, -1))
      setInput(content)
    } finally {
      setSending(false)
    }
  }

  const suggestions = chapter
    ? [
        `Explain "${chapter.title}" in 5 simple points`,
        `Give me 5 one-liners to revise ${chapterMeta}`,
        `What are the most common mistakes in ${chapterMeta}?`,
        `Give me a quick 5-question rapid quiz on ${chapterMeta}`,
      ]
    : ['Explain the difference between physical and chemical change', 'Give me tips to score 90+ in Class 10 boards', 'How should I revise all 4 subjects in 30 days?']

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* Context panel */}
      <div className="space-y-4">
        <Card>
          <CardContent className="space-y-4 p-4">
            <div>
              <p className="mb-1.5 text-sm font-medium text-slate-300">Subject context</p>
              <Select
                value={subjectId}
                onValueChange={(v) => {
                  setSubjectId(v)
                  setChapterId('none')
                }}
              >
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-900">
                  {subjects.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-1.5 text-sm font-medium text-slate-300">Chapter context (optional)</p>
              <Select value={chapterId} onValueChange={setChapterId}>
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72 border-slate-700 bg-slate-900">
                  <SelectItem value="none">No specific chapter</SelectItem>
                  {subjectChapters.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {bookShort(c.book)} {c.number}. {c.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                With a chapter selected, the AI reads its notes and answers with that context.
              </p>
            </div>
            <AIHint />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-medium text-slate-300">Try asking</p>
            <div className="space-y-1.5">
              {suggestions.map((s, i) => (
                <motion.button
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ x: 4 }}
                  onClick={() => send(s)}
                  className="block w-full rounded-lg border border-slate-800 bg-slate-800/30 px-3 py-2 text-left text-xs text-slate-300 transition-colors hover:border-teal-400/40 hover:text-teal-200"
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat */}
      <Card className="flex flex-col">
        <div ref={scrollRef} className="min-h-[50vh] flex-1 space-y-4 overflow-y-auto p-4 custom-scroll">
          {messages.length === 0 ? (
            <div className="flex h-full min-h-[40vh] flex-col items-center justify-center gap-3 text-center">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-400/10 ring-1 ring-fuchsia-400/40"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-6 w-6 text-fuchsia-300" />
              </motion.div>
              <div>
                <p className="font-semibold text-slate-200">Ask any doubt, any subject</p>
                <p className="mt-1 max-w-md text-sm text-slate-500">
                  Your BoardEdge AI tutor knows the chapter you are studying and answers in simple, exam-focused language.
                </p>
              </div>
            </div>
          ) : (
            messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={cn('flex gap-3', m.role === 'user' && 'flex-row-reverse')}
              >
                <div
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                    m.role === 'user' ? 'bg-emerald-400/15 text-emerald-300' : 'bg-fuchsia-400/15 text-fuchsia-300'
                  )}
                >
                  {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    'max-w-[85%] rounded-xl px-4 py-3',
                    m.role === 'user'
                      ? 'rounded-tr-sm bg-emerald-400/10 text-emerald-50'
                      : 'rounded-tl-sm border border-slate-800 bg-slate-800/50'
                  )}
                >
                  {m.role === 'assistant' ? <AIText text={m.content} /> : <p className="whitespace-pre-wrap text-sm text-emerald-50">{m.content}</p>}
                  {m.provider ? <p className="mt-2 text-[10px] text-slate-500">via {m.provider}</p> : null}
                </div>
              </motion.div>
            ))
          )}
          {sending ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-400/15 text-fuchsia-300">
                <Bot className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 rounded-xl rounded-tl-sm border border-slate-800 bg-slate-800/50 px-4 py-3 text-sm text-slate-400">
                <TypingDots /> Thinking...
              </div>
            </motion.div>
          ) : null}
        </div>
        <div className="border-t border-slate-800 p-3">
          <div className="flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send()
                }
              }}
              placeholder="Type your doubt... (Enter to send)"
              className="min-h-[52px] resize-none bg-slate-800 border-slate-700"
              aria-label="Message"
            />
            <Button onClick={() => send()} disabled={sending || !input.trim()} className="h-[52px] bg-fuchsia-500 px-4 text-white hover:bg-fuchsia-400">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
