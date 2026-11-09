'use client'

import { useMemo, useState } from 'react'
import { CalendarDays, Check, Pencil, Plus, Trash2, Wand2, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import type { SettingsDTO, StudyItemDTO, SubjectInfo } from '@/lib/types'
import { Spinner, fmtDateLabel } from './shared'

type Props = {
  items: StudyItemDTO[]
  settings: SettingsDTO
  subjects: SubjectInfo[]
  today: string
  onToggle: (id: string, done: boolean) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, data: { title?: string; date?: string; minutes?: number }) => Promise<boolean>
  onAdd: (data: { date: string; title: string; minutes: number; subjectId?: string | null }) => Promise<boolean>
  onGenerate: () => Promise<string | null>
  onSaveSettings: (data: { examDate?: string; dailyMinutes?: number }) => Promise<boolean>
}

const TYPE_STYLES: Record<string, string> = {
  learn: 'border-emerald-500/40 text-emerald-300',
  revise: 'border-teal-500/40 text-teal-300',
  practice: 'border-fuchsia-500/40 text-fuchsia-300',
  custom: 'border-slate-500/40 text-slate-300',
}

export default function TimetableView({ items, settings, subjects, today, onToggle, onDelete, onUpdate, onAdd, onGenerate, onSaveSettings }: Props) {
  const { toast } = useToast()
  const [filter, setFilter] = useState<'all' | 'pending' | 'done'>('all')
  const [examDate, setExamDate] = useState(settings.examDate)
  const [dailyMinutes, setDailyMinutes] = useState(String(settings.dailyMinutes))
  const [savingSettings, setSavingSettings] = useState(false)
  const [generating, setGenerating] = useState(false)

  // Edit dialog state
  const [editItem, setEditItem] = useState<StudyItemDTO | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDate, setEditDate] = useState('')
  const [editMinutes, setEditMinutes] = useState('45')

  // Add dialog state
  const [addOpen, setAddOpen] = useState(false)
  const [addTitle, setAddTitle] = useState('')
  const [addDate, setAddDate] = useState(today)
  const [addMinutes, setAddMinutes] = useState('45')
  const [addSubject, setAddSubject] = useState<string>('none')

  const grouped = useMemo(() => {
    const filtered = items.filter((i) => (filter === 'all' ? true : filter === 'done' ? i.done : !i.done))
    const map = new Map<string, StudyItemDTO[]>()
    for (const i of filtered) {
      const arr = map.get(i.date) ?? []
      arr.push(i)
      map.set(i.date, arr)
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [items, filter])

  const pendingCount = items.filter((i) => !i.done).length

  async function handleSaveSettings() {
    setSavingSettings(true)
    const ok = await onSaveSettings({ examDate, dailyMinutes: Number(dailyMinutes) })
    setSavingSettings(false)
    toast(ok ? { title: 'Settings saved', description: 'Rebuild the timetable to apply the new exam date.' } : { title: 'Could not save settings', variant: 'destructive' })
  }

  async function handleGenerate() {
    setGenerating(true)
    const result = await onGenerate()
    setGenerating(false)
    toast(result ? { title: 'Timetable rebuilt', description: `${result} from today to exam day.` } : { title: 'Could not build timetable', description: 'Make sure the exam date is after today.', variant: 'destructive' })
  }

  function openEdit(item: StudyItemDTO) {
    setEditItem(item)
    setEditTitle(item.title)
    setEditDate(item.date)
    setEditMinutes(String(item.minutes))
  }

  async function handleEditSave() {
    if (!editItem) return
    const ok = await onUpdate(editItem.id, { title: editTitle, date: editDate, minutes: Number(editMinutes) })
    if (ok) {
      setEditItem(null)
      toast({ title: 'Task updated' })
    } else {
      toast({ title: 'Update failed', variant: 'destructive' })
    }
  }

  async function handleAdd() {
    if (!addTitle.trim()) return
    const ok = await onAdd({
      date: addDate,
      title: addTitle.trim(),
      minutes: Number(addMinutes),
      subjectId: addSubject === 'none' ? null : addSubject,
    })
    if (ok) {
      setAddOpen(false)
      setAddTitle('')
      toast({ title: 'Task added' })
    } else {
      toast({ title: 'Could not add task', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6">
      {/* Planner settings */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Wand2 className="h-4 w-4 text-emerald-400" /> Smart planner
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-lg border border-slate-800 p-4">
            <div className="grid gap-2">
              <Label htmlFor="exam-date" className="text-slate-300">Board exam start date</Label>
              <Input id="exam-date" type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="bg-slate-800 border-slate-700" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="daily-min" className="text-slate-300">Study minutes per day</Label>
              <Input id="daily-min" type="number" min={30} max={600} step={15} value={dailyMinutes} onChange={(e) => setDailyMinutes(e.target.value)} className="bg-slate-800 border-slate-700" />
            </div>
            <Button onClick={handleSaveSettings} disabled={savingSettings} variant="outline" className="w-full border-teal-500/40 text-teal-200 hover:bg-teal-400/10">
              {savingSettings ? <Spinner /> : <Check className="mr-2 h-4 w-4" />} Save settings
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-3 rounded-lg border border-slate-800 p-4">
            <p className="text-sm text-slate-400">
              The planner rotates across all 4 subjects daily, puts high-weightage chapters first, then adds revision
              and practice-quiz slots. The last two days become mock practice before the exam.
            </p>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{items.filter((i) => i.done).length}/{items.length} tasks done</span>
              <span className="text-slate-500">{pendingCount} pending</span>
            </div>
            <Button onClick={handleGenerate} disabled={generating} className="bg-emerald-500 text-slate-900 hover:bg-emerald-400">
              {generating ? <Spinner className="text-slate-900" /> : <Wand2 className="mr-2 h-4 w-4" />}
              {items.length ? 'Rebuild from today' : 'Generate timetable'}
            </Button>
            <p className="text-[11px] text-slate-500">Rebuilding replaces auto tasks but keeps your custom tasks.</p>
          </div>
        </CardContent>
      </Card>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {(['all', 'pending', 'done'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm capitalize transition-colors',
                filter === f ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/40' : 'text-slate-400 hover:bg-slate-800'
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <Button size="sm" variant="outline" className="border-fuchsia-500/40 text-fuchsia-200 hover:bg-fuchsia-400/10" onClick={() => setAddOpen(true)}>
          <Plus className="mr-1.5 h-4 w-4" /> Add task
        </Button>
      </div>

      {/* Plan list */}
      {grouped.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-slate-400">
            <CalendarDays className="mx-auto mb-2 h-8 w-8 text-slate-600" />
            Nothing here yet. Hit <span className="font-medium text-emerald-300">Generate timetable</span> to build your day-by-day plan.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {grouped.map(([date, dateItems]) => (
            <Card key={date}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-sm font-semibold text-slate-200">
                  <span className="flex items-center gap-2">
                    <CalendarDays className={cn('h-4 w-4', date === today ? 'text-emerald-400' : 'text-slate-500')} />
                    {fmtDateLabel(date, today)}
                    <span className="font-normal text-slate-500">· {date}</span>
                  </span>
                  <span className="text-xs font-normal text-slate-500">
                    {dateItems.filter((i) => i.done).length}/{dateItems.length} done
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {dateItems.map((item) => {
                  const subj = subjects.find((s) => s.id === item.subjectId)
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        'group flex flex-wrap items-center gap-2.5 rounded-lg border border-slate-800 bg-slate-800/30 p-3 transition-colors hover:border-slate-700',
                        item.done && 'opacity-60'
                      )}
                    >
                      <Checkbox checked={item.done} onCheckedChange={(v) => onToggle(item.id, v === true)} aria-label={`Mark ${item.title} done`} />
                      <div className="min-w-0 flex-1">
                        <p className={cn('text-sm leading-snug', item.done && 'line-through text-slate-500')}>{item.title}</p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          <Badge variant="outline" className={cn('capitalize', TYPE_STYLES[item.type] ?? TYPE_STYLES.custom)}>
                            {item.type}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {item.minutes} min
                          </Badge>
                          {subj ? (
                            <Badge variant="outline" className="border-slate-600 text-slate-400">
                              {subj.name}
                            </Badge>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex gap-1 opacity-70 transition-opacity group-hover:opacity-100">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-teal-200" onClick={() => openEdit(item)} aria-label="Edit task">
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-rose-300" onClick={() => onDelete(item.id)} aria-label="Delete task">
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit dialog */}
      <Dialog open={Boolean(editItem)} onOpenChange={(open) => !open && setEditItem(null)}>
        <DialogContent className="border-slate-700 bg-slate-900">
          <DialogHeader>
            <DialogTitle>Edit task</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="grid gap-1.5">
              <Label htmlFor="edit-title" className="text-slate-300">Title</Label>
              <Input id="edit-title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="bg-slate-800 border-slate-700" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="edit-date" className="text-slate-300">Date</Label>
                <Input id="edit-date" type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} className="bg-slate-800 border-slate-700" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="edit-minutes" className="text-slate-300">Minutes</Label>
                <Input id="edit-minutes" type="number" min={5} max={360} value={editMinutes} onChange={(e) => setEditMinutes(e.target.value)} className="bg-slate-800 border-slate-700" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditItem(null)}>
              <X className="mr-1 h-4 w-4" /> Cancel
            </Button>
            <Button className="bg-emerald-500 text-slate-900 hover:bg-emerald-400" onClick={handleEditSave}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="border-slate-700 bg-slate-900">
          <DialogHeader>
            <DialogTitle>Add custom task</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="grid gap-1.5">
              <Label htmlFor="add-title" className="text-slate-300">What do you want to study?</Label>
              <Input id="add-title" placeholder="e.g. Redo 5 trigonometry sums" value={addTitle} onChange={(e) => setAddTitle(e.target.value)} className="bg-slate-800 border-slate-700" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="add-date" className="text-slate-300">Date</Label>
                <Input id="add-date" type="date" value={addDate} onChange={(e) => setAddDate(e.target.value)} className="bg-slate-800 border-slate-700" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="add-minutes" className="text-slate-300">Minutes</Label>
                <Input id="add-minutes" type="number" min={5} max={360} value={addMinutes} onChange={(e) => setAddMinutes(e.target.value)} className="bg-slate-800 border-slate-700" />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label className="text-slate-300">Subject (optional)</Label>
              <Select value={addSubject} onValueChange={setAddSubject}>
                <SelectTrigger className="bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-900">
                  <SelectItem value="none">No subject</SelectItem>
                  {subjects.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setAddOpen(false)}>
              <X className="mr-1 h-4 w-4" /> Cancel
            </Button>
            <Button className="bg-emerald-500 text-slate-900 hover:bg-emerald-400" onClick={handleAdd} disabled={!addTitle.trim()}>
              Add task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
