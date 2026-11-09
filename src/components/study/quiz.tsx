'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CheckCircle2, GraduationCap, ListChecks, RotateCcw, Sparkles, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { ChapterMeta, QuizQuestionDTO, SubjectInfo } from '@/lib/types'
import { bookShort, subjectColorClasses } from '@/lib/types'
import { DifficultyBadge, Spinner, AnimatedNumber } from './shared'
import MockTest from './mock-test'

type Props = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
  onRecorded: () => void
}

type Phase = 'setup' | 'run' | 'result'

type Answered = { q: QuizQuestionDTO; picked: number | null }

export default function QuizView({ subjects, chapters, onRecorded }: Props) {
  const { toast } = useToast()
  const [mode, setMode] = useState<'practice' | 'mock'>('practice')
  const [subjectId, setSubjectId] = useState(subjects[0]?.id ?? 'sst')
  const [chapterId, setChapterId] = useState<string>('mixed')
  const [count, setCount] = useState('10')
  const [phase, setPhase] = useState<Phase>('setup')
  const [questions, setQuestions] = useState<QuizQuestionDTO[]>([])
  const [index, setIndex] = useState(0)
  const [answered, setAnswered] = useState<Answered[]>([])
  const [picked, setPicked] = useState<number | null>(null)
  const [aiLoading, setAiLoading] = useState(false)
  const [attempts, setAttempts] = useState<{ id: string; total: number; correct: number; createdAt: string }[]>([])
  const startedAtRef = useRef<number>(0)

  const subjectChapters = useMemo(() => chapters.filter((c) => c.subjectId === subjectId), [chapters, subjectId])

  useEffect(() => {
    fetch('/api/quiz/attempt')
      .then((r) => r.json())
      .then((d) => setAttempts(d.attempts ?? []))
      .catch(() => undefined)
  }, [])

  async function startQuiz() {
    const n = Number(count) || 10
    if (chapterId === 'mixed') {
      // Fetch questions from a spread of chapters of the SELECTED subject only.
      const picked: QuizQuestionDTO[] = []
      const subjectChaptersMixed = chapters.filter((c) => c.subjectId === subjectId)
      const perChapter = 2
      const target = n * 2
      const step = Math.max(1, Math.floor(subjectChaptersMixed.length / Math.max(1, Math.ceil(target / perChapter))))
      const chosen = subjectChaptersMixed.filter((_, i) => i % step === 0)
      for (const c of chosen) {
        try {
          const res = await fetch(`/api/quiz/questions?chapterId=${c.id}&count=${perChapter}`)
          const data = await res.json()
          if (res.ok) picked.push(...(data.questions as QuizQuestionDTO[]))
        } catch {
          // ignore, still continue
        }
        if (picked.length >= target) break
      }
      const shuffled = picked.sort(() => Math.random() - 0.5).slice(0, n)
      if (!shuffled.length) {
        toast({ title: 'No questions found', variant: 'destructive' })
        return
      }
      begin(shuffled)
      return
    }
    const res = await fetch(`/api/quiz/questions?chapterId=${chapterId}&count=${n}`)
    const data = await res.json()
    if (!res.ok) {
      toast({ title: 'Could not load quiz', description: data.error, variant: 'destructive' })
      return
    }
    begin(data.questions as QuizQuestionDTO[])
  }

  async function startAIQuiz() {
    if (chapterId === 'mixed') {
      toast({ title: 'Pick a chapter first', description: 'AI quiz generation works per chapter.' })
      return
    }
    setAiLoading(true)
    try {
      const res = await fetch('/api/ai/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chapterId, count: Math.min(5, Number(count) || 5) }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      toast({ title: `AI generated ${data.questions.length} questions`, description: `via ${data.provider}` })
      begin(data.questions as QuizQuestionDTO[])
    } catch (e) {
      toast({ title: 'AI quiz failed', description: String((e as Error).message).slice(0, 160), variant: 'destructive' })
    } finally {
      setAiLoading(false)
    }
  }

  function begin(qs: QuizQuestionDTO[]) {
    setQuestions(qs)
    setAnswered([])
    setIndex(0)
    setPicked(null)
    startedAtRef.current = Date.now()
    setPhase('run')
  }

  function choose(opt: number) {
    if (picked !== null) return
    setPicked(opt)
    const q = questions[index]
    setAnswered((prev) => [...prev, { q, picked: opt }])
  }

  function next() {
    if (index + 1 >= questions.length) {
      finish()
      return
    }
    setIndex((i) => i + 1)
    setPicked(null)
  }

  async function finish() {
    const correct = answered.filter((a) => a.picked === a.q.answerIndex).length
    const wrong = answered.filter((a) => a.picked !== null && a.picked !== a.q.answerIndex).length
    const skipped = answered.filter((a) => a.picked === null).length
    const durationSec = Math.min(7200, Math.max(0, Math.round((Date.now() - startedAtRef.current) / 1000)))
    const finalPct = answered.length ? Math.round((correct / answered.length) * 100) : 0
    setPhase('result')
    if (answered.length > 0 && finalPct >= 80) {
      const end = Date.now() + 1200
      const colors = ['#34d399', '#2dd4bf', '#fbbf24', '#f472b6']
      ;(function frame() {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.7 }, colors })
        if (Date.now() < end) requestAnimationFrame(frame)
      })()
    }
    const chapter = chapterId !== 'mixed' ? chapters.find((c) => c.id === chapterId) : null
    try {
      await fetch('/api/quiz/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chapterId: chapter?.id ?? null,
          subjectId: chapter?.subjectId ?? null,
          total: answered.length,
          correct,
          wrong,
          skipped,
          durationSec,
        }),
      })
      onRecorded()
    } catch {
      // non-fatal
    }
  }

  const current = questions[index]
  const correctCount = answered.filter((a) => a.picked === a.q.answerIndex).length
  const pct = answered.length ? Math.round((correctCount / answered.length) * 100) : 0
  const chapter = chapters.find((c) => c.id === chapterId)
  const activeSubject = subjects.find((s) => s.id === subjectId)

  return (
    <div className="space-y-6">
      {/* Mode switcher */}
      <div className="flex gap-1.5">
        {[
          { id: 'practice' as const, label: 'Practice quiz', icon: ListChecks, cls: 'border-emerald-500/40 text-emerald-200' },
          { id: 'mock' as const, label: 'Mock test', icon: GraduationCap, cls: 'border-amber-500/40 text-amber-200' },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={cn(
              'relative flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-all',
              mode === m.id ? cn(m.cls, 'bg-slate-800/80 shadow-sm') : 'border-slate-700 text-slate-400 hover:text-slate-200'
            )}
          >
            <m.icon className="h-4 w-4" /> {m.label}
          </button>
        ))}
      </div>

      {mode === 'mock' ? (
        <MockTest subjects={subjects} chapters={chapters} onRecorded={onRecorded} />
      ) : (
        <>
      {phase === 'setup' ? (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <ListChecks className="h-4 w-4 text-emerald-400" /> Build your quiz
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-slate-300">Subject</p>
              <Select
                value={subjectId}
                onValueChange={(v) => {
                  setSubjectId(v)
                  setChapterId('mixed')
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
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-slate-300">Chapter</p>
              <Select value={chapterId} onValueChange={setChapterId}>
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72 border-slate-700 bg-slate-900">
                  <SelectItem value="mixed">Mixed practice (all chapters of this subject)</SelectItem>
                  {subjectChapters.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {bookShort(c.book)} {c.number}. {c.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-slate-300">Questions</p>
              <Select value={count} onValueChange={setCount}>
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-900">
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-2 md:col-span-3">
              <Button onClick={startQuiz} className="bg-emerald-500 text-slate-900 hover:bg-emerald-400">
                Start quiz
              </Button>
              <Button
                onClick={startAIQuiz}
                disabled={aiLoading}
                variant="outline"
                className="border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-400/10"
              >
                {aiLoading ? <Spinner className="mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate AI quiz (5 fresh)
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {phase === 'run' && current ? (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-400">
                Question {index + 1} of {questions.length}
                {chapter ? (
                  <span className="ml-2 text-emerald-300">
                    {bookShort(chapter.book)} {chapter.number} · {chapter.title}
                  </span>
                ) : (
                  <span className="ml-2 text-fuchsia-300">Mixed practice</span>
                )}
              </CardTitle>
              <Button size="sm" variant="ghost" className="text-slate-400" onClick={finish}>
                End quiz
              </Button>
            </div>
            <Progress value={((index + (picked !== null ? 1 : 0)) / questions.length) * 100} className="mt-2 h-1.5" />
          </CardHeader>
          <CardContent className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${index}-${current.id}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <p className="text-base font-medium leading-relaxed text-slate-100">{current.question}</p>
                <div className="grid gap-2">
                  {current.options.map((opt, i) => {
                    const isCorrect = picked !== null && i === current.answerIndex
                    const isWrongPick = picked === i && i !== current.answerIndex
                    return (
                      <motion.button
                        key={i}
                        onClick={() => choose(i)}
                        disabled={picked !== null}
                        initial={{ opacity: 0, y: 12 }}
                        animate={
                          isWrongPick
                            ? { opacity: 1, y: 0, x: [0, -7, 7, -5, 5, 0] }
                            : { opacity: 1, y: 0, x: 0 }
                        }
                        transition={isWrongPick ? { duration: 0.45 } : { delay: i * 0.05, duration: 0.3 }}
                        whileTap={picked === null ? { scale: 0.98 } : undefined}
                        className={cn(
                          'flex items-center justify-between gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                          isCorrect
                            ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-100'
                            : isWrongPick
                              ? 'border-rose-400/60 bg-rose-400/10 text-rose-100'
                              : picked !== null
                                ? 'border-slate-800 text-slate-400'
                                : 'border-slate-700 bg-slate-800/30 text-slate-200 hover:border-teal-400/50 hover:bg-teal-400/5'
                        )}
                      >
                        <span>
                          <span className="mr-2 font-semibold text-slate-500">{String.fromCharCode(65 + i)}.</span>
                          {opt}
                        </span>
                        {isCorrect ? (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 15 }}>
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                          </motion.span>
                        ) : null}
                        {isWrongPick ? <XCircle className="h-4 w-4 shrink-0 text-rose-400" /> : null}
                      </motion.button>
                    )
                  })}
                </div>
                {picked !== null ? (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg border border-slate-700 bg-slate-800/40 p-3 text-sm"
                  >
                    <p className="font-semibold text-slate-200">
                      {picked === current.answerIndex ? 'Correct!' : 'Correct answer: ' + String.fromCharCode(65 + current.answerIndex) + '. ' + current.options[current.answerIndex]}
                    </p>
                    <p className="mt-1 text-slate-400">{current.explanation}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge variant="outline" className="border-slate-600 text-slate-400 capitalize">
                        {current.difficulty} · {current.source === 'ai' ? 'AI generated' : 'NCERT bank'}
                      </Badge>
                      <Button onClick={next} className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                        {index + 1 >= questions.length ? 'See result' : 'Next question'}
                      </Button>
                    </div>
                  </motion.div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      ) : null}

      {phase === 'result' ? (
        <div className="space-y-4">
          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="text-4xl font-bold text-emerald-300"
              >
                <AnimatedNumber value={correctCount} />/{answered.length}
              </motion.p>
              <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8 }}>
                <Progress value={pct} className="h-2" />
              </motion.div>
              <p className="text-slate-400">
                {pct >= 80
                  ? 'Excellent! You are board-ready on this set.'
                  : pct >= 50
                    ? 'Good effort - revise the wrong ones below.'
                    : 'Time to revisit these notes and tricks.'}
              </p>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  className="border-teal-500/40 text-teal-200 hover:bg-teal-400/10"
                  onClick={() => setPhase('setup')}
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> New quiz
                </Button>
                <Button
                  className="bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                  onClick={startQuiz}
                >
                  Retry same settings
                </Button>
              </div>
            </CardContent>
          </Card>
          {answered
            .filter((a) => a.picked !== a.q.answerIndex)
            .map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <Card className="border-rose-500/20">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-slate-200">{a.q.question}</p>
                    <p className="mt-2 text-sm text-emerald-300">
                      Correct: {String.fromCharCode(65 + a.q.answerIndex)}. {a.q.options[a.q.answerIndex]}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{a.q.explanation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      ) : null}

      {/* History */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Quiz history</CardTitle>
        </CardHeader>
        <CardContent>
          {attempts.length === 0 ? (
            <p className="text-sm text-slate-500">No attempts recorded yet.</p>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2">
              {attempts.map((a) => {
                const p = a.total ? Math.round((a.correct / a.total) * 100) : 0
                return (
                  <div key={a.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/30 px-3 py-2 text-sm">
                    <span className="text-slate-400">
                      {new Date(a.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} ·{' '}
                      {a.correct}/{a.total}
                    </span>
                    <span className={p >= 70 ? 'font-semibold text-emerald-300' : p >= 40 ? 'font-semibold text-amber-300' : 'font-semibold text-rose-300'}>
                      {p}%
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
      </>
      )}
    </div>
  )
}
