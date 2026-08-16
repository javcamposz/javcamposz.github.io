---
date: 2026-05-27
url: ""
title: "The new battleground is the harness and the eval loop"
topics: [coding-agents, evals, ai-infrastructure, software-engineering]
featured: true
---

The era of the bigger model is officially dead. The new battleground is the
harness.

A coding agent is a stochastic generator wrapped in a verifier. The model
proposes. The harness disposes. The harness is only as honest as the eval set
behind it.

A model output is a hypothesis. Without a ground-truth check - compile pass,
test green, runtime trace, or held-out human verdict - you are optimising a
fantasy.

The winners will be the teams running adversarial evals that bite back. Stop
chasing the model. Start engineering the harness.
