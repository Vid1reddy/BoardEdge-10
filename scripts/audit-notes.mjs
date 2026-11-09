import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()
const chapters = await db.chapter.findMany({ orderBy: [{ subjectId: 'asc' }, { order: 'asc' }] })
console.log(`TOTAL CHAPTERS: ${chapters.length}`)
for (const c of chapters) {
  const secs = (c.sections || [])
  const pointsLen = secs.reduce((a, s) => a + (s.points || []).join(' ').length, 0)
  const paraLen = secs.reduce((a, s) => a + (s.para || '').length, 0)
  console.log(`${c.id}\t${c.title.slice(0, 26).padEnd(26)}\tsecs=${String(secs.length).padStart(2)}\tpoints=${String(pointsLen).padStart(5)}\tpara=${String(paraLen).padStart(5)}`)
}
await db.$disconnect()
