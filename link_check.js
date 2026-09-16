// link_check.js — verifies URLs in courses.json. Usage: node link_check.js
// Emits link_report.json with {ok, dead:[{href, status, err}]}.
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const CONCURRENCY = 24;
const TIMEOUT_MS = 12000;

const src = process.argv[2] || 'courses.json';
const out = process.argv[3] || 'link_report.json';

const list = JSON.parse(fs.readFileSync(path.join(__dirname, src), 'utf8'));
const urls = [...new Set(list.map(c => c.href).filter(Boolean))];
console.error('unique urls to check:', urls.length);

function once(url, method='HEAD', depth=0) {
  return new Promise(resolve => {
    let u;
    try { u = new URL(url); } catch (e) { return resolve({url, ok:false, status:0, err:'badurl'}); }
    const lib = u.protocol === 'https:' ? https : http;
    const req = lib.request({
      method,
      hostname: u.hostname,
      port: u.port || (u.protocol === 'https:' ? 443 : 80),
      path: (u.pathname || '/') + (u.search || ''),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 KazamaAudit/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'close'
      },
      rejectUnauthorized: false,
      timeout: TIMEOUT_MS
    }, res => {
      const status = res.statusCode || 0;
      if ([301,302,303,307,308].includes(status) && res.headers.location && depth < 4) {
        let next; try { next = new URL(res.headers.location, url).toString(); } catch (e) { next = null; }
        req.destroy();
        if (next) return resolve(once(next, method, depth+1).then(r => ({...r, redirect: next})));
      }
      if ((status === 405 || status === 403 || status === 400) && method === 'HEAD' && depth === 0) {
        req.destroy();
        return resolve(once(url, 'GET', depth));
      }
      req.destroy();
      resolve({url, ok: status >= 200 && status < 400, status, method});
    });
    req.on('timeout', () => { req.destroy(); resolve({url, ok:false, status:0, err:'timeout', method}); });
    req.on('error', e => resolve({url, ok:false, status:0, err: e.code || e.message, method}));
    req.end();
  });
}

(async () => {
  const results = new Array(urls.length);
  let idx = 0, done = 0;
  await Promise.all(Array.from({length: CONCURRENCY}, async () => {
    while (idx < urls.length) {
      const i = idx++;
      results[i] = await once(urls[i]);
      done++;
      if (done % 50 === 0 || done === urls.length) console.error(`progress ${done}/${urls.length}`);
    }
  }));
  const okCount = results.filter(r => r.ok).length;
  const dead = results.filter(r => !r.ok);
  fs.writeFileSync(path.join(__dirname, out), JSON.stringify({ok: okCount, total: results.length, dead}, null, 2));
  console.error(`OK: ${okCount} / ${results.length} — dead: ${dead.length}`);
})();
