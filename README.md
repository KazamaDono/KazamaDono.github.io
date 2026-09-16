<div align="center">

# ▚ ANARCHY ▚

### *Your Personal Student Course Portal for Advanced Systems &amp; Operations*

[![Live](https://img.shields.io/badge/live-kazamadono.github.io-000000?style=for-the-badge&logo=githubpages&logoColor=white)](https://kazamadono.github.io/anarchy.html)
[![Courses](https://img.shields.io/badge/courses-1%2C708-8b0000?style=for-the-badge)](./courses.json)
[![Categories](https://img.shields.io/badge/categories-21-c04000?style=for-the-badge)](./data)
[![Static](https://img.shields.io/badge/stack-vanilla%20JS%20%2B%20Tailwind%20CDN-1f6feb?style=for-the-badge)](./index.html)

*Break the system. Learn how it was built. Rebuild it faster.*

</div>

---

```console
> cat /etc/motd
```

**ANARCHY** is a curated study protocol — a single-page catalog of **1,708 hand-picked resources** across **21 disciplines**, from offensive security and reverse engineering to cryptography, distributed systems, and the math beneath both.

No accounts. No trackers. No paywall. Just a directory of everything worth reading, watching, or breaking — organized the way an operator actually studies.

Served live at **[kazamadono.github.io/anarchy.html](https://kazamadono.github.io/anarchy.html)** (mirrored on `/`).

---

```console
> ls -la ./catalog/
```

| Domain          | Modules                                                       |
| --------------- | ------------------------------------------------------------- |
| **Offensive**   | `offensive` · `webappsec` · `ctf` · `re` · `gamehack`         |
| **Defensive**   | `defensive` · `forensics` · `osint`                           |
| **Systems**     | `networking` · `cloud` · `devops` · `hardware` · `mobile`     |
| **Foundations** | `cs` · `math` · `crypto` · `db`                               |
| **Frontier**    | `ai_ml` · `blockchain`                                        |
| **Signal**      | `extras` · `misc`                                             |

Every domain is a first-class ES module in [`data/`](./data). At build time they are merged into a single [`courses.json`](./courses.json) that [`index.html`](./index.html) fetches, filters, and renders client-side — no framework, no bundler, no server.

---

```console
> tree -L 1
```

```
.
├── index.html          ← the portal (SPA, ~160 KB)
├── anarchy.html        ← mirror of index.html for /anarchy.html
├── courses.json        ← built catalog (1,708 entries)
├── data/               ← 21 per-domain source modules
├── build_new.js        ← merges data/*.js → courses.json
├── merge.js            ← reconciles new + legacy audits
├── link_check.js       ← validates every URL in the catalog
├── audit_existing.json ← inventory snapshot of prior version
├── CHANGE_REPORT.md    ← full refactor changelog
└── README-DEPLOY.md    ← deployment notes
```

---

```console
> make build
```

The pipeline is boring on purpose — Node with no dependencies.

```bash
# Regenerate courses.json from data/*.js
node build_new.js

# Reconcile with the previous audit (used during the migration)
node merge.js

# Sanity-check every link in the catalog
node link_check.js
```

Any change to a `data/*.js` module is a one-command rebuild. Deploy is a `git push` to `main`; GitHub Pages does the rest.

---

```console
> cat ./philosophy.txt
```

Most course indexes are graveyards — dead links, dead authors, dead ideas. ANARCHY is opinionated:

- **Depth over breadth per entry.** If a link is here, it is the one worth opening.
- **Operator-first ordering.** Categories mirror how the work actually gets done, not how universities file it.
- **Static &amp; auditable.** One JSON file, one HTML page, one repo. Nothing loads code you can't read.
- **Versioned.** Every catalog change is a commit. See [`CHANGE_REPORT.md`](./CHANGE_REPORT.md) for the story.

---

```console
> contact --sender=kazama
```

Found a broken link? A missing classic? A category that should exist?

Open an [issue](https://github.com/KazamaDono/KazamaDono.github.io/issues), reach out via [@KazamaDono](https://github.com/KazamaDono), or drop a PR against the relevant `data/*.js`. The catalog grows in public.

<div align="center">

*—— stay curious, stay caffeinated, stay dangerous ——*

</div>
