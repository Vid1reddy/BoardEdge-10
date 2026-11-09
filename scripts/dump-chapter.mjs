import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()
const ids = process.argv.slice(2)
for (const id of ids) {
  const c = await db.chapter.findUnique({ where: { id } })
  if (!c) { console.log(`NOT FOUND: ${id}`); continue }
  console.log(`\n===== ${c.id} — ${c.title} =====`)
  console.log(`SUMMARY: ${c.summary?.slice(0, 300)}`)
  for (const s of (c.sections || [])) {
    console.log(`\n  ## ${s.heading}  (points: ${(s.points || []).length}, para: ${(s.para || '').length})`)
    console.log(`     para start: ${(s.para || '').slice(0, 160).replace(/\n/g, ' ')}`)
    for (const p of (s.points || []).slice(0, 4)) console.log(`     • ${String(p).slice(0, 130)}`)
  }
}
await db.$disconnect()
