'use client'

import { motion } from 'framer-motion'
import { CalendarClock, CalendarDays, CheckCircle2, Circle, ClipboardList, Flame, History, Sunrise, Timer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { MemoryDTO, MemoryDayDTO, SubjectInfo } from '@/lib/types'
import { subjectColorClasses } from '@/lib/types'

type Props = {
  memory: MemoryDTO | null
  subjects: SubjectInfo[]
  onToggle: (id: string, done: boolean) => void
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const riseIn = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 240, damping: 26 } },
}

function fmtHours(min: number): string {
  if (min >= 60) {
    const h = Math.floor(min / 60)
    const m = min % 60
    return m ? `${h}h ${m}m` : `${h}h`
  }
  return `${min}m`
}

function SubjectChip({ subjectId, subjects }: { subjectId: string | null; subjects: SubjectInfo[] }) {
  const s = subjects.find((x) => x.id === subjectId)
  if (!s) return null
  const cc = subjectColorClasses(s.color)
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium', cc.border, cc.bg, cc.text)}>
      <span className={cn('h-1.5 w-1.5 rounded-full', cc.dot)} />
      {s.name}
    </span>
  )
}

function MiniStat({ icon, label, value, cls }: { icon: React.ReactNode; label: string; value: React.ReactNode; cls: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/50 px-2.5 py-1.5">
      <span className={cls}>{icon}</span>
      <span className="text-xs font-semibold text-slate-200">{value}</span>
      <span className="text-[10px] text-slate-500">{label}</span>
    </div>
  )
}

function TaskRow({
  item,
  interactive,
  onToggle,
  subjects,
  delay,
}: {
  item: MemoryDayDTO['items'][number]
  interactive: boolean
  onToggle?: (id: string, done: boolean) => void
  subjects: SubjectInfo[]
  delay: number
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 3 }}
      className={cn(
        'flex items-start gap-2.5 rounded-lg border border-slate-800 bg-slate-800/30 p-2.5',
        item.done && 'border-emerald-900/50 bg-emerald-400/5'
      )}
    >
      {interactive && onToggle ? (
        <motion.span whileTap={{ scale: 1.35 }} transition={{ type: 'spring', stiffness: 500, damping: 15 }} className="mt-0.5">
          <Checkbox checked={item.done} onCheckedChange={(v) => onToggle(item.id, v === true)} aria-label={`Mark ${item.title} done`} />
        </motion.span>
      ) : item.done ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
      ) : (
        <Circle className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
      )}
      <div className="min-w-0 flex-1">
        <p className={cn('text-[13px] leading-snug', item.done ? 'text-slate-400 line-through' : 'text-slate-200')}>{item.title}</p>
        <div className="mt-1 flex flex-wrap items-center gap-1.5">
          <SubjectChip subjectId={item.subjectId} subjects={subjects} />
          <Badge variant="outline" className="border-slate-700 px-1.5 py-0 text-[10px] text-slate-500">
            <Timer className="mr-0.5 h-2.5 w-2.5" /> {item.minutes} min
          </Badge>
          <Badge variant="outline" className="border-slate-700 px-1.5 py-0 text-[10px] capitalize text-slate-500">
            {item.type}
          </Badge>
        </div>
      </div>
    </motion.li>
  )
}

export default function StudyMemory({ memory, subjects, onToggle }: Props) {
  if (!memory) return null
  const { yesterday, today, tomorrow, carryOver } = memory

  const todayPct = today.totalCount ? Math.round((today.doneCount / today.totalCount) * 100) : 0
  const yesterdayPct = yesterday.totalCount ? Math.round((yesterday.doneCount / yesterday.totalCount) * 100) : 0
  const tomorrowBySubject = new Map<string, number>()
  for (const it of tomorrow.items) {
    if (it.subjectId) tomorrowBySubject.set(it.subjectId, (tomorrowBySubject.get(it.subjectId) ?? 0) + 1)
  }

  const dayAccent: Record<string, { ring: string; text: string; bg: string; icon: React.ReactNode }> = {
    Yesterday: { ring: 'ring-emerald-400/30', text: 'text-emerald-300', bg: 'bg-emerald-400/5', icon: <History className="h-4 w-4" /> },
    Today: { ring: 'ring-amber-400/40', text: 'text-amber-300', bg: 'bg-amber-400/5', icon: <Sunrise className="h-4 w-4" /> },
    Tomorrow: { ring: 'ring-slate-500/40', text: 'text-slate-300', bg: 'bg-slate-400/5', icon: <CalendarClock className="h-4 w-4" /> },
  }

  const renderDay = (day: MemoryDayDTO, interactive: boolean) => {
    const acc = dayAccent[day.label] ?? dayAccent.Tomorrow
    const pct = day.totalCount ? Math.round((day.doneCount / day.totalCount) * 100) : 0
    return (
      <motion.div variants={riseIn} whileHover={{ y: -5 }} className="h-full">
        <Card className={cn('flex h-full flex-col border-slate-800 ring-1', acc.ring, acc.bg)}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base">
              <span className={cn('flex items-center gap-2', acc.text)}>
                {acc.icon}
                {day.label}
              </span>
              {day.totalCount > 0 ? (
                <span className="text-xs font-medium text-slate-400">
                  {day.doneCount}/{day.totalCount} done
                </span>
              ) : null}
            </CardTitle>
            {day.totalCount > 0 ? (
              <div className="overflow-hidden rounded-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: pct / 100 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Progress value={pct} className="h-1.5" />
                </motion.div>
              </div>
            ) : null}
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3">
            {/* mini stats */}
            <div className="flex flex-wrap gap-1.5">
              {day.minutesDone > 0 ? (
                <MiniStat icon={<Flame className="h-3 w-3" />} label="studied" value={fmtHours(day.minutesDone)} cls="text-amber-400" />
              ) : day.minutesPlanned > 0 ? (
                <MiniStat icon={<Timer className="h-3 w-3" />} label="planned" value={fmtHours(day.minutesPlanned)} cls="text-teal-400" />
              ) : null}
              {day.quizCount > 0 ? (
                <MiniStat
                  icon={<ClipboardList className="h-3 w-3" />}
                  label="quiz"
                  value={`${day.quizCorrect}/${day.quizTotalQs}`}
                  cls="text-emerald-400"
                />
              ) : null}
              {day.boardPracticed > 0 ? (
                <MiniStat icon={<CheckCircle2 className="h-3 w-3" />} label="board Qs" value={day.boardPracticed} cls="text-fuchsia-400" />
              ) : null}
            </div>

            {/* tasks */}
            {day.items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-slate-700 py-6 text-center">
                <CalendarDays className="h-5 w-5 text-slate-600" />
                <p className="text-xs text-slate-500">
                  {day.label === 'Yesterday'
                    ? 'Nothing was scheduled'
                    : day.label === 'Tomorrow'
                      ? 'Not planned yet - generate or extend the timetable'
                      : 'Free day - add a task from the Timetable'}
                </p>
              </div>
            ) : (
              <ul className="max-h-56 space-y-2 overflow-y-auto pr-1 [scrollbar-width:thin]">
                {day.items.map((item, i) => (
                  <TaskRow
                    key={item.id}
                    item={item}
                    interactive={interactive}
                    onToggle={onToggle}
                    subjects={subjects}
                    delay={0.1 + i * 0.05}
                  />
                ))}
              </ul>
            )}

            {/* footer line */}
            {day.label === 'Yesterday' && yesterday.totalCount > 0 ? (
              <p className="mt-auto text-[11px] text-slate-500">
                {carryOver > 0 ? (
                  <span className="text-amber-300/90">{carryOver} unfinished task{carryOver === 1 ? '' : 's'} — finish them today!</span>
                ) : (
                  <span className="text-emerald-300/90">Perfect day — 100% completed. Keep the streak alive!</span>
                )}
              </p>
            ) : null}
            {day.label === 'Tomorrow' && tomorrowBySubject.size > 0 ? (
              <div className="mt-auto flex flex-wrap gap-1.5">
                {[...tomorrowBySubject.entries()].map(([sid, count]) => (
                  <SubjectChip key={sid} subjectId={sid} subjects={subjects} />
                ))}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <section aria-label="Study memory" className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-200">
          <History className="h-5 w-5 text-emerald-400" />
          Your study memory
        </h2>
        <span className="text-xs text-slate-500">yesterday · today · tomorrow</span>
      </div>
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-3">
        {renderDay(yesterday, false)}
        {renderDay(today, true)}
        {renderDay(tomorrow, false)}
      </motion.div>
    </section>
  )
}
