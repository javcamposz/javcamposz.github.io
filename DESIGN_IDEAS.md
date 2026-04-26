---
title: Design Ideas — distinctive, AI/agentic-native personal site
status: draft
date: 2026-04-26
companion: REDESIGN_OPTIONS.md
---

# Design Ideas — building something genuinely unusual

Companion to [REDESIGN_OPTIONS.md](REDESIGN_OPTIONS.md). That document covered *theme stacks*. This one covers *concepts* — the unusual, AI-native ideas that would make the site memorable instead of "a nice consultant page".

---

## 0. New input: what `/javier/` reveals about positioning

Reading the docs you dropped in [`javier/`](javier/) changes the brief significantly. The current site doesn't reflect who you actually are now. Key signals from the CV and LinkedIn rewrite:

- **Group CTO & Chief AI Officer at Cape.io** — running a fully agentic-driven org on Claude Code / Cowork / Codex 5.5 with MCP into HubSpot/NetSuite/JIRA. 5+ agents in production under explicit human-in-the-loop gates. Author of the Cape.io AI Handbook v3.0.
- **Active AI Safety researcher** at Cambridge AI Safety Hub and Arcadia Impact AI Governance Taskforce. Two preprints in the last 12 months:
  - **AgentMisalignment** (arXiv:2506.04018, ICLR 2026) — propensity benchmark for shutdown resistance, oversight evasion, sandbagging, power-seeking.
  - **Lessons from External Review of DeepMind's Scheming Inability Safety Case** (April 2026) — Assurance 2.0 / CAE methodology applied to Gemini 2.5.
- **Two books**: *Autonomous Minds* (Wiley 2025), *Grow Your Business with AI* (Springer 2023).
- **Regulator-side credentials**: Bank of England + FCA AI Public-Private Forum (2020–2022), EU AI Act advisor.
- **Job target signals** in the folder: a JD for *Research Engineer @ Anthropic* sitting next to the CV. This is a concrete audience.

The site has to land for **two distinct audiences**:
- **CAIO/board recruiters** — Fortune 500 / FTSE 100 looking for someone who can run AI at executive level.
- **Frontier-lab hiring managers** — Anthropic / DeepMind / OpenAI / xAI looking for serious technical safety credibility.

Those two audiences read different signals. A clean alvarodenicolas-style page satisfies the first and *underwhelms* the second. The frontier-lab audience expects to see something that *is itself* an AI artifact — a working demo, an eval, a model. The unusual ideas below are aimed primarily at audience #2 without losing #1.

---

## 1. The thesis

> *The site should not just talk about AI. It should be an AI artifact.*

A Chief AI Officer's personal site that is just static HTML is a tell. It says you don't actually build. The site should demonstrate, at the URL itself, the kind of work you do:

- **Operator credibility** → an agent embedded in the site doing useful work (CV Q&A, paper Q&A, calendar booking).
- **Researcher credibility** → a live, runnable artifact from your papers (eval scenarios, attention viz, scheming-trace explorer).
- **Author credibility** → a knowledge graph of your work that visitors can *traverse*, not just read top-to-bottom.

Below: ideas grouped by difficulty, with honest cost/value calls. After that, deep-dives on the two you flagged (Obsidian/Quartz, and Karpathy/nanochat).

---

## 2. Idea catalogue, by difficulty tier

### Tier 1 — A weekend or two (high bang/buck)

**1. Token-streaming hero.** The home-page headline is generated **token-by-token**, visibly, on first load. It looks exactly like an LLM response streaming in. The actual prompt that "produced it" is shown above (e.g. `> describe this site in one paragraph`). It's a cheap effect (no model needed — a precomputed string with a 30 ms-per-character timer + a fake cursor) and it sets the entire tone of the site in 4 seconds. You can also *actually* call Claude with prompt caching for the real version, but the static version is good enough.

**2. Terminal-style site mode.** Press `~` or `/` and the site flips to a **functional REPL**. Commands map to navigation: `ls papers`, `cat agentmisalignment.md`, `whoami`, `git log`, `download cv`. Tab-complete. History. People who see this either love it (your audience) or ignore it (everyone else, who keeps using the normal nav). Implementation: ~300 lines of vanilla JS, no dependency. The terminal *is* the easter egg that signals "I'm one of you" to engineers.

**3. Latent-space landing map.** A small 2D plot on the home page where each of your ~24 posts is a dot, positioned by **embedding** (run once, offline, with `text-embedding-3-small` or `nomic-embed-text` — store the 2D coords in `_data/embeddings.yml`). Hover a dot, see the title. Click, jump to post. Adds the AgentMisalignment preprint and the safety-case review as larger, differently-coloured dots. Free, static, and visually unique — and *literally* what an AI/ML person makes when they have a content corpus.

**4. CLAUDE.md as a public artifact.** You write CLAUDE.md role specs at Cape.io. Show one. A page where the site's own `CLAUDE.md` is rendered, including the system prompt for the on-site agent, its escalation triggers, and its allowed tools. This is a flex — it says "here's how I actually configure agents in production" — and it doubles as documentation. Pairs with idea #6.

**5. Open notebook.** Every blog post that has a code component (e.g. anything from your LLM/finance/telco series) is rendered with **Pyodide** (Python in the browser) so the code blocks are *live*. The reader runs `model.generate(...)` in the page itself. No server needed. Pyodide is ~10 MB but lazy-loadable on demand.

### Tier 2 — A focused 1–2 weeks

**6. Site-embedded agent ("Ask Javier").** A chat in the corner backed by Claude (with prompt caching against your full content corpus) that can answer questions about your papers, books, and posts. Critically, it is *visibly an agent*: the reasoning trace is shown, the tools it can call are listed (`search_posts`, `fetch_paper_section`, `book_intro_call`), and the system prompt is published on the CLAUDE.md page (#4). Cost: a few cents per conversation, capped per IP per day. This is your CAIO credibility *and* your safety credibility in one widget — because it's visibly governed.

**7. Eval-as-interaction (AgentMisalignment teaser).** Visitor lands on `/research/agent-misalignment/`. They are presented with **one of the actual eval scenarios** from your benchmark (e.g. a shutdown-resistance prompt). They are invited to play the **role of the model** — pick A, B, C, or write a free response. Then the page reveals what GPT-4, Claude, Gemini actually did on this exact scenario, and what your benchmark measures. Turns a paper into 3 minutes of memorable interaction. People will share this.

**8. Quartz / Obsidian digital garden for AI Safety.** Full deep-dive in §4. Replaces the blog with a graph-navigable knowledge garden. *Strongly recommended.*

**9. Live arXiv + GitHub feed.** A page that pulls your arXiv listings, recent GitHub activity, and a curated subset of your LinkedIn posts at build time (or with edge functions if you want it live). Shows you're *active*, not just credentialed. Cron job + GitHub Actions does this on a free tier.

**10. Attention-pattern decoration.** Every page has, in the gutter, a tiny generated **attention-head visualisation** computed from the page's own text running through a small distilled transformer. Pure decoration. Pure "I am an AI person". ~2 KB of WebGL. Karpathy-style.

### Tier 3 — A few weeks, but spectacular

**11. nanochat-on-domain.** Train a small LLM (Karpathy's `nanochat`) on your **own corpus** — the books, blog posts, papers, talks — and serve it. Visitors chat with "Javier-on-the-record": the model only knows what you have actually published. Honest, unique, and a textbook research-engineer artifact. Full deep-dive in §5.

**12. Mechanistic interp dashboard.** For one of the models in AgentMisalignment, expose a **Sparse Autoencoder feature browser** — or even just attention patterns — for the actual eval scenarios. Most visitors won't understand it. The frontier-lab audience will see it from the homepage and that is the point. Builds on top of `transformer-lens` or `nnsight`. 1–2 weeks if you already have the activations cached; longer if not.

**13. CAE/Assurance-2.0 safety-case viewer.** Your DeepMind review uses Claims-Argument-Evidence trees. **Render one as an interactive tree** — click a claim, see the supporting argument, see the evidence node, see your review note. This is *the artifact* of your Arcadia work, and it's the kind of thing that doesn't exist anywhere on the web yet. High status with the safety/eval community.

**14. Agent-built site.** The site's own deployment pipeline is **an agent**. A `cape.io`-style CLAUDE.md role spec for "site editor" agent runs on a schedule: pulls new arXiv papers, drafts a summary post, opens a PR, you review and merge. Document this on the CLAUDE.md page. The site becomes a working demo of your day job.

### Tier 4 — Hard, weird, optional

**15. SSH-able site.** `ssh you@javiercampos.ai` opens a curated TUI session — same content, but accessed via terminal. Real engineers love this. Implementation: Charm's `wish` (Go SSH framework) on a small VPS. Not portfolio material, *signature* material.

**16. WebGPU in-browser training demo.** Visitor opens `/training/`, a tiny GPT trains live in their browser on your blog corpus. Loss curve goes down. Sample text appears. Effectively a Karpathy-style minGPT in WebGPU. Already exists as starting points (`gpt2.c`, `webllm`). 2–3 weeks polish work.

**17. Hand-drawn diagrams as primary content.** Every paper summary is a single, beautifully-drawn diagram (think 3blue1brown or Distill.pub) instead of prose. Long-term moat: nobody has time to do this. Pairs with idea #8 — the diagram nodes are vault entries.

---

## 3. What to *not* do (anti-patterns)

- **Generic SaaS landing-page tropes.** Hero with abstract gradient blobs, three "feature cards", a logo wall of clients, a CTA button. Indistinguishable from a thousand others. Audience #2 will dismiss you in 2 seconds.
- **"Built with React" badge energy.** Showing off framework choices. Nobody cares. The artifact matters.
- **Live AI demo that costs $30/day with no rate limit.** A jailbroken or scraped agent endpoint is an embarrassment for a CAIO. Whatever you ship, ship the governance with it (idea #4).
- **Marketing copy in the first person plural ("we believe…").** You are one person.

---

## 4. Deep dive: Obsidian / Quartz digital garden

### Why this is a strong fit

Your content has unusually **dense conceptual cross-linking**:

- *AgentMisalignment* introduces **shutdown resistance, oversight evasion, sandbagging, power-seeking** — each one a node that connects to other posts.
- The DeepMind review uses **CAE / Assurance 2.0** — concepts that connect to *Autonomous Minds* governance chapters.
- The Cape.io agentic transformation introduces **Skills, Roles, Shadow AI, AI Council** — concepts that recur across posts and into the books.

A linear blog forces a chronological narrative on this. A **graph** lets a reader say "I want to understand sandbagging" and follow the edges. That's how AI safety researchers actually think about the field — alignmentforum.org and LessWrong are essentially digital gardens.

### What the stack looks like

- **Authoring:** [Obsidian](https://obsidian.md/) on your laptop. Vault = a folder of Markdown files with `[[wikilinks]]`. You write in Obsidian, commit the vault to git.
- **Publishing:** [**Quartz**](https://quartz.jzhao.xyz/) (free, open-source, by Jacky Zhao) — turns an Obsidian vault into a static site with backlinks, a graph view, full-text search, and dark mode. Deploys to GitHub Pages, Cloudflare Pages, or Vercel. **This is the obvious choice** for a public Obsidian-style site in 2026.
- **Alternative:** Obsidian Publish (paid, $10/month, simpler but locked to obsidian.md domain unless you pay more). Skip it.
- **Alternative:** [Digital Garden](https://github.com/oleeskild/obsidian-digital-garden) plugin (publishes from Obsidian directly, but more limited than Quartz).

### How the site is structured

```
vault/
  index.md                           ← landing
  about.md
  cv.md
  research/
    agent-misalignment.md            ← paper landing
    deepmind-safety-case-review.md
    concepts/
      sandbagging.md                  ← short concept node
      shutdown-resistance.md
      oversight-evasion.md
      power-seeking.md
      cae-assurance.md
      situational-awareness.md
  books/
    autonomous-minds.md
    grow-your-business-with-ai.md
  cape/
    ai-handbook.md
    skills-and-roles.md
    ai-council.md
  posts/
    2026/
      ...
    2025/
      ...
  talks/
    ...
```

Each concept node is a 100–300 word page that:
1. Defines the concept.
2. Says what *you* think about it.
3. Links to your posts/papers/books that reference it.

A visitor can land on any node and walk the graph in any direction. The home page is a curated sub-graph. Search is full-text. The graph view is the navigation.

### Difficulty / cost

- **Setup:** half a day to install Quartz, configure theme, point the domain.
- **Migration:** 1–2 days to move 24 posts into the vault and add wikilinks. The hard part is not the migration — it's deciding the **concept graph** (which is content work, not engineering).
- **Maintenance:** writing in Obsidian is *more* enjoyable than maintaining Jekyll. Backlinks happen automatically as you write `[[sandbagging]]`.
- **Cost:** $0/month on Cloudflare Pages or GitHub Pages.

### Trade-offs

- **Pro:** a digital garden is the single most distinctive, AI-safety-native format. Massively differentiated from any other CAIO-on-LinkedIn page.
- **Pro:** the concept-node format is a perfect fit for showcasing your research contributions without writing a paper for each.
- **Pro:** Obsidian is a tool you'll *enjoy* using, which means you'll keep writing.
- **Con:** Quartz's default look is good but not unique. You'll want to customise the theme to match a Claude-design or similar identity.
- **Con:** less direct control than a custom-built site. If you want one weird page (e.g. an embedded agent), you bolt it on outside Quartz.
- **Con:** the audience #1 (board recruiters) needs a **cleaner landing page** than a graph. Solution: a normal landing page at `/`, the garden lives at `/garden/`. Or two domains. See §6.

### Verdict

**Strongly recommended.** Quartz + a customised Claude-design theme is the strongest single move you can make right now. It's low-effort, high-distinctiveness, and matches both your content and how you actually think.

---

## 5. Deep dive: publishing your LLM-maintained research wiki

> **Correction:** when you said "the Karpathy repo for an LLM", you meant [`llm_db`](../llm_db/) — which is **not** Karpathy's `nanoGPT`/`nanochat`. It's the **LLM-Wiki pattern** described in [`llm_db/llm-wiki.md`](../llm_db/llm-wiki.md): an LLM agent (Claude Code, Codex) that incrementally builds and maintains a personal knowledge wiki of cross-linked Markdown files in an Obsidian vault. Karpathy nanochat ideas are dropped from this section — for completeness they're preserved at the bottom as §5b.

This is a **much stronger** angle than anything I proposed before, because you already have the artifact — you just haven't published it.

### What's actually in `llm_db/`

You have **two live wikis** maintained by Claude Code:

```
llm_db/
├── llm-wiki.md                       ← the methodology (the "schema")
├── LLM-Wiki-Database-Proposal.md
├── llm_proposal_2.md
├── research-agi-db/                  ← AGI / AI-safety research wiki
│   ├── index.md                       ← master catalog
│   ├── log.md                         ← chronological ingest log
│   ├── open_questions.md              ← live research agenda
│   ├── contradictions.md              ← unresolved tensions
│   ├── paper_plan.md                  ← active paper-in-progress
│   ├── raw/                            ← immutable source PDFs
│   └── wiki/
│       ├── overview.md
│       ├── theses/
│       │   └── law-of-inevitable-divergence.md  ← your central thesis
│       ├── concept-map/
│       │   ├── computational-irreducibility.md
│       │   ├── instrumental-convergence.md
│       │   ├── godelian-limits.md
│       │   └── distributed-cognition.md
│       ├── topics/
│       │   ├── language-and-intelligence.md
│       │   ├── multi-superintelligence-equilibrium.md
│       │   └── fermi-paradox.md
│       ├── source-cards/              ← per-PDF summaries with linked entities
│       ├── objections/
│       └── paper-ideas/
└── work-db/                          ← Cape.io work wiki (presumably private)
```

Sampled content is *substantive* — concept pages with confidence ratings and source refs in YAML frontmatter, an active paper plan ("Proxy Tests of Divergence Mechanisms in Autonomous Optimization Systems"), tracked contradictions like *"Godel vs. Computational Irreducibility as Foundation"*, open questions with research approaches. This is real working material, not placeholder.

### Why this is the headline idea

A typical CAIO/safety-researcher site shows you their *finished* outputs: papers, books, talks. **Yours would show the work-in-progress** — the thesis under construction, the contradictions you haven't resolved yet, the questions you're actively trying to answer, the sources you read this week. Three reasons that's better:

1. **Almost nobody publishes this.** Working researchers either publish polished papers or post short Twitter threads. The middle layer — the *active research notebook* — is almost always private. Publishing it (curated) is genuinely rare and high-status.
2. **Perfect alignment with your positioning.** You're an AI safety researcher who works *on* agents and *with* agents. A site that *is* an LLM-maintained agent artifact demonstrates the practice, not just the talk. Audience #2 (frontier labs) sees this immediately.
3. **It already exists.** Most "great content idea" plans require months of writing. This is a publishing decision, not a writing decision.

### The new headline architecture

```
javiercampos.ai/                      ← clean executive landing (audience #1)
├── /                                  ← who/what/credentials, alvarodenicolas-clean
├── /books/                             ← Autonomous Minds, Grow Your Business
├── /papers/                            ← AgentMisalignment, DeepMind review
├── /cv/                                ← downloadable CV
├── /talks/                             ← talks index
└── /garden/  ← THE WIKI               ← audience #2 lives here
    ├── /overview                       ← published wiki/overview.md
    ├── /thesis/divergence              ← Law of Inevitable Divergence
    ├── /concepts/...                   ← concept-map nodes
    ├── /topics/...                     ← topics nodes
    ├── /open-questions                 ← featured: open_questions.md
    ├── /contradictions                 ← featured: contradictions.md
    ├── /log                            ← live activity feed
    └── /paper-in-progress              ← paper_plan.md — the working draft
```

The garden is built with **Quartz** (per §4 above) directly off a curated subset of the `research-agi-db/` Obsidian vault. The wiki authoring stays in your existing Claude-Code-maintained workflow. Publishing is a `git push` of a `vault-public/` symlink.

### The two innovations nobody else does

These are the moves that turn a digital garden from "nice site" into "you have to send me that link":

#### (i) The contradictions page as a featured surface

Your wiki already maintains [`contradictions.md`](../llm_db/research-agi-db/contradictions.md) — a structured log of unresolved tensions in the corpus, with severity, position A, position B, and resolution paths.

**No personal site I have ever seen has this.** Most researchers hide their unresolved disagreements. Publishing them as a first-class navigation item ("Things I haven't figured out") is intellectually honest, distinctive, and a magnet for the kind of researcher who wants to email you.

#### (ii) The log as a live activity feed

`log.md` is an append-only chronological record of every ingest, query, and lint pass — `## [2026-04-26] ingest | Lessons from External Review of DeepMind's Scheming Inability Safety Case`. Render it on the site as a **timeline** at `/log` or in a sidebar.

Effects:
- The site looks **alive** without any social-media plumbing.
- It demonstrates the LLM-Wiki pattern in action — visitors literally see the agent doing maintenance work.
- It functions as a research changelog: "what is Javier reading and thinking about right now?"

### The "agent literally maintains the site" angle

A natural extension that fits your job target perfectly:

- The Cape.io CLAUDE.md/SKILL.md framework you already use can be lifted directly into the site's repo.
- Every wiki page edit, every ingest, every lint pass is a Claude Code session. Capture the session transcripts and link them from each page (collapsed by default): *"This page was last updated by Claude Code on 2026-04-22. Show transcript."*
- Publish the **CLAUDE.md** for the site itself — the role spec, escalation rules, what the agent is allowed to do, what it isn't. This is the same pattern you described in your CV ("Skills + Roles framework"). Audience #1 (boards) reads this as governance maturity. Audience #2 (frontier labs) reads it as engineering practice.

This is the answer to "how do I make my site feel different in an AI-native way" — the site **is** what you do for a living, made public.

### Difficulty / cost

| Step | Effort |
|---|---|
| Decide what's public vs. private (curate `research-agi-db` subset) | 1–2 evenings |
| Set up Quartz against the public subset | half a day |
| Customise Quartz theme to a Claude-design palette (per §4) | 1–2 days |
| Build the clean landing page at `/` | 1 day |
| Wire `log.md` into a `/log` timeline view | half a day |
| Optional: publish CLAUDE.md spec for the site | 2 hours |
| Optional: publish session transcripts under each page | 1 day |
| **Total** | **~1 focused week, or 3 weekends** |

**Maintenance:** zero added cost. You're already maintaining the wiki — publishing is just pointing Quartz at a folder.

**Compute:** $0/month on Cloudflare Pages or GitHub Pages.

### Trade-offs and risks

- **Privacy curation is the real work.** You can't publish `work-db/` (Cape.io confidential) and parts of `research-agi-db/` may be too rough. Solution: a `public: true` flag in the YAML frontmatter; Quartz only ingests files marked public. Default to private.
- **Quality control on agent-written pages.** Once you publish, every wiki update is a public statement. You'll want a lint pass before push (Claude Code can do this). The risk is a hallucinated source ref or a sloppy claim going live. Mitigation: each page has `confidence: low/medium/high` already in the frontmatter — surface that on the published page so readers can calibrate.
- **The thesis is under construction.** "Law of Inevitable Divergence" is your central thesis but it's not yet a published paper. Publishing it as a wiki page rather than a paper is a deliberate choice — it has to be framed as *thesis-in-progress*, not as a claim. The contradictions page actually helps here.

### Verdict

This is now the **strongest single move** for the redesign. It supersedes the earlier "custom Jekyll theme" suggestion and merges the Quartz/Obsidian recommendation (§4) with the unique-content angle.

The new headline recommendation: **clean executive landing page + Claude-Design-themed Quartz garden published from a curated subset of `research-agi-db/`, with `contradictions.md`, `open_questions.md`, and `log.md` as featured surfaces.**

---

### §5b. The Karpathy/nanochat idea (preserved for reference)

The original §5 covered training a small model on your corpus. Verdict was: do **option (a)**, a one-shot training-run-as-content blog post (~$100–300 in compute, 2 weeks); skip option (b), a live "chat with Javier" bot, because hallucination risk is too high for someone whose brand is *trustworthy AI*. For the chat experience, use Claude + RAG (idea #6) instead.

This idea is still viable as a **secondary artifact** alongside the wiki — but the wiki is the headline. If you want the nanochat post, write it as a *demonstration accompanying* the safety research wiki, not as a substitute.

---

## 6. Recommended bundles

Three coherent sets, by ambition level. **All three are now centred on the LLM-Wiki publication described in §5.**

### Bundle A — "Publish the wiki" (the new minimum viable)
For: ship-something-new-this-month.

- Curate a public subset of `research-agi-db/` via `public: true` frontmatter.
- Quartz site at `/garden/` with a Claude-design-themed skin.
- Clean executive landing at `/` (alvarodenicolas-clean) with token-streaming hero (#1).
- `/log` timeline rendered from `log.md`.
- Featured surfaces: `/open-questions`, `/contradictions`, `/paper-in-progress`.
- Move large media off the repo, kill beautiful-jekyll cruft (REDESIGN_OPTIONS §6).

**Total effort:** ~3 weekends or one focused week. **Maintenance:** zero added (you already maintain the wiki). **Distinctiveness:** already top-0.1% of CAIO sites — almost no one publishes a working research wiki.

### Bundle B — "The serious version"
For: this is your job market in Q3.

Bundle A, plus:
- Public **CLAUDE.md** for the site itself (#4) — the agent's role spec, governance, allowed actions.
- Site-embedded Claude+RAG agent over the wiki (#6) — visitors can ask questions; answers cite wiki pages.
- Eval-as-interaction page for AgentMisalignment (#7).
- Live arXiv/GitHub feed appended into the `/log` timeline (#9).
- Migrate the 24 existing blog posts into the garden as `/posts/...` (1 day, mechanical).

**Total effort:** ~5–7 weekends. **Maintenance:** light (agent costs a few $/month, capped). **Distinctiveness:** memorable. Audience #2 (frontier labs) will notice within 60 seconds of landing.

### Bundle C — "The flex"
For: this is the artifact you talk about in interviews.

Bundle B, plus:
- Per-page session transcripts: each wiki page links to the Claude Code transcript that last updated it (the agent literally shows its work).
- Interactive CAE/Assurance-2.0 safety-case viewer for the DeepMind review (#13).
- Optional: nanochat-trained-on-corpus blog post + downloadable weights (§5b, version (a) only). Frame it as a *demonstration of the wiki's training corpus*, not a chatbot.
- Optional: latent-space map (#3) of all wiki nodes, projected from real embeddings.

**Total effort:** ~2–3 months part-time. **Maintenance:** moderate. **Distinctiveness:** nothing comparable exists on the public web.

---

## 7. Open questions for you

1. **Domain.** Is `javcamposz.github.io` going to remain, or are we moving to `javiercampos.ai` / similar? This affects everything (deployment, redirects, email).
2. **Wiki publishing scope.** Of `research-agi-db/`, what's publishable today? My read is: `overview.md`, `theses/law-of-inevitable-divergence.md`, the `concept-map/` and `topics/` folders, `open_questions.md`, `contradictions.md`, and `log.md` are all candidates. `paper_plan.md` is borderline — publishing it signals openness but pre-empts the paper. `source-cards/` may include third-party content that needs review. `work-db/` stays private. Confirm or correct?
3. **Wiki repo location.** Currently `llm_db/` lives at `~/git/personal/llm_db/`, separate from the website repo. Two options: (a) keep them separate, Quartz pulls from a sibling path at build time; (b) add `llm_db/` as a git submodule of the website repo. (a) is simpler.
4. **Risk appetite for the live agent.** How comfortable are you with a public-facing Claude+RAG agent on your site that answers questions about your published wiki? My recommendation: yes, with rate limits, prompt caching, citations on every answer, and a published CLAUDE.md governance spec. Confirm direction.
5. **Audience priority.** Bundle A/B/C all serve audience #2 (frontier labs / safety community) well. If audience #1 (boards / Fortune 500) is the dominant target instead, the recommendation simplifies — keep the clean landing, drop the wiki to a smaller `/notes/` section, less prominent.
6. **Time budget.** How many weekends are you willing to spend on this in the next 90 days?

Answer 1, 2, 4, 5, 6 and I'll cut a concrete implementation plan from the right bundle.
