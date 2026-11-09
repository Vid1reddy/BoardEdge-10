'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, FileQuestion, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { ChapterMeta, ProbableQuestionDTO, SubjectInfo } from '@/lib/types'
import { bookShort, subjectColorClasses } from '@/lib/types'
import { MarksBadge, ProbabilityBadge, Spinner } from './shared'

type Props = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
}

type ChapterWithQuestions = ChapterMeta & { probableQuestions: ProbableQuestionDTO[] }

export default function BoardQuestionsView({ subjects, chapters }: Props) {
  const { toast } = useToast()
  const [subjectId, setSubjectId] = useState(subjects[0]?.id ?? 'sst')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [chapter, setChapter] = useState<ChapterWithQuestions | null>(null)
  const [loading, setLoading] = useState(false)
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [practiced, setPracticed] = useState<Record<string, boolean>>({})
  const [aiLoading, setAiLoading] = useState(false)

  const subjectChapters = useMemo(() => chapters.filter((c) => c.subjectId === subjectId), [chapters, subjectId])

  useEffect(() => {
    if (!subjectChapters.some((c) => c.id === selectedId)) {
      setSelectedId(subjectChapters[0]?.id ?? null)
    }
  }, [subjectChapters, selectedId])

  const load = async (id: string) => {
    setLoading(true)
    try {
      const [res, prog] = await Promise.all([
        fetch(`/api/chapters/${id}`),
        fetch(`/api/progress?chapterId=${id}`).catch(() => null),
      ])
      if (!res.ok) throw new Error(String(res.status))
      const data = await res.json()
      setChapter(data)
      setRevealed({})
      if (prog?.ok !== false) {
        const rows = (await prog?.json().catch(() => null)) as { progress?: { qId: string; done: boolean }[] } | null
        const map: Record<string, boolean> = {}
        for (const r of rows?.progress ?? []) map[r.qId] = r.done
        setPracticed(map)
      }
    } catch {
      toast({ title: 'Could not load chapter', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (selectedId) load(selectedId)
    else setChapter(null)
  }, [selectedId])

  async function togglePracticed(qId: string, done: boolean) {
    if (!chapter) return
    setPracticed((prev) => ({ ...prev, [qId]: done }))
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapterId: chapter.id, qId, done }),
    }).catch(() => undefined)
  }

  async function generateMore() {
    if (!chapter) return
    setAiLoading(true)
    try {
      const res = await fetch('/api/ai/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chapterId: chapter.id, count: 3, save: true }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      toast({ title: `${data.questions.length} AI questions added to the bank`, description: `via ${data.provider}` })
      await load(chapter.id)
    } catch (e) {
      toast({ title: 'AI generation failed', description: String((e as Error).message).slice(0, 160), variant: 'destructive' })
    } finally {
      setAiLoading(false)
    }
  }

  const activeSubject = subjects.find((s) => s.id === subjectId)
  const practicedCount = chapter ? chapter.probableQuestions.filter((q) => practiced[q.id]).length : 0

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      {/* Sidebar */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {subjects.map((s) => {
            const cc = subjectColorClasses(s.color)
            return (
              <button
                key={s.id}
                onClick={() => setSubjectId(s.id)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                  subjectId === s.id ? cn(cc.bg, cc.text, 'ring-1', cc.border) : 'text-slate-400 hover:bg-slate-800'
                )}
              >
                {s.name}
              </button>
            )
          })}
        </div>
        <div className="max-h-[70vh] space-y-1.5 overflow-y-auto pr-1 custom-scroll">
          {subjectChapters.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={cn(
                'flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                c.id === selectedId
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100'
                  : 'border-slate-800 bg-slate-800/20 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
              )}
            >
              <span className="min-w-0 flex-1 truncate">
                <span className="font-medium">
                  {bookShort(c.book)} {c.number}. {c.title}
                </span>
              </span>
              <Badge variant="outline" className="shrink-0 border-slate-600 text-[10px] text-slate-400">
                {c.boardQCount}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {!chapter && !loading ? (
          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-10 text-center">
              <FileQuestion className="h-8 w-8 text-slate-600" />
              <p className="text-slate-400">Pick a chapter to see its most probable board questions.</p>
            </CardContent>
          </Card>
        ) : null}
        {loading && !chapter ? (
          <div className="flex justify-center py-16">
            <Spinner className="h-6 w-6 text-slate-400" />
          </div>
        ) : null}
        {chapter ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-teal-300">
                  {activeSubject?.name} · {chapter.book}
                </p>
                <h2 className="text-lg font-bold">
                  {bookShort(chapter.book)} {chapter.number}. {chapter.title}
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  {practicedCount}/{chapter.probableQuestions.length} practiced
                </p>
              </div>
              <Button
                onClick={generateMore}
                disabled={aiLoading}
                variant="outline"
                className="border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-400/10"
              >
                {aiLoading ? <Spinner className="mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate 3 more with AI
              </Button>
            </div>

            {chapter.probableQuestions.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center text-slate-400">
                  No board questions for this chapter yet - generate some with AI above.
                </CardContent>
              </Card>
            ) : (
              chapter.probableQuestions.map((q, i) => {
                const done = Boolean(practiced[q.id])
                return (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.3 }}
                  >
                    <Card className={cn('border-slate-800', done && 'border-emerald-500/25 bg-emerald-400/[0.04]')}>
                      <CardContent className="p-4">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <p className={cn('text-sm font-medium leading-relaxed text-slate-100', done && 'text-slate-300')}>
                            {q.question}
                          </p>
                          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                            <MarksBadge marks={q.marks} />
                            <Badge variant="outline" className="border-slate-600 text-slate-400">
                              {q.type}
                            </Badge>
                            <ProbabilityBadge probability={q.probability} />
                            {q.id.startsWith('ai-') ? (
                              <Badge variant="outline" className="border-fuchsia-500/40 text-fuchsia-300">
                                AI
                              </Badge>
                            ) : null}
                            <motion.button
                              whileTap={{ scale: 1.25 }}
                              onClick={() => togglePracticed(q.id, !done)}
                              aria-label={done ? 'Mark as not practiced' : 'Mark as practiced'}
                              title={done ? 'Practiced ✓' : 'Mark practiced'}
                              className={cn(
                                'flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium transition-colors',
                                done
                                  ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300'
                                  : 'border-slate-600 text-slate-400 hover:text-slate-200'
                              )}
                            >
                              <CheckCircle2 className="h-3 w-3" /> {done ? 'Practiced' : 'Mark done'}
                            </motion.button>
                          </div>
                        </div>
                        <AnimatePresence initial={false}>
                          {revealed[q.id] ? (
                            <motion.div
                              key="answer"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 whitespace-pre-wrap rounded-lg border border-slate-700 bg-slate-800/40 p-3 text-sm leading-relaxed text-slate-300">
                                {q.answer}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                        <div className="mt-3 flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className={cn(
                              'border-teal-500/40 text-teal-200 hover:bg-teal-400/10',
                              revealed[q.id] && 'border-slate-600 text-slate-400'
                            )}
                            onClick={() => setRevealed((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                          >
                            <ChevronDown className={cn('mr-1.5 h-3.5 w-3.5 transition-transform', revealed[q.id] && 'rotate-180')} />
                            {revealed[q.id] ? 'Hide model answer' : 'Show model answer'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })
            )}
          </>
        ) : null}
      </div>
    </div>
  )
}
