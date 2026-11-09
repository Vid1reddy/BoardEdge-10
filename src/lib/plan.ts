// Smart study planner: builds a day-by-day plan until the board exam date,
// rotating across subjects and prioritising high-weightage chapters.

export type PlannerChapter = {
  id: string
  subjectId: string
  title: string
  book: string
  bookShort: string
  number: number
  weightageMarks: number
  status: string
}

export type PlannerItem = {
  date: string
  subjectId: string | null
  chapterId: string | null
  title: string
  minutes: number
  type: 'learn' | 'revise' | 'practice'
}

export type PlannerInput = {
  chapters: PlannerChapter[]
  examDate: string // YYYY-MM-DD
  dailyMinutes: number
  today: string // YYYY-MM-DD
}

export function addDaysISO(iso: string, days: number): string {
  const d = new Date(iso + 'T00:00:00')
  d.setDate(d.getDate() + days)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

// Interleave subjects so no single subject monopolises consecutive slots.
// Inside a subject, high-weightage chapters come first.
function interleave(chapters: PlannerChapter[]): PlannerChapter[] {
  const bySubject = new Map<string, PlannerChapter[]>()
  for (const ch of chapters) {
    const arr = bySubject.get(ch.subjectId) ?? []
    arr.push(ch)
    bySubject.set(ch.subjectId, arr)
  }
  for (const arr of bySubject.values()) {
    arr.sort((a, b) => b.weightageMarks - a.weightageMarks)
  }
  const out: PlannerChapter[] = []
  let progressed = true
  while (progressed) {
    progressed = false
    for (const arr of bySubject.values()) {
      if (arr.length) {
        out.push(arr.shift() as PlannerChapter)
        progressed = true
      }
    }
  }
  return out
}

export function generatePlan(input: PlannerInput): PlannerItem[] {
  const { chapters, examDate, dailyMinutes, today } = input

  const start = new Date(today + 'T00:00:00')
  const exam = new Date(examDate + 'T00:00:00')
  const dayCount = Math.max(0, Math.round((exam.getTime() - start.getTime()) / 86_400_000))
  const studyDays = Math.max(0, dayCount - 1) // exam day and exam-eve stay light
  if (studyDays === 0) return []

  const slotsPerDay = Math.min(4, Math.max(1, Math.round(dailyMinutes / 45)))
  const totalSlots = studyDays * slotsPerDay

  const learnSeq = interleave(chapters.filter((c) => c.status !== 'mastered'))
  const reviseSeq = interleave(chapters)

  const learnSlots = Math.min(learnSeq.length, Math.max(1, Math.floor(totalSlots * 0.55)))
  const reviseSlots = Math.max(1, Math.floor(totalSlots * 0.3))
  const practiceSlots = Math.max(1, totalSlots - learnSlots - reviseSlots)

  // When time is short, revise only the highest-weightage chapters.
  const reviseQueue =
    reviseSlots < reviseSeq.length
      ? [...reviseSeq].sort((a, b) => b.weightageMarks - a.weightageMarks).slice(0, reviseSlots)
      : [...reviseSeq]

  const items: PlannerItem[] = []
  let learnIdx = 0
  let reviseIdx = 0
  let practiceIdx = 0
  const finalStretch = 2 // last two study days are reserved for practice/mocks

  for (let day = 0; day < studyDays; day++) {
    const date = addDaysISO(today, day)
    for (let s = 0; s < slotsPerDay; s++) {
      const inFinalStretch = day >= studyDays - finalStretch
      let kind: 'learn' | 'revise' | 'practice'
      if (inFinalStretch && practiceIdx < practiceSlots) {
        kind = 'practice'
      } else if (learnIdx < learnSlots) {
        kind = 'learn'
      } else if (reviseIdx < reviseQueue.length) {
        kind = 'revise'
      } else if (practiceIdx < practiceSlots) {
        kind = 'practice'
      } else {
        kind = 'practice' // buffer: cycles as mixed practice
      }

      if (kind === 'learn') {
        const ch = learnSeq[learnIdx]
        learnIdx++
        items.push({
          date,
          subjectId: ch.subjectId,
          chapterId: ch.id,
          title: `Learn ${ch.bookShort} ${ch.number}: ${ch.title}`,
          minutes: 45,
          type: 'learn',
        })
      } else if (kind === 'revise' && reviseIdx < reviseQueue.length) {
        const ch = reviseQueue[reviseIdx]
        reviseIdx++
        items.push({
          date,
          subjectId: ch.subjectId,
          chapterId: ch.id,
          title: `Revise ${ch.bookShort} ${ch.number}: ${ch.title}`,
          minutes: 30,
          type: 'revise',
        })
      } else {
        const ch = learnSeq[practiceIdx % Math.max(1, learnSeq.length)]
        practiceIdx++
        items.push({
          date,
          subjectId: ch?.subjectId ?? null,
          chapterId: null,
          title: ch ? `Practice quiz: ${ch.bookShort} ${ch.number} + weak areas` : 'Mixed practice quiz + weak areas',
          minutes: 40,
          type: 'practice',
        })
      }
    }
  }
  return items
}
