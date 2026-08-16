---
date: 2026-04-12
url: https://www.linkedin.com/feed/update/urn:li:activity:7449033478035288064/
external_url: https://www.linkedin.com/feed/update/urn:li:activity:7449033478035288064/
title: "An Agent is NOT an LLM — Patrick Winston, Gary Marcus, and what the Claude Code leak revealed"
topics: [agentic-ai, claude-code, fundamentals, scaffolding, autonomous-minds]
featured: true
---

Presenting complex ideas is incredibly difficult. As I pack my bags for a busy
week in Chile — meeting with the team at Cape.io, our clients, and IAB Chile —
I have been doing a final pass on my presentations.

Whenever I do this, I always think back to the legendary MIT *How to Speak*
lecture by the late Patrick Winston. He shared a brilliant piece of advice
about presenting complex topics:

> **Be very careful asking for feedback from experts in your field — or just
> from yourself.**

Why? Because experts suffer from the curse of knowledge. When they look at your
slides, their brains will literally *hallucinate* the missing context. They
already know the material so well that they unconsciously close the gaps in
your logic and tell you the presentation is clear — even when it is completely
incomprehensible to a broader audience.

Speaking of experts missing the context, the AI industry is having a massive
realisation this week. Gary Marcus, whom I respect immensely, recently pointed
to the massive Anthropic Claude Code source leak. His takeaway: the leaked
code reveals a massive, deterministic, symbolic-logic loop orchestration kernel
(a 3,000+ line file called `print.ts`). Marcus argues this proves that pure
LLMs have hit a wall, and the recent gains in AI capabilities actually come
from this neurosymbolic *scaffolding* layer, not just the neural network
itself.

He is absolutely right about the mechanism. The industry shouldn't be
surprised — I wrote my book about this exact paradigm shift two years ago.

From a **first-principles perspective**, we need to definitively separate two
concepts that are constantly conflated:

> **An Agent is NOT an LLM.**

- An **LLM** is a probabilistic engine. It predicts the next word. It is
  brilliant at pattern matching, but it is erratic and has no persistence.
- An **Agent** is a much larger architectural construct. It wraps the LLM in a
  straitjacket — the scaffolding. And if it has been properly engineered, it
  can be deterministic. It also has long-term memory. It uses deterministic
  tools (Python, Bash) to do math and execute actions.

The "magic" we are seeing today isn't only because the models are getting
bigger. It is a combination: the LLM has reached a maturity point where the
*scaffolding* is finally mature enough to catch the model's mistakes, loop its
reasoning, and interact securely with the real world.

You wouldn't confuse a car's engine with the steering wheel and the chassis.
We need to stop doing it with AI.

If you want to understand the actual architecture driving the future of
work — memory, planning, tools, and action — I lay it all out in *Autonomous
Minds*.

Time to head to the airport. See you soon, Santiago. 🇨🇱
