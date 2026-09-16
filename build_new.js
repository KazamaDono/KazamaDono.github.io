// Massive expansion builder. Produces courses_new.json (does NOT include the existing 226).
// Compact form: c(title, desc, tagsCsv, href)  -> {title, desc, tags[], href}
// img is assigned later by assign_images.js.
const fs = require('fs');
const path = require('path');

const all = [];
const seenHref = new Set();

function c(title, desc, tagsCsv, href) {
  if (!href) return;
  const h = href.trim();
  if (seenHref.has(h)) return;
  seenHref.add(h);
  all.push({
    title: title.trim(),
    desc: (desc || '').trim(),
    tags: tagsCsv.split(',').map(s => s.trim()).filter(Boolean),
    href: h
  });
}

// Load modules
const parts = [
  './data/ai_ml.js',
  './data/offensive.js',
  './data/defensive.js',
  './data/webappsec.js',
  './data/re.js',
  './data/crypto.js',
  './data/cloud.js',
  './data/cs.js',
  './data/osint.js',
  './data/forensics.js',
  './data/blockchain.js',
  './data/gamehack.js',
  './data/ctf.js',
  './data/mobile.js',
  './data/networking.js',
  './data/devops.js',
  './data/db.js',
  './data/hardware.js',
  './data/math.js',
  './data/misc.js'
];
for (const p of parts) {
  try {
    const mod = require(p);
    if (typeof mod === 'function') mod(c);
    else if (Array.isArray(mod)) for (const e of mod) c(e.title, e.desc, (e.tags||[]).join(','), e.href);
    console.error('loaded', p, '=>', all.length, 'total');
  } catch (e) {
    console.error('skip', p, e.message);
  }
}

// De-dupe by title too (loose)
const seenTitle = new Set();
const finalArr = [];
for (const e of all) {
  const k = e.title.toLowerCase().replace(/\s+/g,' ').trim();
  if (seenTitle.has(k)) continue;
  seenTitle.add(k);
  finalArr.push(e);
}
fs.writeFileSync(path.join(__dirname, 'courses_new.json'), JSON.stringify(finalArr, null, 2));
console.error('wrote courses_new.json:', finalArr.length);
