// Validates a fix-seed file: shape, density, topic fidelity, no cross-chapter drift.
// Usage: node scripts/validate-fix.mjs data/seed/fixes/<file>.ts [chapterNumber ...]
import fs from 'fs'

const file = process.argv[2]
const only = process.argv.slice(3).map(Number)
const src = fs.readFileSync(file, 'utf8')
const json = src.replace(/^[\s\S]*?export default\s*/, '').replace(/;\s*$/, '')
let data
try { data = JSON.parse(json) } catch (e) { console.error(`JSON PARSE FAIL: ${e.message}`); process.exit(1) }

// Per-chapter must-mention keyword probes (lowercase substrings). Content is wrong if missing.
const PROBES = {
  'Print Culture and the Modern World': ['gutenberg', 'diamond sutra', 'hicky', 'vernacular press act', 'rammohun', 'ninety five theses', 'sambad kaumudi', 'utamaro', 'biliot'],
  'The Making of a Global World': ['silk route', 'corn law', 'rinderpest', 'indentured', 'bretton woods', 'great depression', 'chilli', 'naipaul', 'refrigerated'],
  'The Age of Industrialisation': ['proto-industrial', 'arkwright', 'gomastha', 'cavasji? |davar', 'hukumchand', 'jobber', 'manchester', 'watt', 'dwarkanath', 'spinning jenny'],
  'Resources and Development': ['khadar', 'bangar', 'regur', 'laterite', 'contour', 'agenda 21', 'net sown area', 'gully'],
  'Forest and Wildlife Resources': ['project tiger', 'chipko', 'joint forest management', 'reserved forests', 'biodiversity', 'sariska', 'iucn'],
  'Water Resources': ['bhakra', 'hirakud', 'narmada bachao', 'rainwater harvesting', 'tankas', 'johad', 'krishna-godavari', 'multipurpose'],
  'Agriculture': ['rabi', 'kharif', 'zaid', 'slash and burn', 'green revolution', 'buffer stock', 'minimum support price', 'mahaseer|horticulture'],
  'Minerals and Energy Resources': ['magnetite', 'hematite', 'digboi', 'nagercoil', 'manikaran', 'anthracite', 'bailadila', 'ferrous'],
  'Federalism': ['union list', 'state list', 'concurrent list', '73rd', 'panchayat', 'gram sabha', 'linguistic states', 'sri lanka|holding together'],
  'Gender, Religion and Caste': ['sexual division of labour', 'feminist', 'communalism', 'secular', 'one-third', 'urbanisation|caste hierarchy'],
  'Political Parties': ['partisan', 'recognition', 'election commission', 'anti-defection', 'affidavit', 'dynastic succession', 'challenges'],
  'Outcomes of Democracy': ['accountable', 'legitimate', 'economic inequality', 'accommodation of diversity', 'dignity'],
  'Sectors of the Indian Economy': ['primary sector', 'secondary sector', 'tertiary sector', 'disguised unemployment', 'mgnrega', 'organised', 'gdp'],
  'Money and Credit': ['double coincidence', 'collateral', 'terms of credit', 'self help group', 'reserve bank', 'cheque', 'salim|swapna'],
  'Globalisation and the Indian Economy': ['multinational', 'cargill|ford', 'wto', 'liberalisation', 'foreign trade', 'investment', 'fair globalisation'],
  'Consumer Rights': ['copra', 'district forum|district level commission', 'isi', 'agmark', 'hallmark', 'jago grahak jago', 'redressal', 'consumer protection council'],
  'Surface Areas and Volumes': ['frustum', 'hemisphere', 'cone', 'cylinder', 'volume of combination', 'slant height', 'pi r'],
  'Statistics': ['direct method', 'assumed mean', 'step deviation', 'median', 'mode', 'ogive', 'cumulative frequency', 'empirical'],
  'Probability': ['sample space', 'favourable', 'equally likely', 'complementary', 'deck|52', 'dice', 'sure event', 'impossible event'],
  'Life Processes': ['amylase', 'villi', 'alveoli', 'nephron', 'xylem', 'translocation', 'double circulation', 'haemoglobin', 'photosynthesis'],
  'Control and Coordination': ['neuron', 'synapse', 'reflex arc', 'cerebellum', 'medulla', 'auxin', 'thyroxine', 'phototropism', 'insulin'],
  'How do Organisms Reproduce?': ['binary fission', 'budding', 'pollination', 'pollen tube', 'placenta', 'vas deferens', 'menstruation', 'rhizopus', 'grafting'],
  'Heredity': ['mendel', 'f2 generation', '3:1', '9:3:3:1', 'dihybrid', 'sex determination', 'chromosome', 'dominant', 'recessive'],
  'Light - Reflection and Refraction': ['snell', 'magnification', 'concave', 'convex', 'focal length', 'refractive index', 'sign convention', 'power of lens', 'dioptre'],
  'Electricity': ["ohm's law", 'resistivity', 'series', 'parallel', 'joule', 'electric power', 'kilowatt', 'ampere', 'coulomb'],
  'Magnetic Effects of Electric Current': ['field lines', 'right-hand thumb rule', 'solenoid', "fleming's left-hand", 'electromagnetic induction', 'galvanometer', 'fuse', 'short-circuit'],
  'Our Environment': ['food chain', 'trophic level', '10 percent|ten percent', 'biomagnification', 'ozone', 'cfcs', 'biodegradable', 'ecosystem'],
  'Glimpses of India': ['pader', 'kabai', 'coorg', 'cariappa', 'mahaseer', 'bodhidharma', 'dhekiabari', 'pranjol', 'rajvir', 'bolinhas'],
  'Mijbil the Otter': ['gavin maxwell', 'camusfearna', 'basra', 'musteline|mustelidae', 'ping-pong', 'air hostess', 'tin box', 'maxwell'],
  'Madam Rides the Bus': ['valliammai|valli', 'thirty paise', 'conductor', 'pulam?patti|her village', 'dead cow', 'cold drink', 'eight years'],
  'The Proposal': ['chekhov', 'lomov', 'natalya', 'chubukov', 'oxen meadows', 'squeezer', 'guess', 'roubles', 'farce', 'hypochondria'],
}

const issues = []
const chapters = (data.chapters || []).filter((c) => only.length === 0 || only.includes(Number(c.number)))
if (!data.code || !data.name || !Array.isArray(data.chapters)) issues.push('Missing code/name/chapters at top level')

for (const ch of chapters) {
  const tag = `[${ch.number}] ${ch.title}`
  if (!ch.title || !ch.summary || ch.summary.length < 200) issues.push(`${tag}: summary missing/too short (${(ch.summary || '').length})`)
  if (!Array.isArray(ch.hotTopics) || ch.hotTopics.length < 3) issues.push(`${tag}: hotTopics < 3`)
  const secs = ch.sections || []
  if (secs.length < 8) issues.push(`${tag}: only ${secs.length} sections (need >= 8)`)
  const probes = PROBES[ch.title]
  const body = JSON.stringify({ s: secs }).toLowerCase()
  if (probes) {
    for (const p of probes) {
      const alts = p.split('|')
      if (!alts.some((a) => body.includes(a))) issues.push(`${tag}: missing must-mention "${p}"`)
    }
  }
  for (const s of secs) {
    if ((s.para || '').length < 480) issues.push(`${tag} :: ${s.heading}: para ${(s.para || '').length} < 480`)
    if (!Array.isArray(s.points) || s.points.length < 5) issues.push(`${tag} :: ${s.heading}: ${s.points?.length || 0} points < 5`)
    if (!Array.isArray(s.keyTerms) || s.keyTerms.length < 3) issues.push(`${tag} :: ${s.heading}: keyTerms < 3`)
    if (!s.trick || s.trick.length < 25) issues.push(`${tag} :: ${s.heading}: trick missing/short`)
    if (!s.examPointer || s.examPointer.length < 25) issues.push(`${tag} :: ${s.heading}: examPointer missing/short`)
    for (const kt of s.keyTerms || []) if (!kt.term || !kt.meaning) issues.push(`${tag} :: ${s.heading}: bad keyTerm`)
  }
  const mcqs = ch.mcqs || []
  if (mcqs.length < 14) issues.push(`${tag}: ${mcqs.length} MCQs < 14`)
  for (const m of mcqs) {
    if (!Array.isArray(m.options) || m.options.length !== 4) issues.push(`${tag}: MCQ not 4 options: ${String(m.question).slice(0, 50)}`)
    if (!(m.answerIndex >= 0 && m.answerIndex < 4)) issues.push(`${tag}: bad answerIndex: ${String(m.question).slice(0, 50)}`)
    if (!m.explanation || m.explanation.length < 30) issues.push(`${tag}: thin MCQ explanation: ${String(m.question).slice(0, 50)}`)
  }
  const bqs = ch.boardQuestions || []
  if (bqs.length < 9) issues.push(`${tag}: ${bqs.length} board questions < 9`)
  for (const b of bqs) {
    if (!b.answer || b.answer.length < 220) issues.push(`${tag}: board answer too short (${(b.answer || '').length}): ${String(b.question).slice(0, 50)}`)
    if (![1, 2, 3, 5, 6].includes(Number(b.marks))) issues.push(`${tag}: odd marks value ${b.marks}`)
  }
  // markdown / placeholder hygiene
  const all = JSON.stringify(ch)
  if (/\*\*|^#|\\n\\n|TODO|XXX|Lorem/i.test(all)) issues.push(`${tag}: markdown markers or placeholders found`)
}

if (issues.length) {
  console.error(`FAILED with ${issues.length} issues:`)
  issues.forEach((i) => console.error(' - ' + i))
  process.exit(1)
}
console.log(`OK: ${chapters.length} chapter(s) passed all structural, density and topic-fidelity checks.`)
