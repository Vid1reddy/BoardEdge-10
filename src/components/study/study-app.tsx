'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, BookOpen, ListChecks, FileQuestion, Sparkles, Settings as SettingsIcon, LayoutDashboard, GraduationCap, Flame, Clock3, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ChapterMeta, MemoryDTO, SettingsDTO, StatsDTO, StudyItemDTO, SubjectInfo } from '@/lib/types'
import { fmtDateLabel } from './shared'
import DashboardView from './dashboard'
import TimetableView from './timetable'
import NotesView from './notes'
import QuizView from './quiz'
import BoardQuestionsView from './board-questions'
import TutorView from './tutor'
import SettingsView from './settings'
import FlashcardsView from './flashcards'

export type View = 'dashboard' | 'timetable' | 'notes' | 'flashcards' | 'quiz' | 'boardqs' | 'tutor' | 'settings'

const NAV: { id: View; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'timetable', label: 'Timetable', icon: CalendarDays },
  { id: 'notes', label: 'Notes', icon: BookOpen },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
  { id: 'quiz', label: 'Quiz', icon: ListChecks },
  { id: 'boardqs', label: 'Board Qs', icon: FileQuestion },
  { id: 'tutor', label: 'AI Tutor', icon: Sparkles },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
]

type Bootstrap = {
  subjects: SubjectInfo[]
  chapters: (ChapterMeta & { mcqCount: number; boardQCount: number })[]
  settings: SettingsDTO
  contentTotals: { mcqs: number; boardQuestions: number }
}

function todayISO(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function StudyApp() {
  const [view, setView] = useState<View>('dashboard')
  const [bootstrap, setBootstrap] = useState<Bootstrap | null>(null)
  const [items, setItems] = useState<StudyItemDTO[]>([])
  const [stats, setStats] = useState<StatsDTO | null>(null)
  const [memory, setMemory] = useState<MemoryDTO | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const today = useMemo(() => todayISO(), [])

  const loadBase = useCallback(async () => {
    const res = await fetch('/api/bootstrap')
    if (!res.ok) throw new Error(`bootstrap ${res.status}`)
    setBootstrap(await res.json())
  }, [])

  const loadPlan = useCallback(async () => {
    const res = await fetch('/api/plan')
    if (!res.ok) throw new Error(`plan ${res.status}`)
    const data = await res.json()
    setItems(data.items)
  }, [])

  const loadStats = useCallback(async () => {
    const res = await fetch('/api/stats')
    if (!res.ok) throw new Error(`stats ${res.status}`)
    setStats(await res.json())
  }, [])

  const loadMemory = useCallback(async () => {
    const res = await fetch(`/api/memory?today=${today}`)
    if (!res.ok) throw new Error(`memory ${res.status}`)
    setMemory(await res.json())
  }, [today])

  useEffect(() => {
    let alive = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    Promise.all([loadBase(), loadPlan(), loadStats(), loadMemory().catch(() => undefined)])
      .catch((e) => {
        if (alive) setError(String(e))
      })
      .finally(() => {
        if (alive) setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [loadBase, loadPlan, loadStats, loadMemory])

  // ---- Actions ----
  const toggleItem = useCallback(
    async (id: string, done: boolean) => {
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done } : i)))
      await fetch(`/api/plan/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done }),
      }).catch(() => undefined)
      loadStats().catch(() => undefined)
      loadMemory().catch(() => undefined)
    },
    [loadStats, loadMemory]
  )

  const deleteItem = useCallback(
    async (id: string) => {
      setItems((prev) => prev.filter((i) => i.id !== id))
      await fetch(`/api/plan/${id}`, { method: 'DELETE' }).catch(() => undefined)
      loadStats().catch(() => undefined)
      loadMemory().catch(() => undefined)
    },
    [loadStats, loadMemory]
  )

  const updateItem = useCallback(
    async (id: string, data: { title?: string; date?: string; minutes?: number }) => {
      const res = await fetch(`/api/plan/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        await loadPlan()
        loadStats().catch(() => undefined)
        loadMemory().catch(() => undefined)
        return true
      }
      return false
    },
    [loadPlan, loadStats, loadMemory]
  )

  const addItem = useCallback(
    async (data: { date: string; title: string; minutes: number; subjectId?: string | null }) => {
      const res = await fetch('/api/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        await loadPlan()
        loadStats().catch(() => undefined)
        loadMemory().catch(() => undefined)
        return true
      }
      return false
    },
    [loadPlan, loadStats, loadMemory]
  )

  const generatePlan = useCallback(async () => {
    const res = await fetch('/api/plan/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ today }),
    })
    if (res.ok) {
      const data = await res.json()
      setItems(data.items)
      await loadStats()
      loadMemory().catch(() => undefined)
      return `${data.generated} tasks scheduled`
    }
    return null
  }, [today, loadStats, loadMemory])

  const saveSettings = useCallback(
    async (data: { examDate?: string; dailyMinutes?: number; openrouterKey?: string; nvidiaKey?: string }) => {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        await loadBase()
        await loadStats()
        return true
      }
      return false
    },
    [loadBase, loadStats]
  )

  const setChapterStatus = useCallback(
    async (chapterId: string, status: string) => {
      setBootstrap((prev) =>
        prev
          ? { ...prev, chapters: prev.chapters.map((c) => (c.id === chapterId ? { ...c, status } : c)) }
          : prev
      )
      await fetch(`/api/chapters/${chapterId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      }).catch(() => undefined)
      loadStats().catch(() => undefined)
    },
    [loadStats]
  )

  const onAttemptRecorded = useCallback(() => {
    loadStats().catch(() => undefined)
  }, [loadStats])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <GraduationCap className="h-10 w-10 text-emerald-400" />
          <div className="flex items-center gap-2 text-sm">
            <Clock3 className="h-4 w-4 animate-spin" />
            Loading your board prep...
          </div>
        </div>
      </div>
    )
  }

  if (error || !bootstrap) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="max-w-md rounded-xl border border-rose-500/30 bg-rose-400/5 p-6 text-center">
          <p className="font-semibold text-rose-300">Something went wrong loading data</p>
          <p className="mt-2 text-sm text-slate-400">{error}</p>
          <button
            className="mt-4 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const daysLeft = stats?.daysLeft ?? 0
  const streak = stats?.streak ?? 0

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      {/* Ambient animated background orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-teal-500/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 ring-1 ring-emerald-400/40">
              <GraduationCap className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight sm:text-lg">BoardEdge 10</h1>
              <p className="text-[11px] text-slate-500 leading-tight">CBSE Class 10 NCERT Board Prep</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-400/10 px-3 py-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-teal-300" />
              <span className="text-xs font-semibold text-teal-200">
                {daysLeft} day{daysLeft === 1 ? '' : 's'} to boards
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-400/10 px-3 py-1.5">
              <Flame className="h-3.5 w-3.5 text-amber-300" />
              <span className="text-xs font-semibold text-amber-200">{streak} day streak</span>
            </div>
          </div>
        </div>
        <nav className="mx-auto w-full max-w-6xl overflow-x-auto px-2 pb-2" aria-label="Sections">
          <div className="flex min-w-max gap-1">
            {NAV.map((n) => {
              const Icon = n.icon
              const active = view === n.id
              return (
                <button
                  key={n.id}
                  onClick={() => setView(n.id)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    active ? 'text-emerald-300' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-emerald-400/15 ring-1 ring-emerald-400/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <Icon className="relative h-4 w-4" />
                  <span className="relative">{n.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {view === 'dashboard' && (
              <DashboardView
                stats={stats}
                subjects={bootstrap.subjects}
                memory={memory}
                onNavigate={setView}
                onToggle={toggleItem}
                onAdd={addItem}
              />
            )}
            {view === 'timetable' && (
              <TimetableView
                items={items}
                settings={bootstrap.settings}
                subjects={bootstrap.subjects}
                today={today}
                onToggle={toggleItem}
                onDelete={deleteItem}
                onUpdate={updateItem}
                onAdd={addItem}
                onGenerate={generatePlan}
                onSaveSettings={saveSettings}
              />
            )}
            {view === 'notes' && (
              <NotesView subjects={bootstrap.subjects} chapters={bootstrap.chapters} onStatus={setChapterStatus} />
            )}
            {view === 'flashcards' && <FlashcardsView subjects={bootstrap.subjects} chapters={bootstrap.chapters} />}
            {view === 'quiz' && (
              <QuizView subjects={bootstrap.subjects} chapters={bootstrap.chapters} onRecorded={onAttemptRecorded} />
            )}
            {view === 'boardqs' && <BoardQuestionsView subjects={bootstrap.subjects} chapters={bootstrap.chapters} />}
            {view === 'tutor' && <TutorView subjects={bootstrap.subjects} chapters={bootstrap.chapters} />}
            {view === 'settings' && (
              <SettingsView settings={bootstrap.settings} totals={bootstrap.contentTotals} chaptersCount={bootstrap.chapters.length} onSave={saveSettings} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-auto border-t border-slate-800 py-4 text-center text-xs text-slate-600">
        BoardEdge 10 · Notes · Quizzes · Probable Questions · Smart Timetable · AI Tutor — built for CBSE Class 10 boards
        <div className="mt-0.5">{fmtDateLabel(today, today)} · {bootstrap.chapters.length} chapters loaded</div>
      </footer>
    </div>
  )
}
