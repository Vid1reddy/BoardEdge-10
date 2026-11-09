export type SubjectInfo = {
  id: string
  name: string
  bookName: string
  color: string
  icon: string
  order: number
  weightageMarks: number
}

export type ChapterMeta = {
  id: string
  subjectId: string
  book: string
  number: number
  title: string
  summary: string
  weightageMarks: number
  difficulty: string
  status: string
  order: number
}

export type NoteSection = {
  heading: string
  para?: string
  points: string[]
  keyTerms: { term: string; meaning: string }[]
  trick: string
  examPointer: string
}

export type ChapterDetail = ChapterMeta & {
  hotTopics: string[]
  sections: NoteSection[]
}

export type QuizQuestionDTO = {
  id: string
  question: string
  options: string[]
  answerIndex: number
  explanation: string
  difficulty: string
  source?: 'seed' | 'ai'
}

export type ProbableQuestionDTO = {
  id: string
  question: string
  marks: number
  type: string
  probability: string
  answer: string
  source?: 'seed' | 'ai'
}

export type StudyItemDTO = {
  id: string
  date: string
  subjectId: string | null
  chapterId: string | null
  title: string
  minutes: number
  type: string
  done: boolean
}

export type SettingsDTO = {
  examDate: string
  dailyMinutes: number
}

export type MemoryDayDTO = {
  date: string
  label: string
  items: {
    id: string
    title: string
    minutes: number
    type: string
    done: boolean
    subjectId: string | null
    chapterId: string | null
  }[]
  doneCount: number
  totalCount: number
  minutesPlanned: number
  minutesDone: number
  quizCount: number
  quizCorrect: number
  quizTotalQs: number
  boardPracticed: number
}

export type MemoryDTO = {
  yesterday: MemoryDayDTO
  today: MemoryDayDTO
  tomorrow: MemoryDayDTO
  carryOver: number
}

export type AttemptDTO = {
  id: string
  chapterId: string | null
  subjectId: string | null
  total: number
  correct: number
  createdAt: string
}

export type StatsDTO = {
  examDate: string
  daysLeft: number
  streak: number
  chaptersTotal: number
  chaptersMastered: number
  chaptersLearning: number
  completionPct: number
  subjectProgress: { subjectId: string; total: number; mastered: number; learning: number; pct: number }[]
  todayTotal: number
  todayDone: number
  recentAttempts: AttemptDTO[]
  dailyMinutes: { date: string; minutes: number }[]
  attemptTrend: { correct: number; total: number }[]
}

export const CHAPTER_STATUSES = ['not-started', 'learning', 'revised', 'mastered'] as const

export function statusColor(status: string): string {
  switch (status) {
    case 'mastered':
      return 'text-emerald-400'
    case 'revised':
      return 'text-teal-400'
    case 'learning':
      return 'text-amber-400'
    default:
      return 'text-slate-500'
  }
}

export function subjectColorClasses(color: string): { text: string; bg: string; border: string; dot: string } {
  switch (color) {
    case 'amber':
      return { text: 'text-amber-300', bg: 'bg-amber-400/10', border: 'border-amber-400/30', dot: 'bg-amber-400' }
    case 'emerald':
      return { text: 'text-emerald-300', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', dot: 'bg-emerald-400' }
    case 'teal':
      return { text: 'text-teal-300', bg: 'bg-teal-400/10', border: 'border-teal-400/30', dot: 'bg-teal-400' }
    case 'fuchsia':
      return { text: 'text-fuchsia-300', bg: 'bg-fuchsia-400/10', border: 'border-fuchsia-400/30', dot: 'bg-fuchsia-400' }
    default:
      return { text: 'text-slate-300', bg: 'bg-slate-400/10', border: 'border-slate-400/30', dot: 'bg-slate-400' }
  }
}

// Short book label for chapter chips, e.g. "Geo 3", "His 1", "FF 12"
export function bookShort(book: string): string {
  if (book.startsWith('India and the Contemporary')) return 'His'
  if (book.startsWith('Contemporary India')) return 'Geo'
  if (book.startsWith('Democratic')) return 'Civ'
  if (book.startsWith('Understanding')) return 'Eco'
  if (book.startsWith('First Flight')) return 'FF'
  if (book.startsWith('Footprints')) return 'FP'
  if (book.startsWith('Mathematics')) return 'Math'
  if (book.startsWith('Science')) return 'Sci'
  return book.slice(0, 4)
}
