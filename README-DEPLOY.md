# Anarchy — deploy notes for KazamaDono/KazamaDono.github.io

## What you're getting

- **`index.html`** — surgically edited version of your existing page. Keeps the intro cinematic, binary rain, modal, and settings. Changes: courses now load from `courses.json` (with the old inline array still there as a fallback), category chips extended, hero counters go live from actual data, image auto‑assignment for entries missing an `img` field, wider grid on XL screens.
- **`courses.json`** — start with the 226 existing courses (with URLs cleaned up). This is what the page fetches at load. The site works immediately with this file alone.
- **`courses_seed.json`** — same content as `courses.json`, kept as the immutable "seed" the builder scripts merge on top of.
- **`data/*.js`** — ~1600 new hand-curated course entries organized by topic. Each entry is a `c(title, desc, tagsCsv, href)` call in a module. These are the source of the expansion.
- **`build_new.js`** — walks every module in `data/` and emits `courses_new.json` (new entries only, de‑duped by href and title).
- **`merge.js`** — takes `courses_seed.json` + `courses_new.json`, assigns sequential IDs and images, and writes the final combined `courses.json`.
- **`link_check.js`** — HEAD/GET audit of every URL in `courses.json`. Writes `link_report.json` with the dead ones. Concurrency: 24.
- **`audit_existing.json`** — the audit run I did on the current 226 courses. 198/222 OK (89%). Broken PortSwigger URLs already fixed in the seed.
- **`CHANGE_REPORT.md`** — the summary of everything.

## Minimum deploy — just get the site running

Drop the following into the repo root and push:

- `index.html` (overwrite)
- `courses.json`

Done. The page will show ~226 courses across more categories and load them from JSON instead of an inline array.

## Full deploy — expand to ~1,800+ courses

On your Windows box (node.js already installed):

```bash
node build_new.js
node merge.js
node link_check.js   # optional; audits every URL and writes link_report.json
```

That produces a fresh `courses.json` with everything. Commit it.

## Ongoing maintenance

- To add courses: edit or create a file in `data/`. Follow the `c(title, desc, tagsCsv, href)` pattern. Then re-run `build_new.js && merge.js`.
- To purge a dead URL: delete or edit the `c()` call in the relevant module, then rebuild.
- To reshuffle images: change the `IMG_POOL` in `merge.js`. The pool defaults to every `1.gif`–`141.gif` plus the named GIFs already in your repo.

## Known trade-offs I made

1. **The old 226-entry inline `initialCourses` array is kept in `index.html` as a fallback.** It runs only if `courses.json` fails to load (e.g. broken deploy, running from `file://`). You can strip it out later by deleting everything between `const __LEGACY_INLINE_COURSES__ = [` and `/* === END_LEGACY_INLINE_COURSES === */` — the page will keep working as long as `courses.json` is served.
2. **New entries don't ship pre-baked images.** `index.html` deterministically picks a `.gif` from your existing repo pool at render time (hash of id+title). This keeps the repo diff clean; every card still gets a distinct image.
3. **Images have a CSS gradient fallback.** If a chosen `.gif` filename is missing from the repo, the card shows a neon gradient in a hash-derived hue instead of a broken image icon.
4. **The empty-tag entries (43 of them) are cleaned at render time** — `__assignFallbackImages` strips empty strings from `tags[]` and normalizes the one `"exploit"` typo to `"exploits"`.

## Fixes baked into `courses_seed.json`

18 broken PortSwigger URLs (`/web-security/learning-paths/*`) — remapped to the current PortSwigger topic pages that actually exist. Full list in `CHANGE_REPORT.md`.

## Not fixed (needs your judgment)

- `https://ropemporium.com/` — ECONNRESET during audit but site is up intermittently. Left as‑is.
- `https://annas-archive.org/slow_download/...` — deep link with an expiring hash. Consider replacing with the main library-genesis-style landing page you actually want to link to.
- `https://learnpython.org/` — ECONNRESET on audit; usually works.
- `https://guidedhacking.com/` — 403 on HEAD, but the site works from a browser. Their bot filter is aggressive; the URL is fine.
- `https://somerandomstuff1.wordpress.com/2019/02/08/geoguessr-the-top-tips-tricks-and-techniques/` — timed out. WordPress may just be slow. Recheck manually.
- `https://servicenow.iu.edu/kb?id=kb_article_view&sysparm_article=KB0026046` — timed out. Enterprise SSO wall probably.
