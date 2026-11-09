'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Brain, Pause, Play, Plus, RotateCcw, Timer as TimerIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatedNumber } from './shared'

type Props = {
  onLog: (minutes: number, label: string) => Promise<boolean>
}

const PRESETS = [
  { label: 'Focus', minutes: 25, cls: 'border-emerald-500/40 text-emerald-200' },
  { label: 'Deep work', minutes: 45, cls: 'border-teal-500/40 text-teal-200' },
  { label: 'Break', minutes: 5, cls: 'border-slate-500/40 text-slate-300' },
]

function fmt(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function FocusTimer({ onLog }: Props) {
  const [presetIdx, setPresetIdx] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(PRESETS[0].minutes * 60)
  const [running, setRunning] = useState(false)
  const [completed, setCompleted] = useState<{ minutes: number; label: string } | null>(null)
  const [logged, setLogged] = useState(false)
  const [logging, setLogging] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const preset = PRESETS[presetIdx]
  const total = preset.minutes * 60
  const progress = ((total - secondsLeft) / total) * 100

  const tick = useCallback(() => {
    setSecondsLeft((s) => {
      if (s <= 1) {
        setRunning(false)
        if (preset.label !== 'Break') {
          setCompleted({ minutes: preset.minutes, label: preset.label })
          const end = Date.now() + 1400
          const colors = ['#34d399', '#2dd4bf', '#fbbf24']
          ;(function frame() {
            confetti({ particleCount: 70, spread: 80, origin: { y: 0.65 }, colors })
            if (Date.now() < end) requestAnimationFrame(frame)
          })()
        }
        return 0
      }
      return s - 1
    })
  }, [preset])

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(tick, 1000)
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [running, tick])

  function pickPreset(i: number) {
    setPresetIdx(i)
    setSecondsLeft(PRESETS[i].minutes * 60)
    setRunning(false)
    setCompleted(null)
    setLogged(false)
  }

  function reset() {
    setSecondsLeft(total)
    setRunning(false)
    setCompleted(null)
    setLogged(false)
  }

  async function logSession() {
    if (!completed) return
    setLogging(true)
    const ok = await onLog(completed.minutes, `Focus session: ${completed.label} (${completed.minutes} min)`)
    setLogging(false)
    if (ok) setLogged(true)
  }

  const stroke = 8
  const size = 148
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Brain className="h-4 w-4 text-teal-400" /> Focus timer
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          {PRESETS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => pickPreset(i)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium transition-all',
                i === presetIdx ? cn(p.cls, 'scale-105 bg-slate-800') : 'border-slate-700 text-slate-500 hover:text-slate-300'
              )}
            >
              {p.label} {p.minutes}m
            </button>
          ))}
        </div>

        <div className="relative">
          <svg width={size} height={size} className="-rotate-90">
            <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="fill-none stroke-slate-700" />
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              strokeWidth={stroke}
              strokeLinecap="round"
              className={cn('fill-none', completed ? 'stroke-emerald-400' : running ? 'stroke-teal-400' : 'stroke-slate-500')}
              strokeDasharray={`${c}`}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: c - (c * Math.min(100, progress)) / 100 }}
              transition={{ duration: 0.4, ease: 'linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {completed ? (
              <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                <TimerIcon className="mx-auto h-7 w-7 text-emerald-400" />
                <p className="mt-1 text-xs font-semibold text-emerald-300">Session done!</p>
              </motion.div>
            ) : (
              <p className={cn('text-3xl font-bold tabular-nums', running ? 'text-teal-300' : 'text-slate-300')}>
                <AnimatedNumber value={Math.floor(secondsLeft / 60)} />
                :{String(secondsLeft % 60).padStart(2, '0')}
              </p>
            )}
          </div>
        </div>

        {completed ? (
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={logSession}
              disabled={logged || logging}
              className="bg-emerald-500 text-slate-900 hover:bg-emerald-400"
            >
              <Plus className="mr-2 h-4 w-4" />
              {logged ? 'Logged to today!' : logging ? 'Logging...' : `Log ${completed.minutes} min to today`}
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400" onClick={reset}>
              <RotateCcw className="mr-2 h-3.5 w-3.5" /> New session
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              onClick={() => setRunning((r) => !r)}
              className={cn(running ? 'bg-slate-600 hover:bg-slate-500' : 'bg-teal-500 text-slate-900 hover:bg-teal-400')}
            >
              {running ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {running ? 'Pause' : secondsLeft === total ? 'Start' : 'Resume'}
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50" onClick={reset}>
              <RotateCcw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
