import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'src', 'data', 'hotelDetailData.json');
const REPORT = path.join(ROOT, '.hero-images-report.txt');
const MIN = 5;
const WRITE = process.argv.includes('--write');

const out = [];
const log = (...a) => out.push(a.join(' '));
const warn = [];

// ---- image inventory (union of both images folders; public wins on case) ----
const rootFiles = readdirSync(path.join(ROOT, 'images'));
const publicFiles = readdirSync(path.join(ROOT, 'public', 'images'));
const nameByNorm = new Map();
for (const f of [...rootFiles, ...publicFiles]) nameByNorm.set(f.toLowerCase(), f);
const allSet = new Set(nameByNorm.keys());
const names = [...nameByNorm.entries()]; // [lowerName, rawName]

const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
const stripExt = (n) => n.replace(/\.[a-z0-9]+$/i, '');
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const natCmp = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
const STOP = new Set(['resort', 'resorts', 'hotel', 'hotels', 'palace', 'international', 'journey', 'escape', 'retreat']);

function brandPrefix(heroPath) {
  const base = stripExt(String(heroPath).split('/').pop());
  const m = base.match(/^(.*\D)(\d+)$/);
  let p = m ? m[1].replace(/[-_ ]+$/, '') : base;
  if (norm(p).length < 4) p = base;
  return norm(p).length >= 4 ? p : null;
}

function buildHeroArray(h, slug) {
  const seeds = Array.isArray(h.heroImage)
    ? h.heroImage
    : typeof h.heroImage === 'string' && h.heroImage
      ? [h.heroImage]
      : [];
  if (!seeds.length) return null;

  const pool = [];
  const seen = new Set();
  const missingWarned = new Set();
  const push = (p) => {
    if (typeof p !== 'string' || !p) return;
    const key = p.toLowerCase();
    if (seen.has(key)) return;
    const file = p.split('/').pop().toLowerCase();
    const isSeed = key === String(seeds[0]).toLowerCase();
    if (!isSeed && !allSet.has(file)) {
      if (!missingWarned.has(key)) {
        missingWarned.add(key);
        warn.push(`[${slug}] candidate not found in images folders: ${p}`);
      }
      return;
    }
    seen.add(key);
    pool.push(p);
  };

  seeds.forEach(push); // original hero first, keeps existing look

  const prefix = brandPrefix(seeds[0]);
  if (prefix) {
    const re = new RegExp('^' + esc(prefix.toLowerCase()) + '[-_ ]?\\d');
    names
      .filter(([nn]) => re.test(stripExt(nn)))
      .map(([, raw]) => '/images/' + raw)
      .sort(natCmp)
      .forEach(push);
  }

  (Array.isArray(h.gallery) ? h.gallery : []).forEach(push);

  const destTokens = new Set();
  for (const part of [h.destination, h.destinationSlug]) {
    for (const w of String(part || '').split(/[^A-Za-z0-9]+/)) if (w) destTokens.add(norm(w));
  }
  const titleTokens = [
    ...new Set(
      [...String(h.title || '').split(/[^A-Za-z0-9]+/), ...slug.split('-')]
        .map(norm)
        .filter((w) => w.length >= 7 && !/\d/.test(w) && !STOP.has(w) && !destTokens.has(w))
    )
  ];
  if (titleTokens.length) {
    names
      .filter(([nn]) => titleTokens.some((t) => stripExt(nn).includes(t)))
      .map(([, raw]) => '/images/' + raw)
      .sort(natCmp)
      .forEach(push);
  }

  (Array.isArray(h.rooms) ? h.rooms : [])
    .map((r) => r && r.image)
    .filter(Boolean)
    .forEach(push);

  if (prefix) {
    const pl = prefix.toLowerCase();
    names
      .filter(([nn]) => stripExt(nn).startsWith(pl))
      .map(([, raw]) => '/images/' + raw)
      .sort(natCmp)
      .forEach(push);
  }

  const arr = pool.slice(0, MIN);
  let i = 0;
  while (arr.length < MIN) {
    arr.push(pool[i % pool.length]);
    i++;
  }
  return { arr, poolSize: pool.length };
}

// ---- load + plan ----
const raw = readFileSync(DATA, 'utf8');
const hasBom = raw.charCodeAt(0) === 0xfeff;
const hotels = JSON.parse(raw.replace(/^\uFEFF/, ''));
const slugs = Object.keys(hotels);
log(`file: src/data/hotelDetailData.json (BOM: ${hasBom}, CRLF: ${raw.includes('\r\n')})`);
log(`top-level entries: ${slugs.length}`);
log(`public/images: ${publicFiles.length}, images/: ${rootFiles.length}, union: ${allSet.size}`);

const slots = [];
for (const slug of slugs) {
  const h = hotels[slug];
  if (!h || typeof h !== 'object' || !('heroImage' in h)) {
    warn.push(`[${slug}] has NO heroImage key - left untouched`);
    continue;
  }
  const original = Array.isArray(h.heroImage) ? h.heroImage[0] : h.heroImage;
  const built = buildHeroArray(h, slug);
  if (!built) {
    warn.push(`[${slug}] heroImage empty/unusable - left untouched`);
    continue;
  }
  if (built.arr[0] !== original) {
    throw new Error(`${slug}: first element mismatch (${built.arr[0]} != ${original})`);
  }
  slots.push({ slug, original, arr: built.arr, poolSize: built.poolSize });
}

// ---- locate heroImage blocks in the file (file order == object key order) ----
const lines = raw.split('\n');
const hits = [];
for (let i = 0; i < lines.length; i++) {
  const core = lines[i].replace(/\r$/, '');
  if (/^\s*"heroImage":\s*"/.test(core)) {
    hits.push({ i, indent: core.match(/^\s*/)[0], comma: /,\s*$/.test(core) });
  } else if (/^\s*"heroImage":\s*\[/.test(core)) {
    let j = i + 1;
    while (j < lines.length && !/^\s*\]/.test(lines[j].replace(/\r$/, ''))) j++;
    hits.push({ i, indent: core.match(/^\s*/)[0], comma: /,\s*$/.test(lines[j].replace(/\r$/, '')), blockEnd: j });
  }
}
log(`heroImage blocks found in file: ${hits.length}, planned slots: ${slots.length}`);
if (hits.length !== slots.length) {
  log('ABORT: heroImage block count does not match parsed entries.');
  writeFileSync(REPORT, out.concat(['', 'WARNINGS:', ...warn]).join('\n'), 'utf8');
  process.exit(1);
}

for (let k = 0; k < slots.length; k++) {
  const s = slots[k];
  log(`${String(k + 1).padStart(2)}. ${s.slug} (pool ${s.poolSize})`);
  log(`    ${JSON.stringify(s.arr)}`);
}

if (!WRITE) {
  log('RESULT: dry run (no changes). Re-run with --write to apply.');
} else {
  const newLines = [...lines];
  for (let k = slots.length - 1; k >= 0; k--) {
    const hit = hits[k];
    const s = slots[k];
    const cr = lines[hit.i].endsWith('\r') ? '\r' : '';
    const body = s.arr.map((p, idx) => `${hit.indent}  "${p}"${idx === s.arr.length - 1 ? '' : ','}`);
    const block = [`${hit.indent}"heroImage": [`, ...body, `${hit.indent}]${hit.comma ? ',' : ''}`].map((l) => l + cr);
    if (hit.blockEnd !== undefined) newLines.splice(hit.i, hit.blockEnd - hit.i + 1, ...block);
    else newLines.splice(hit.i, 1, ...block);
  }
  writeFileSync(DATA, newLines.join('\n'), 'utf8');

  // ---- validate the written file ----
  const parsed = JSON.parse(readFileSync(DATA, 'utf8').replace(/^\uFEFF/, ''));
  const publicSet = new Set(publicFiles.map((f) => f.toLowerCase()));
  let pass = 0;
  let rootOnly = 0;
  let missing = 0;
  for (const s of slots) {
    const v = parsed[s.slug].heroImage;
    if (!Array.isArray(v)) throw new Error(`${s.slug}: heroImage is not an array`);
    if (v.length < MIN) throw new Error(`${s.slug}: only ${v.length} images`);
    if (v[0] !== s.original) throw new Error(`${s.slug}: first element changed`);
    for (const p of v) {
      if (typeof p !== 'string' || !p.startsWith('/images/')) throw new Error(`${s.slug}: bad path ${p}`);
      const f = p.split('/').pop().toLowerCase();
      if (publicSet.has(f)) continue;
      if (allSet.has(f)) {
        rootOnly++;
        continue;
      }
      missing++;
      warn.push(`[${s.slug}] WRITTEN path missing everywhere: ${p}`);
    }
    pass++;
  }
  const total = slots.reduce((n, s) => n + s.arr.length, 0);
  log(`VALIDATION PASS: ${pass}/${slots.length} hotels now have heroImage arrays (each >= ${MIN} entries, first element preserved).`);
  log(`total image paths written: ${total}; found on disk: ${total - missing}; missing everywhere: ${missing}; root-images-only refs: ${rootOnly}`);
  log('RESULT: written to src/data/hotelDetailData.json');
}

writeFileSync(REPORT, out.concat(warn.length ? ['', 'WARNINGS:', ...warn] : []).join('\n'), 'utf8');
console.log(out.join('\n'));