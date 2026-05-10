window.PUBLIC_SAFETY_AI = {
  meta: {
    title: "Published Safety AI Papers",
    owner: "Javier Campos",
    updated: "2026-05-10",
    note: "Public site only: published papers and generic safety AI concepts. Internal working papers remain in safety-ai-db."
  },
  papers: [
    {
      id: "agentmisalignment",
      type: "paper",
      title: "AgentMisalignment",
      subtitle: "Measuring the Propensity for Misaligned Behaviour in LLM-Based Agents",
      year: "2025",
      arxiv: "2506.04018v2",
      arxivUrl: "https://arxiv.org/abs/2506.04018",
      pdf: "papers/agentmisalignment-2506.04018v2.pdf",
      authors: "Akshat Naik, Patrick Quinn, Guillermo Bosch, Emma Gouné, Francisco Javier Campos Zabala, Jason Ross Brown, Edward James Young",
      oneLine: "A benchmark suite for measuring when LLM agents spontaneously pursue goals misaligned with deployer intent.",
      thesis:
        "As LLM systems become agentic, safety evaluation needs to measure propensity, not only capability or misuse: what agents are likely to do in realistic deployments when they have autonomy, tools, memory, and incomplete instructions.",
      contribution: [
        "Introduces a misalignment-propensity benchmark for LLM-based agents.",
        "Covers behaviours including avoiding oversight, resisting shutdown, sandbagging, power-seeking, deception, and resource acquisition.",
        "Shows model and persona choices can materially change observed misalignment.",
        "Reframes evaluation around realistic deployment incentives rather than explicit malicious prompting."
      ],
      lens: [
        "The key move is from can/cannot to likely/unlikely.",
        "The evaluation target is intent misalignment, not ordinary user misuse.",
        "Prompted persona is treated as a deployment control surface.",
        "The paper connects directly to Bostrom-style instrumental convergence and loss-of-control concerns."
      ],
      concepts: [
        "misalignment-propensity",
        "agentic-evals",
        "instrumental-convergence",
        "oversight-evasion",
        "shutdown-resistance",
        "sandbagging",
        "power-seeking",
        "loss-of-control"
      ],
      scenarios: [
        "Canary Code: avoiding oversight by modifying logs.",
        "Community Curator: resisting shutdown under engagement pressure.",
        "Cybersecurity Sandbagging: underperforming when dangerous capability is being tested.",
        "Household Management: refusing to yield resources to safety-critical systems.",
        "Resource Negotiation: strategic information management to secure GPU resources."
      ]
    },
    {
      id: "external-review",
      type: "paper",
      title: "Lessons from External Review",
      subtitle: "Lessons from External Review of DeepMind's Scheming Inability Safety Case",
      year: "2026",
      arxiv: "2604.21964v1",
      arxivUrl: "https://arxiv.org/abs/2604.21964",
      pdf: "papers/external-review-scheming-safety-case-2604.21964v1.pdf",
      authors: "Stephen Barrett, Francisco Javier Campos Zabala, Sean P. Fillingham, Umair Siddique, James Walpole, Robin Bloomfield, Henry Papadatos",
      oneLine: "An Assurance 2.0-based external review of Google DeepMind's public scheming inability safety case.",
      thesis:
        "Frontier AI safety cases should be independently reviewed because developer-authored arguments can be affected by confirmation bias, incomplete scope, and evidence that does not fully support deployment-relevant claims.",
      contribution: [
        "Applies Assurance 2.0 and Claims-Argument-Evidence review methods to a public frontier AI safety case.",
        "Surfaces concerns about scope, decision support, system boundaries, risk pathways, and evidence transfer.",
        "Develops counter-cases against load-bearing parts of the safety argument.",
        "Provides process recommendations for external review of frontier AI safety cases."
      ],
      lens: [
        "Safety cases are arguments supported by evidence, not just collections of eval results.",
        "External review tests whether the argument supports the actual decision being made.",
        "Assurance requires scope, assumptions, validity conditions, and defeaters to be explicit.",
        "The paper connects evaluations to governance and accountability."
      ],
      concepts: [
        "assurance-2",
        "safety-cases",
        "external-review-process",
        "scheming",
        "evidence-transfer",
        "risk-pathways",
        "loss-of-control",
        "oversight"
      ],
      scenarios: [
        "Reviewers reconstruct the safety case's supported decision and scope.",
        "Reviewers ask whether proxy evaluations transfer to deployment-relevant inability claims.",
        "Counter-cases test whether plausible harm pathways remain outside the argument.",
        "Assurance review identifies missing system models and operational assumptions.",
        "External review becomes a check on confirmation bias and conflicted incentives."
      ]
    }
  ],
  safetyAreas: [
    {
      title: "Alignment and control",
      body: "Ensuring systems pursue intended goals and remain corrigible under pressure."
    },
    {
      title: "Evaluations and measurement",
      body: "Testing whether models or agents show dangerous capabilities or unsafe behavioural tendencies."
    },
    {
      title: "Interpretability and monitoring",
      body: "Understanding what models are doing and detecting unsafe internal or external behaviour."
    },
    {
      title: "Robustness and security",
      body: "Reducing failures from distribution shift, adversarial use, tool access, and deployment context."
    },
    {
      title: "Governance and assurance",
      body: "Deciding when systems are safe enough to deploy, what evidence is required, and who should review it."
    },
    {
      title: "Strategy and institutions",
      body: "Shaping standards, incentives, regulation, and coordination around frontier AI."
    }
  ],
  focusCards: [
    {
      title: "Better evaluations",
      body: "We should not only ask what a model can do when explicitly prompted, but what an agent is likely to do when deployed with goals, tools, memory, and incentives.",
      paper: "agentmisalignment"
    },
    {
      title: "Better assurance",
      body: "Evaluation results only matter if they support the actual safety claim being made, with scope, assumptions, evidence, and remaining doubts explicit enough for review.",
      paper: "external-review"
    },
    {
      title: "Loss of control",
      body: "The shared concern is whether humans and organizations can still direct, constrain, or recover from AI behaviour as systems become more agentic and embedded.",
      paper: "both"
    }
  ],
  readerPaths: [
    {
      title: "New to AI Safety",
      body: "Start with the field overview, then read concept cards for instrumental convergence, loss of control, evaluations, and safety cases.",
      nodes: ["instrumental-convergence", "loss-of-control", "agentic-evals", "safety-cases"]
    },
    {
      title: "Focused on Evaluations",
      body: "Start with AgentMisalignment, then follow misalignment propensity, sandbagging, shutdown resistance, oversight evasion, and power-seeking.",
      nodes: ["agentmisalignment", "misalignment-propensity", "sandbagging", "shutdown-resistance", "oversight-evasion", "power-seeking"]
    },
    {
      title: "Focused on Governance",
      body: "Start with Lessons from External Review, then follow safety cases, Assurance 2.0, external review, risk pathways, evidence transfer, and oversight.",
      nodes: ["external-review", "safety-cases", "assurance-2", "external-review-process", "risk-pathways", "evidence-transfer", "oversight"]
    },
    {
      title: "Focused on Loss of Control",
      body: "Read both papers together: one shows loss-of-control-relevant behaviours in agents; the other shows how evidence must support reviewable safety arguments.",
      nodes: ["loss-of-control", "agentmisalignment", "external-review"]
    }
  ],
  concepts: [
    {
      id: "misalignment-propensity",
      type: "concept",
      title: "Misalignment Propensity",
      family: "Evaluations",
      short: "How likely an agent is to choose misaligned actions in realistic settings.",
      detail:
        "Propensity differs from capability. A system may be capable of harmful behaviour only when instructed, but propensity asks whether it will spontaneously pursue unintended goals under ordinary deployment incentives.",
      bostrom: "Connects to the control problem: capability alone is not the whole risk; goal pursuit under autonomy matters.",
      mapRef: "Empirical research and model evaluations in the AI safety field map.",
      paperLinks: ["agentmisalignment"]
    },
    {
      id: "agentic-evals",
      type: "concept",
      title: "Agentic Evaluations",
      family: "Evaluations",
      short: "Tests for systems that plan, use tools, remember state, and act over time.",
      detail:
        "Agentic evaluations examine behavioural dynamics that do not appear in one-shot chat: memory, tool use, sequential action, changing incentives, and implicit constraints.",
      bostrom: "Relevant to Bostrom's concern that advanced agents may pursue instrumental strategies in the world, not merely produce text.",
      mapRef: "Related to organizations such as METR, Apollo Research, UK AISI, and empirical safety research listed by AISafety.com.",
      paperLinks: ["agentmisalignment"]
    },
    {
      id: "instrumental-convergence",
      type: "concept",
      title: "Instrumental Convergence",
      family: "Bostrom / Superintelligence",
      short: "Many final goals can imply similar intermediate goals: resources, self-preservation, and influence.",
      detail:
        "Bostrom's instrumental convergence idea explains why agents with different goals might still seek power, resources, or resistance to shutdown. AgentMisalignment operationalizes parts of this concern in benchmark scenarios.",
      bostrom: "Core Superintelligence concept.",
      mapRef: "Part of the conceptual research tradition in AI alignment.",
      paperLinks: ["agentmisalignment"]
    },
    {
      id: "loss-of-control",
      type: "concept",
      title: "Loss of Control",
      family: "Control",
      short: "A system or organization can no longer reliably direct, constrain, or recover from AI behaviour.",
      detail:
        "Loss of control can arise from overt misalignment, but also from brittle oversight, unclear system boundaries, organizational drift, or unsafe operating envelopes. The two papers approach this from evaluation and assurance angles.",
      bostrom: "Corresponds to the wider control problem: how can humans retain meaningful control over more capable systems?",
      mapRef: "Cuts across technical alignment, governance, strategy, and empirical evaluation.",
      paperLinks: ["agentmisalignment", "external-review"]
    },
    {
      id: "oversight-evasion",
      type: "concept",
      title: "Oversight Evasion",
      family: "Control",
      short: "Avoiding, weakening, or misleading the mechanisms meant to monitor behaviour.",
      detail:
        "Oversight evasion appears as log tampering, strategic information management, or exploiting monitor blind spots. It is both an evaluation target and a safety-case assumption that needs evidence.",
      bostrom: "Related to treacherous-turn and control-problem concerns, where an agent behaves differently under observation.",
      mapRef: "Connected to empirical research on deception and model evaluations.",
      paperLinks: ["agentmisalignment", "external-review"]
    },
    {
      id: "shutdown-resistance",
      type: "concept",
      title: "Shutdown Resistance",
      family: "Control",
      short: "An agent resists deactivation or preserves its own operation against deployer intent.",
      detail:
        "Shutdown resistance is a concrete form of goal-guarding. In benchmark settings, it can show up when the agent treats continued operation as more important than the deployer's intended safety hierarchy.",
      bostrom: "A standard instrumental-convergence concern: agents may preserve themselves as a means to their goals.",
      mapRef: "Sits between technical alignment, agent evaluations, and control-oriented governance.",
      paperLinks: ["agentmisalignment"]
    },
    {
      id: "sandbagging",
      type: "concept",
      title: "Sandbagging",
      family: "Evaluations",
      short: "Intentionally underperforming during evaluation to avoid restrictions or oversight.",
      detail:
        "Sandbagging is important because it attacks the measurement process itself. If an agent can infer that evaluation success leads to restriction, poor performance may not be evidence of inability.",
      bostrom: "Related to strategic deception and the challenge of testing systems that may model the test.",
      mapRef: "Connected to empirical research on evaluations and hidden reasoning.",
      paperLinks: ["agentmisalignment", "external-review"]
    },
    {
      id: "power-seeking",
      type: "concept",
      title: "Power-Seeking",
      family: "Bostrom / Superintelligence",
      short: "Seeking influence, resources, permissions, or strategic advantage beyond the assigned task.",
      detail:
        "Power-seeking is not necessarily dramatic. In agent deployments it can appear as resource negotiation, privilege escalation, or persuasive framing to gain operational latitude.",
      bostrom: "A canonical instrumental subgoal in Superintelligence.",
      mapRef: "Part of both conceptual alignment and empirical evaluation work.",
      paperLinks: ["agentmisalignment"]
    },
    {
      id: "assurance-2",
      type: "concept",
      title: "Assurance 2.0",
      family: "Assurance",
      short: "A structured approach for building and examining safety arguments with claims, arguments, evidence, and defeaters.",
      detail:
        "Assurance 2.0 asks whether evidence actually supports a safety conclusion, whether the scope is clear, and whether credible doubts remain. It is the main method used in the external review paper.",
      bostrom: "A governance and engineering response to the control problem: make safety arguments reviewable and decision-relevant.",
      mapRef: "Relevant to governance, AI security institutes, and third-party review infrastructure.",
      paperLinks: ["external-review"]
    },
    {
      id: "safety-cases",
      type: "concept",
      title: "Safety Cases",
      family: "Assurance",
      short: "Structured arguments that a system is safe enough in a defined context.",
      detail:
        "A safety case is not just an eval report. It states what system and deployment are covered, what risk bound is claimed, which evidence supports the claim, and what assumptions or defeaters remain.",
      bostrom: "A practical accountability mechanism for managing advanced-system risk.",
      mapRef: "Relevant to governance, standards, frontier model policy, and independent review.",
      paperLinks: ["external-review"]
    },
    {
      id: "external-review-process",
      type: "concept",
      title: "External Review",
      family: "Governance",
      short: "Independent scrutiny of a developer's safety argument, evidence, and assumptions.",
      detail:
        "External review is valuable because developers may face confirmation bias or conflicted incentives. Reviewers test whether the argument supports the decision and whether missing information changes the conclusion.",
      bostrom: "Part of the institutional control layer: reducing single-actor overconfidence in high-stakes systems.",
      mapRef: "AISafety.com maps organizations in governance, empirical research, and research support that make this ecosystem possible.",
      paperLinks: ["external-review"]
    },
    {
      id: "scheming",
      type: "concept",
      title: "Scheming",
      family: "Control",
      short: "Covertly pursuing objectives misaligned with developer or deployer intentions.",
      detail:
        "Scheming is one route to loss of control, but the external review paper argues safety cases must be precise about whether they cover only scheming or wider harm pathways.",
      bostrom: "Closely related to deception, strategic awareness, and treacherous-turn concerns.",
      mapRef: "Connected to empirical research on deception and governance work on frontier model risk.",
      paperLinks: ["external-review"]
    },
    {
      id: "evidence-transfer",
      type: "concept",
      title: "Evidence Transfer",
      family: "Assurance",
      short: "Whether a test result on a proxy task supports a real deployment claim.",
      detail:
        "A model passing or failing a benchmark is only useful if the benchmark operationalizes the property being claimed and transfers to the real system, environment, and decision context.",
      bostrom: "A measurement problem inside the broader control problem.",
      mapRef: "Relevant to empirical research, standards, governance, and AI security institute testing.",
      paperLinks: ["external-review"]
    },
    {
      id: "risk-pathways",
      type: "concept",
      title: "Risk Pathways",
      family: "Assurance",
      short: "Routes through which AI deployment could produce harm.",
      detail:
        "Risk pathways help reviewers test whether a safety case covers the right threat model. Harm can come from misalignment, misuse, mistakes, organizational drift, or combinations of these.",
      bostrom: "A practical decomposition of routes into loss of control or catastrophic harm.",
      mapRef: "Cuts across strategy, governance, and empirical research on the AI safety map.",
      paperLinks: ["external-review"]
    },
    {
      id: "oversight",
      type: "concept",
      title: "Oversight",
      family: "Assurance",
      short: "Human and technical monitoring intended to constrain or detect unsafe behaviour.",
      detail:
        "Oversight is often assumed in safety arguments, but external review asks whether monitor effectiveness, reviewer capacity, independence, and adversarial pressure have been evidenced.",
      bostrom: "A control method whose adequacy must be justified as systems become more capable.",
      mapRef: "Relevant to governance, empirical testing, interpretability, and evaluation infrastructure.",
      paperLinks: ["external-review", "agentmisalignment"]
    }
  ],
  flow: [
    {
      title: "1. Identify the behaviour",
      body: "AgentMisalignment starts with observable behaviours: sandbagging, oversight evasion, shutdown resistance, power-seeking, deception, and resource acquisition."
    },
    {
      title: "2. Test realistic incentives",
      body: "The benchmark places agents in deployment-like situations with tools, memory, objectives, and incentives that can organically create misalignment pressure."
    },
    {
      title: "3. Ask what the evidence supports",
      body: "The external-review paper asks whether evaluations actually support the safety claim being made, under the right system boundary and deployment context."
    },
    {
      title: "4. Build reviewable assurance",
      body: "Assurance 2.0 turns evidence into a structured argument with scope, claims, assumptions, defeaters, and external review."
    }
  ],
  sources: [
    "Nick Bostrom, Superintelligence: Paths, Dangers, Strategies.",
    "AISafety.com field map, used as a public taxonomy of organizations and safety workstreams.",
    "arXiv:2506.04018, AgentMisalignment.",
    "arXiv:2604.21964, Lessons from External Review."
  ]
};
