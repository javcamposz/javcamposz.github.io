(function () {
  const data = window.PUBLIC_SAFETY_AI;
  const state = {
    paper: data.papers[0].id,
    selected: data.papers[0].id,
    filter: "all",
    query: ""
  };

  const els = {
    tabs: document.querySelector("[data-paper-tabs]"),
    paperDetail: document.querySelector("[data-paper-detail]"),
    paperLens: document.querySelector("[data-paper-lens]"),
    paperLinks: document.querySelector("[data-paper-links]"),
    graph: document.querySelector("[data-graph]"),
    nodeDetail: document.querySelector("[data-node-detail]"),
    matrix: document.querySelector("[data-matrix]"),
    areaGrid: document.querySelector("[data-area-grid]"),
    focusSwitcher: document.querySelector("[data-focus-switcher]"),
    bridgeFlow: document.querySelector("[data-bridge-flow]"),
    readerPaths: document.querySelector("[data-reader-paths]"),
    filters: document.querySelector("[data-filters]"),
    search: document.querySelector("[data-search]"),
    prompt: document.querySelector("[data-prompt]"),
    copy: document.querySelector("[data-copy]"),
    flow: document.querySelector("[data-assurance-flow]")
  };

  const families = ["all", ...Array.from(new Set(data.concepts.map((concept) => concept.family)))];

  function getPaper(id) {
    return data.papers.find((paper) => paper.id === id);
  }

  function getConcept(id) {
    return data.concepts.find((concept) => concept.id === id);
  }

  function allNodes() {
    return [
      ...data.papers.map((paper) => ({ ...paper, kind: "paper", family: "Papers", short: paper.oneLine, detail: paper.thesis })),
      ...data.concepts.map((concept) => ({ ...concept, kind: "concept" }))
    ];
  }

  function getNode(id) {
    return allNodes().find((node) => node.id === id);
  }

  function nodeMatches(node) {
    const q = state.query.trim().toLowerCase();
    const filterMatch = state.filter === "all" || node.family === state.filter || node.kind === state.filter;
    const text = [node.title, node.subtitle || "", node.short || "", node.detail || "", node.family || ""].join(" ").toLowerCase();
    return filterMatch && (!q || text.includes(q));
  }

  function renderStats() {
    document.querySelector("[data-stat-papers]").textContent = data.papers.length;
    document.querySelector("[data-stat-concepts]").textContent = data.concepts.length;
    document.querySelector("[data-stat-links]").textContent = data.papers.reduce((sum, paper) => sum + paper.concepts.length, 0);
  }

  function renderHomeContent() {
    els.areaGrid.innerHTML = data.safetyAreas
      .map((area) => `
        <article>
          <strong>${escapeHtml(area.title)}</strong>
          <span>${escapeHtml(area.body)}</span>
        </article>
      `)
      .join("");

    els.focusSwitcher.innerHTML = data.focusCards
      .map((card) => `
        <button type="button" data-focus-paper="${escapeHtml(card.paper)}">
          <strong>${escapeHtml(card.title)}</strong>
          <span>${escapeHtml(card.body)}</span>
        </button>
      `)
      .join("");

    els.focusSwitcher.querySelectorAll("[data-focus-paper]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-focus-paper");
        if (target !== "both") {
          state.paper = target;
          state.selected = target;
        } else {
          state.selected = "loss-of-control";
        }
        document.querySelector("#papers").scrollIntoView({ behavior: "smooth", block: "start" });
        render();
      });
    });

    els.bridgeFlow.innerHTML = [
      ["AgentMisalignment", "What unsafe behaviours can we observe in realistic agent deployments?", "agentmisalignment"],
      ["Shared problem", "How do these behaviours relate to loss of control?", "loss-of-control"],
      ["External Review", "When can evaluation evidence support a deployment-relevant safety argument?", "external-review"]
    ]
      .map(([title, body, node]) => `
        <button type="button" data-bridge-node="${escapeHtml(node)}">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(body)}</span>
        </button>
      `)
      .join("");

    els.bridgeFlow.querySelectorAll("[data-bridge-node]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = button.getAttribute("data-bridge-node");
        const selected = getNode(state.selected);
        if (selected && selected.kind === "paper") state.paper = selected.id;
        document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
        render();
      });
    });
  }

  function renderTabs() {
    els.tabs.innerHTML = data.papers
      .map((paper) => `
        <button class="paper-tab ${state.paper === paper.id ? "is-active" : ""}" type="button" data-paper="${escapeHtml(paper.id)}">
          <span>${escapeHtml(paper.year)} / ${escapeHtml(paper.arxiv)}</span>
          <strong>${escapeHtml(paper.title)}</strong>
        </button>
      `)
      .join("");

    els.tabs.querySelectorAll("[data-paper]").forEach((button) => {
      button.addEventListener("click", () => {
        state.paper = button.getAttribute("data-paper");
        state.selected = state.paper;
        render();
      });
    });
  }

  function renderPaper() {
    const paper = getPaper(state.paper);
    els.paperDetail.innerHTML = `
      <span class="eyebrow">${escapeHtml(paper.year)} / ${escapeHtml(paper.arxiv)}</span>
      <h3>${escapeHtml(paper.title)}</h3>
      <h4>${escapeHtml(paper.subtitle)}</h4>
      <p class="authors">${escapeHtml(paper.authors)}</p>
      <p>${escapeHtml(paper.thesis)}</p>
      <div class="contribution-grid">
        ${paper.contribution.map((point) => `<div>${escapeHtml(point)}</div>`).join("")}
      </div>
      <div class="scenario-list">
        <h4>Scenario hooks</h4>
        ${paper.scenarios.map((scenario) => `<button type="button" data-scenario="${escapeHtml(scenario)}">${escapeHtml(scenario)}</button>`).join("")}
      </div>
    `;

    els.paperLens.innerHTML = paper.lens.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    els.paperLinks.innerHTML = `
      <a href="${escapeHtml(paper.arxivUrl)}">Open on arXiv</a>
      <a href="${escapeHtml(paper.pdf)}">Open local PDF</a>
    `;

    els.paperDetail.querySelectorAll("[data-scenario]").forEach((button) => {
      button.addEventListener("click", () => {
        els.prompt.value = [
          `Explain this safety AI scenario for a public audience: ${button.getAttribute("data-scenario")}`,
          "",
          `Paper: ${paper.title}`,
          "",
          "Use plain language, connect it to the relevant concepts, and avoid unpublished internal material."
        ].join("\n");
      });
    });
  }

  function renderFilters() {
    els.filters.innerHTML = families
      .map((family) => `<button class="filter ${state.filter === family ? "is-active" : ""}" type="button" data-filter="${escapeHtml(family)}">${escapeHtml(family)}</button>`)
      .join("");
    els.filters.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.getAttribute("data-filter");
        renderGraph();
      });
    });
  }

  function renderGraph() {
    const nodes = allNodes().filter(nodeMatches);
    const nodeIds = new Set(nodes.map((node) => node.id));
    const width = 880;
    const height = 560;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.36;
    const positioned = nodes.map((node, index) => {
      const angle = (index / Math.max(nodes.length, 1)) * Math.PI * 2 - Math.PI / 2;
      const isPaper = node.kind === "paper";
      return {
        node,
        x: isPaper ? centerX + (index === 0 ? -120 : 120) : centerX + Math.cos(angle) * radius,
        y: isPaper ? centerY : centerY + Math.sin(angle) * radius
      };
    });
    const pos = new Map(positioned.map((item) => [item.node.id, item]));
    const edges = [];
    data.papers.forEach((paper) => {
      paper.concepts.forEach((conceptId) => {
        if (nodeIds.has(paper.id) && nodeIds.has(conceptId)) edges.push([paper.id, conceptId]);
      });
    });
    data.concepts.forEach((concept) => {
      concept.paperLinks.forEach((paperId) => {
        if (nodeIds.has(paperId) && nodeIds.has(concept.id)) edges.push([paperId, concept.id]);
      });
    });

    els.graph.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Paper and concept relationship graph">
        ${edges.map(([source, target]) => {
          const a = pos.get(source);
          const b = pos.get(target);
          const active = state.selected === source || state.selected === target;
          return `<line class="edge ${active ? "is-active" : ""}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />`;
        }).join("")}
        ${positioned.map(({ node, x, y }) => {
          const active = state.selected === node.id;
          const related = isRelated(state.selected, node.id);
          const paper = node.kind === "paper";
          return `
            <g class="map-node" transform="translate(${x} ${y})" data-node="${escapeHtml(node.id)}">
              <circle class="${paper ? "node paper-node" : "node"} ${active ? "is-active" : related ? "is-related" : ""}" r="${paper ? 24 : 15}" />
              <text y="${paper ? 42 : 34}">${escapeHtml(shortLabel(node.title))}</text>
            </g>
          `;
        }).join("")}
      </svg>
    `;

    els.graph.querySelectorAll("[data-node]").forEach((node) => {
      node.addEventListener("click", () => {
        state.selected = node.getAttribute("data-node");
        const selected = getNode(state.selected);
        if (selected && selected.kind === "paper") state.paper = selected.id;
        render();
      });
    });

    renderNodeDetail();
    renderPrompt();
  }

  function isRelated(a, b) {
    const selectedPaper = getPaper(a);
    if (selectedPaper && selectedPaper.concepts.includes(b)) return true;
    const concept = getConcept(a);
    if (concept && concept.paperLinks.includes(b)) return true;
    return data.papers.some((paper) => paper.id === b && paper.concepts.includes(a));
  }

  function renderNodeDetail() {
    const node = getNode(state.selected) || getPaper(state.paper);
    if (node.kind === "paper") {
      els.nodeDetail.innerHTML = `
        <span class="eyebrow">paper / ${escapeHtml(node.year)}</span>
        <h3>${escapeHtml(node.title)}</h3>
        <p>${escapeHtml(node.oneLine)}</p>
        <div class="node-meta">
          ${node.concepts.map((conceptId) => {
            const concept = getConcept(conceptId);
            return `<button type="button" data-node-open="${escapeHtml(conceptId)}">${escapeHtml(concept.title)}</button>`;
          }).join("")}
        </div>
      `;
    } else {
      els.nodeDetail.innerHTML = `
        <span class="eyebrow">${escapeHtml(node.family)}</span>
        <h3>${escapeHtml(node.title)}</h3>
        <p>${escapeHtml(node.detail)}</p>
        <div class="concept-note">
          <strong>Bostrom connection</strong>
          <span>${escapeHtml(node.bostrom)}</span>
        </div>
        <div class="concept-note">
          <strong>AI Safety map connection</strong>
          <span>${escapeHtml(node.mapRef)}</span>
        </div>
        <div class="node-meta">
          ${node.paperLinks.map((paperId) => `<button type="button" data-node-open="${escapeHtml(paperId)}">${escapeHtml(getPaper(paperId).title)}</button>`).join("")}
        </div>
      `;
    }

    els.nodeDetail.querySelectorAll("[data-node-open]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = button.getAttribute("data-node-open");
        const selected = getNode(state.selected);
        if (selected && selected.kind === "paper") state.paper = selected.id;
        render();
      });
    });
  }

  function renderMatrix() {
    els.matrix.innerHTML = `
      <div class="matrix-row matrix-head">
        <div>Concept</div>
        ${data.papers.map((paper) => `<div>${escapeHtml(paper.title)}</div>`).join("")}
      </div>
      ${data.concepts.map((concept) => `
        <div class="matrix-row">
          <button type="button" data-matrix-node="${escapeHtml(concept.id)}">
            <strong>${escapeHtml(concept.title)}</strong>
            <span>${escapeHtml(concept.family)}</span>
          </button>
          ${data.papers.map((paper) => {
            const covered = paper.concepts.includes(concept.id);
            return `<div class="${covered ? "covered" : "not-covered"}">${covered ? "covered" : "adjacent"}</div>`;
          }).join("")}
        </div>
      `).join("")}
    `;

    els.matrix.querySelectorAll("[data-matrix-node]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = button.getAttribute("data-matrix-node");
        document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
        render();
      });
    });
  }

  function renderReaderPaths() {
    els.readerPaths.innerHTML = data.readerPaths
      .map((path) => `
        <article class="path-card">
          <h3>${escapeHtml(path.title)}</h3>
          <p>${escapeHtml(path.body)}</p>
          <div>
            ${path.nodes.map((nodeId) => {
              const node = getNode(nodeId);
              return node ? `<button type="button" data-path-node="${escapeHtml(nodeId)}">${escapeHtml(node.title)}</button>` : "";
            }).join("")}
          </div>
        </article>
      `)
      .join("");

    els.readerPaths.querySelectorAll("[data-path-node]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = button.getAttribute("data-path-node");
        const selected = getNode(state.selected);
        if (selected && selected.kind === "paper") state.paper = selected.id;
        document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
        render();
      });
    });
  }

  function renderFlow() {
    els.flow.innerHTML = data.flow
      .map((step, index) => `
        <article class="flow-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.body)}</p>
        </article>
      `)
      .join("");
  }

  function renderPrompt() {
    const node = getNode(state.selected) || getPaper(state.paper);
    const title = node.title;
    const related = node.kind === "paper"
      ? node.concepts.map((id) => getConcept(id).title)
      : node.paperLinks.map((id) => getPaper(id).title);
    els.prompt.value = [
      `Create a public explanation for: ${title}`,
      "",
      `Type: ${node.kind || node.type}`,
      `Context: ${node.family || node.year || "paper"}`,
      "",
      `Current summary: ${node.short || node.oneLine}`,
      "",
      "Related items:",
      ...related.map((item) => `- ${item}`),
      "",
      "Task: explain this for a technically literate public audience. Use only published-paper content and generic public safety AI concepts. Do not include internal drafts."
    ].join("\n");
  }

  function renderSignals() {
    const signals = document.querySelectorAll("[data-signal]");
    let index = 0;
    window.setInterval(() => {
      signals.forEach((signal) => signal.classList.remove("active"));
      signals[index % signals.length].classList.add("active");
      index += 1;
    }, 2200);
  }

  function render() {
    renderStats();
    renderHomeContent();
    renderTabs();
    renderPaper();
    renderFilters();
    renderGraph();
    renderMatrix();
    renderReaderPaths();
    renderFlow();
    renderPrompt();
  }

  function shortLabel(value) {
    const words = value.split(/\s+/);
    return words.slice(0, 3).join(" ");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  els.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderGraph();
  });

  els.copy.addEventListener("click", async () => {
    els.prompt.select();
    try {
      await navigator.clipboard.writeText(els.prompt.value);
      els.copy.textContent = "Copied";
      window.setTimeout(() => {
        els.copy.textContent = "Copy prompt";
      }, 1200);
    } catch (_error) {
      document.execCommand("copy");
    }
  });

  render();
  renderSignals();
})();
