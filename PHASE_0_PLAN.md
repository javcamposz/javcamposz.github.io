---
title: Phase 0 — implementation plan
status: ready-for-build
date: 2026-04-26
companions:
  - REDESIGN_OPTIONS.md
  - DESIGN_IDEAS.md
---

# Phase 0 — what ships today

A focused first slice of the redesign. Everything that fits in a day, nothing that doesn't. Phase 1+ (full custom theme, wiki publishing, embedded agent) is deferred and tracked separately.

---

## 1. Decisions confirmed

From your message:

| Question | Answer |
|---|---|
| Site shape (REDESIGN_OPTIONS §3) | **(C) Hybrid** — strong landing page in front of serious content. |
| Platform (REDESIGN_OPTIONS §4) | **Option 2** (custom Jekyll theme) **+ Option 4** (Claude-design aesthetic), staying on GitHub Pages. |
| First visible feature | **Token-streaming hero** (DESIGN_IDEAS §2 #1), in the Claude-design language. |
| Content additions today | New paper(s), new conference (Chile + others). |
| New surface to scope | LinkedIn posts. |

---

## 2. Phase 0 goal & non-goals

### Goal
Ship a **new home page** today that:
1. Looks unmistakably different from the current site.
2. Establishes the Claude-design tokens (palette, type, spacing) for the rest of the rebuild to inherit.
3. Surfaces the latest paper and the upcoming Chile engagement.
4. Has a placeholder section for LinkedIn posts (with a real plan behind it for Phase 1).

### Non-goals (explicitly deferred)
- **Not** ripping out `mmistakes/minimal-mistakes`. The remote theme keeps rendering posts, archive, tag pages, RSS. We override only the home page in Phase 0.
- **Not** migrating the 24 existing blog posts. They keep rendering on the current `single` layout.
- **Not** publishing the `llm_db` wiki yet (that's Phase 2 per DESIGN_IDEAS §5).
- **Not** removing the beautiful-jekyll cruft. We do that in Phase 1 to keep today's blast radius small.
- **Not** wiring an embedded agent. Phase 2.
- **Not** moving large media off the repo. Phase 1.

### Why this scope
Today's job is **establish a visible new identity** + **set the foundation** (tokens, custom layouts, custom CSS pipeline). Once that's in, every later phase is faster.

---

## 3. Design tokens (Claude-design, adapted)

These go in **one** SCSS partial — `assets/css/_tokens.scss` — and every later layout reads from them.

### Palette

```scss
// Light mode (default — warm off-white)
$color-bg:           #FAF9F5;   // Anthropic warm cream
$color-bg-elevated:  #F5F4EE;   // cards, subtle blocks
$color-bg-muted:     #EFEDE4;   // borders, dividers when stronger needed
$color-fg:           #1A1915;   // near-black, slight warmth
$color-fg-muted:     #5C5A52;   // secondary text
$color-fg-subtle:    #8A8880;   // captions, metadata
$color-accent:       #CC785C;   // terracotta — Anthropic clay
$color-accent-strong:#A85A40;   // accent on hover/active
$color-border:       #E5E2D6;
$color-link:         #CC785C;
$color-link-visited: #A85A40;
$color-success:      #6B8E5A;   // muted sage, used sparingly
$color-warning:      #C68A4E;   // used sparingly

// Dark mode (warm dark, not pure black)
$color-bg-dark:           #1F1E1D;
$color-bg-elevated-dark:  #262624;
$color-bg-muted-dark:     #2E2D2A;
$color-fg-dark:           #ECEAE0;
$color-fg-muted-dark:     #A8A599;
$color-fg-subtle-dark:    #6F6D63;
$color-accent-dark:       #E08B6E;   // brighter terracotta for dark contrast
$color-border-dark:       #3A3835;
```

### Typography

Free fonts only (commercial Tiempos/Styrene/Söhne avoided):

```scss
// Headlines (serif, editorial)
$font-display: 'Newsreader', 'Source Serif 4', Georgia, serif;

// Body / UI (geometric sans)
$font-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

// Code, terminal accents (mono)
$font-mono: 'JetBrains Mono', 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

// Type scale (modular, 1.25 ratio at base 17px)
$fs-xs:    0.75rem;    // 12.75px — captions
$fs-sm:    0.875rem;   // 14.875px — meta
$fs-base:  1rem;       // 17px — body
$fs-md:    1.25rem;    // 21.25px — lede
$fs-lg:    1.75rem;    // 29.75px — h3
$fs-xl:    2.5rem;     // 42.5px  — h2
$fs-2xl:   3.5rem;     // 59.5px  — h1
$fs-3xl:   5rem;       // 85px    — display

// Line heights
$lh-tight: 1.15;       // headlines
$lh-snug:  1.35;       // sub-headlines
$lh-base:  1.65;       // body
```

### Spacing & layout

```scss
$measure: 68ch;            // body text max width — narrow editorial measure
$measure-wide: 84ch;       // landing page sections
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 16px;
$gutter: clamp(1rem, 4vw, 3rem);
```

These are the values. Everything else is derived.

---

## 4. File-by-file changes for today

### 4.1 New files

| Path | Purpose |
|---|---|
| `assets/css/main.scss` | Top-level Sass entry. Imports `_tokens`, `_base`, `_landing`. Has Jekyll front-matter so it compiles. |
| `assets/css/_tokens.scss` | The design tokens above. |
| `assets/css/_base.scss` | Body resets, link styles, dark-mode media query, font loading. |
| `assets/css/_landing.scss` | Styles specific to the new home page. |
| `assets/js/landing.js` | Token-streaming hero behaviour + small enhancements. |
| `_layouts/landing.html` | Custom layout for the home page. **Does not extend any minimal-mistakes layout** — full HTML control. |
| `_data/talks.yml` | Conferences/talks data, including Chile. |
| `_data/papers.yml` | Papers data, including AgentMisalignment + DeepMind safety-case review. |
| `_data/linkedin.yml` | LinkedIn posts (initially 2-3 manually). Schema is committed, content grows. |
| `_includes/landing/hero.html` | Token-streaming hero markup. |
| `_includes/landing/papers.html` | Latest papers section, reads from `_data/papers.yml`. |
| `_includes/landing/talks.html` | Talks/conferences section, reads from `_data/talks.yml`. |
| `_includes/landing/linkedin.html` | LinkedIn posts strip (Phase 0: top 3 from `_data/linkedin.yml`). |

### 4.2 Modified files

| Path | Change |
|---|---|
| `index.html` | Switch front-matter `layout: home` → `layout: landing`. Remove minimal-mistakes-specific markup (`feature__wrapper`, `notice--*`). New body becomes a sequence of `{% include landing/*.html %}` calls. |
| `_includes/head/custom.html` | Add Google Fonts `<link>` for Newsreader, Inter, JetBrains Mono (preconnect + display=swap). Add `<link rel="stylesheet" href="/assets/css/main.css">`. |
| `_config.yml` | Add `sass:` block (`sass_dir: assets/css`, `style: compressed`). Optional: prepare a `head_scripts` injection for `landing.js` (only loaded on landing). |

### 4.3 Untouched

- All `_posts/`
- `_includes/nav.html` — keep the masthead shim
- The minimal-mistakes remote theme reference in `_config.yml`
- `aboutme.md`, `author.md`, `autonomous-minds.md`, etc.

---

## 5. Token-streaming hero spec

### Visual

A single screen-first viewport (`min-height: 90vh`) that contains:

- A small, mono-typeface "prompt line" on top: `> describe yourself in one sentence`
- A serif display headline below it that types itself out, character by character.
- A blinking cursor.
- After streaming completes (~3s), a quiet sub-headline appears with role + role + role pattern.
- Two restrained buttons: *Read the latest paper* (primary) / *Connect on LinkedIn* (ghost).
- No background image, no gradient. Whitespace.

### The streamed copy (proposed — your call)

Three options. **Pick one.** They lean differently.

**Option A — Operator-balanced:**
```
> describe yourself in one sentence

I am a Group CTO and Chief AI Officer who builds agentic
organisations and researches the safety problems they create.
```

**Option B — Researcher-forward (recommended for audience #2):**
```
> describe yourself in one sentence

I run AI at executive level, and I research what fails when
agents are given more autonomy than the systems around them
can govern.
```

**Option C — Punchy:**
```
> describe yourself in one sentence

Operator. Researcher. Author. I help boards and frontier labs
turn AI into reality, safely and at scale.
```

### Behaviour

- **No real LLM call.** The hero is a precomputed string streamed via `setTimeout` at ~25–35 ms per character with small jitter. Looks like an LLM, costs $0, never breaks.
- **Respects `prefers-reduced-motion`.** If set, the full text appears immediately with no animation, cursor static. Accessibility is non-negotiable here.
- **Skippable.** Click anywhere or press any key during the stream → fast-forward to end state.
- **Replayable.** A small `↻ replay` mono-text link appears under the cursor after completion. Cheap delight.

### Implementation sketch (`assets/js/landing.js`, ~40 lines)

```js
(() => {
  const el = document.querySelector('[data-typewriter]');
  if (!el) return;
  const text = el.dataset.typewriter;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) { el.textContent = text; return; }

  let i = 0;
  let cancelled = false;
  const tick = () => {
    if (cancelled || i >= text.length) return finish();
    el.textContent = text.slice(0, ++i);
    setTimeout(tick, 25 + Math.random() * 15);
  };
  const finish = () => { el.textContent = text; el.classList.add('done'); };

  document.addEventListener('keydown', () => { cancelled = true; finish(); }, { once: true });
  el.addEventListener('click', () => { cancelled = true; finish(); }, { once: true });
  tick();
})();
```

Cursor is a CSS `::after` with a `blink` keyframe; hidden once `.done` is added.

---

## 6. LinkedIn posts — exploration & recommendation

You asked specifically how to surface "all my LinkedIn posts". Here's the analysis.

### Option matrix

| Approach | Setup | Maintenance | Quality | Verdict |
|---|---|---|---|---|
| **(a) Manual paste** — copy each post body into `_data/linkedin.yml` or `_linkedin/*.md` | Free | High (you do it for every post) | Full control, full Markdown formatting, your edits only | Good for ~10 highlights, infeasible for "all". |
| **(b) LinkedIn Data Export** — Settings → "Get a copy of your data" → returns `Shares.csv` with every post you've made | Free, ~24h wait once | Re-export quarterly + script to convert CSV → Markdown | Lossy on formatting (CSV strips line breaks weirdly), no images | **Best automated path.** Re-export quarterly is cheap. |
| **(c) Third-party scraper services** — RSS.app, Phantombuster, Bardeen | $5-30/month | Low (auto) | Captures media, but TOS-grey, can break on LinkedIn HTML changes | Risky for someone whose brand is *trustworthy AI*. Skip. |
| **(d) LinkedIn API** — official | Requires LinkedIn Marketing Developer Platform partnership | n/a | Limited to company pages, not personal feeds | **Not available** for personal posts. Skip. |
| **(e) GitHub Action with browser automation** (Playwright + your cookies) | Free but fragile | High when LinkedIn changes its DOM | Captures everything | Maintenance trap. Skip. |
| **(f) Hybrid: curated + dump** — top 10–20 hand-picked posts as full Markdown entries (`_linkedin/*.md` collection), plus a quarterly bulk import of the rest from (b) into a flat archive | Free, ~1 day initial | Low | Best of both | **Recommended.** |

### Recommendation

**Path (f)** — hybrid:

- Create a Jekyll **collection** `_linkedin/`. Each file is one post:
  ```yaml
  ---
  date: 2026-03-15
  url: https://www.linkedin.com/posts/camposjavier_…
  topics: [agent-misalignment, evals]
  featured: true       # optional, surfaces on home page
  ---
  Body of the post in Markdown.
  ```
- On the **home page**, show the 3 most recent `featured: true` posts as cards (Phase 0 surface).
- A dedicated `/linkedin/` index page (Phase 1) lists everything chronologically with a topic filter.
- Once a quarter, run LinkedIn data export → run a small `scripts/import-linkedin.py` (Phase 1) → it produces one Markdown file per post in `_linkedin/`. New posts you can directly mark `featured: true` and edit before publishing.

### Phase 0 deliverable for LinkedIn

- The collection structure exists.
- 3 hand-picked recent posts are committed as `_linkedin/*.md` so the home-page section has real content.
- A `_linkedin/README.md` documents the import-by-export process for future you.

The full quarterly importer is Phase 1.

---

## 7. New paper + conferences — content additions

### Papers (`_data/papers.yml`)

Two entries to add today:

```yaml
- id: agent-misalignment
  title: "AgentMisalignment: Measuring the Propensity for Misaligned Behaviour in LLM-Based Agents"
  authors: "et al."  # ← FILL: full author list
  venue: "ICLR 2026"
  status: accepted
  date: 2025-06-04
  arxiv: "https://arxiv.org/abs/2506.04018"
  pdf: "/assets/papers/agent-misalignment.pdf"  # ← optional, to upload
  summary: "A propensity benchmark covering shutdown resistance, oversight evasion, sandbagging and power-seeking on frontier models. Key finding: persona system prompts shift misalignment more than the choice of model itself."
  tags: [evals, alignment, agents]

- id: deepmind-safety-case-review
  title: "Lessons from External Review of DeepMind's Scheming Inability Safety Case"
  authors: "et al."  # ← FILL
  venue: "Arcadia Impact preprint"
  status: preprint
  date: 2026-04
  pdf: "/javier/Lessons+from+external+review+of+safety+cases.pdf"  # ← already in repo
  summary: "Applied the Assurance 2.0 / CAE methodology to externally review GDM's public scheming-inability safety case for Gemini 2.5. Translated review process into recommendations for AI developers, AISIs and regulators."
  tags: [safety-cases, governance, frontier-labs]
```

The PDF for the second one is already in `javier/`. We should move it to `assets/papers/` and link from there.

### Talks (`_data/talks.yml`)

```yaml
- id: chile-2026
  title: "TBD — Chile event"           # ← FILL: actual title
  organisation: ""                      # ← FILL
  city: "Santiago, Chile"               # ← confirm
  date: 2026-??-??                      # ← FILL
  url: ""                                # ← FILL
  status: upcoming
  role: keynote                          # ← confirm
  tags: [agentic-ai, ai-safety]

- id: ecosystems2030-coruna
  title: "Agentic AI Masterclass"
  organisation: "Ecosystems2030"
  city: "A Coruña, Spain"
  date: 2025-10-01
  url: "https://ecosystems2030.com/agentic-ai-masterclass/"
  status: past

- id: ai-world-congress-2024
  title: "Speaker"
  organisation: "AI World Congress 2024"
  city: "London, UK"
  date: 2024-05-30
  url: "https://aiconference.london/agenda/"
  status: past

- id: ai-big-data-expo-2024
  title: "Speaker"
  organisation: "AI & Big Data Expo"
  city: "London, UK"
  date: 2024-11-30
  url: "https://www.ai-expo.net/global/speaker/javier-campos/"
  status: past
```

### Inputs I need from you to fill the placeholders

1. **Chile event** — title, host org, exact date, URL, your role (keynote / panel / workshop).
2. **Any other upcoming events** to surface alongside Chile.
3. **AgentMisalignment author list** as you'd like it cited.
4. **DeepMind review author list** likewise.

If you give me those four, the data files go in clean.

---

## 8. Home page composition

The new `index.html` becomes:

```liquid
---
layout: landing
title: "Francisco Javier Campos Zabala"
hero_prompt: "describe yourself in one sentence"
hero_text: "{{ chosen Option A/B/C from §5 }}"
---

{% include landing/hero.html %}
{% include landing/credentials.html %}   <!-- one-line: CTO Cape.io · Researcher Cambridge AI Safety Hub · Author -->
{% include landing/papers.html %}        <!-- 2 papers from _data/papers.yml -->
{% include landing/books.html %}         <!-- 2 books, existing covers -->
{% include landing/talks.html %}         <!-- next 3 upcoming + recent past -->
{% include landing/linkedin.html %}      <!-- top 3 featured -->
{% include landing/contact.html %}       <!-- email + LinkedIn + GitHub -->
```

Each include is a small, self-contained block with classes scoped to `_landing.scss`. None of them touch minimal-mistakes.

---

## 9. Acceptance criteria for Phase 0

We can call Phase 0 shipped when:

1. `bundle exec jekyll serve` renders the new home page locally without errors.
2. The hero streams its text on first load, with a working blinking cursor.
3. `prefers-reduced-motion: reduce` is honoured (text appears instantly).
4. Light mode is the warm cream `#FAF9F5`. Dark mode (auto via `prefers-color-scheme`) is the warm dark `#1F1E1D`.
5. The papers section lists AgentMisalignment + DeepMind safety-case review with working links.
6. The talks section shows the Chile entry (or a placeholder you can fill in) plus past talks.
7. The LinkedIn section shows 3 hand-picked posts.
8. All other URLs (`/about/`, `/author/`, `/autonomous-minds/`, every blog post) still render correctly via minimal-mistakes — *we didn't break anything*.
9. CI build passes on `master` push.

---

## 10. What I need from you to start the build

Quick decisions/inputs (most are 1-line answers):

- [ ] **Hero copy** — Option A / B / C from §5, or a tweaked version.
- [ ] **Chile event details** (title, host, date, URL, role).
- [ ] **Any other upcoming talks** to surface.
- [ ] **Paper author lists** for the two papers (or "use the arXiv listing as-is").
- [ ] **3 LinkedIn posts to feature** today — paste the URLs (I'll fetch the bodies, or you paste them).
- [ ] **Pull-quote / bio-line** for the credentials strip — one short sentence under the hero. Default: *"Group CTO & CAIO @ Cape.io · AI Safety Researcher · Cambridge AI Safety Hub & Arcadia Impact"*. Confirm or replace.

Once those land I can start implementing in this same session — Phase 0 is roughly 15 file changes and is well-defined enough that there's no further design uncertainty.

---

## 11. What gets deferred (and to which phase)

| Item | Phase |
|---|---|
| Strip beautiful-jekyll cruft (CSS/JS/gemspec/Appraisals/OLD_config.yml) | **Phase 1** |
| Move large media (.mov, .mp4, .wav) off the repo | **Phase 1** |
| Custom layouts for `single` / `archive` (replace minimal-mistakes for posts) | **Phase 1** |
| LinkedIn quarterly importer script | **Phase 1** |
| Dedicated `/papers/` and `/talks/` index pages | **Phase 1** |
| Embedded Claude+RAG agent | **Phase 2** |
| Quartz garden over `llm_db/research-agi-db` (DESIGN_IDEAS §5) | **Phase 2** |
| `contradictions.md` / `open_questions.md` / `log.md` as featured surfaces | **Phase 2** |
| Domain move to `javiercampos.ai` | **Phase 2** |
| nanochat blog post + weights | **Phase 3** (optional) |
| Per-page Claude Code transcripts | **Phase 3** (optional) |
| Interactive CAE viewer for DeepMind review | **Phase 3** (optional) |

This phasing means each phase ships something useful on its own and never blocks the next.
