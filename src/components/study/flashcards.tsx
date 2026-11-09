'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Layers, RotateCcw, Shuffle, Sparkles, Undo2, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import type { ChapterMeta, SubjectInfo } from '@/lib/types'
import { bookShort, subjectColorClasses } from '@/lib/types'
import { Spinner } from './shared'

type Props = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
}

type FlashCard = {
  id: string
  chapterId: string
  chapterTitle: string
  book: string
  subjectId: string
  front: string
  back: string
  kind: 'term' | 'trick'
}

const KNOWN_KEY = 'boardedge-known-cards'

function loadKnown(): Set<string> {
  try {
    const raw = localStorage.getItem(KNOWN_KEY)
    return new Set<string>(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set<string>()
  }
}

export default function FlashcardsView({ subjects, chapters }: Props) {
  const [subjectId, setSubjectId] = useState(subjects[0]?.id ?? 'sst')
  const [chapterId, setChapterId] = useState<string>('mixed')
  const [phase, setPhase] = useState<'setup' | 'run' | 'done'>('setup')
  const [cards, setCards] = useState<FlashCard[]>([])
  const [queue, setQueue] = useState<FlashCard[]>([])
  const [flipped, setFlipped] = useState(false)
  const [loading, setLoading] = useState(false)
  const [known, setKnown] = useState<Set<string>>(new Set())
  const [sessionKnown, setSessionKnown] = useState(0)
  const [sessionAgain, setSessionAgain] = useState(0)
  const subjectChapters = useMemo(() => chapters.filter((c) => c.subjectId === subjectId), [chapters, subjectId])
  const subject = subjects.find((s) => s.id === subjectId)
  const cc = subjectColorClasses(subject?.color ?? 'slate')

  useEffect(() => {
    setKnown(loadKnown())
  }, [])

  const loadDeck = useCallback(async () => {
    setLoading(true)
    const qs = chapterId !== 'mixed' ? `chapterId=${chapterId}` : `subjectId=${subjectId}`
    try {
      const r = await fetch(`/api/flashcards?${qs}`)
      const d = await r.json()
      setCards(d.cards ?? [])
    } catch {
      setCards([])
    } finally {
      setLoading(false)
    }
  }, [chapterId, subjectId])

  useEffect(() => {
    if (phase !== 'setup') return
    loadDeck().catch(() => undefined)
  }, [phase, loadDeck])

  const start = useCallback(() => {
    if (!cards.length) return
    setQueue([...cards].sort(() => Math.random() - 0.5))
    setSessionKnown(0)
    setSessionAgain(0)
    setFlipped(false)
    setPhase('run')
  }, [cards])

  const mark = useCallback(
    (ok: boolean) => {
      if (!queue.length) return
      const card = queue[0]
      const rest = queue.slice(1)
      if (ok) {
        setSessionKnown((n) => n + 1)
        setKnown((prev) => {
          const next = new Set(prev)
          next.add(card.id)
          try {
            localStorage.setItem(KNOWN_KEY, JSON.stringify([...next]))
          } catch {}
          return next
        })
      } else {
        setSessionAgain((n) => n + 1)
        rest.push(card) // come back at the end of the session
      }
      setFlipped(false)
      if (rest.length === 0) {
        setPhase('done')
      } else {
        setQueue(rest)
      }
    },
    [queue]
  )

  useEffect(() => {
    if (phase !== 'run') return
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        setFlipped((f) => !f)
      } else if (e.code === 'ArrowRight') mark(true)
      else if (e.code === 'ArrowLeft') mark(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, mark])

  const current = queue[0]
  const currentChapter = chapters.find((c) => c.id === current?.chapterId)

  return (
    <div className="space-y-6">
      {phase === 'setup' ? (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Layers className="h-4 w-4 text-teal-400" /> Flashcard drills - master the key terms and tricks
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
                <SelectTrigger className="border-slate-700 bg-slate-800">
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
                <SelectTrigger className="border-slate-700 bg-slate-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72 border-slate-700 bg-slate-900">
                  <SelectItem value="mixed">Mixed drill (whole subject)</SelectItem>
                  {subjectChapters.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {bookShort(c.book)} {c.number}. {c.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-slate-300">Deck size</p>
              <div className="flex h-9 items-center gap-2">
                <Badge variant="outline" className={cn('border-slate-600', cc.text)}>
                  {loading ? <Spinner className="h-3.5 w-3.5" /> : `${cards.length} cards`}
                </Badge>
                <Badge variant="outline" className="border-emerald-500/40 text-emerald-300">
                  {known.size} already known
                </Badge>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:col-span-3">
              <Button onClick={start} disabled={loading || cards.length === 0} className="bg-teal-500 text-slate-900 hover:bg-teal-400">
                <Shuffle className="mr-2 h-4 w-4" /> Start drill
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {phase === 'run' && current ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Badge variant="outline" className={cn('border-slate-600', cc.text)}>
                {currentChapter ? `${bookShort(currentChapter.book)} ${currentChapter.number}` : 'Mixed'}
              </Badge>
              <span className="max-w-52 truncate sm:max-w-md">{current.chapterTitle}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="text-emerald-300">{sessionKnown} known</span>
              <span>/ {sessionAgain} to review</span>
            </div>
          </div>
          <Progress value={((cards.length - queue.length) / cards.length) * 100} className="h-1.5" />

          <div className="perspective-1200">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 60, rotateY: -18 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -60, rotateY: 18 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setFlipped((f) => !f)}
                className="relative mx-auto min-h-64 w-full cursor-pointer select-none [transform-style:preserve-3d]"
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
              >
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-64 w-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* front */}
                  <Card
                    className={cn(
                      'absolute inset-0 flex items-center justify-center p-8 ring-1 ring-slate-700/60 [backface-visibility:hidden]',
                      current.kind === 'trick' ? 'bg-fuchsia-400/5' : 'bg-slate-800/40'
                    )}
                  >
                    <div className="text-center">
                      {current.kind === 'trick' ? (
                        <Badge variant="outline" className="mb-3 border-fuchsia-500/40 text-fuchsia-300">
                          <Sparkles className="mr-1 h-3 w-3" /> memory trick
                        </Badge>
                      ) : null}
                      <p className="text-xl font-bold leading-snug text-slate-100">{current.front}</p>
                      <p className="mt-4 text-xs text-slate-500">tap card or press Space to flip</p>
                    </div>
                  </Card>
                  {/* back */}
                  <Card
                    className="absolute inset-0 flex items-center justify-center border-teal-400/30 bg-teal-400/10 p-8 [backface-visibility:hidden]"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <p className="text-center text-base leading-relaxed text-teal-100">{current.back}</p>
                  </Card>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              className="border-rose-500/40 text-rose-200 hover:bg-rose-400/10"
              onClick={() => mark(false)}
            >
              <X className="mr-2 h-4 w-4" /> Review again
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
              onClick={() => setFlipped((f) => !f)}
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Flip
            </Button>
            <Button className="bg-emerald-500 text-slate-900 hover:bg-emerald-400" onClick={() => mark(true)}>
              <Check className="mr-2 h-4 w-4" /> I know this
            </Button>
          </div>
        </div>
      ) : null}

      {phase === 'done' ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
              <Layers className="h-12 w-12 text-emerald-400" />
            </motion.div>
            <p className="text-2xl font-bold text-emerald-300">Deck complete!</p>
            <p className="text-sm text-slate-400">
              You marked <span className="font-semibold text-emerald-300">{sessionKnown}</span> as known and reviewed{' '}
              <span className="font-semibold text-amber-300">{sessionAgain}</span> again. Come back tomorrow - repetition locks it in.
            </p>
            <div className="flex gap-2">
              <Button className="bg-teal-500 text-slate-900 hover:bg-teal-400" onClick={() => setPhase('setup')}>
                <Undo2 className="mr-2 h-4 w-4" /> Build another deck
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}
