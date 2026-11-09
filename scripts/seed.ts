import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

// All content sources ship as TypeScript files under data/seed/ (validated with bun).
// Hand-written "fix" seeds come FIRST (dedupe keeps the first occurrence per chapter number),
// so the 31 corrected chapters shadow the older AI-generated deep seeds.
import fixHistoryC34 from '../data/seed/fixes/history-c34'
import fixHistoryC5 from '../data/seed/fixes/history-c5'
import fixGeoC1 from '../data/seed/fixes/geo-c1'
import fixGeoC2 from '../data/seed/fixes/geo-c2'
import fixGeoC3 from '../data/seed/fixes/geo-c3'
import fixGeoC4 from '../data/seed/fixes/geo-c4'
import fixGeoC5 from '../data/seed/fixes/geo-c5'
import fixCivicsC2 from '../data/seed/fixes/civics-c2'
import fixCivicsC3 from '../data/seed/fixes/civics-c3'
import fixCivicsC4 from '../data/seed/fixes/civics-c4'
import fixCivicsC5 from '../data/seed/fixes/civics-c5'
import fixEconomicsC25 from '../data/seed/fixes/economics-c25'
import fixMathsC1214 from '../data/seed/fixes/maths-c1214'
import fixScienceC57 from '../data/seed/fixes/science-c57'
import fixScienceC813 from '../data/seed/fixes/science-c813'
import fixEnglishFf from '../data/seed/fixes/english-ff'
import mathsDeepA from '../data/seed/gen/maths-deep-a'
import mathsDeepB from '../data/seed/gen/maths-deep-b'
import scienceDeepA from '../data/seed/gen/science-deep-a'
import scienceDeepB from '../data/seed/gen/science-deep-b'
import sstDeepHistory from '../data/seed/gen/sst-deep-history'
import sstDeepGeography from '../data/seed/gen/sst-deep-geography'
import sstDeepCivics from '../data/seed/gen/sst-deep-civics'
import sstDeepEconomics from '../data/seed/gen/sst-deep-economics'
import englishDeepFfA from '../data/seed/gen/english-deep-ff-a'
import englishDeepFfB from '../data/seed/gen/english-deep-ff-b'
import englishDeepFp from '../data/seed/gen/english-deep-fp'
import historySeed from '../data/seed/history'
import economicsSeed from '../data/seed/economics'
import geographyA from '../data/seed/geography-a'
import geographyB from '../data/seed/geography-b'
import civicsA from '../data/seed/civics-a'
import civicsB from '../data/seed/civics-b'
import scienceA from '../data/seed/science-a'
import scienceB from '../data/seed/science-b'
import scienceC from '../data/seed/science-c'
import mathsA from '../data/seed/maths-a'
import mathsB from '../data/seed/maths-b'
import mathsC from '../data/seed/maths-c'
import mathsD from '../data/seed/maths-d'
import englishA from '../data/seed/english-a'
import englishB from '../data/seed/english-b'
// Memorization paragraphs (one flowing para per section) for the 3 written subjects.
import parasHistory from '../data/seed/paras/history'
import parasGeography from '../data/seed/paras/geography'
import parasCivics from '../data/seed/paras/civics'
import parasEconomics from '../data/seed/paras/economics'
import parasScienceA from '../data/seed/paras/science-a'
import parasScienceB from '../data/seed/paras/science-b'
import parasScienceC from '../data/seed/paras/science-c'
import parasEnglishA from '../data/seed/paras/english-a'
import parasEnglishB from '../data/seed/paras/english-b'
import parasEnglishC from '../data/seed/paras/english-c'
import parasEnglishDE from '../data/seed/paras/english-de'

// key: "<chapterNumber>::<section heading>" -> paragraph
const PARAS: Record<string, string> = {
  ...parasHistory,
  ...parasGeography,
  ...parasCivics,
  ...parasEconomics,
  ...parasScienceA,
  ...parasScienceB,
  ...parasScienceC,
  ...parasEnglishA,
  ...parasEnglishB,
  ...parasEnglishC,
  ...parasEnglishDE,
}

type Section = {
  heading: string
  points: string[]
  keyTerms?: { term: string; meaning: string }[]
  trick?: string
  examPointer?: string
  para?: string
}

type ChapterSeed = {
  number: number
  title: string
  summary: string
  weightageMarks: number
  difficulty: string
  hotTopics: string[]
  sections: Section[]
  mcqs: { question: string; options: string[]; answerIndex: number; explanation: string; difficulty: string; pyq?: string }[]
  boardQuestions: { question: string; marks: number; type: string; probability: string; answer: string }[]
}

type SourceSeed = { code: string; name: string; bookName: string; weightageMarks: number; chapters: ChapterSeed[] }

type BookSpec = {
  key: string // prefix for chapter ids
  subjectId: string
  book: string
  bookOrder: number
  seeds: SourceSeed[]
}

const SUBJECTS = [
  { id: 'sst', name: 'Social Science', bookName: 'History • Geography • Civics • Economics', color: 'amber', icon: 'Globe2', order: 1, weightageMarks: 80 },
  { id: 'maths', name: 'Mathematics', bookName: 'Mathematics (NCERT Class 10)', color: 'emerald', icon: 'Sigma', order: 2, weightageMarks: 80 },
  { id: 'science', name: 'Science', bookName: 'Science (NCERT Class 10)', color: 'teal', icon: 'FlaskConical', order: 3, weightageMarks: 80 },
  { id: 'english', name: 'English', bookName: 'First Flight & Footprints Without Feet', color: 'fuchsia', icon: 'BookOpen', order: 4, weightageMarks: 80 },
]

const BOOKS: BookSpec[] = [
  { key: 'history', subjectId: 'sst', book: 'India and the Contemporary World II', bookOrder: 1, seeds: [fixHistoryC34 as unknown as SourceSeed, fixHistoryC5 as unknown as SourceSeed, sstDeepHistory as unknown as SourceSeed, historySeed as unknown as SourceSeed] },
  { key: 'geography', subjectId: 'sst', book: 'Contemporary India II', bookOrder: 2, seeds: [fixGeoC1 as unknown as SourceSeed, fixGeoC2 as unknown as SourceSeed, fixGeoC3 as unknown as SourceSeed, fixGeoC4 as unknown as SourceSeed, fixGeoC5 as unknown as SourceSeed, sstDeepGeography as unknown as SourceSeed, geographyA as unknown as SourceSeed, geographyB as unknown as SourceSeed] },
  { key: 'civics', subjectId: 'sst', book: 'Democratic Politics II', bookOrder: 3, seeds: [fixCivicsC2 as unknown as SourceSeed, fixCivicsC3 as unknown as SourceSeed, fixCivicsC4 as unknown as SourceSeed, fixCivicsC5 as unknown as SourceSeed, sstDeepCivics as unknown as SourceSeed, civicsA as unknown as SourceSeed, civicsB as unknown as SourceSeed] },
  { key: 'economics', subjectId: 'sst', book: 'Understanding Economic Development', bookOrder: 4, seeds: [fixEconomicsC25 as unknown as SourceSeed, sstDeepEconomics as unknown as SourceSeed, economicsSeed as unknown as SourceSeed] },
  { key: 'maths', subjectId: 'maths', book: 'Mathematics (NCERT Class 10)', bookOrder: 1, seeds: [fixMathsC1214, mathsDeepA, mathsDeepB, mathsA, mathsB, mathsC, mathsD] as unknown as SourceSeed[] },
  { key: 'science', subjectId: 'science', book: 'Science (NCERT Class 10)', bookOrder: 1, seeds: [fixScienceC57, fixScienceC813, scienceDeepA, scienceDeepB, scienceA, scienceB, scienceC] as unknown as SourceSeed[] },
  { key: 'english-ff', subjectId: 'english', book: 'First Flight', bookOrder: 1, seeds: [fixEnglishFf, englishDeepFfA, englishDeepFfB, englishA, englishB] as unknown as SourceSeed[] },
  { key: 'english-fp', subjectId: 'english', book: 'Footprints Without Feet', bookOrder: 2, seeds: [englishDeepFp] as unknown as SourceSeed[] },
]

async function main() {
  console.log('Seeding subjects...')
  for (const s of SUBJECTS) {
    await db.subject.upsert({
      where: { id: s.id },
      update: { name: s.name, bookName: s.bookName, color: s.color, icon: s.icon, order: s.order, weightageMarks: s.weightageMarks },
      create: s,
    })
  }

  // Preserve user progress: snapshot board-question "done" state (matched later by question text)
  // and keep studyItems + chapter status intact. Only quiz/probable questions are rebuilt.
  console.log('Snapshotting user progress...')
  const boardProgressSnapshot = await db.boardProgress.findMany({
    include: { chapter: { select: { id: true } } },
  })
  const pqDone = new Map<string, boolean>() // chapterId::questionText -> done
  const pqAll = await db.probableQuestion.findMany({ select: { id: true, chapterId: true, question: true } })
  for (const p of pqAll) {
    const bp = boardProgressSnapshot.find((b) => b.qId === p.id && b.chapterId === p.chapterId)
    if (bp) pqDone.set(`${p.chapterId}::${p.question}`, bp.done)
  }

  console.log('Rebuilding quiz and board questions...')
  await db.boardProgress.deleteMany({})
  await db.quizQuestion.deleteMany({})
  await db.probableQuestion.deleteMany({})

  let chapterCount = 0
  let updatedCount = 0
  let mcqCount = 0
  let pqCount = 0
  let pyqCount = 0
  let paraCount = 0
  let progressRestored = 0

  for (const spec of BOOKS) {
    // Merge part-files, drop any duplicate chapter numbers (keep first), sort by NCERT number.
    const byNumber = new Map<number, ChapterSeed>()
    for (const seed of spec.seeds) {
      for (const ch of seed.chapters) {
        if (!byNumber.has(ch.number)) byNumber.set(ch.number, ch)
      }
    }
    const chapters = [...byNumber.values()].sort((a, b) => a.number - b.number)

    for (const ch of chapters) {
      const id = `${spec.key}-${ch.number}`
      const sections = ch.sections.map((sec) => ({
        heading: sec.heading,
        para: sec.para ?? PARAS[`${ch.number}::${sec.heading}`] ?? PARAS[`${spec.key}-${ch.number}::${sec.heading}`] ?? '',
        points: sec.points,
        keyTerms: sec.keyTerms ?? [],
        trick: sec.trick ?? '',
        examPointer: sec.examPointer ?? '',
      }))
      const existing = await db.chapter.findUnique({ where: { id } })
      if (existing) {
        await db.chapter.update({
          where: { id },
          data: {
            subjectId: spec.subjectId,
            book: spec.book,
            number: ch.number,
            title: ch.title,
            summary: ch.summary,
            weightageMarks: ch.weightageMarks ?? 4,
            difficulty: ch.difficulty ?? 'medium',
            hotTopics: ch.hotTopics ?? [],
            sections,
            order: spec.bookOrder * 100 + ch.number,
            // status + lastRevisedAt preserved
          },
        })
        updatedCount++
      } else {
        await db.chapter.create({
          data: {
            id,
            subjectId: spec.subjectId,
            book: spec.book,
            number: ch.number,
            title: ch.title,
            summary: ch.summary,
            weightageMarks: ch.weightageMarks ?? 4,
            difficulty: ch.difficulty ?? 'medium',
            hotTopics: ch.hotTopics ?? [],
            sections,
            order: spec.bookOrder * 100 + ch.number,
          },
        })
      }
      chapterCount++
      paraCount += sections.filter((s) => s.para).length
      if (ch.mcqs?.length) {
        await db.quizQuestion.createMany({
          data: ch.mcqs.map((m) => ({
            chapterId: id,
            question: String(m.question ?? ''),
            options: Array.isArray(m.options) ? m.options.map((o: unknown) => String(o)) : [],
            answerIndex: Number(m.answerIndex) || 0,
            explanation: String(m.explanation ?? ''),
            difficulty: typeof m.difficulty === 'string' ? m.difficulty : 'medium',
            pyq: typeof m.pyq === 'string' && m.pyq.trim() && !/^(true|false)$/i.test(m.pyq) ? m.pyq : null,
          })),
        })
        mcqCount += ch.mcqs.length
        pyqCount += ch.mcqs.filter((m) => m.pyq).length
      }
      if (ch.boardQuestions?.length) {
        const created = await db.probableQuestion.createManyAndReturn({
          data: ch.boardQuestions.map((b) => ({
            chapterId: id,
            question: b.question,
            marks: b.marks,
            type: b.type,
            probability: b.probability ?? 'high',
            answer: b.answer,
          })),
        })
        pqCount += ch.boardQuestions.length
        // Restore board-question "done" flags matched by question text.
        for (const q of created) {
          const done = pqDone.get(`${id}::${q.question}`)
          if (done) {
            await db.boardProgress.create({ data: { chapterId: id, qId: q.id, done } })
            progressRestored++
          }
        }
      }
    }
    console.log(`  ${spec.key}: ${chapters.length} chapters`)
  }

  await db.settings.upsert({
    where: { id: 'main' },
    update: {},
    create: { id: 'main', examDate: '2027-02-15', dailyMinutes: 90 },
  })

  console.log(`DONE: ${chapterCount} chapters (${updatedCount} updated in place), ${mcqCount} MCQs (${pyqCount} with PYQ tags), ${pqCount} board questions, ${paraCount} memorization paragraphs, ${progressRestored} board-progress entries restored`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
