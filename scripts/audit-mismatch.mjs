// Content-vs-title mismatch audit: flags chapters whose sections/paras look copied
// from another chapter. Heuristic: compare keyword sets of chapter title vs content,
// and detect near-duplicate section sets across chapters of same subject.
import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

const STOP = new Set('the a an of and in to for on with from at by is are was were be been its it their his her they he she as that this these those who which what how why when where class 10 cbse ncert chapter'.split(' '))

function tokens(t) {
  return new Set((t || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)))
}
function overlap(title, text) {
  const tt = tokens(title)
  const ct = tokens(text)
  let hit = 0
  for (const w of tt) if (ct.has(w)) hit++
  return tt.size ? hit / tt.size : 0
}

const chapters = await db.chapter.findMany({ orderBy: [{ subjectId: 'asc' }, { order: 'asc' }] })
console.log(`TOTAL: ${chapters.length}\n`)

// 1) title-vs-content keyword overlap
for (const c of chapters) {
  const allText = (c.sections || []).map((s) => s.heading + ' ' + (s.para || '') + ' ' + (s.points || []).join(' ')).join(' ')
  const ov = overlap(c.title, allText)
  if (ov < 0.25) console.log(`LOW-TITLE-FIT ${ov.toFixed(2)}\t${c.id}\t${c.title}`)
}

// 2) duplicate section-heading-sets within a subject
const bySubject = {}
for (const c of chapters) {
  const key = (c.sections || []).map((s) => s.heading.toLowerCase().replace(/[^a-z0-9]/g, '')).sort().join('|')
  const sig = (c.sections || []).map((s) => (s.para || '').slice(0, 90)).join('|')
  ;(bySubject[c.subjectId] ||= []).push({ id: c.id, title: c.title, key, sig })
}
for (const [subj, arr] of Object.entries(bySubject)) {
  const seenKey = new Map()
  const seenSig = new Map()
  for (const c of arr) {
    if (seenKey.has(c.key)) console.log(`DUP-HEADINGS\t${subj}\t${c.id} (${c.title}) == ${seenKey.get(c.key)}`)
    else seenKey.set(c.key, `${c.id} (${c.title})`)
    if (seenSig.has(c.sig)) console.log(`DUP-PARAS\t${subj}\t${c.id} (${c.title}) == ${seenSig.get(c.sig)}`)
    else seenSig.set(c.sig, `${c.id} (${c.title})`)
  }
}
await db.$disconnect()
