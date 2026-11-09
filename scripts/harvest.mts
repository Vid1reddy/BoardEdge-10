// Harvest agent-written deep seed files into pipeline checkpoints (one-time).
import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/z/my-project'
const CKPT = path.join(ROOT, 'data/seed/gen/checkpoints')
fs.mkdirSync(CKPT, { recursive: true })

const SOURCES: [string, string][] = [
  ['maths-deep-a.ts', 'maths'],
  ['maths-deep-b.ts', 'maths'],
  ['science-deep-a.ts', 'science'],
  ['science-deep-b.ts', 'science'],
  ['sst-deep-history.ts', 'history'],
  ['sst-deep-economics.ts', 'economics'],
  ['english-deep-ff-a.ts', 'english-ff'],
  ['english-deep-fp.ts', 'english-fp'],
]

let harvested = 0
const skipped: string[] = []
for (const [file, book] of SOURCES) {
  try {
    const mod = (await import(`${ROOT}/data/seed/${file}`)).default
    for (const ch of mod.chapters ?? []) {
      const dest = path.join(CKPT, `${book}-${ch.number}.json`)
      // basic sanity
      const ok =
        Array.isArray(ch.sections) && ch.sections.length >= 6 &&
        ch.sections.every((s: any) => (s.para || '').length > 60) &&
        Array.isArray(ch.mcqs) && ch.mcqs.length >= 10 &&
        ch.mcqs.every((q: any) => q.options?.length === 4 && q.answerIndex >= 0 && q.answerIndex <= 3) &&
        Array.isArray(ch.boardQuestions) && ch.boardQuestions.length >= 5 &&
        ch.boardQuestions.every((q: any) => (q.answer || '').length > 100)
      if (!ok) {
        skipped.push(`${book}-${ch.number} (quality)`)
        continue
      }
      if (fs.existsSync(dest)) {
        skipped.push(`${book}-${ch.number} (exists)`)
        continue
      }
      const clean = {
        number: ch.number,
        title: ch.title,
        summary: ch.summary,
        weightageMarks: ch.weightageMarks ?? 4,
        difficulty: ch.difficulty ?? 'medium',
        hotTopics: ch.hotTopics ?? [],
        sections: ch.sections,
        mcqs: ch.mcqs,
        boardQuestions: ch.boardQuestions,
      }
      fs.writeFileSync(dest, JSON.stringify(clean))
      harvested++
    }
  } catch (e: any) {
    console.log(`source ${file} failed: ${e.message}`)
  }
}
console.log(`harvested=${harvested} skipped=${skipped.length}`)
if (skipped.length) console.log(skipped.join(' | '))
