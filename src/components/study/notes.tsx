'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BookMarked, BookOpen, ChevronDown, Info, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { ChapterDetail, ChapterMeta, NoteSection, SubjectInfo } from '@/lib/types'
import { bookShort, subjectColorClasses, CHAPTER_STATUSES } from '@/lib/types'
import { DifficultyBadge, ExamPointerBox, Spinner, TrickBox, AIText } from './shared'

type Props = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
  onStatus: (chapterId: string, status: string) => void
}

const STATUS_LABELS: Record<string, string> = {
  'not-started': 'Not started',
  learning: 'Learning',
  revised: 'Revised',
  mastered: 'Mastered',
}

export default function NotesView({ subjects, chapters, onStatus }: Props) {
  const { toast } = useToast()
  const [subjectId, setSubjectId] = useState(subjects[0]?.id ?? 'sst')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [detail, setDetail] = useState<ChapterDetail | null>(null)
  const [loadingDetail, setLoadingDetail] = useState(false)
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})
  const [aiSection, setAiSection] = useState<number | null>(null)
  const [aiLoading, setAiLoading] = useState(false)
  const [aiText, setAiText] = useState<string>('')

  const subjectChapters = useMemo(() => chapters.filter((c) => c.subjectId === subjectId), [chapters, subjectId])

  // Keep a sensible selection when subject switches.
  useEffect(() => {
    if (!subjectChapters.some((c) => c.id === selectedId)) {
      setSelectedId(subjectChapters[0]?.id ?? null)
    }
  }, [subjectChapters, selectedId])

  const loadDetail = useCallback(async (id: string) => {
    setLoadingDetail(true)
    try {
      const res = await fetch(`/api/chapters/${id}`)
      if (!res.ok) throw new Error(String(res.status))
      const data = await res.json()
      setDetail(data)
      setOpenSections({ 0: true })
      setAiSection(null)
      setAiText('')
    } catch {
      toast({ title: 'Could not load chapter', variant: 'destructive' })
    } finally {
      setLoadingDetail(false)
    }
  }, [toast])

  useEffect(() => {
    if (selectedId) loadDetail(selectedId)
    else setDetail(null)
  }, [selectedId, loadDetail])

  async function explain(index: number, section: NoteSection) {
    if (!detail) return
    setAiSection(index)
    setAiLoading(true)
    setAiText('')
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chapterId: detail.id, heading: section.heading, points: section.points }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setAiText(data.explanation)
    } catch (e) {
      toast({ title: 'AI explanation failed', description: String((e as Error).message).slice(0, 160), variant: 'destructive' })
      setAiSection(null)
    } finally {
      setAiLoading(false)
    }
  }

  const activeSubject = subjects.find((s) => s.id === subjectId)

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
          {subjectChapters.map((c) => {
            const active = c.id === selectedId
            const statusDot =
              c.status === 'mastered'
                ? 'bg-emerald-400'
                : c.status === 'revised'
                  ? 'bg-teal-400'
                  : c.status === 'learning'
                    ? 'bg-amber-400'
                    : 'bg-slate-600'
            return (
              <button
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={cn(
                  'flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                  active ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100' : 'border-slate-800 bg-slate-800/20 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                )}
              >
                <span className={cn('h-2 w-2 shrink-0 rounded-full', statusDot)} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">
                    {bookShort(c.book)} {c.number}. {c.title}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {c.weightageMarks} marks · {c.mcqCount} MCQs · {c.boardQCount} board Qs
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Detail */}
      <div>
        {!detail && !loadingDetail ? (
          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-10 text-center">
              <BookOpen className="h-8 w-8 text-slate-600" />
              <p className="text-slate-400">Pick a chapter to read its short notes.</p>
            </CardContent>
          </Card>
        ) : null}
        {loadingDetail && !detail ? (
          <div className="flex items-center justify-center py-16 text-slate-400">
            <Spinner className="h-6 w-6" />
          </div>
        ) : null}
        {detail ? (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-teal-300">
                      {activeSubject?.name} · {detail.book}
                    </p>
                    <h2 className="mt-1 text-xl font-bold">
                      Chapter {detail.number}: {detail.title}
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <DifficultyBadge level={detail.difficulty} />
                    <Badge variant="outline" className="border-slate-600 text-slate-400">
                      ~{detail.weightageMarks} marks
                    </Badge>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {((detail.hotTopics as unknown as string[]) ?? []).map((t) => (
                    <Badge key={t} variant="outline" className="border-teal-500/30 text-teal-300">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {CHAPTER_STATUSES.map((st) => (
                    <button
                      key={st}
                      onClick={() => onStatus(detail.id, st)}
                      className={cn(
                        'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                        detail.status === st
                          ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/40'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      )}
                    >
                      {STATUS_LABELS[st]}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {detail.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
              <Card className="border-slate-800">
                <CardContent className="p-5">
                  <button
                    className="flex w-full items-center justify-between gap-2 text-left"
                    onClick={() => setOpenSections((prev) => ({ ...prev, [i]: !prev[i] }))}
                    aria-expanded={openSections[i]}
                  >
                    <h3 className="font-semibold text-slate-100">
                      {i + 1}. {section.heading}
                    </h3>
                    <ChevronDown className={cn('h-4 w-4 shrink-0 text-slate-500 transition-transform', openSections[i] && 'rotate-180')} />
                  </button>
                  {openSections[i] ? (
                    <>
                      {section.para ? (
                        <div className="mt-3 rounded-xl border border-teal-500/25 bg-gradient-to-b from-teal-400/[0.07] to-transparent p-4">
                          <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-300">
                            <BookMarked className="h-3.5 w-3.5" /> Read &amp; remember
                          </p>
                          <p className="text-[15px] leading-7 text-slate-200">{section.para}</p>
                        </div>
                      ) : null}
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Key points recap</p>
                      <ul className="mt-2 space-y-1.5">
                        {section.points.map((p, j) => (
                          <li key={j} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-300">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      {section.keyTerms?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {section.keyTerms.map((kt) => (
                            <div key={kt.term} className="rounded-lg border border-slate-700 bg-slate-800/40 px-2.5 py-1.5 text-xs">
                              <span className="font-semibold text-fuchsia-300">{kt.term}</span>
                              <span className="text-slate-400"> — {kt.meaning}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      <TrickBox text={section.trick} />
                      <ExamPointerBox text={section.examPointer} />

                      {/* AI explain */}
                      <div className="mt-4">
                        {aiSection === i ? (
                          <div className="rounded-lg border border-fuchsia-500/30 bg-fuchsia-400/5 p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300">
                                <Sparkles className="h-3.5 w-3.5" /> AI deep-dive
                              </span>
                              <Button size="sm" variant="ghost" className="h-6 text-xs text-slate-400" onClick={() => setAiSection(null)}>
                                close
                              </Button>
                            </div>
                            {aiLoading ? (
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Spinner /> Thinking...
                              </div>
                            ) : (
                              <AIText text={aiText} />
                            )}
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-400/10"
                            onClick={() => explain(i, section)}
                          >
                            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Explain with AI
                          </Button>
                        )}
                      </div>
                    </>
                  ) : null}
                </CardContent>
              </Card>
              </motion.div>
            ))}

            <div className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-800/20 p-3 text-xs text-slate-500">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Every topic gives you a full paragraph to understand and memorize, then crisp recap points, key terms,
              memory tricks and exam pointers. Tap &quot;Explain with AI&quot; anywhere you want an even simpler deep-dive.
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
