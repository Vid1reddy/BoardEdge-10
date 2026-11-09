'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CheckCircle2, Flag, GraduationCap, Timer, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { ChapterMeta, QuizQuestionDTO, SubjectInfo } from '@/lib/types'
import { AnimatedNumber, Spinner } from './shared'

type Props = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
  onRecorded: () => void
}

type Phase = 'setup' | 'run' | 'result'
type Answered = { q: QuizQuestionDTO; picked: number | null }

function fmtClock(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function MockTest({ subjects, chapters, onRecorded }: Props) {
  const { toast } = useToast()
  const [scope, setScope] = useState<string>('all')
  const [count, setCount] = useState('30')
  const [phase, setPhase] = useState<Phase>('setup')
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuizQuestionDTO[]>([])
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [index, setIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [durationSec, setDurationSec] = useState(0)
  const startedAtRef = useRef(0)
  const submittedRef = useRef(false)

  const scopedChapters = useMemo(
    () => (scope === 'all' ? chapters : chapters.filter((c) => c.subjectId === scope)),
    [chapters, scope]
  )

  async function start() {
    setLoading(true)
    try {
      const n = Number(count) || 30
      const per = Math.max(1, Math.ceil(n / Math.max(1, scopedChapters.length)))
      const picked: QuizQuestionDTO[] = []
      for (const c of scopedChapters) {
        try {
          const res = await fetch(`/api/quiz/questions?chapterId=${c.id}&count=${per}`)
          const data = await res.json()
          if (res.ok) picked.push(...(data.questions as QuizQuestionDTO[]))
        } catch {
          // continue
        }
        if (picked.length >= n * 3) break
      }
      const shuffled = picked.sort(() => Math.random() - 0.5).slice(0, n)
      if (!shuffled.length) {
        toast({ title: 'No questions available', variant: 'destructive' })
        return
      }
      const secs = shuffled.length * 60
      setQuestions(shuffled)
      setAnswers({})
      setIndex(0)
      setSecondsLeft(secs)
      setDurationSec(secs)
      submittedRef.current = false
      startedAtRef.current = Date.now()
      setPhase('run')
    } finally {
      setLoading(false)
    }
  }

  const submit = useCallback(
    async (auto = false) => {
      if (submittedRef.current) return
      submittedRef.current = true
      const answered: Answered[] = questions.map((q, i) => ({ q, picked: answers[i] ?? null }))
      const correct = answered.filter((a) => a.picked === a.q.answerIndex).length
      const skipped = answered.filter((a) => a.picked === null).length
      const durationSec = Math.min(7200, Math.max(0, Math.round((Date.now() - startedAtRef.current) / 1000)))
      const pct = Math.round((correct / Math.max(1, answered.length)) * 100)
      setPhase('result')
      if (pct >= 60) {
        const end = Date.now() + 1400
        const colors = ['#34d399', '#2dd4bf', '#fbbf24']
        ;(function frame() {
          confetti({ particleCount: 110, spread: 85, origin: { y: 0.7 }, colors })
          if (Date.now() < end) requestAnimationFrame(frame)
        })()
      }
      try {
        await fetch('/api/quiz/attempt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chapterId: null,
            subjectId: scope === 'all' ? null : scope,
            total: answered.length,
            correct,
            wrong: answered.length - correct - skipped,
            skipped,
            durationSec,
          }),
        })
        onRecorded()
      } catch {
        // non-fatal
      }
      if (auto) toast({ title: 'Time up - mock submitted automatically', variant: 'destructive' })
    },
    [answers, questions, scope, onRecorded, toast]
  )

  useEffect(() => {
    if (phase !== 'run') return
    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          window.clearInterval(id)
          submit(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => window.clearInterval(id)
  }, [phase, submit])

  const answeredCount = Object.keys(answers).length
  const correctCount = questions.filter((q, i) => answers[i] === q.answerIndex).length
  const pct = questions.length ? Math.round((correctCount / questions.length) * 100) : 0
  const timePct = durationSec ? (secondsLeft / durationSec) * 100 : 0
  const current = questions[index]

  return (
    <div className="space-y-4">
      {phase === 'setup' ? (
        <Card className="border-amber-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <GraduationCap className="h-4 w-4 text-amber-400" /> Mock test - exam conditions, 1 minute per question
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-slate-300">Scope</p>
              <Select value={scope} onValueChange={setScope}>
                <SelectTrigger className="border-slate-700 bg-slate-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-900">
                  <SelectItem value="all">All subjects (full mock)</SelectItem>
                  {subjects.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name} only
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-slate-300">Questions</p>
              <Select value={count} onValueChange={setCount}>
                <SelectTrigger className="border-slate-700 bg-slate-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-900">
                  <SelectItem value="15">15 (15 min)</SelectItem>
                  <SelectItem value="30">30 (30 min)</SelectItem>
                  <SelectItem value="50">50 (50 min)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={start} disabled={loading} className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400">
                {loading ? <Spinner className="mr-2" /> : <Timer className="mr-2 h-4 w-4" />} Begin mock test
              </Button>
            </div>
            <p className="text-xs text-slate-500 md:col-span-3">
              No instant feedback during the test - answers stay changeable, the paper auto-submits when the clock hits zero, then you get a full review.
            </p>
          </CardContent>
        </Card>
      ) : null}

      {phase === 'run' && current ? (
        <div className="space-y-4">
          <Card className="border-amber-500/20">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  Question {index + 1} of {questions.length}
                </CardTitle>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'rounded-full border px-3 py-1 font-mono text-sm font-bold tabular-nums',
                      secondsLeft < 120 ? 'animate-pulse border-rose-500/50 text-rose-300' : secondsLeft < 300 ? 'border-amber-500/50 text-amber-300' : 'border-teal-500/40 text-teal-300'
                    )}
                  >
                    {fmtClock(secondsLeft)}
                  </span>
                  <Button size="sm" onClick={() => submit(false)} className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                    Submit
                  </Button>
                </div>
              </div>
              <motion.div animate={{ scaleX: timePct / 100 }} style={{ originX: 0 }} transition={{ duration: 0.5 }}>
                <Progress value={timePct} className="mt-2 h-1" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-4"
                >
                  <p className="text-base font-medium leading-relaxed text-slate-100">{current.question}</p>
                  <div className="grid gap-2">
                    {current.options.map((opt, i) => {
                      const chosen = answers[index] === i
                      return (
                        <motion.button
                          key={i}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setAnswers((prev) => ({ ...prev, [index]: i }))}
                          className={cn(
                            'flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                            chosen
                              ? 'border-amber-400/60 bg-amber-400/10 text-amber-100'
                              : 'border-slate-700 bg-slate-800/30 text-slate-200 hover:border-amber-400/40 hover:bg-amber-400/5'
                          )}
                        >
                          <span className="font-semibold text-slate-500">{String.fromCharCode(65 + i)}.</span>
                          {opt}
                        </motion.button>
                      )
                    })}
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" disabled={index === 0} onClick={() => setIndex((i) => i - 1)} className="border-slate-600 text-slate-300">
                      Previous
                    </Button>
                    <Button
                      disabled={index + 1 >= questions.length}
                      onClick={() => setIndex((i) => i + 1)}
                      className="bg-slate-700 text-slate-100 hover:bg-slate-600"
                    >
                      Next
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* answer palette */}
          <Card>
            <CardContent className="p-4">
              <p className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                <Flag className="h-3.5 w-3.5" /> Answer sheet - {answeredCount}/{questions.length} answered
              </p>
              <div className="flex flex-wrap gap-1.5">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to question ${i + 1}`}
                    className={cn(
                      'h-7 w-7 rounded text-[11px] font-semibold transition-all',
                      i === index
                        ? 'scale-110 bg-slate-200 text-slate-900'
                        : answers[i] !== undefined
                          ? 'bg-emerald-500/25 text-emerald-200 hover:bg-emerald-500/40'
                          : 'bg-slate-700/60 text-slate-400 hover:bg-slate-700'
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {phase === 'result' ? (
        <div className="space-y-4">
          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
              <p className="text-sm text-slate-400">Mock test result</p>
              <motion.p initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }} className="text-4xl font-bold text-amber-300">
                <AnimatedNumber value={pct} />%
              </motion.p>
              <p className="text-lg font-semibold text-slate-200">
                <AnimatedNumber value={correctCount} />/{questions.length} correct
              </p>
              <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8 }}>
                <Progress value={pct} className="h-2" />
              </motion.div>
              <p className="text-sm text-slate-400">
                {pct >= 80
                  ? 'Board-topper pace - keep this consistency!'
                  : pct >= 50
                    ? 'Solid - review the misses and the gap closes fast.'
                    : 'Use this mock to target your weakest chapters this week.'}
              </p>
              <Button variant="outline" className="border-teal-500/40 text-teal-200 hover:bg-teal-400/10" onClick={() => setPhase('setup')}>
                New mock test
              </Button>
            </CardContent>
          </Card>
          {questions.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(0.4, i * 0.04) }}>
              <Card className={cn(answers[i] === q.answerIndex ? 'border-emerald-500/20' : 'border-rose-500/20')}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    {answers[i] === q.answerIndex ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        Q{i + 1}. {q.question}
                      </p>
                      <p className="mt-1.5 text-xs text-emerald-300">Correct: {String.fromCharCode(65 + q.answerIndex)}. {q.options[q.answerIndex]}</p>
                      {answers[i] !== undefined && answers[i] !== q.answerIndex ? (
                        <p className="text-xs text-rose-300">You chose: {String.fromCharCode(65 + answers[i])}. {q.options[answers[i]]}</p>
                      ) : null}
                      {answers[i] === undefined ? <Badge variant="outline" className="mt-1 border-slate-600 text-slate-400">skipped</Badge> : null}
                      <p className="mt-1 text-xs text-slate-500">{q.explanation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
