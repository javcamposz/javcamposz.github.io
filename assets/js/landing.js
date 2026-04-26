// Token-streaming hero — types out one or more lines, supports skip/replay,
// honours prefers-reduced-motion. No external deps, no model call.

(() => {
  const elements = Array.from(document.querySelectorAll("[data-typewriter]"));
  if (!elements.length) return;

  const replayBtn = document.querySelector("[data-typewriter-replay]");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const minDelay = 22;
  const jitter = 18;
  const interLine = 220; // ms between completion of one line and start of next

  let cancelled = false;

  const finishAll = () => {
    cancelled = true;
    elements.forEach(el => {
      el.textContent = el.dataset.typewriter;
      el.classList.add("done");
    });
    if (replayBtn) replayBtn.classList.add("visible");
  };

  const typeLine = (el) => new Promise(resolve => {
    const text = el.dataset.typewriter;
    el.textContent = "";
    el.classList.remove("done");
    let i = 0;
    const tick = () => {
      if (cancelled) return resolve();
      if (i >= text.length) {
        el.classList.add("done");
        return setTimeout(resolve, interLine);
      }
      el.textContent = text.slice(0, ++i);
      setTimeout(tick, minDelay + Math.random() * jitter);
    };
    tick();
  });

  const run = async () => {
    cancelled = false;
    if (replayBtn) replayBtn.classList.remove("visible");
    if (reduced) { finishAll(); return; }

    for (const el of elements) {
      if (cancelled) break;
      await typeLine(el);
    }
    if (!cancelled && replayBtn) replayBtn.classList.add("visible");
  };

  // Skip on user interaction
  const skipHandler = (e) => {
    if (cancelled) return;
    // ignore clicks on actual links/buttons inside hero (they should still work)
    if (e.type === "click" && e.target.closest("a, button:not([data-typewriter-replay])")) return;
    finishAll();
  };
  document.addEventListener("keydown", skipHandler);
  document.addEventListener("click", skipHandler);

  if (replayBtn) {
    replayBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      run();
    });
  }

  run();
})();
