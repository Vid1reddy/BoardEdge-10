import fs from 'fs'
const src = fs.readFileSync('/home/z/my-project/data/seed/gen/sst-deep-history.ts', 'utf8')
const json = src.replace(/^[\s\S]*?export default\s*/, '').replace(/;\s*$/, '')
const data = JSON.parse(json)
for (const ch of data.chapters) {
  console.log(`\n===== number=${ch.number} "${ch.title}"`)
  console.log(`summary: ${(ch.summary || '').slice(0, 150)}`)
  for (const s of ch.sections || []) console.log(`  - ${s.heading} | para[0:80]: ${(s.para || '').slice(0, 80)}`)
}
