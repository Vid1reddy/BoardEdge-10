import fs from 'fs'
const files = process.argv.slice(2)
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8')
  const json = src.replace(/^[\s\S]*?export default\s*/, '').replace(/;\s*$/, '')
  let data
  try { data = JSON.parse(json) } catch (e) { console.log(`PARSE FAIL: ${f}: ${e.message}`); continue }
  console.log(`\n######## ${f.split('/').pop()} — ${data.chapters.length} chapters ########`)
  for (const ch of data.chapters) {
    const heads = (ch.sections || []).map((s) => s.heading).join(' / ')
    console.log(`\n[${ch.number}] ${ch.title}`)
    console.log(`   ${heads.slice(0, 350)}`)
  }
}
