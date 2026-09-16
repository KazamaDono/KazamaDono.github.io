// merge.js — combines existing courses with newly generated ones and assigns
// sequential IDs + images from the repo pool. Emits final courses.json.
// Usage: node merge.js
//   inputs:  courses_seed.json (existing 226), courses_new.json (built by build_new.js)
//   output:  courses.json
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Seed file: prefer courses_seed.json, fall back to courses_existing.json
const seedCandidates = ['courses_seed.json', 'courses_existing.json'];
const seedPath = seedCandidates.map(n => path.join(__dirname, n)).find(p => fs.existsSync(p));
const newPath = path.join(__dirname, 'courses_new.json');
const outPath = path.join(__dirname, 'courses.json');

const seed = seedPath ? JSON.parse(fs.readFileSync(seedPath, 'utf8')) : [];
if (seedPath) console.error('using seed:', path.basename(seedPath), '(' + seed.length + ' entries)');
else console.error('WARNING: no seed file found; result will only contain new entries.');
const gen  = fs.existsSync(newPath)  ? JSON.parse(fs.readFileSync(newPath, 'utf8')) : [];

// Existing image pool (present in the repo — safe to reference from card renders).
// Populate this list by running `ls *.gif *.png *.jpg *.webp` in the repo root
// and pasting the confirmed filenames. Below is a conservative default.
const IMG_POOL = [
  ...Array.from({length: 141}, (_, i) => `${i+1}.gif`),
  '224.gif','225.gif','226.gif','227.gif','228.gif','229.gif','231.gif','233.gif','234.gif','235.gif',
  'black.gif','circle.gif','cool.gif','download.gif','fgh.gif','final.gif','gl.gif','glitch.gif',
  'grid.gif','hole.gif','k.gif','land.gif','llm23.gif','loop.gif','maze.gif','obg.gif','red.gif',
  'redg.gif','rwa.gif','sh.gif','tunnel.gif','vision.gif','theOne.gif'
];

function pickImg(seedStr) {
  const h = crypto.createHash('sha1').update(seedStr).digest();
  const n = h.readUInt32BE(0) % IMG_POOL.length;
  return IMG_POOL[n];
}

// Preserve existing entries verbatim.
const out = seed.map(c => ({...c}));
const usedIds = new Set(out.map(c => c.id));

// Assign new IDs continuing from max existing.
let nextId = out.length ? Math.max(...out.map(c => parseInt(c.id, 10) || 0)) + 1 : 1;
for (const e of gen) {
  while (usedIds.has(String(nextId).padStart(4, '0'))) nextId++;
  const id = String(nextId).padStart(4, '0');
  usedIds.add(id);
  const entry = {
    id,
    title: e.title,
    desc: e.desc || '',
    tags: Array.isArray(e.tags) ? e.tags.filter(Boolean) : [],
    href: e.href,
    img: e.img || pickImg(id + ':' + e.title + ':' + e.href)
  };
  out.push(entry);
  nextId++;
}

// De-dupe by href just in case.
const seenHref = new Set();
const final = [];
for (const c of out) {
  if (seenHref.has(c.href)) continue;
  seenHref.add(c.href);
  final.push(c);
}

fs.writeFileSync(outPath, JSON.stringify(final, null, 2));
console.error(`wrote ${final.length} courses to courses.json`);
