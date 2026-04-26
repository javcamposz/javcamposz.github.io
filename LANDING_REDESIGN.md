---
title: Landing redesign — make the USP obvious in 2 seconds
status: proposal
date: 2026-04-26
companion: PHASE_0_PLAN.md
---

# Landing redesign

## 1. Diagnosis — why the current hero buries the USP

Phase 0 shipped a **typography-only, animated** hero. It looks AI-native, but it has three problems against the test you just set ("USP obvious on landing"):

| Issue | Evidence |
|---|---|
| **No face, no name, no credibility marker above the fold.** A first-time visitor sees a `> describe yourself in one sentence` prompt and a slowly-typing line. They don't yet know *who* they're reading. | The name "Francisco Javier Campos Zabala" only appears in the browser tab and the topbar microcopy. |
| **The USP arrives 3 seconds late.** The streaming animation is delightful for a returning visitor; it's a barrier for a new one. | A recruiter scanning at airport speed leaves before the second line types out. |
| **No proof anchor.** No quote, no logo strip, no "Author of … · Advisor to …". | Tristan Harris surfaces *"the closest thing Silicon Valley has to a conscience" — The Atlantic* immediately. Mustafa surfaces *"CEO of Microsoft AI · Co-founder DeepMind, Inflection · Author 'The Coming Wave' (Bill Gates endorsed)"* immediately. |

The streaming effect should be a **signature beat**, not the headline.

## 2. What both references actually do (distilled)

| Pattern | Tristan | Mustafa |
|---|---|---|
| **Name as primary visual** | medium | huge serif |
| **Role line right under the name** | "Tech Ethicist · Entrepreneur · Co-Founder CHT" | "CEO of Microsoft AI" |
| **Single anchor visual above the fold** | documentary poster | professional headshot |
| **Credibility marker in first 200 px** | *Atlantic* quote + Emmy + 100 M reach | DeepMind / Inflection / book / Bill Gates |
| **Concrete CTA tied to the freshest artifact** | "Watch the trailer" | "Watch on YouTube" / "Buy now" |
| **Reading time of the hero** | ~2 seconds | ~2 seconds |

Both are static. Both are scannable. Neither requires animation to communicate the USP.

## 3. Three options for the new hero

All three keep the Phase 0 design tokens (warm cream, terracotta accent, Newsreader serif, JetBrains Mono prompts).

### Option A — "Mustafa" : Photo-first, two-column hero

```
┌──────────────────────────────────────────────────────────────────────┐
│  javcampos.io                       research books talks writing     │  ← topbar (unchanged)
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Francisco Javier                       ┌─────────────────┐           │
│  Campos Zabala                          │                 │           │
│                                         │   [headshot]    │           │
│  Group CTO & Chief AI Officer @         │                 │           │
│  Cape.io · AI Safety Researcher ·       │   240 × 240,    │           │
│  Author                                  │   subtle warm   │           │
│                                         │   greyscale     │           │
│  I help boards and frontier labs        │                 │           │
│  turn AI into reality, safely and       └─────────────────┘           │
│  at scale.                                                            │
│                                                                       │
│  Author of Autonomous Minds (Wiley) & Grow Your Business with AI      │  ← proof strip (mono, small)
│  (Springer) · Advisor to BoE, FCA & EU AI Act                         │
│                                                                       │
│  [ Read AgentMisalignment (ICLR 2026) → ] [ Get Autonomous Minds ]    │  ← two concrete CTAs
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

- **Reading time:** ~2 seconds.
- **Strengths:** maps 1:1 to Mustafa's pattern. Warm, human, credible.
- **Trade-offs:** depends on a good headshot (you have `/assets/img/JavierCampos.jpg` already; would benefit from a more recent shot). Risks reading "consultant" if the photo is corporate.

### Option B — "Tristan" : Artifact-first, single-column hero

The visual anchor is **not** a photo of you — it's a flagship artifact: the **AgentMisalignment** paper figure, the **Autonomous Minds** book cover, or a single hand-drawn diagram representing your central thesis.

```
┌──────────────────────────────────────────────────────────────────────┐
│  javcampos.io                       research books talks writing     │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                                                                │  │
│  │           [ ARTIFACT — paper figure / book cover ]             │  │  ← single dominant visual
│  │                                                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  Francisco Javier Campos Zabala                                       │
│  Group CTO & Chief AI Officer @ Cape.io · AI Safety Researcher        │
│                                                                       │
│  "Persona system prompts shift misalignment more than the choice      │  ← single sharp pull-quote
│  of model itself."                                                    │     from your own paper
│  — AgentMisalignment, ICLR 2026                                       │
│                                                                       │
│  [ Read the paper → ]   [ Get Autonomous Minds ]                      │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

- **Strengths:** very on-brand for a researcher. The artifact carries weight a face cannot. Tristan-style — the work is the calling card.
- **Trade-offs:** asks more of you (need a good figure or cover at high resolution). Less warm than a photo.

### Option C — "Hybrid" : Name-first hero, streaming as second beat *(recommended)*

The current streaming hero is **kept**, but moved to the **second** screen as a "personality beat". The first screen is a static, scannable USP block — closer to Mustafa than Tristan, but with your photo as a smaller element on the right.

```
┌──────────────────────────────────────────────────────────────────────┐
│  javcampos.io                       research books talks writing     │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Francisco Javier                          ┌─────────────┐            │
│  Campos Zabala                              │             │            │
│  ─────────────────                          │  [headshot] │            │
│  Group CTO & CAIO @ Cape.io                 │   200 px,   │            │
│  AI Safety Researcher                       │  subtle     │            │
│  Cambridge AI Safety Hub · Arcadia Impact   │  warm       │            │
│                                              │  greyscale  │            │
│  I help boards and frontier labs            │             │            │
│  turn AI into reality —                     └─────────────┘            │
│  safely, and at scale.                                                 │
│                                                                       │
│  ── Author of Autonomous Minds (Wiley, 2025) and Grow Your Business    │  ← proof strip
│     with AI (Springer, 2023) · Advisor to BoE, FCA, EU AI Act ·        │
│     Co-author AgentMisalignment (ICLR 2026)                            │
│                                                                       │
│  [ Read AgentMisalignment → ]  [ Get Autonomous Minds ]  [ LinkedIn ] │
│                                                                       │
├──── scroll ──────────────────────────────────────────────────────────┤
│                                                                       │
│  > what are you working on right now?                                 │  ← the current streaming hero
│  Agentic workforces at Cape.io. Frontier safety-case reviews at        │     becomes the SECOND beat
│  Arcadia Impact. Misalignment benchmarks at Cambridge.                 │
│                                                                       │
│  > what makes your work different?                                    │  ← could add a third pair
│  I sit at the intersection of operating AI at executive level and      │
│  researching what fails when agents are given more autonomy.           │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

- **Strengths:** USP visible without scroll, *and* keeps the AI-native signature. Lowest content risk. Highest narrative breadth.
- **Trade-offs:** more elements to balance. Slightly less "wow" on first paint than the artifact option B.

## 4. Recommendation

**Option C — Hybrid.** Reasons:

1. It satisfies the brief literally: name + USP + proof + concrete CTA all visible in the first viewport, with no animation required.
2. It preserves the streaming effect — that signature is genuinely good and worth keeping; it just needs to stop being the headline.
3. The token-stream becomes more interesting in this position because it can be **multiple Q&A pairs** that read like an interview — a small piece of editorial that visitors *want* to scroll for, rather than a single line they're forced to wait through.
4. It maps cleanly to Mustafa's structure (his core reference), with the photo and the proof line in the same positions.

If you'd rather skip the photo entirely (some people prefer this), the fallback is **Option B** with the *Autonomous Minds* cover as the artifact. Cleanest visual, riskier for "warmth".

## 5. Section reorder for the rest of the page

Current order: hero → credentials → papers → books → talks → linkedin → contact.

Both references prioritise **flagship work right after the hero**, then proof, then everything else. Proposed new order:

| # | Section | Why this position |
|---|---|---|
| 1 | **Hero** (Option C — name + USP + proof + 2 CTAs + photo) | USP in 2 seconds. |
| 2 | **Streaming Q&A beat** (current hero, repurposed) | Personality + signals "AI-native" without burying anything. |
| 3 | **Selected work** (papers + books **combined**, not separate sections) | Your single most credible block. Two papers + two books in one grid is more impressive than four small grids. |
| 4 | **Talks & speaking** (Madrid, Chile, Coruña, etc.) | "He's currently active." |
| 5 | **Bio paragraph** (a real one, ~120 words) | Both Tristan and Mustafa have one. We don't. |
| 6 | **Recent essays** (LinkedIn) | Voice + cadence. Lower in the page is fine. |
| 7 | **Contact** | unchanged. |

This makes the page **flagship-led** instead of feature-led.

## 6. Specific copy & assets needed

To build Option C I need from you:

- [ ] **Photo.** Confirm I should use `/assets/img/JavierCampos.jpg`, or supply a higher-quality / more recent one. Square crop preferred. Permission to apply a subtle warm-greyscale treatment (still recognisably you).
- [ ] **Hero proof line — sign off the wording.** Default I'll use:
  > *Author of* Autonomous Minds *(Wiley, 2025) and* Grow Your Business with AI *(Springer, 2023). Advisor to the Bank of England, FCA, and EU AI Act. Co-author* AgentMisalignment *(ICLR 2026).*
- [ ] **Primary CTA target.** Default: AgentMisalignment paper. Alternative: "Get *Autonomous Minds*" if book sales matter more right now.
- [ ] **Bio paragraph** for the new bio section — I can draft from your CV; ~120 words. Confirm I should write it.
- [ ] **Q&A streaming pairs** for beat #2 — keep the two we have, or rewrite to a 3-pair "interview" format? Suggested third pair:
  > `> what makes your work different?`
  > `I operate AI at executive level and research what fails when agents get more autonomy than the systems around them can govern.`
- [ ] **Permission to drop the existing `_includes/landing/credentials.html`** (its single line moves into the hero, becomes the proof strip).

## 7. Effort estimate

| Task | Effort |
|---|---|
| New `_includes/landing/hero.html` (two-column, photo + name + USP + proof + CTAs) | ~1 hour |
| New `_includes/landing/intro.html` (the streaming Q&A beat) | ~30 min |
| Combine `papers.html` + `books.html` into `selected_work.html` | ~30 min |
| New `_includes/landing/bio.html` | ~20 min + bio copy |
| Photo crop + warm-greyscale CSS treatment | ~30 min |
| SCSS additions in `_landing.scss` for the two-column hero, proof strip, larger name | ~1 hour |
| Update `index.html` to the new section order | ~10 min |
| Build + visual sanity check | ~20 min |

**Total: ~4 hours of focused work.** Same shape as Phase 0 — the design tokens and the JS don't change.

---

Once you sign off the option (A / B / C) and the six inputs in §6, I'll cut the actual files. If you want to see two options side-by-side before deciding, I can build A *and* C as branches.
