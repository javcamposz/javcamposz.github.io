// Mobile navigation shared by the homepage and project index.
(() => {
  const button = document.querySelector(".landing__menu");
  const nav = document.querySelector(".landing__nav");
  if (!button || !nav) return;

  const close = () => {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  };

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    if (open) {
      close();
    } else {
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Close navigation");
      nav.classList.add("is-open");
    }
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) close();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
})();

// Token-streaming Q&A: types each answer and supports skip/replay.
(() => {
  const elements = Array.from(document.querySelectorAll("[data-typewriter]"));
  if (!elements.length) return;

  const replayBtn = document.querySelector("[data-typewriter-replay]");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const minDelay = 22;
  const jitter = 18;
  const interLine = 220;
  let cancelled = false;

  const finishAll = () => {
    cancelled = true;
    elements.forEach(el => {
      el.textContent = el.dataset.typewriter;
      el.classList.add("done");
    });
    if (replayBtn) replayBtn.classList.add("visible");
  };

  const typeLine = el => new Promise(resolve => {
    const text = el.dataset.typewriter;
    el.textContent = "";
    el.classList.remove("done");
    let index = 0;
    const tick = () => {
      if (cancelled) return resolve();
      if (index >= text.length) {
        el.classList.add("done");
        return setTimeout(resolve, interLine);
      }
      el.textContent = text.slice(0, ++index);
      setTimeout(tick, minDelay + Math.random() * jitter);
    };
    tick();
  });

  const run = async () => {
    cancelled = false;
    if (replayBtn) replayBtn.classList.remove("visible");
    if (reduced) {
      finishAll();
      return;
    }
    for (const element of elements) {
      if (cancelled) break;
      await typeLine(element);
    }
    if (!cancelled && replayBtn) replayBtn.classList.add("visible");
  };

  const skipHandler = event => {
    if (cancelled) return;
    if (event.type === "click" && event.target.closest("a, button:not([data-typewriter-replay])")) return;
    finishAll();
  };
  document.addEventListener("keydown", skipHandler);
  document.addEventListener("click", skipHandler);

  if (replayBtn) {
    replayBtn.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      run();
    });
  }
  run();
})();
