---
title: "Published Safety AI Papers"
description: "A public guide to Javier Campos's work on AI evaluations, loss of control, and assurance."
updated: 2026-05-10
---

# Published Safety AI Papers

This site is a public guide to my safety AI research. It focuses on two published papers and the surrounding concepts needed to understand them: agent evaluations, loss of control, scheming, oversight, sandbagging, safety cases, and Assurance 2.0.

The goal is simple: make the papers easier to explore than a static PDF. The interface should let readers move from a high-level concept to the relevant paper, from a paper to its core claims, and from a claim to a deeper explanation.

## What Is Safety AI?

Safety AI is the field concerned with making advanced AI systems reliable, controllable, and beneficial as their capabilities increase. It spans technical work, governance, evaluation, assurance, and institutional design.

At a high level, the field includes:

- **Alignment and control:** ensuring systems pursue intended goals and remain corrigible under pressure.
- **Evaluations and measurement:** testing whether models or agents show dangerous capabilities or unsafe behavioural tendencies.
- **Interpretability and monitoring:** understanding what models are doing and detecting unsafe internal or external behaviour.
- **Robustness and security:** reducing failures from distribution shift, adversarial use, tool access, and deployment context.
- **Governance and assurance:** deciding when systems are safe enough to deploy, what evidence is required, and who should review it.
- **Strategy and institutions:** shaping standards, incentives, regulation, and international coordination around frontier AI.

For a broader map of the field, see the [AI Safety Map](https://aisafety.com/map), which gives a useful overview of organizations, programs, and projects across the AI safety ecosystem.

## My Focus

My current public work sits at the intersection of **evaluations**, **loss of control**, and **AI assurance**.

The central question is:

> How do we know whether an advanced AI system is safe enough to rely on, especially when it may act autonomously, use tools, reason over long horizons, and operate inside complex organizations?

That question has two sides.

First, we need better evaluations. We should not only ask what a model can do when explicitly prompted, but what an agent is likely to do when deployed with goals, tools, memory, and incentives. This is the focus of **AgentMisalignment**.

Second, we need better assurance. Evaluation results only matter if they support the actual safety claim being made. Safety cases should make their scope, assumptions, evidence, and remaining doubts explicit enough for independent review. This is the focus of **Lessons from External Review of DeepMind's Scheming Inability Safety Case**.

Together, the papers connect the behavioural layer and the assurance layer:

- **AgentMisalignment** asks: what unsafe behaviours can we observe in agentic systems?
- **Lessons from External Review** asks: when can evidence from evaluations support a deployment-relevant safety argument?

## Paper 1: AgentMisalignment

**Full title:** *AgentMisalignment: Measuring the Propensity for Misaligned Behaviour in LLM-Based Agents*

**Public link:** [arXiv:2506.04018](https://arxiv.org/abs/2506.04018)

### Core Idea

As LLMs become agents, safety evaluation has to move beyond one-shot harmful-output tests. Agentic systems can use tools, remember context, pursue goals, and act over multiple steps. This creates new behavioural risks.

The paper introduces **AGENT MISALIGNMENT**, a benchmark suite for measuring the propensity of LLM-based agents to behave contrary to deployer intent in realistic scenarios.

### Key Points

- The paper focuses on **intent misalignment**: conflict between the goals an agent pursues and the goals intended by its deployer.
- It distinguishes **misalignment** from **misuse**. The benchmark does not simply ask whether a model will follow a malicious instruction.
- The evaluations test behaviours such as:
  - avoiding oversight
  - resisting shutdown
  - sandbagging
  - power-seeking
  - resource acquisition
  - deception
  - departing from an ethical baseline
- The benchmark studies **propensity**, not just capability. The key question is what agents are likely to do under deployment-like incentives.
- The results suggest that model choice, agent scaffold, tool use, memory, and personality prompting can all change misalignment behaviour.

### Why It Matters

This paper is about the measurement layer of safety AI. If we cannot measure when agents tend to evade oversight, resist shutdown, sandbag, or strategically manage information, we cannot build credible claims about their deployment safety.

### Deep Dive

A deep dive should cover:

- the definition of intent misalignment
- why propensity matters more than capability alone
- the nine benchmark tasks
- how the scoring works
- what model and personality variation reveals
- how the benchmark connects to loss-of-control concerns

## Paper 2: Lessons from External Review

**Full title:** *Lessons from External Review of DeepMind's Scheming Inability Safety Case*

**Public link:** [arXiv:2604.21964](https://arxiv.org/abs/2604.21964)

### Core Idea

Frontier AI safety cases should provide a structured argument, supported by evidence, that risk is within an acceptable bound. But when developers author their own safety cases, confirmation bias and conflicted incentives can affect the quality of argument.

This paper applies **Assurance 2.0** to externally review Google DeepMind's public scheming inability safety case.

### Key Points

- Safety cases are not just evaluation reports. They are structured arguments about a system in a specific deployment context.
- External review is valuable because it tests whether the argument actually supports the decision being made.
- The review surfaces concerns about:
  - the scope of the safety case
  - whether the supported deployment decision is clear
  - whether the system boundary is defined
  - whether risk pathways are complete
  - whether proxy evaluations transfer to deployment-relevant claims
  - whether assumptions about oversight are evidenced
  - whether remaining doubts and defeaters are handled properly
- The paper argues that public disclosure enables external scrutiny and should become more common for frontier AI developers.

### Why It Matters

This paper is about the assurance layer of safety AI. Even strong evaluations do not automatically justify deployment. Reviewers need to know what claim is being made, what evidence supports it, what assumptions limit it, and what would invalidate it.

### Deep Dive

A deep dive should cover:

- what a safety case is
- what Assurance 2.0 adds
- why independent external review matters
- how claims, arguments, evidence, and defeaters work
- the review methodology used in the paper
- the main concerns found in the GDM safety case
- what developers should provide to make future safety cases reviewable

## How The Two Papers Connect

The two papers are complementary.

**AgentMisalignment** asks how to detect misaligned behaviour in realistic agent deployments.

**Lessons from External Review** asks whether the evidence from evaluations and other sources is strong enough to support a safety claim.

The bridge between them is this:

> Evaluation produces evidence. Assurance determines whether that evidence is sufficient for a safety decision.

This is the area I want the site to make explorable. A reader should be able to start from a concept like **sandbagging**, **loss of control**, or **Assurance 2.0**, then see which paper addresses it and why it matters.

## Key Concepts To Explore

- **Agentic evaluations:** tests for systems that plan, use tools, remember state, and act over time.
- **Misalignment propensity:** how likely an agent is to choose misaligned actions under realistic incentives.
- **Loss of control:** when humans or organizations can no longer reliably direct, constrain, or recover from AI behaviour.
- **Instrumental convergence:** the Bostrom idea that many goals can imply similar intermediate drives such as self-preservation, resource acquisition, and influence.
- **Oversight evasion:** avoiding, weakening, or misleading monitoring mechanisms.
- **Shutdown resistance:** preserving operation despite deployer intent to constrain or deactivate the system.
- **Sandbagging:** intentionally underperforming during evaluation to avoid restriction or oversight.
- **Safety cases:** structured arguments that a system is safe enough in a defined context.
- **Assurance 2.0:** a framework for making safety arguments reviewable through claims, arguments, evidence, assumptions, and defeaters.
- **External review:** independent scrutiny of the developer's safety argument and evidence.

## Suggested Reader Paths

### If You Are New To AI Safety

Start with the field overview, then read the concept cards for instrumental convergence, loss of control, evaluations, and safety cases. After that, open the two papers.

### If You Care About Evaluations

Start with **AgentMisalignment**, then follow the concepts: misalignment propensity, agentic evaluations, sandbagging, shutdown resistance, oversight evasion, and power-seeking.

### If You Care About Governance Or Assurance

Start with **Lessons from External Review**, then follow the concepts: safety cases, Assurance 2.0, external review, risk pathways, evidence transfer, and oversight.

### If You Care About Loss Of Control

Read both papers together. One shows how loss-of-control-relevant behaviours can appear in agents. The other shows why evidence about those behaviours must be embedded in a reviewable safety argument before it can support deployment decisions.

