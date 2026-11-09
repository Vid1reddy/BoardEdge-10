'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, BookOpenCheck, CalendarCheck2, Flame, Hourglass, ListChecks, Rocket, Sparkles, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { MemoryDTO, StatsDTO, SubjectInfo } from '@/lib/types'
import { subjectColorClasses } from '@/lib/types'
import type { View } from './study-app'
import { AnimatedNumber, ProgressRing } from './shared'
import StudyMemory from './memory'
import FocusTimer from './focus-timer'

type Props = {
  stats: StatsDTO | null
  subjects: SubjectInfo[]
  memory: MemoryDTO | null
  onNavigate: (v: View) => void
  onToggle: (id: string, done: boolean) => void
  onAdd: (data: { date: string; title: string; minutes: number; subjectId?: string | null }) => Promise<boolean>
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const popIn = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 260, damping: 24 } },
}

export default function DashboardView({ stats, subjects, memory, onNavigate, onToggle, onAdd }: Props) {
  const attempts = stats?.recentAttempts ?? []

  // Adapt FocusTimer's onLog(minutes, label) into a dated plan item for today.
  const logFocusSession = async (minutes: number, label: string) => {
    const d = new Date()
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    return onAdd({ date: today, title: label, minutes })
  }

  const weekly = stats?.dailyMinutes ?? []
  const weekMax = Math.max(60, ...weekly.map((d) => d.minutes))

  const trend = stats?.attemptTrend ?? []
  const trendPcts = trend.map((a) => (a.total ? Math.round((a.correct / a.total) * 100) : 0))
  const trendPoints = trendPcts
    .map((p, i) => `${trendPcts.length > 1 ? (i / (trendPcts.length - 1)) * 280 + 10 : 150},${100 - (p / 100) * 90 - 5}`)
    .join(' ')

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Stat row */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { cls: 'border-teal-500/30 bg-teal-400/5', icon: <Hourglass className="h-8 w-8 text-teal-300" />, value: stats?.daysLeft ?? 0, label: 'days to boards', text: 'text-teal-200' },
          { cls: 'border-amber-500/30 bg-amber-400/5', icon: <Flame className="h-8 w-8 text-amber-300" />, value: stats?.streak ?? 0, label: 'day streak', text: 'text-amber-200' },
          { cls: 'border-emerald-500/30 bg-emerald-400/5', icon: <BookOpenCheck className="h-8 w-8 text-emerald-300" />, value: null, mastered: true, label: 'chapters mastered', text: 'text-emerald-200' },
          { cls: 'border-slate-600 bg-slate-800/40', icon: <CalendarCheck2 className="h-8 w-8 text-slate-300" />, value: null, tasks: true, label: 'tasks done today', text: 'text-slate-200' },
        ].map((s, i) => (
          <motion.div key={s.label} variants={popIn} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
            <Card className={cn('h-full', s.cls)}>
              <CardContent className="flex items-center gap-3 p-4">
                {s.icon}
                <div>
                  {s.value !== null ? (
                    <p className={cn('text-2xl font-bold', s.text)}>
                      <AnimatedNumber value={s.value} />
                    </p>
                  ) : s.mastered ? (
                    <p className={cn('text-2xl font-bold', s.text)}>
                      <AnimatedNumber value={stats?.chaptersMastered ?? 0} />/{stats?.chaptersTotal ?? 0}
                    </p>
                  ) : (
                    <p className={cn('text-2xl font-bold', s.text)}>
                      <AnimatedNumber value={stats?.todayDone ?? 0} />/{stats?.todayTotal ?? 0}
                    </p>
                  )}
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Focus timer + weekly analytics */}
      <div className="grid gap-4 md:grid-cols-3">
        <motion.div variants={popIn}>
          <FocusTimer onLog={logFocusSession} />
        </motion.div>
        <motion.div variants={popIn}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarCheck2 className="h-4 w-4 text-teal-400" /> This week&apos;s study time
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-44 items-end justify-between gap-2 pt-2">
              {weekly.map((d, i) => {
                const h = weekMax ? Math.max(4, (d.minutes / weekMax) * 100) : 4
                const day = new Date(d.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'narrow' })
                return (
                  <div key={d.date} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        'w-full rounded-t-md transition-colors',
                        d.minutes >= 60 ? 'bg-emerald-400' : d.minutes > 0 ? 'bg-teal-500/70' : 'bg-slate-700/60'
                      )}
                      title={`${d.minutes} min`}
                    />
                    <span className="text-[10px] text-slate-500">{day}</span>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={popIn}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Accuracy trend</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              {trendPcts.length >= 2 ? (
                <svg viewBox="0 0 300 110" className="h-40 w-full">
                  <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points={`10,105 ${trendPoints} 290,105`} fill="url(#trendFill)" />
                  <motion.polyline
                    points={trendPoints}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                  {trendPcts.map((p, i) => (
                    <circle
                      key={i}
                      cx={trendPcts.length > 1 ? (i / (trendPcts.length - 1)) * 280 + 10 : 150}
                      cy={100 - (p / 100) * 90 - 5}
                      r="3"
                      className="fill-amber-400"
                    />
                  ))}
                </svg>
              ) : (
                <div className="flex h-40 items-center justify-center text-center text-sm text-slate-500">
                  Take quizzes to build your accuracy trend.
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Syllabus completion */}
        <motion.div variants={popIn}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-4 w-4 text-emerald-400" /> Syllabus completion
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <ProgressRing pct={stats?.completionPct ?? 0} label="done" />
              <div className="space-y-1 text-sm text-slate-400">
                <p>
                  <span className="font-semibold text-emerald-300">{stats?.chaptersMastered ?? 0}</span> mastered
                </p>
                <p>
                  <span className="font-semibold text-teal-300">{stats?.chaptersLearning ?? 0}</span> learning / revised
                </p>
                <p className="text-xs">Mark chapters in Notes to track this.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Subject progress */}
        <motion.div variants={popIn}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <BadgeCheck className="h-4 w-4 text-teal-400" /> Subject progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {(stats?.subjectProgress ?? []).map((sp, i) => {
                const s = subjects.find((x) => x.id === sp.subjectId)
                const cc = subjectColorClasses(s?.color ?? 'slate')
                return (
                  <motion.div
                    key={sp.subjectId}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                  >
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className={cn('font-medium', cc.text)}>{s?.name ?? sp.subjectId}</span>
                      <span className="text-xs text-slate-500">
                        {sp.mastered}/{sp.total} mastered
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-full">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: sp.pct / 100 }}
                        style={{ originX: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Progress value={sp.pct} className="h-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick actions */}
        <motion.div variants={popIn}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Rocket className="h-4 w-4 text-fuchsia-400" /> Quick actions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {[
                { v: 'timetable' as View, label: "Open today's timetable", Icon: CalendarCheck2, cls: 'border-teal-500/40 text-teal-200 hover:bg-teal-400/10' },
                { v: 'quiz' as View, label: 'Take a quiz', Icon: ListChecks, cls: 'border-emerald-500/40 text-emerald-200 hover:bg-emerald-400/10' },
                { v: 'tutor' as View, label: 'Ask the AI tutor', Icon: Sparkles, cls: 'border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-400/10' },
              ].map((a, i) => (
                <motion.div key={a.v} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }} whileTap={{ scale: 0.97 }}>
                  <Button onClick={() => onNavigate(a.v)} variant="outline" className={cn('w-full justify-start', a.cls)}>
                    <a.Icon className="mr-2 h-4 w-4" /> {a.label}
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Study memory: yesterday / today / tomorrow */}
      <motion.div variants={popIn}>
        <StudyMemory memory={memory} subjects={subjects} onToggle={onToggle} />
      </motion.div>

      {/* Recent attempts */}
      <motion.div variants={popIn}>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Recent quiz scores</CardTitle>
          </CardHeader>
          <CardContent>
            {attempts.length === 0 ? (
              <p className="text-sm text-slate-500">No quiz attempts yet - take your first quiz from the Quiz tab.</p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {attempts.map((a, i) => {
                  const pct = a.total ? Math.round((a.correct / a.total) * 100) : 0
                  return (
                    <motion.div
                      key={a.id}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      whileHover={{ y: -3 }}
                      className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/30 px-3 py-2 text-sm"
                    >
                      <span className="text-slate-300">
                        {a.correct}/{a.total} correct
                      </span>
                      <span className={pct >= 70 ? 'font-semibold text-emerald-300' : pct >= 40 ? 'font-semibold text-amber-300' : 'font-semibold text-rose-300'}>
                        {pct}%
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
