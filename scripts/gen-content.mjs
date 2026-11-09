// Overnight content generator: builds ULTRA-DEEP NCERT chapter seeds via the local LLM SDK.
// - One LLM call per chapter, strict JSON, validated + auto-retried (up to 4 attempts).
// - Checkpoint per chapter in data/seed/gen/checkpoints/ -> safe resume on rerun.
// - Emits TS seed files into data/seed/gen/ at the end (and incrementally).
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/home/z/my-project'
const CKPT_DIR = path.join(ROOT, 'data/seed/gen/checkpoints')
const OUT_DIR = path.join(ROOT, 'data/seed/gen')
const LOG = path.join(ROOT, 'scripts/gen-content.log')
fs.mkdirSync(CKPT_DIR, { recursive: true })

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`
  console.log(line)
  fs.appendFileSync(LOG, line + '\n')
}

// ---------- chapter specs ----------
// depth profiles: [sectionsMin, sectionsMax, mcqsMin, mcqsMax, bqMin, bqMax]
const PROFILES = {
  maths: { minSec: 9, maxSec: 11, minMcq: 16, maxMcq: 20, minBq: 8, maxBq: 10 },
  science: { minSec: 9, maxSec: 11, minMcq: 16, maxMcq: 20, minBq: 8, maxBq: 10 },
  history: { minSec: 11, maxSec: 12, minMcq: 18, maxMcq: 20, minBq: 12, maxBq: 14 },
  geography: { minSec: 9, maxSec: 11, minMcq: 16, maxMcq: 20, minBq: 8, maxBq: 10 },
  civics: { minSec: 9, maxSec: 11, minMcq: 16, maxMcq: 20, minBq: 8, maxBq: 10 },
  economics: { minSec: 10, maxSec: 11, minMcq: 18, maxMcq: 20, minBq: 11, maxBq: 13 },
  'english-prose': { minSec: 7, maxSec: 9, minMcq: 14, maxMcq: 16, minBq: 7, maxBq: 8 },
  'english-poem': { minSec: 6, maxSec: 7, minMcq: 12, maxMcq: 14, minBq: 6, maxBq: 7 },
  'english-fp': { minSec: 7, maxSec: 9, minMcq: 14, maxMcq: 16, minBq: 7, maxBq: 8 },
}

const BOOKS = {
  maths: { code: 'maths', name: 'Mathematics', bookName: 'Mathematics (NCERT Class 10)', weightage: 80, profile: 'maths' },
  science: { code: 'science', name: 'Science', bookName: 'Science (NCERT Class 10)', weightage: 80, profile: 'science' },
  history: { code: 'history', name: 'History', bookName: 'India and the Contemporary World II', weightage: 20, profile: 'history' },
  geography: { code: 'geography', name: 'Geography', bookName: 'Contemporary India II', weightage: 20, profile: 'geography' },
  civics: { code: 'civics', name: 'Civics', bookName: 'Democratic Politics II', weightage: 20, profile: 'civics' },
  economics: { code: 'economics', name: 'Economics', bookName: 'Understanding Economic Development', weightage: 20, profile: 'economics' },
  'english-ff': { code: 'english', name: 'English', bookName: 'First Flight', weightage: 80, profile: null },
  'english-fp': { code: 'english', name: 'English', bookName: 'Footprints Without Feet', weightage: 80, profile: 'english-fp' },
}

// [book, number, title, profile?, weightage?, difficulty?]
const CHAPTERS = [
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => ['maths', n, null]),
  ...[8, 9, 10, 11, 12, 13, 14].map((n) => ['maths', n, null]),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => ['science', n, null]),
  ...[1, 2, 3, 4, 5].map((n) => ['history', n, null]),
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => ['geography', n, null]),
  ...[1, 2, 3, 4, 5].map((n) => ['civics', n, null]),
  ...[1, 2, 3, 4, 5].map((n) => ['economics', n, null]),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ['english-ff', n, null, 'english-prose']),
  ...['Dust of Snow', 'Fire and Ice', 'A Tiger in the Zoo', 'How to Tell Wild Animals', 'The Ball Poem', 'Amanda!', 'The Trees', 'Fog', 'The Tale of Custard the Dragon', 'For Anne Gregory'].map((t, i) => ['english-ff', 10 + i, t, 'english-poem']),
  ...['A Triumph of Surgery', "The Thief's Story", 'The Midnight Visitor', 'A Question of Trust', 'Footprints without Feet', 'The Making of a Scientist', 'The Necklace', 'Bholi', 'The Book That Saved the Earth'].map((t, i) => ['english-fp', i + 1, t]),
]

// ---------- extract weightage/difficulty/title from existing seeds ----------
function extractMeta(file) {
  const text = fs.readFileSync(path.join(ROOT, 'data/seed', file), 'utf8')
  const out = []
  const re = /"number":\s*(\d+)\s*,\s*"title":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"summary":\s*"[\s\S]*?"\s*,\s*"weightageMarks":\s*(\d+)\s*,\s*"difficulty":\s*"(\w+)"/g
  let m
  while ((m = re.exec(text))) out.push({ number: Number(m[1]), title: JSON.parse(`"${m[2]}"`), weightageMarks: Number(m[3]), difficulty: m[4] })
  return out
}
const META = {}
for (const f of ['maths-a.ts', 'maths-b.ts', 'maths-c.ts', 'maths-d.ts', 'science-a.ts', 'science-b.ts', 'science-c.ts', 'history.ts', 'economics.ts', 'geography-a.ts', 'geography-b.ts', 'civics-a.ts', 'civics-b.ts', 'english-a.ts', 'english-b.ts', 'english-c.ts', 'english-d.ts', 'english-e.ts']) {
  try {
    for (const it of extractMeta(f)) {
      const key = `${it.number}::${it.title}`
      if (!META[key]) META[key] = it
    }
  } catch (e) {
    log(`meta extract failed for ${f}: ${e.message}`)
  }
}
const TITLES = {}
for (const [file, book] of [['maths-a.ts', 'maths'], ['maths-b.ts', 'maths'], ['maths-c.ts', 'maths'], ['maths-d.ts', 'maths'], ['science-a.ts', 'science'], ['science-b.ts', 'science'], ['science-c.ts', 'science'], ['history.ts', 'history'], ['geography-a.ts', 'geography'], ['geography-b.ts', 'geography'], ['civics-a.ts', 'civics'], ['civics-b.ts', 'civics'], ['economics.ts', 'economics'], ['english-a.ts', 'english-ff'], ['english-b.ts', 'english-ff'], ['english-d.ts', 'english-fp'], ['english-e.ts', 'english-fp']]) {
  try {
    for (const it of extractMeta(file)) {
      if (!TITLES[`${book}::${it.number}`] && it.number <= (book === 'english-fp' ? 9 : 40)) TITLES[`${book}::${it.number}`] = it
    }
  } catch {}
}
log(`meta extracted: ${Object.keys(META).length} entries`)

function metaFor(book, number, title) {
  if (title) {
    for (const k of Object.keys(META)) if (META[k].title === title) return META[k]
  }
  return TITLES[`${book}::${number}`] ?? null
}

// ---------- prompt ----------
const SCHEMA = `{
  "number": <int>,
  "title": "<exact title given>",
  "summary": "<120-180 word summary>",
  "weightageMarks": <int>,
  "difficulty": "easy|medium|hard",
  "hotTopics": ["8-12 strings"],
  "sections": [
    { "heading": "<section heading>",
      "para": "<flowing 90-160 word exam-ready memorization paragraph>",
      "points": ["6-10 complete-sentence bullets, 15-40 words each"],
      "keyTerms": [{ "term": "...", "meaning": "..." }],
      "trick": "<concrete memory mnemonic, 1-2 sentences>",
      "examPointer": "<how CBSE asks this + typical marks>" }
  ],
  "mcqs": [
    { "question": "...", "options": ["exactly 4 strings"], "answerIndex": 0, "explanation": "1-3 sentences why the answer is right", "difficulty": "easy|medium|hard", "pyq": "CBSE 2019 (optional, omit if none)" }
  ],
  "boardQuestions": [
    { "question": "...", "marks": 3, "type": "very-short|short|long|numerical|case-based", "probability": "high|very-high", "answer": "<full self-contained model answer; long answers 200-350 words>" }
  ]
}`

const HINTS = {
  maths: 'Accuracy: Fundamental Theorem of Arithmetic, HCF/LCM via prime factorisation, irrationality proofs, zeroes-coefficients relation, consistency conditions for linear systems, discriminant and nature of roots, AP formulas, similarity criteria AA/SAS/SSS + BPT + Pythagoras, distance/section formula, trigonometric ratios and identities (sin^2 A + cos^2 A = 1), heights and distances, tangent perpendicular to radius and equal tangents from an external point, sector and segment areas, surface areas and volumes of combinations of solids, mean (direct/assumed-mean/step-deviation), median, mode, empirical relation 3 median = 2 mean + mode, classical probability and complementary events. Use plain notation x^2, sqrt(2), 22/7 or pi. Numericals must show every step.',
  science: 'Accuracy: reaction types and redox, corrosion, rancidity; pH scale, baking soda, washing soda, bleaching powder, plaster of Paris, water of crystallisation; reactivity series, extraction metallurgy, thermite, corrosion prevention, amphoteric oxides; covalent bonding, homologous series, ethanol and ethanoic acid, esterification, soaps and detergents; nutrition, respiration, transportation (heart, xylem, phloem), excretion (nephron); neuron, reflex arc, brain, endocrine hormones; pollination, fertilisation, human reproductive system, contraception. Write chemical formulas as plain ASCII like H2SO4, CO2 and use -> for reactions. Numericals (V = IR, mirror/lens formula, power in dioptres, H = I^2Rt) must show every step with units.',
  history: 'Accuracy: Frederic Sorrieu 1848, French Revolution and nationalism, Napoleonic Code, German and Italian unification (Bismarck, Cavour, Garibaldi, Mazzini), romanticism; Satyagraha, Rowlatt Act, Jallianwala Bagh, Non-Cooperation and Civil Disobedience, Salt March, Bharat Mata imagery; Silk Routes, Great Depression, Bretton Woods, Rinderpest; proto-industrialisation, spinning jenny, hand labour versus machines; Gutenberg, print revolution in Europe and India, censorship, novels.',
  geography: 'Accuracy: soil types, erosion and conservation; Project Tiger, Chipko movement; multipurpose projects (Bhakra Nangal, Hirakud, Nagarjuna Sagar), rainwater harvesting; rabi/kharif/zaid crops, Green Revolution, institutional reforms; ferrous and non-ferrous and non-metallic minerals, conventional and non-conventional energy; industry classification, cotton textiles, iron and steel (Chhotanagpur belt), pollution control; roadways, railways, Golden Quadrilateral, pipelines, major seaports, international trade.',
  civics: 'Accuracy: Belgium and Sri Lanka case studies, majoritarianism, prudential versus moral reasons, forms of power sharing; coming-together versus holding-together federations, decentralisation after 1992, Union/State/Concurrent lists; sexual division of labour, feminist movements, communalism, secularism, caste in politics; challenges to political parties (lack of internal democracy, dynastic succession, money and muscle power), national and state party recognition; accountable, responsive and legitimate government, economic growth and inequality, dignity and freedom.',
  economics: 'Accuracy: income and other development criteria (per capita income, Human Development Report, IMR, literacy, net attendance ratio), Kerala versus Haryana comparisons, sustainability of development; primary/secondary/tertiary sectors, disguised unemployment, organised versus unorganised sector, shifting GDP shares, MGNREGA 2005; formal versus informal credit, Self Help Groups, terms of credit; MNCs, FDI, liberalisation 1991, fair globalisation, WTO; consumer movement, COPRA 1986, District/State/National consumer commissions, RTI 2005, ISI/Agmark/Hallmark marks.',
  'english-prose': 'Accuracy: Lencho and the postmaster (A Letter to God); Mandela on courage and twin obligations (Nelson Mandela: Long Walk to Freedom); His First Flight and The Black Aeroplane (Two Stories about Flying); Anne Frank and Kitty, Keesing (From the Diary of Anne Frank); A Baker from Goa, Coorg, Tea from Assam (Glimpses of India); Mijbil the otter (Mijbil the Otter); Valli (Madam Rides the Bus); Kisa Gotami and the mustard seed (The Sermon at Benares); Lomov, Natalya, Chubukov quarrel (The Proposal, a play).',
  'english-poem': 'Accuracy per poem: Dust of Snow (crow, hemlock tree, changed mood); Fire and Ice (desire vs hatred); A Tiger in the Zoo (cage vs freedom); How to Tell Wild Animals (humorous identification of Asian lion, Bengal tiger, leopard, bear, crocodile, hyena, chameleon); The Ball Poem (loss and growing up, epistemology of loss); Amanda! (nagging and escapist fantasy); The Trees (trees leaving house, freedom); Fog (fog arrives like a cat); The Tale of Custard the Dragon (Belinda, Ink, Blink, Mustard, Custard the real hero); For Anne Gregory (inner vs outer beauty, young men, God). Quote short lines (under 15 words) for extract-based items. Cover: about the poet, stanza-wise explanation, theme and central idea, poetic devices with examples, word meanings, message, and how CBSE asks it.',
  'english-fp': "Accuracy: Tricki the overfed dog and Mrs Pumphrey (A Triumph of Surgery); Hari Singh's reformation through Anil (The Thief's Story); Ausable's invented balcony outwitting Max (The Midnight Visitor); Horace Danby outwitted by the lady in red (A Question of Trust); Griffin the invisible scientist (Footprints without Feet); Richard Ebright's butterflies and science fairs (The Making of a Scientist); Matilda Loisel's vanity and ten years of debt (The Necklace); Bholi/Sulekha transformed by her teacher (Bholi); the Mother Goose book saving Earth from Martians (The Book That Saved the Earth).",
}

function buildPromptA(book, number, title, profile) {
  const b = BOOKS[book]
  const p = PROFILES[profile]
  const meta = metaFor(book, number, title)
  const w = meta?.weightageMarks ?? 4
  const d = meta?.difficulty ?? 'medium'
  const kind = book === 'english-ff' && number >= 10 ? 'poem' : book === 'english-ff' ? 'prose chapter' : book === 'english-fp' ? 'supplementary story' : 'textbook chapter'
  return `Write ULTRA-DEEP CBSE Class 10 board-exam STUDY NOTES for ONE NCERT chapter, as raw JSON only.

Book: ${b.bookName} (${b.name})
Chapter number: ${number}
Chapter title: ${title ?? '<use the official NCERT Class 10 title for this chapter number>'}
Unit type: ${kind}
Depth: ${p.minSec}-${p.maxSec} sections.
FACTUAL ACCURACY HINTS (must follow): ${HINTS[profile]}

RULES:
- Output ONE JSON object exactly like this, nothing else (no markdown fences, no commentary):
{
  "summary": "<120-180 word chapter summary>",
  "hotTopics": ["8-12 strings"],
  "sections": [
    { "heading": "<section heading>",
      "para": "<flowing 90-160 word exam-ready memorization paragraph>",
      "points": ["6-10 complete-sentence bullets, 15-40 words each"],
      "keyTerms": [{ "term": "...", "meaning": "..." }],
      "trick": "<concrete memory mnemonic, 1-2 sentences>",
      "examPointer": "<how CBSE asks this + typical marks>" }
  ]
}
- Every section needs "para" (a flowing 90-160 word connected paragraph students can memorise and recite), 4-10 "points", 4-8 "keyTerms", a "trick" mnemonic, and an "examPointer".
- Plain text only: no markdown symbols, no bullet characters, no emoji, no unicode superscripts or subscripts (write x^2, sqrt(2), H2SO4, ->).
- JSON string rule: NEVER use a double-quote character inside any string value; when quoting text inside a string, use single quotes instead.
- Content must be strictly accurate to the current rationalised NCERT Class 10 syllabus.`
}

function buildPromptB(book, number, title, profile) {
  const p = PROFILES[profile]
  const meta = metaFor(book, number, title)
  const kind = book === 'english-ff' && number >= 10 ? 'poem' : book === 'english-ff' ? 'prose chapter' : book === 'english-fp' ? 'supplementary story' : 'textbook chapter'
  return `Write CBSE Class 10 board-exam EXAM QUESTIONS for ONE NCERT chapter, as raw JSON only.

Chapter: number ${number}, title "${title ?? '<official NCERT title>'}" (${kind}) from ${BOOKS[book].bookName}.
Depth: ${p.minMcq}-${p.maxMcq} MCQs and ${p.minBq}-${p.maxBq} board questions.
FACTUAL ACCURACY HINTS (must follow): ${HINTS[profile]}

RULES:
- Output ONE JSON object exactly like this, nothing else (no markdown fences, no commentary):
{
  "mcqs": [
    { "question": "...", "options": ["exactly 4 strings"], "answerIndex": 0, "explanation": "1-3 sentences why the answer is right", "difficulty": "easy|medium|hard", "pyq": "CBSE 2019 (optional, omit if none)" }
  ],
  "boardQuestions": [
    { "question": "...", "marks": 3, "type": "very-short|short|long|numerical|case-based", "probability": "high|very-high", "answer": "<full self-contained model answer; long answers 200-350 words>" }
  ]
}
- Every MCQ: exactly 4 distinct options, "answerIndex" 0-3 pointing at the correct option, a real explanation. Vary difficulty ~30% easy, 45% medium, 25% hard. Tag about 25% with "pyq" like "CBSE 2019" or "CBSE 2023 Delhi" (omit the field otherwise).
- Every boardQuestion: "marks" 1-5, sensible "type", "probability" high or very-high, and a complete model answer a student can memorise directly (long answers 200-350 words).
- Questions must cover the WHOLE chapter span (definitions, applications, numericals/source-based and case-style where the subject allows).
- Plain text only: no markdown symbols, no bullet characters, no emoji, no unicode superscripts or subscripts (write x^2, sqrt(2), H2SO4, ->).
- JSON string rule: NEVER use a double-quote character inside any string value; when quoting text inside a string, use single quotes instead.`
}

// ---------- validation ----------
// Reject emoji only; arrows (->) and math symbols are legitimate study content.
function badStrings(v) {
  if (typeof v === 'string') {
    if (/[\u2600-\u27BF\uFE0F]|\p{Extended_Pictographic}/u.test(v)) return 'emoji'
    return null
  }
  if (Array.isArray(v)) for (const x of v) { const e = badStrings(x); if (e) return e }
  if (v && typeof v === 'object') for (const x of Object.values(v)) { const e = badStrings(x); if (e) return e }
  return null
}

// Strip markdown artifacts in place instead of rejecting content for them.
function normalizeStrings(v) {
  if (typeof v === 'string') return v.replace(/\*\*/g, '').replace(/^#{1,6}\s+/gm, '').replace(/^•\s*/gm, '')
  if (Array.isArray(v)) return v.map(normalizeStrings)
  if (v && typeof v === 'object') {
    const out = {}
    for (const [k, x] of Object.entries(v)) out[k] = normalizeStrings(x)
    return out
  }
  return v
}

function validateSectionsPart(obj, profile) {
  const p = PROFILES[profile]
  const errors = []
  if (typeof obj.summary !== 'string' || obj.summary.length < 300) errors.push('summary too short (<300 chars)')
  if (!Array.isArray(obj.hotTopics) || obj.hotTopics.length < 5) errors.push('hotTopics < 5')
  if (!Array.isArray(obj.sections) || obj.sections.length < p.minSec - 1) errors.push(`sections ${obj.sections?.length} < ${p.minSec - 1}`)
  for (const s of obj.sections ?? []) {
    if (!s.heading) errors.push('section missing heading')
    if (typeof s.para !== 'string' || s.para.length < 300) errors.push(`section '${s.heading}' para too short`)
    if (!Array.isArray(s.points) || s.points.length < 4) errors.push(`section '${s.heading}' points < 4`)
    if (!Array.isArray(s.keyTerms) || s.keyTerms.length < 3) errors.push(`section '${s.heading}' keyTerms < 3`)
    if (typeof s.trick !== 'string' || s.trick.length < 15) errors.push(`section '${s.heading}' trick too short`)
    if (typeof s.examPointer !== 'string' || s.examPointer.length < 15) errors.push(`section '${s.heading}' examPointer too short`)
  }
  return errors
}

function validateQuestionsPart(obj, profile) {
  const p = PROFILES[profile]
  const errors = []
  if (!Array.isArray(obj.mcqs) || obj.mcqs.length < p.minMcq - 2) errors.push(`mcqs ${obj.mcqs?.length} < ${p.minMcq - 2}`)
  for (const q of obj.mcqs ?? []) {
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push('mcq options != 4')
    else if (new Set(q.options.map((o) => String(o).trim().toLowerCase())).size !== 4) errors.push('mcq duplicate options')
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) errors.push('mcq answerIndex invalid')
    if (typeof q.explanation !== 'string' || q.explanation.length < 20) errors.push('mcq explanation too short')
  }
  if (!Array.isArray(obj.boardQuestions) || obj.boardQuestions.length < p.minBq - 1) errors.push(`boardQuestions ${obj.boardQuestions?.length} < ${p.minBq - 1}`)
  for (const q of obj.boardQuestions ?? []) {
    if (typeof q.answer !== 'string' || q.answer.length < 120) errors.push('bq answer too short')
  }
  return errors
}

function validate(obj, book, number, title, profile) {
  const p = PROFILES[profile]
  const errors = []
  const b = BOOKS[book]
  if (!obj || typeof obj !== 'object') return ['not an object']
  if (obj.number !== number) obj.number = number
  if (typeof obj.title !== 'string' || obj.title.length < 2) errors.push('title missing')
  else if (title && obj.title.trim() !== title) obj.title = title
  if (typeof obj.summary !== 'string' || obj.summary.length < 300) errors.push('summary too short (<300 chars)')
  if (!Array.isArray(obj.hotTopics) || obj.hotTopics.length < 5) errors.push('hotTopics < 5')
  obj.weightageMarks = metaFor(book, number, title)?.weightageMarks ?? obj.weightageMarks ?? 4
  obj.difficulty = metaFor(book, number, title)?.difficulty ?? obj.difficulty ?? 'medium'
  obj.bookName = b.bookName
  obj.code = b.code
  if (!Array.isArray(obj.sections) || obj.sections.length < p.minSec - 1) errors.push(`sections ${obj.sections?.length} < ${p.minSec - 1}`)
  for (const s of obj.sections ?? []) {
    if (!s.heading) errors.push('section missing heading')
    if (typeof s.para !== 'string' || s.para.length < 300) errors.push(`section '${s.heading}' para too short`)
    if (!Array.isArray(s.points) || s.points.length < 4) errors.push(`section '${s.heading}' points < 4`)
    if (!Array.isArray(s.keyTerms) || s.keyTerms.length < 3) errors.push(`section '${s.heading}' keyTerms < 3`)
    if (typeof s.trick !== 'string' || s.trick.length < 15) errors.push(`section '${s.heading}' trick too short`)
    if (typeof s.examPointer !== 'string' || s.examPointer.length < 15) errors.push(`section '${s.heading}' examPointer too short`)
  }
  if (!Array.isArray(obj.mcqs) || obj.mcqs.length < p.minMcq - 2) errors.push(`mcqs ${obj.mcqs?.length} < ${p.minMcq - 2}`)
  for (const q of obj.mcqs ?? []) {
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push('mcq options != 4')
    else if (new Set(q.options.map((o) => String(o).trim().toLowerCase())).size !== 4) errors.push('mcq duplicate options')
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) errors.push('mcq answerIndex invalid')
    if (typeof q.explanation !== 'string' || q.explanation.length < 20) errors.push('mcq explanation too short')
    if (!['easy', 'medium', 'hard'].includes(q.difficulty)) q.difficulty = 'medium'
  }
  if (!Array.isArray(obj.boardQuestions) || obj.boardQuestions.length < p.minBq - 1) errors.push(`boardQuestions ${obj.boardQuestions?.length} < ${p.minBq - 1}`)
  for (const q of obj.boardQuestions ?? []) {
    if (typeof q.answer !== 'string' || q.answer.length < 120) errors.push('bq answer too short')
    if (typeof q.marks !== 'number' || q.marks < 1 || q.marks > 5) q.marks = 3
    if (!['high', 'very-high'].includes(q.probability)) q.probability = 'high'
    if (!q.type) q.type = 'short'
  }
  const junk = badStrings(obj)
  if (junk) errors.push(`junk characters: ${junk}`)
  return errors
}

// ---------- generation ----------
const zai = await ZAI.create()

async function callLLM(messages) {
  const completion = await zai.chat.completions.create({ messages, thinking: { type: 'disabled' }, max_tokens: 16000 })
  let text = completion.choices[0]?.message?.content ?? ''
  text = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1) throw new Error('no JSON object found')
  let jsonText = text.slice(start, end > -1 ? end + 1 : text.length)
  try {
    return JSON.parse(jsonText)
  } catch {
    return salvageParse(jsonText)
  }
}

// Repair broken/truncated JSON by cutting back to the last structural boundary and closing open brackets.
function closeStructure(s) {
  let inStr = false
  let esc = false
  const stack = []
  for (const ch of s) {
    if (esc) { esc = false; continue }
    if (inStr) { if (ch === '\\') esc = true; else if (ch === '"') inStr = false; continue }
    if (ch === '"') inStr = true
    else if (ch === '{') stack.push('}')
    else if (ch === '[') stack.push(']')
  }
  return s + stack.reverse().join('')
}

function salvageParse(text) {
  try {
    return JSON.parse(text)
  } catch {}
  let cut = text.length
  while (cut > 200) {
    const idx = Math.max(text.lastIndexOf('}', cut - 1), text.lastIndexOf(']', cut - 1))
    if (idx < 200) break
    const cand = closeStructure(text.slice(0, idx + 1).replace(/,\s*$/, ''))
    try {
      return JSON.parse(cand)
    } catch {}
    cut = idx
  }
  throw new Error('unparseable JSON even after salvage')
}

async function genPart(baseMessages, validateFn, profile) {
  let lastErr = ''
  for (let attempt = 1; attempt <= 6; attempt++) {
    try {
      const messages = [...baseMessages]
      if (attempt > 1) {
        messages.push({ role: 'user', content: `Your previous attempt had these validation errors: ${lastErr}. Fix ALL of them and output the full corrected JSON object again. Raw JSON only.` })
      }
      const obj = normalizeStrings(await callLLM(messages))
      const errs = validateFn(obj, profile)
      if (errs.length > 0) {
        lastErr = errs.slice(0, 6).join('; ')
        log(`    attempt ${attempt}: INVALID - ${lastErr}`)
        await new Promise((r) => setTimeout(r, 1500))
        continue
      }
      return obj
    } catch (e) {
      lastErr = e.message
      const is429 = /429|too many/i.test(lastErr)
      log(`    attempt ${attempt} ERROR: ${lastErr.slice(0, 120)}`)
      await new Promise((r) => setTimeout(r, is429 ? 12000 * attempt : 2000 * attempt))
    }
  }
  throw new Error(lastErr || 'all attempts failed')
}

async function genChapter(book, number, title, profile) {
  const ckpt = path.join(CKPT_DIR, `${book}-${number}.json`)
  if (fs.existsSync(ckpt)) {
    try {
      const cached = JSON.parse(fs.readFileSync(ckpt, 'utf8'))
      const errs = validate(cached, book, number, title, profile)
      if (errs.length === 0) return { book, number, ok: true, cached: true }
      log(`checkpoint ${book}-${number} invalid (${errs.slice(0, 2).join('; ')}) - regenerating`)
    } catch {
      log(`checkpoint ${book}-${number} unparseable - regenerating`)
    }
  }
  const meta = metaFor(book, number, title)
  const sys = { role: 'assistant', content: 'You are an expert CBSE Class 10 NCERT teacher and exam content author. You output ONLY raw valid JSON. No markdown, no code fences, no commentary.' }
  const partA = await genPart([sys, { role: 'user', content: buildPromptA(book, number, title, profile) }], validateSectionsPart, profile)
  log(`  ${book}-${number}: notes OK (${partA.sections.length} sections)`)
  const partB = await genPart([sys, { role: 'user', content: buildPromptB(book, number, title, profile) }], validateQuestionsPart, profile)
  log(`  ${book}-${number}: questions OK (${partB.mcqs.length} mcqs, ${partB.boardQuestions.length} bqs)`)
  const chapter = {
    number,
    title: title ?? meta?.title ?? partA.title ?? `Chapter ${number}`,
    summary: partA.summary,
    weightageMarks: meta?.weightageMarks ?? 4,
    difficulty: meta?.difficulty ?? 'medium',
    hotTopics: partA.hotTopics,
    sections: partA.sections,
    mcqs: partB.mcqs,
    boardQuestions: partB.boardQuestions,
  }
  const errs = validate(chapter, book, number, title, profile)
  if (errs.length > 0) throw new Error(`final validate: ${errs.slice(0, 6).join('; ')}`)
  fs.writeFileSync(ckpt, JSON.stringify(chapter))
  return { book, number, ok: true }
}

// pool of 3 concurrent chapter generations
async function runPool(items, worker, size) {
  const queue = [...items]
  const results = []
  async function runner() {
    while (queue.length) {
      const it = queue.shift()
      results.push(await worker(it))
    }
  }
  await Promise.all(Array.from({ length: size }, runner))
  return results
}

log(`generating ${CHAPTERS.length} chapters...`)
const ONLY = process.env.GEN_ONLY // e.g. "english-ff:17"
const TODO = ONLY ? CHAPTERS.filter(([b, n]) => ONLY === `${b}:${n}`) : CHAPTERS
const BUDGET = Number(process.env.GEN_BUDGET ?? 0) // seconds; graceful stop for chunked runs
const t0 = Date.now()
let stopped = 0
const results = await runPool(TODO, async ([book, number, title, profile]) => {
  if (BUDGET && (Date.now() - t0) / 1000 > BUDGET) {
    stopped++
    return { book, number, ok: true, cached: true, skipped: true }
  }
  const prof = profile ?? BOOKS[book].profile
  log(`start ${book}-${number}`)
  try {
    const r = await genChapter(book, number, title, prof)
    log(`done  ${book}-${number} ok=${r.ok}${r.cached ? ' (cached)' : ''}`)
    return r
  } catch (e) {
    log(`done  ${book}-${number} FAILED: ${String(e.message).slice(0, 140)}`)
    return { book, number, ok: false, error: String(e.message).slice(0, 140) }
  }
}, 3)

const failed = results.filter((r) => !r.ok)
log(`generation finished in ${Math.round((Date.now() - t0) / 1000)}s; ok=${results.length - failed.length} failed=${failed.length}${stopped ? ` deferred=${stopped}` : ''}`)
if (failed.length) log(`FAILED: ${failed.map((f) => `${f.book}-${f.number} (${f.error})`).join(' | ')}`)

// ---------- assemble output files ----------
const FILES = [
  { file: 'maths-deep-a.ts', book: 'maths', numbers: [1, 2, 3, 4, 5, 6, 7] },
  { file: 'maths-deep-b.ts', book: 'maths', numbers: [8, 9, 10, 11, 12, 13, 14] },
  { file: 'science-deep-a.ts', book: 'science', numbers: [1, 2, 3, 4, 5, 6, 7] },
  { file: 'science-deep-b.ts', book: 'science', numbers: [8, 9, 10, 11, 12, 13] },
  { file: 'sst-deep-history.ts', book: 'history', numbers: [1, 2, 3, 4, 5] },
  { file: 'sst-deep-geography.ts', book: 'geography', numbers: [1, 2, 3, 4, 5, 6, 7] },
  { file: 'sst-deep-civics.ts', book: 'civics', numbers: [1, 2, 3, 4, 5] },
  { file: 'sst-deep-economics.ts', book: 'economics', numbers: [1, 2, 3, 4, 5] },
  { file: 'english-deep-ff-a.ts', book: 'english-ff', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { file: 'english-deep-ff-b.ts', book: 'english-ff', numbers: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { file: 'english-deep-fp.ts', book: 'english-fp', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
]

const missing = []
for (const spec of FILES) {
  const chapters = []
  for (const n of spec.numbers) {
    const ckpt = path.join(CKPT_DIR, `${spec.book}-${n}.json`)
    if (fs.existsSync(ckpt)) {
      try {
        chapters.push(JSON.parse(fs.readFileSync(ckpt, 'utf8')))
      } catch {
        missing.push(`${spec.book}-${n}`)
      }
    } else {
      missing.push(`${spec.book}-${n}`)
    }
  }
  if (chapters.length > 0) {
    const b = BOOKS[spec.book]
    const data = { code: b.code, name: b.name, bookName: b.bookName, weightageMarks: b.weightage, chapters }
    const ts = `// AUTO-GENERATED deep seed (AI pipeline). Validated at generation time.\nexport default ${JSON.stringify(data, null, 1)}\n`
    fs.writeFileSync(path.join(OUT_DIR, spec.file), ts)
    log(`wrote ${spec.file}: ${chapters.length} chapters`)
  } else {
    log(`SKIPPED ${spec.file}: no chapters`)
  }
}
fs.writeFileSync(path.join(OUT_DIR, 'gen-summary.json'), JSON.stringify({ ok: results.length - failed.length, failed: failed.map((f) => `${f.book}-${f.number}`), missing }, null, 2))
log(`PIPELINE COMPLETE. missing-chapters: ${missing.length ? missing.join(',') : 'none'}`)
