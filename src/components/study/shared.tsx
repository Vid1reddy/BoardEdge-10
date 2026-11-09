'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Lightbulb, Target, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function Spinner({ className }: { className?: string }) {
  return <Loader2 className={cn('h-4 w-4 animate-spin', className)} />
}

// Smoothly counts up to the target number whenever it changes.
export function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const [display, setDisplay] = useState(0)
  const prevRef = useRef(0)
  useEffect(() => {
    const target = Number(value) || 0
    const start = prevRef.current
    const duration = 700
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(start + (target - start) * eased))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        prevRef.current = target
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])
  return <span className={className}>{display}</span>
}

export function EmptyState({ title, hint, icon }: { title: string; hint?: string; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-700 py-10 text-center">
      {icon}
      <p className="font-medium text-slate-300">{title}</p>
      {hint ? <p className="max-w-sm text-sm text-slate-500">{hint}</p> : null}
    </div>
  )
}

export function DifficultyBadge({ level }: { level: string }) {
  const map: Record<string, string> = {
    easy: 'border-emerald-500/40 text-emerald-300',
    medium: 'border-amber-500/40 text-amber-300',
    hard: 'border-rose-500/40 text-rose-300',
  }
  return (
    <Badge variant="outline" className={cn('capitalize', map[level] ?? 'border-slate-600 text-slate-400')}>
      {level}
    </Badge>
  )
}

export function ProbabilityBadge({ probability }: { probability: string }) {
  const veryHigh = probability === 'very-high'
  return (
    <Badge variant="outline" className={veryHigh ? 'border-rose-500/40 text-rose-300' : 'border-teal-500/40 text-teal-300'}>
      {veryHigh ? '★ very high' : 'high'} probability
    </Badge>
  )
}

export function MarksBadge({ marks }: { marks: number }) {
  return <Badge className="bg-slate-700 text-slate-200 hover:bg-slate-700">{marks} marks</Badge>
}

export function TrickBox({ text }: { text: string }) {
  if (!text?.trim()) return null
  return (
    <div className="mt-3 flex gap-2 rounded-lg border border-emerald-500/30 bg-emerald-400/5 p-3 text-sm text-emerald-200">
      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
      <span>
        <span className="font-semibold text-emerald-300">TRICK: </span>
        {text}
      </span>
    </div>
  )
}

export function ExamPointerBox({ text }: { text: string }) {
  if (!text?.trim()) return null
  return (
    <div className="mt-2 flex gap-2 rounded-lg border border-amber-500/30 bg-amber-400/5 p-3 text-sm text-amber-200">
      <Target className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
      <span>
        <span className="font-semibold text-amber-300">EXAM POINTER: </span>
        {text}
      </span>
    </div>
  )
}

export function ProgressRing({ pct, size = 84, label }: { pct: number; size?: number; label?: string }) {
  const stroke = 8
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const clamped = Math.min(100, Math.max(0, pct))
  const filled = (clamped / 100) * c
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="fill-none stroke-slate-700" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          strokeLinecap="round"
          className="fill-none stroke-emerald-400"
          strokeDasharray={`${c}`}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - filled }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <motion.div
        className="absolute flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <span className="text-lg font-bold text-emerald-300">{clamped}%</span>
        {label ? <span className="text-[10px] text-slate-400">{label}</span> : null}
      </motion.div>
    </div>
  )
}

// Renders plain-text AI output: strips stray markdown, blank lines separate blocks, "•"/"*"/"-" lines become bullets.
export function AIText({ text }: { text: string }) {
  const clean = text.replace(/\*\*/g, '')
  const lines = clean.split('\n')
  return (
    <div className="space-y-1 text-sm leading-relaxed text-slate-200">
      {lines.map((line, i) => {
        const t = line.trim()
        if (!t) return <div key={i} className="h-2" />
        if (t.startsWith('•') || t.startsWith('* ') || t.startsWith('- ')) {
          return (
            <div key={i} className="flex gap-2 pl-1">
              <span className="text-emerald-400">•</span>
              <span>{t.replace(/^[•*-]\s*/, '')}</span>
            </div>
          )
        }
        return (
          <p
            key={i}
            className={
              t.startsWith('TRICK:')
                ? 'font-medium text-emerald-300'
                : t.startsWith('EXAM TIP:')
                  ? 'font-medium text-amber-300'
                  : ''
            }
          >
            {t}
          </p>
        )
      })}
    </div>
  )
}

export function AIHint() {
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
      <Sparkles className="h-3 w-3 text-teal-400" />
      AI works out of the box; add your OpenRouter / NVIDIA NIM keys in Settings for free open models.
    </div>
  )
}

export function fmtDateLabel(iso: string, today: string): string {
  if (iso === today) return 'Today'
  const diff = Math.round((new Date(iso + 'T00:00:00').getTime() - new Date(today + 'T00:00:00').getTime()) / 86_400_000)
  if (diff === 1) return 'Tomorrow'
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
}
