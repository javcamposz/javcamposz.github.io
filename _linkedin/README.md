# LinkedIn collection

Each Markdown file in this folder is one LinkedIn post that should surface on the site.

## Frontmatter schema

```yaml
---
date: 2026-04-22                # required, ISO date — used to sort
url: https://www.linkedin.com/feed/update/urn:li:activity:.../
title: "Short hand-picked title for the site (max ~80 chars)"
topics: [agentic-ai, marketing] # optional tags
featured: true                  # if true, candidate for landing page
---
```

The body is the Markdown rendition of the post. Convert LinkedIn's Unicode-bold
glyphs (e.g. `𝗕𝗲 𝗰𝗮𝗿𝗲𝗳𝘂𝗹`) to standard Markdown `**bold**`.

## Phase 0 = curated highlights

For Phase 0, we keep ~3 hand-picked recent posts here as `featured: true`. The
landing page surfaces those.

## Phase 1 = quarterly bulk import

Once a quarter, run LinkedIn's official "Get a copy of your data" export
(Settings → Data privacy → Get a copy of your data → Posts) and run
`scripts/import-linkedin.py` (Phase 1) to convert the resulting CSV into
Markdown files in this folder. New imports default to `featured: false`.

The featured set on the landing page is always a small, curated subset.
