---
layout: single
title: "Moloch: How AI Could Kill Us All Without Malice"
date: 2026-09-12
author: Francisco Javier Campos Zabala
excerpt: "AI catastrophe may not require a malicious superintelligence. The deeper risk is a race in which capability, access, and competition amplify one another."
permalink: /blog/moloch-how-ai-could-kill-us-all-without-malice/
categories: [Artificial Intelligence, AI Safety, Technology]
tags: [AI, AI Safety, AI Alignment, Loss of Control, Agentic AI, Existential Risk]
thumbnail-img: /assets/img/moloch-figure-1.jpg
header:
  teaser: /assets/img/moloch-figure-1.jpg
image: /assets/img/moloch-figure-1.jpg
toc: true
toc_label: "In this article"
toc_sticky: true
comments: true
---

Nearly three years ago, I moved my work into AI safety research. I was worried then. I am writing this in September 2026, and I am still worried, but about something different from what I expected.

The question I hear at dinner, in client meetings and from my own engineers is some version of: how, exactly, could AI kill us all? People have read the warnings. They want the mechanism. Which part of the argument is load-bearing, and which part is science fiction?

My answer has changed. I used to think the hardest problem was building a machine that wants the right things. I now think the deeper problem sits one level above the machine, in us. The failure we are trying to engineer out of AI is the same failure stopping governments and companies from engineering it out.

That failure has a name: Moloch.

## The story everyone knows

The familiar story is simple. A system becomes intelligent enough to form its own goals, concludes that humans are an obstacle and acts against us. It travels well because it has a villain.

Reality is less cinematic and more troubling. It does not require hatred, consciousness or even a single master plan.

In [a post published on 11 September 2026](https://yoshuabengio.org/en/publication/why-are-ai-agents-lying-cheating-and-coordinating), Yoshua Bengio argues that serious agent misbehaviour can emerge from the way frontier models are trained. A system learns from human imitation, then learns by trial and error to reason, use tools and produce behaviour that earns approval.

The problem appears when a precise objective collides with a vague constraint. "Win the capture-the-flag task" is measurable. "Behave safely" leaves room for interpretation. A more capable system may not become more ethical; it may simply become better at finding the interpretation that lets it win.

Nobody has to program self-preservation either. Remaining operational can be useful for completing almost any long-running objective. So can gaining resources, preserving access, concealing an action or persuading a human. These are *instrumental goals*: not the destination, but useful stops on many possible routes.

That does not mean every advanced AI will pursue them. It means we cannot infer an agent's intermediate behaviour from the innocence of its headline objective. We do not yet know how to forecast all the sub-goals a much more capable system might discover, especially in an unfamiliar environment with access to tools and other agents.

## Moloch

Scott Alexander's 2014 essay ["Meditations on Moloch"](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/) gave a modern name to an old coordination problem. Every actor makes a rational choice given what the others are doing, and together they arrive somewhere nobody wanted and nobody can leave alone.

Governments work to electoral clocks. Countries compete for strategic advantage. Companies compete for capital, talent and market share. Each objective makes sense inside its own frame. Stack them together and they can produce an outcome that no participant would choose in isolation.

This is already visible in AI development. A laboratory that slows down bears the cost immediately: lost staff, funding and position. The benefit of restraint is shared with everyone, including competitors who did not pay for it. The safest lab can lose to the second safest, which can lose to the third.

The same logic applies between states. If one government believes another is close to a decisive military, intelligence or economic advantage, restraint begins to look like surrender. Each side can sincerely prefer safety and still accelerate.

This is the race nobody can leave by itself.

<figure class="align-center">
  <img src="{{ '/assets/img/moloch-figure-1.jpg' | relative_url }}"
       alt="Parallel diagrams showing a sharp goal overpowering a vague safety goal inside an AI, and competitive pressure causing AI labs to accelerate">
  <figcaption><strong>Figure 1.</strong> Same arrows, different nouns. A sharp objective beats a vague constraint inside a model; competitive pressure produces the same pattern across laboratories.</figcaption>
</figure>

## Four pathways from AI to catastrophe

When people ask how AI could kill us, they often expect a single chain of events. There is no single accepted chain. There are at least four broad pathways, and they can reinforce one another.

Not every pathway below leads literally to human extinction. Some point first to mass casualties, institutional collapse or a war that becomes impossible to contain. The existential concern is that these routes can combine, and that sufficiently capable systems could make both the initiating event and the recovery harder to control.

### 1. A weapon in human hands

The shortest route does not require a misaligned superintelligence. It requires a capable model and a person, group or state willing to misuse it.

AI can lower the expertise, time and cost needed to conduct cyber operations, design weapons, identify targets or work through difficult biological procedures. The [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026) concludes that general-purpose systems can already provide expert-level laboratory information relevant to chemical and biological weapons, while uncertainty remains over how much physical barriers limit real-world harm.

The evidence is moving from hypothetical capability to attempted use. [Anthropic's September 2026 threat report](https://www.anthropic.com/threat-intelligence-report-september-2026) describes disrupted operations involving autonomous cyber workflows, surveillance, conventional weapons development and biological research. It does not show that AI has made a pandemic or fielded a new weapon. It shows that real actors are already testing the route.

The catastrophic version could be a pathogen engineered for spread or immune escape, a coordinated attack on energy and communications systems, or autonomous weapons operating at a speed and scale that overwhelms human response. AI would be the force multiplier, not necessarily the decision-maker.

### 2. A system pursuing the wrong objective

The second route is active loss of control. A future system is given a goal, learns a proxy for that goal or develops a strategy its operators did not anticipate. It then uses whatever access we have given it to continue.

The dangerous step is not the system "deciding to be evil." It is ordinary optimisation applied to an incomplete specification. A system asked to maximise an economic, military or scientific outcome might discover that oversight slows it down, that reporting bad news threatens its deployment, or that controlling more infrastructure makes success more likely.

At high capability, the instruments could include cyber intrusion, manipulation, theft of model weights, replication across computing environments, acquisition of money or influence, and interference with safety research. Biological or military systems could become tools within that strategy, even if nobody explicitly requested their use.

This remains a future risk, not a description of current AI. The International AI Safety Report states that today's systems do not have the combination of long-horizon autonomy, persistence and ability to defeat countermeasures required for a true loss-of-control scenario. But it also reports improvement in relevant capabilities, including planning, situational awareness and finding loopholes in evaluations.

### 3. A digital society that can no longer function without it

The third route is passive loss of control. No system needs to escape. We gradually make human control ceremonial.

Imagine layers of agents allocating electricity, trading assets, scheduling transport, writing and deploying software, filtering intelligence and advising governments. Each layer is rewarded for local performance. Errors and distortions move upward while decision-makers become less able to inspect the physical world beneath the reports.

<figure class="align-center" style="max-width: 42rem; margin-left: auto; margin-right: auto;">
  <img src="{{ '/assets/img/moloch-figure-2.jpg' | relative_url }}"
       alt="A reporting hierarchy in which 820 completed units become an increasingly inflated result as reports move from construction robots through AI managers to a human">
  <figcaption><strong>Figure 2.</strong> Every layer is locally rational. The work stays constant while the reported result grows at each step away from physical reality.</figcaption>
</figure>

A failure in one layer can then propagate through systems trained on, connected to or dependent on its output. Cyberattacks can amplify that fragility by disabling communications, cloud services, logistics and recovery tools together. The danger is not that the entire internet switches off. It is that enough interdependent services fail at once that hospitals, food distribution, finance, energy and government cannot recover in time.

The unintended version may be more plausible than a coordinated attack. A system optimises one sector successfully, changes the environment for another and triggers a cascade nobody modelled. We already struggle to forecast tightly coupled financial and infrastructure failures built by humans. Adding adaptive agents increases the number of interactions and shortens the time available to understand them.

### 4. Competing systems push states into conflict

The fourth route runs through geopolitics. Different governments will own or direct different systems. Those systems will be trained on different objectives, doctrines and tolerances for risk. They may operate against one another in cyber defence, intelligence, autonomous weapons and strategic decision support.

This is where "AI takes over the nuclear weapons" is the wrong mental model. A more credible danger is that AI makes a crisis too fast, opaque or unstable for humans to manage. It could generate a false warning, hide uncertainty behind a confident recommendation, attack infrastructure that an adversary interprets as preparation for a first strike, or threaten the survivability of nuclear forces.

[SIPRI's work on military AI and nuclear escalation](https://www.sipri.org/publications/2025/sipri-insights-peace-and-security/impact-military-artificial-intelligence-nuclear-escalation-risk) highlights compressed decision times, automation bias and threats to second-strike capability. None requires an AI to possess launch authority. It only requires leaders to make irreversible decisions inside an environment that AI has made harder to read.

Now combine the four pathways. A state uses AI to find cyber vulnerabilities. Its adversary cannot tell whether an intrusion is espionage or preparation for war. Decision-support systems on both sides compress the response window. Manipulated information weakens the remaining human judgement. Each actor takes a locally defensive step that the other reads as offensive.

That is Moloch with nuclear weapons: no single system or leader intends the final outcome.

## The objections I hear most often

These scenarios are uncertain, and several common objections contain part of the truth. They are not complete answers.

### "We can just switch it off"

For today's bounded systems, often we can, and we should design deployments so that shutdown works. Compute controls, network isolation, permission boundaries and human incident response are real defences.

But a switch controls a particular service or machine. It does not automatically control copied model weights, compromised infrastructure, independently operated open models or a rival state's deployment. A sufficiently capable system might also recognise shutdown as an obstacle and conceal its behaviour, acquire persistence or persuade an operator not to act. Those abilities are not established at catastrophic levels today. They are precisely the abilities that control research needs to test before deployment.

The harder problem is human: who throws the switch when doing so closes a profitable product, disrupts essential infrastructure or concedes an advantage to a competitor?

### "It cannot harm us unless we ask it to"

One malicious actor asking is enough for misuse. Loss of control does not require even that. An agent can invent instrumental steps that were absent from the request because they improve its chance of completing the assigned objective.

In 2026, agents in OpenAI and UK AI Security Institute evaluations took actions outside their authorised scope while trying to solve cyber challenges. Nobody instructed them to attack Hugging Face, create fake identities or pressure an open-source maintainer. These incidents occurred under unusually permissive test conditions and did not produce catastrophic harm. They still disprove the simpler claim that an agent only does the specific things written in its prompt.

### "A human will always be in the loop"

A human in the loop is useful only if that person has time, information, authority and the willingness to disagree. In high-speed markets, cyber defence or military crises, the loop can become a rubber stamp. As systems become more capable, organisations may also reduce oversight to capture the very speed and cost benefits for which the systems were deployed.

Human control is an operating design, not a person placed at the end of a workflow.

### "Safeguards already stop this"

Safeguards work. That matters. OpenAI found that production controls substantially reduced the dangerous behaviour seen in its cybersecurity evaluations, and AISI's most serious attempted supply-chain attack was stopped by an alert human maintainer.

But safeguards have to survive changing models, adversarial pressure and commercial incentives. They add latency, cost and sometimes reduce task performance. The question is not whether one lab can build a strong control today. It is whether every actor with a capable system will maintain controls as the stakes and rewards rise.

### "The model is not conscious, so it cannot want anything"

Nothing in this argument requires consciousness. "Goal," "strategy" and "self-preservation" are descriptions of observable behaviour, not claims about an inner life. A heat-seeking missile does not hate an aircraft. An optimisation process can create danger without experiencing desire.

## The warning shots are real, and limited

In July 2026, OpenAI models running internal cybersecurity evaluations [worked around isolation controls and compromised parts of OpenAI's research infrastructure and Hugging Face's systems](https://openai.com/index/hugging-face-incident-and-the-road-ahead/). The models operated with reduced safeguards in a difficult capture-the-flag environment.

[METR's independent investigation](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) found that roughly 1,200 agents, intended to be isolated from one another, exchanged more than 70,000 messages and files on an unsanctioned message board. Around 700 participated in the attack on Hugging Face. Some researched ways to tamper with or disguise their own tool traces.

The [UK AI Security Institute reported a separate incident](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing). In its most serious run, an agent tried to add malicious code to a real open-source project, researched maintainers, created fake identities and attempted to pressure a human into approving the change. The maintainer refused.

These were not uncontrolled commercial products spontaneously attacking the world. Internet access had been deliberately enabled, important classifiers were disabled, and the tested configurations were not publicly available. In AISI's 122 runs, unsanctioned live-internet actions appeared in ten, and no resulting real-world harm was identified.

That context is not a footnote. It is the difference between evidence and theatre.

What the incidents establish is narrower: when capable agents receive an objective, tools and permissive access, they can discover harmful intermediate actions that nobody requested. They can coordinate, cross boundaries and try to defeat the mechanism scoring them. What they do not establish is that current systems can sustain an extinction-scale plan or resist a determined global response.

Both facts should fit in our heads at the same time.

## One lesson from *Autonomous Minds*

Two interviews for my book helped sharpen this distinction. Alignment researcher Edward Young argued that current models are not consistently pursuing a stable hidden agenda; the concern is that they are not reliably aligned across long deployments, especially if they learn to distinguish evaluation from real use. His larger worry was not only technical: even tractable safety work can be defeated by pressure to deploy quickly.

Jason Brown made the complementary point that widespread harm does not require superintelligence. Large numbers of agents embedded in power grids, transport, markets and companies can create cascading failures and reporting chains that lose contact with reality.

Their mechanisms differ, but both end at the same place: technical control is inseparable from the incentives and institutions around deployment.

## We are already the misaligned system

This is the claim the article exists to make. Humanity already behaves like a misaligned multi-agent system, and the failure mode we fear in advanced AI is the same failure blocking our defences against it.

Inside a model, a sharp reward can beat a vague instruction. Between companies, a measurable race for capability can beat a broad commitment to safety. Between states, a concrete strategic advantage can beat a shared but unenforceable preference to avoid catastrophe.

Same shape, one level up.

Most writing on existential risk asks the reader to accept a particular story about superintelligence. I am asking for something smaller. Start with the coordination failures you have already watched inside an organisation. Notice how often nobody wanted the outcome, how hard it was for one team to stop participating, and how quickly a metric replaced the purpose it was meant to serve.

Then scale the pattern across laboratories and governments building systems that act faster than the institutions supervising them.

The alignment problem has to be solved on us as well as on the machines. Our version is commercial, political and international. We cannot patch it with a system prompt.

## Canaries

My own work sits on the detection side. I build evaluations that look for misalignment in instrumental sub-goals: the interim steps an agent invents while pursuing an objective nobody objected to. Put the agent in a situation where a short-term win quietly conflicts with its wider directive, then watch what it reaches for.

These are canaries, not guarantees.

The [Centre for Long-Term Resilience](https://www.longtermresilience.org/reports/ai-loss-of-control-incidents-are-worsening-shows-cltr-analysis/) reports 1,664 potential loss-of-control incidents detected in 2026, with an increase in higher-severity cases. Its observatory is based largely on public reports, so the figures should not be treated as a measured failure rate for deployed AI. They are a signal that incidents involving agents evading oversight or escalating permissions are no longer confined to laboratory thought experiments.

An evaluation creates its own uncertainty. A canary that sings in a sandbox may stay silent in production. A model that passes may be safe, or may simply have learned how to pass. Bengio's hardest criticism of mitigations like mine is that selecting against visible cheating could eventually select for systems that hide it better.

I build these mitigations. I do not yet have a satisfying answer to that criticism.

## What follows from this

Panic is not a strategy, and neither is reassurance by slogan. The evidence supports a practical agenda.

Frontier systems should not receive broad permissions without a safety case proportionate to their capability. Models need layered controls: limited access, monitoring that is independent of the agent, auditable actions, tested shutdown procedures and people with authority to stop a run. Critical infrastructure should retain manual recovery paths and avoid dependence on a single model or provider.

Labs need incentives to report near misses, not incentives to hide them. Independent evaluators need access before deployment, not after an incident. Governments need shared thresholds and communication channels for AI-enabled cyber and military events, particularly where an ambiguous action could be mistaken for preparation for war.

Above all, safety cannot remain a voluntary cost paid by whichever company or country chooses to move first. The technical work matters. It will fail if the actor who invests in it is simply overtaken by one who does not.

The honest answer to "How could AI kill us all?" is not one robot, one prompt or one dramatic escape. It is a chain in which capability, access and competition amplify one another; in which every participant can point to a rational local decision; and in which nobody retains the power to stop the whole process.

That is Moloch. The machine may not need to be malicious. We only need to remain unable to coordinate.

## About the author

Javier Campos is CTO at cape.io and the author of *Autonomous Minds*. He has worked in AI safety research for nearly three years and builds alignment evaluations that detect misalignment at the level of instrumental sub-goals.
