'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, CalendarDays, Database, Eye, EyeOff, KeyRound, Save, ShieldCheck, Timer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { SettingsDTO } from '@/lib/types'
import { Spinner } from './shared'

type Props = {
  settings: SettingsDTO
  totals: { mcqs: number; boardQuestions: number }
  chaptersCount: number
  onSave: (data: { examDate?: string; dailyMinutes?: number; openrouterKey?: string; nvidiaKey?: string }) => Promise<boolean>
}

type AIStatus = {
  active: string
  providers: { id: string; label: string; configured: boolean }[]
  freeModels: { openrouter: string[] }
}

type KeyState = {
  openrouterKeyMasked: string
  hasOpenrouterKey: boolean
  keysFromEnv?: { openrouter: boolean }
}

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
}

export default function SettingsView({ settings, totals, chaptersCount, onSave }: Props) {
  const { toast } = useToast()
  const [examDate, setExamDate] = useState(settings.examDate)
  const [dailyMinutes, setDailyMinutes] = useState(String(settings.dailyMinutes))
  const [saving, setSaving] = useState(false)
  const [ai, setAi] = useState<AIStatus | null>(null)
  const [keys, setKeys] = useState<KeyState | null>(null)
  const [orKey, setOrKey] = useState('')
  const [showKeys, setShowKeys] = useState(false)

  useEffect(() => {
    fetch('/api/ai/status')
      .then((r) => r.json())
      .then(setAi)
      .catch(() => undefined)
    fetch('/api/settings')
      .then((r) => r.json())
      .then((d) => setKeys(d.settings))
      .catch(() => undefined)
  }, [])

  async function save() {
    setSaving(true)
    const payload: { examDate?: string; dailyMinutes?: number; openrouterKey?: string } = {
      examDate,
      dailyMinutes: Number(dailyMinutes),
    }
    if (orKey.trim()) payload.openrouterKey = orKey.trim()
    const ok = await onSave(payload)
    setSaving(false)
    if (ok) {
      setOrKey('')
      fetch('/api/settings')
        .then((r) => r.json())
        .then((d) => setKeys(d.settings))
        .catch(() => undefined)
      fetch('/api/ai/status')
        .then((r) => r.json())
        .then(setAi)
        .catch(() => undefined)
      toast({ title: 'Saved', description: 'Keys and exam settings are now used for everyone.' })
    } else {
      toast({ title: 'Could not save', variant: 'destructive' })
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* API keys - saved once, used by everyone */}
      <motion.div {...fadeUp} transition={{ duration: 0.35 }} className="md:col-span-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <KeyRound className="h-4 w-4 text-fuchsia-400" /> API key — save once, every user uses it
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-400/5 p-3 text-[13px] text-emerald-200">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <p>
                Add an OpenRouter key once. The server uses OpenRouter&apos;s free-only model router for
                <span className="font-semibold"> every user</span> of this app — nobody else ever needs a key, and only
                <span className="font-semibold"> free models</span> are ever called. The selected model can change as free models become available. Keys are never shown fully again and
                never sent to the browser.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="grid gap-1.5">
                <Label htmlFor="or-key" className="text-slate-300">OpenRouter key</Label>
                <div className="flex gap-2">
                  <Input
                    id="or-key"
                    type={showKeys ? 'text' : 'password'}
                    placeholder={keys?.openrouterKeyMasked || 'sk-or-v1-...'}
                    value={orKey}
                    onChange={(e) => setOrKey(e.target.value)}
                    className="bg-slate-800 border-slate-700 font-mono text-xs"
                    autoComplete="off"
                  />
                  <Button variant="outline" size="icon" onClick={() => setShowKeys((v) => !v)} aria-label="Toggle key visibility">
                    {showKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-[11px] text-slate-500">
                  {keys?.hasOpenrouterKey ? `Saved: ${keys.openrouterKeyMasked || 'configured'}` : 'Not set yet'} · free key: openrouter.ai/settings/keys
                </p>
              </div>
            </div>
            {!ai ? (
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Spinner /> Checking AI status...
              </div>
            ) : (
              <div className="grid gap-2 sm:grid-cols-1">
                {ai.providers.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className={cn(
                      'flex items-center justify-between rounded-lg border p-3 text-sm',
                      ai.active === p.id ? 'border-emerald-400/50 bg-emerald-400/10' : 'border-slate-800 bg-slate-800/30'
                    )}
                  >
                    <p className="font-medium text-slate-200">{p.label}</p>
                    <Badge
                      variant="outline"
                      className={cn(
                        ai.active === p.id
                          ? 'border-emerald-400/50 text-emerald-300'
                          : p.configured
                            ? 'border-teal-500/40 text-teal-300'
                            : 'border-slate-600 text-slate-500'
                      )}
                    >
                      {ai.active === p.id ? 'active' : p.configured ? 'configured' : 'not set'}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}
            {ai ? (
              <details className="rounded-lg border border-slate-800 bg-slate-800/20 p-3 text-[13px] text-slate-400">
                <summary className="cursor-pointer font-medium text-slate-300">Free models this app is allowed to use</summary>
                <div className="mt-2">
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-teal-300">OpenRouter</p>
                    <ul className="space-y-0.5 font-mono text-[11px]">
                      {ai.freeModels.openrouter.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ) : null}
          </CardContent>
        </Card>
      </motion.div>

      {/* Exam settings */}
      <motion.div {...fadeUp} transition={{ duration: 0.35, delay: 0.08 }}>
        <Card className="h-full">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarDays className="h-4 w-4 text-teal-400" /> Board exam settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-1.5">
              <Label htmlFor="set-exam" className="text-slate-300">Exam start date</Label>
              <Input id="set-exam" type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="bg-slate-800 border-slate-700" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="set-min" className="text-slate-300">Daily study minutes</Label>
              <Input id="set-min" type="number" min={30} max={600} step={15} value={dailyMinutes} onChange={(e) => setDailyMinutes(e.target.value)} className="bg-slate-800 border-slate-700" />
            </div>
            <Button onClick={save} disabled={saving} className="w-full bg-emerald-500 text-slate-900 hover:bg-emerald-400">
              {saving ? <Spinner className="text-slate-900" /> : <Save className="h-4 w-4" />} Save everything
            </Button>
            <p className="text-[11px] text-slate-500">Changing the date affects new timetable builds and the countdown.</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data summary */}
      <motion.div {...fadeUp} transition={{ duration: 0.35, delay: 0.16 }}>
        <Card className="h-full">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Database className="h-4 w-4 text-emerald-400" /> Content library
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg border border-slate-800 bg-slate-800/30 p-3">
              <p className="text-xl font-bold text-emerald-300">{chaptersCount}</p>
              <p className="text-[11px] text-slate-500">chapters / units</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-800/30 p-3">
              <p className="text-xl font-bold text-teal-300">{totals.mcqs}</p>
              <p className="text-[11px] text-slate-500">MCQs</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-800/30 p-3">
              <p className="text-xl font-bold text-fuchsia-300">{totals.boardQuestions}</p>
              <p className="text-[11px] text-slate-500">board questions</p>
            </div>
            <div className="col-span-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <Timer className="h-3 w-3" /> Full-size notes, memory tricks and model answers for all 4 subjects.
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
