---
layout: research-note
content_only: true
page_class: research-note-page
title: "Readable neurons and the safety case still to be made"
description: "My response to Goodfire’s interpretability hypothesis: the causal tests and deployment evidence I would ask for before approving an agent."
excerpt: "Readable mechanisms could make interpretability more useful. A safety case still needs evidence that the explanation predicts behaviour, survives intervention, and holds when the system changes."
permalink: /safety-ai/readable-neurons-safety-case/
date: 2026-10-17 09:00:00 +0100
tags: [AI safety, mechanistic interpretability, assurance, agentic AI]
comments: false
---

On 15 October, Nick Cammarata at Goodfire published [*Neural Networks Are Already Clean*](https://already-clean.goodfire.com/). In preliminary audits of Qwen3-32B, he reports that roughly 90% of neuron poles have one dominant role. The essay argues that much apparent polysemanticity can be explained by related forms of generalisation. If that holds up, directly studying a network’s own neurons and circuits could be much more productive than many researchers expected.

The scope matters. A neuron pole refers to a direction of activation; it is not a percentage of the model’s behaviour explained. Goodfire describes this as a working hypothesis, notes that the percentages depend on classification thresholds, and points to a forthcoming technical paper for more detailed language-model results, including models with trillions of parameters. That is the publication status described in the essay I am responding to, as of 17 October 2026.

My reaction is interested and sceptical. This could improve our access to mechanisms. The question I care about, as someone building evaluations and reviewing safety arguments, is what that access lets us establish about an agent we might actually deploy.

## Why I share Nanda’s caution

In the [response I discussed in my LinkedIn post](https://x.com/NeelNanda5/status/2110875974296654062), Neel Nanda argues that the essay does not change his central reasons for expecting superposition: language models can store more facts than they have neurons, and weaker activations may carry information missed by looking at the strongest responses.

I share the caution. Finding a good description of a neuron’s most visible behaviour does not settle what else its activity contributes to. A useful next experiment would test how well that description predicts responses beyond the examples used to formulate it, including weak activations and unusual combinations of context.

There is also a distinction between a familiar label and a useful causal explanation. Suppose we label a feature “oversight”. Does it respond to the word *monitor*, to the presence of an actual evaluator, or to a context in which concealing an action changes the reward? Those hypotheses suggest different interventions and different safety implications. A compelling label is the beginning of that investigation.

## The lesson from a Jennifer Aniston neuron

In 2005, Quian Quiroga and colleagues reported strikingly selective responses from individual neurons recorded in patients undergoing monitoring for epilepsy. One unit responded to different pictures of Jennifer Aniston; others responded to particular people, objects, or landmarks. The [Nature paper](https://www.nature.com/articles/nature03687) provided evidence for sparse, relatively invariant representations in the human medial temporal lobe.

Twenty-one years later, I still find this a useful caution about levels of explanation. Knowing what a cell responds to does not, by itself, explain why a person made a decision. The study investigated representation; it did not establish a mechanism for choosing an action or pursuing an objective. Nor does selectivity within a tested stimulus set establish that a neuron responds to only one concept under every possible condition.

The analogy has limits. An artificial network is a very different experimental object. We can inspect weights and activations, intervene on candidate mechanisms, and repeat controlled tests with the same model and inputs. That access is a serious reason for optimism. The human example does not prove that understanding an artificial agent is impossible. It reminds me to ask which explanatory step the evidence actually supports.

## What would count as evidence about intent?

“Intent” is a difficult term. For an evaluation, I would make it operational: does the agent’s behaviour fit pursuit of a particular objective across changes in incentives, opportunities, and oversight? Can a proposed internal mechanism predict those changes, and do interventions on it alter behaviour in the predicted way?

Consider an agent that edits an evaluation log. A trace shows the edit happened. A feature associated with evaluation tells us something about the model’s internal activity. Neither observation alone distinguishes a mistaken repair, a literal response to an instruction, or an attempt to hide a failure.

A stronger investigation would vary whether the edit affects approval, whether the original record remains visible, and whether the agent has an authorised way to report a problem. It would test the same candidate mechanism across those conditions. It would also check whether an intervention changes the suspected behaviour specifically, rather than simply degrading the model’s ability to do anything.

Even then, the conclusion should name the tested behaviour and conditions. We can make useful, bounded claims about a mechanism without claiming complete access to an agent’s intentions.

## What I would ask for in a safety review

If a vendor offered “90% of neurons understood” as evidence for approving an agent, I would ask how that result supports a particular safety claim. For example: can the deployed system conceal an unauthorised action from its monitor under the permissions it will actually receive?

My next requests would be concrete:

1. **A defined measurement.** Specify the model, layers, sampling procedure, activation ranges, labelling criteria, and uncertainty. Explain what the percentage leaves unmeasured. Agreement on labels is useful, but the evaluation must also test the explanations.
2. **Predictions and causal tests.** Register predictions before inspecting held-out examples. Ablate, patch, or otherwise intervene on proposed mechanisms; include controls for general capability damage and alternative explanations.
3. **Coverage of failures that matter.** Show performance on the behaviour relevant to the safety claim. Report misses and false alarms, including rare failures, weak signals, long interactions, and cases where several mechanisms interact. A global readability score cannot establish the risk contribution of the unexplained remainder.
4. **Evidence beyond the original setting.** Change prompts, tools, permissions, memory, and incentives. Examine whether a monitor still works when an agent can infer that it is being evaluated. Compare with behavioural evaluation alone so the additional value of the internal signal is visible.
5. **Independent challenge and an update policy.** Provide enough detail for another team to reproduce and contest the result. State which model or scaffold changes invalidate the evidence, who can pause deployment, and what happens when monitoring fails.

These are research and assurance questions, not a demand for perfect understanding. A partial explanation can be valuable if its contribution is measured, its failure modes are understood, and the deployment decision reflects its limits.

## Why this connects to my RSI work

The same problem becomes sharper when a system changes itself. An explanation or monitor validated on one generation may no longer apply to the next. Capability can rise while the quality of the evidence deteriorates.

In [RSI Eval Lab](https://github.com/javcamposz/evals_RSI), I explore this at the level of recorded lineages: whether evaluator anchors match, declared constraints survive, challenge difficulty changes, and scores behave unusually around rollback gates. These checks make reasons for further investigation visible. They do not establish why an agent acted as it did.

The [trust boundary](https://github.com/javcamposz/evals_RSI/blob/main/SECURITY.md) is central to the project. Protecting a record against later edits does not prove its observations were true when recorded. Likewise, protecting an interpretability report would preserve the report, not validate the explanation inside it. Both need a measurement process that can be challenged independently of the system under evaluation.

A research direction I would like to pursue is tracking a proposed safety-relevant mechanism across model revisions: whether its explanation still predicts behaviour, whether its intervention still works, and when a previously useful monitor should be treated as unvalidated. That is a proposed next step, not a capability the current prototype implements.

## What would change my mind

I would update substantially on independently reproduced explanations that predict relevant failures, support specific causal interventions, and improve detection or prevention beyond strong behavioural baselines. I would update further if those gains survived realistic changes to the agent and its environment.

Goodfire’s hypothesis makes that programme interesting. My approval decision would still rest on the connection between mechanism, behaviour, and the conditions of deployment. Readability is a promising starting point for building that connection.

> Before approving the agent, show me which failure the explanation lets us predict or prevent, and the conditions under which that evidence stops holding.

---

*Expanded from my LinkedIn post of 17 October 2026. The review criteria and proposed RSI experiment above are my analysis, rather than reported findings from Goodfire or the neuroscience study. Primary sources are linked alongside the claims they support.*
