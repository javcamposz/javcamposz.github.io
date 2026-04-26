---
title: Redesign options for javcamposz.github.io
status: draft
date: 2026-04-25
---

# Redesign Options — Personal Site

A working document to choose a direction for the new look & feel of `javcamposz.github.io`. The reference benchmark is [alvarodenicolas.com](https://alvarodenicolas.com/) — a minimalist, executive-credibility site that leans on typography and whitespace rather than decoration.

---

## 1. Where the site is today

### What's actually shipping

- The site is built with **Jekyll** and deployed via **GitHub Pages** + a `Beautiful Jekyll CI` workflow.
- `_config.yml` loads **`mmistakes/minimal-mistakes`** via `jekyll-remote-theme` (skin: `neon`).
- The home page (`index.html`) and posts use **minimal-mistakes layouts** (`feature__wrapper`, `notice--primary`, `single`, `home`).

### The leftover cruft

A lot of the repo is still scaffolding from the original `beautiful-jekyll` template, even though that theme is not the one rendering the site:

| Artifact | What it is | Status |
|---|---|---|
| `README.md` | beautiful-jekyll docs (~500 lines) | unused |
| `.github/workflows/ci.yml` | "Beautiful Jekyll CI" + `appraisal` | over-engineered, can be simplified |
| `Appraisals`, `beautiful-jekyll-theme.gemspec` | gem-publishing scaffolding | unused |
| `assets/css/beautifuljekyll*.css`, `assets/js/beautifuljekyll.js` | beautiful-jekyll theme assets | unused, never loaded |
| `OLD_config.yml` | previous beautiful-jekyll config | dead file |
| `404.html`, `feed.xml`, `staticman.yml`, `staticman.css` | beautiful-jekyll bits | minimal-mistakes already provides these |
| Multiple ~20–60 MB media files (`.mov`, `.mp4`, `.wav`) at repo root | demo videos / podcast audio | should move to external hosting (YouTube, S3) before any redesign |

### Current content footprint

- **24 blog posts** in `_posts/` — two clear arcs: Oct 2024 LLM/Finance/Telco series, Sep 2025 standalone essays
- 2 books: *Grow Your Business with AI* (Springer, 2023), *Autonomous Minds* (Wiley, 2024)
- 1 arXiv paper: [2506.04018](https://arxiv.org/abs/2506.04018)
- About / Author / Newsletter / Invitation pages
- Heavy author-headshot/book-cover image library in `assets/img/`

### What's missing vs. ambitions

You mentioned wanting to add: **all LinkedIn posts**, a **new research paper**, **GitHub repos**, podcasts, talks. None of these have first-class structure today — they live as ad-hoc links inside Markdown pages.

---

## 2. Reference inspiration: alvarodenicolas.com

What makes that site work as a model:

- **Single-purpose hero** with a sharp positioning line ("PE-Grade Technology Value Creation") rather than a generic "Welcome".
- **Quiet visual language** — neutral palette, generous whitespace, one strong typographic hierarchy. No carousels, no parallax, no "notice boxes".
- **Editorial proof points** — credentials, logos, case studies presented like a one-page memo, not a brochure.
- **Executive tone** — written for board/C-suite readers; signals scarcity and seniority.

It's effectively a **professional landing page with a thin content surface**. That's a different shape from your current site, which is a **content-heavy blog** with a personal-brand wrapper. The redesign needs to decide which shape you want.

---

## 3. Strategic decision: what is this site *for*?

Before picking a theme, the choice that dominates everything else:

- **(A) Authority site** — landing-page first, content second. Built to convert advisory leads / speaking invitations / book sales. Posts and papers are *evidence*, not the centerpiece. Closest to alvarodenicolas.com.
- **(B) Thought-leadership hub** — content-first. Long-form essays, paper summaries, LinkedIn cross-posts, repos. Built for readers and SEO. Authority emerges from volume + quality.
- **(C) Hybrid** — strong landing page, but with a serious content section behind it. Two distinct visual modes (marketing vs. editorial). Most work, most flexibility.

Pick this first. The recommendations below assume **(C) Hybrid** unless flagged otherwise, since you have real content volume already and don't want to throw it away.

---

## 4. Design alternatives

Four options, ordered from least to most effort. All assume a dark/light dual-mode capability since that's table stakes for a 2026 technical site.

### Option 1 — Stay on `minimal-mistakes`, reskin heavily

**Effort:** ~1–2 weekends · **Risk:** low · **Ceiling:** medium

Keep the current Jekyll + remote-theme setup but:
- Drop the `neon` skin and write a **custom skin SCSS** (one file: typography, palette, spacing scale).
- Replace the home (`index.html`) with a hand-built landing layout — hero, positioning, featured work, latest writing — instead of the default `home` layout.
- Add new collections: `_papers/`, `_talks/`, `_repos/` with custom layouts.
- Strip beautiful-jekyll cruft (see §6).

**Pros**
- No theme migration. Posts keep working unchanged.
- Minimal-mistakes is well-maintained, has built-in archive/tag/category pages, search via Lunr, RSS.
- Fastest path to a visibly different site.

**Cons**
- You inherit minimal-mistakes' opinions (sidebars, "notice" boxes, a slightly dated visual language). Reskinning hides them but doesn't remove them.
- You'll still be writing CSS to *override* the theme rather than expressing a design directly.
- Unlikely to match the alvarodenicolas-level polish without significant override work.

**When this is the right choice:** if the priority is shipping a noticeably better site within 2 weeks and you don't want to babysit a custom build.

---

### Option 2 — Custom Jekyll theme, built from scratch

**Effort:** ~2–3 weeks · **Risk:** medium · **Ceiling:** high

Replace minimal-mistakes entirely. Keep Jekyll (so GitHub Pages still builds for free, and existing `_posts/` Markdown is preserved) but write your own layouts, includes, and SCSS from a blank slate. Use **Tailwind** (via `jekyll-postcss` or a precompiled step) or vanilla SCSS — Tailwind is faster to iterate on.

**Structure suggestion:**
```
_layouts/    home.html, post.html, page.html, paper.html, talk.html
_includes/   header.html, footer.html, post-card.html, paper-card.html
_data/       talks.yml, papers.yml, repos.yml, linkedin.yml
_posts/      (existing)
_papers/     (collection)
_talks/      (collection)
assets/
  css/main.scss
  js/main.js
```

**Design language to aim for:**
- Editorial serif for long-form (e.g., Söhne, Tiempos, or free: Source Serif 4, Newsreader)
- Geometric sans for UI (Inter, Geist, or free: IBM Plex Sans)
- Monospace accents for technical credibility (JetBrains Mono, Geist Mono)
- Restricted palette: one neutral scale + one accent. Dark mode by `prefers-color-scheme`.
- No notice boxes, no badges, no emoji decoration.

**Pros**
- Full control. The site looks the way you want, not the way minimal-mistakes wants.
- You can match alvarodenicolas-level polish or exceed it.
- Easier to add weird new sections (LinkedIn feed, papers, repo grid) because nothing fights you.
- All existing posts survive the migration unchanged (Jekyll Markdown is portable).

**Cons**
- You own the maintenance: dependency upgrades, accessibility, responsive testing.
- Slower first ship.
- Search, archive pages, RSS — you have to wire each one.

**When this is the right choice:** if you want the site to feel *yours* and you're willing to spend a few weeks on it.

---

### Option 3 — Migrate to Astro (or Next.js) on a static host

**Effort:** ~3–4 weeks · **Risk:** medium-high · **Ceiling:** very high

Drop Jekyll. Move to **Astro** (recommended for content sites — ships zero JS by default, MDX support, content collections with type safety, great DX) or **Next.js** (if you anticipate interactive demos / dashboards / live-data features later).

**Hosting:** Vercel, Netlify, or Cloudflare Pages — all have free tiers that match GitHub Pages. Keep `javcamposz.github.io` as a redirect or use a custom domain (`javiercampos.ai`?) which is overdue regardless.

**Pros**
- Modern toolchain. TypeScript, component model, MDX (run React/Vue components inside posts — useful for AI demos).
- Vastly better performance and Lighthouse scores than any Jekyll theme.
- First-class dark mode, view transitions, image optimization (`astro:assets`).
- Easier to add things like a LinkedIn-post importer, an arXiv fetcher, a GitHub-repo grid that auto-updates.
- A lot of high-end personal sites live here (Lee Robinson, Josh Comeau, etc.) — the visual reference set is rich.

**Cons**
- **Migration cost** — every post has to be moved (mostly mechanical: rename frontmatter, fix Liquid → MDX). 24 posts is doable in a day with a script.
- You leave the GitHub Pages free-build pipeline (still free elsewhere, but it's a change).
- Heavier dependency footprint to maintain (`pnpm`, Node, etc.).
- More moving parts when something breaks.

**When this is the right choice:** if you want the site to be a long-term platform — interactive AI demos, live paper indexes, embedded notebooks — not just a blog.

---

### Option 4 — "Claude-design" aesthetic (anthropic.com / claude.ai look)

**Effort:** orthogonal — applies on top of Option 1, 2, or 3 · **Risk:** low

This is a **visual direction**, not a separate stack. The Anthropic/Claude visual identity has a recognisable language:

- **Palette:** warm off-white background (`#F5F4EE` / `#FAF9F5`), near-black text, **terracotta/clay accent** (`#CC785C`-ish), occasional deep teal or muted blue. Dark mode inverts to a warm dark (`#262624` / `#1F1E1D`) rather than pure black.
- **Typography:** serif headlines (Anthropic uses **Tiempos**/**Styrene** mix; free near-equivalents: **Newsreader** or **Source Serif 4** for headings, **Inter** or **Söhne**-alternative for body). The serif/sans contrast is a load-bearing part of the look.
- **Layout:** generous line-height, narrow measure (~65–72ch), large section headers, no chrome around content. Cards have subtle borders, not shadows.
- **Tone:** essayistic. Long captions. No marketing hyperbole. Diagrams over screenshots.
- **Decoration:** almost none. A single accent shape (a soft gradient blob, an asterisk, a hand-drawn line) per section at most.

**Pros**
- Reads as "AI-native serious" without being generic SaaS.
- Aligns with your subject matter (AI safety, agentic systems) — visual language matches content.
- Naturally minimalist, so it ages well.

**Cons**
- Risks looking *derivative* if applied too literally. The look needs at least one element that's distinctly yours (a specific accent colour, a typographic quirk, a personal mark).
- Anthropic's actual fonts (Tiempos, Styrene, Söhne) are commercial — you'll be using lookalikes, which is fine but not identical.

**When this is the right choice:** as the **design direction** for whichever stack you pick. Recommended pairing: **Option 2 (custom Jekyll) + Option 4 (Claude-design language)** — gives you the polish of alvarodenicolas with a visual identity that signals "I work in AI" rather than "I work in private equity".

---

## 5. Recommendation

**Combine Option 2 + Option 4**: a custom Jekyll theme with a Claude-design-inspired visual language, plus a single sharp landing page in the alvarodenicolas mould.

Reasoning:
- You already have 24 posts of real content in Jekyll Markdown — migrating to Astro is *possible* but spending 3 weeks on toolchain when the actual problem is design feels misallocated.
- Minimal-mistakes (Option 1) will get you 70% of the way there but leaves the site looking like *a customised minimal-mistakes site*, not your site.
- A custom Jekyll theme keeps the cheap, boring deployment and gives full design control.
- Claude-design language is on-brand for AI-safety content and avoids the generic-consultant-portfolio look.
- If, in 12 months, you want interactive demos, you can migrate to Astro then — your Markdown will still be portable.

If that's too much, the **fallback** is Option 1 + Option 4: reskin minimal-mistakes with a Claude-style palette and typography. Faster, less polished ceiling, but ships in a weekend.

---

## 6. Cleanup work that's needed regardless

Independent of which option you pick, this needs to happen:

1. **Pick a single theme story.** Either commit to minimal-mistakes (delete `assets/css/beautifuljekyll*.css`, `assets/js/beautifuljekyll.js`, `Appraisals`, `beautiful-jekyll-theme.gemspec`, `OLD_config.yml`, the legacy `staticman.*` files, and rewrite `README.md`) — or replace both.
2. **Move large media off the repo.**
   - `Veritas CH PoC.mov` (61 MB), `AgenticPlannerPoC.mp4` (21 MB), `How to grow your business with AI.wav` (17 MB) — host on YouTube/Vimeo/S3 and embed.
   - The repo is currently ~110 MB+ for what should be a few-MB static site. This slows clones and CI.
3. **Rewrite CI.** The current workflow uses `appraisal` for gem testing — irrelevant for a personal site. A 10-line `actions/jekyll-build` workflow is enough.
4. **Custom domain.** `javcamposz.github.io` is fine; `javiercampos.ai` or similar is better for the positioning you want.
5. **Decide the three untracked files.** [email_template.md](email_template.md), [google-apps-script.js](google-apps-script.js), [invitation_1.md](invitation_1.md) — commit, gitignore, or delete. They've been sitting locally since November.
6. **Do you still need beautiful-jekyll?** **No.** The site doesn't use it now. Strip the cruft as part of the redesign — see item 1.

---

## 7. New content surfaces to design for

You called these out — the redesign should have a *place* for each:

| Surface | Suggested treatment |
|---|---|
| LinkedIn posts | A new `_linkedin/` collection or pulled at build time via a script. Treated as short-form notes, separate index page from blog. |
| New research paper | First-class `_papers/` collection. Each paper gets a landing page (abstract, BibTeX, PDF link, key figures). Featured on home. |
| GitHub repos | `_data/repos.yml` (manually curated, 4–6 highlights). Optionally fetched live from GitHub API at build time. Don't show all repos. |
| Books | Already exist as content; promote to a dedicated `/books/` index page with cover, excerpt, retailer links. |
| Talks / podcasts | `_data/talks.yml` driving a single timeline-style page. |
| Newsletter | Keep, but redesign signup as an embedded form, not a notice box. |

---

## 8. Suggested next steps

1. **You decide:** (A) authority site / (B) content-first / (C) hybrid. (§3)
2. **You decide:** Option 1 / 2 / 3, with or without the Claude-design overlay (§4–5).
3. Once chosen: I'll produce a more detailed implementation plan — file-by-file, with a design-tokens spec (palette, type scale, spacing) and a migration checklist for the 24 existing posts.
4. In parallel, do the cleanup in §6 — that's safe to start now regardless of design direction.
