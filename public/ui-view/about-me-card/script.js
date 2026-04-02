      function togglePolyfill() {
  const triggers = document.querySelectorAll('[toogletarget]');
  const lastFocusedTrigger = new WeakMap();

  for (const trigger of triggers) {
    trigger.addEventListener('click', handleClick);
  }

  function handleClick(event) {
    const elem = event.target;
    const trigger = elem.closest('[toogletarget]');
    if (!trigger) return;

    const id = trigger.getAttribute('toogletarget');
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    const isOpening = !target.hasAttribute('data-toggle');

    target.toggleAttribute('data-toggle');
    syncInert(target);

    if (isOpening) {
      lastFocusedTrigger.set(target, trigger);

      const nestedTrigger = target.querySelector(
        `[toogletarget="${CSS.escape(id)}"]`
      );
      nestedTrigger?.focus();
      return;
    }

    const lastTrigger = lastFocusedTrigger.get(target);
    lastTrigger?.focus();
  }

  function syncInert(elem) {
    const isActive = elem.hasAttribute('data-toggle');
    elem.toggleAttribute('inert', !isActive);

    const id = elem.id;
    if (!id) return;

    const linkedElements = document.querySelectorAll(
      `[data-inert-${CSS.escape(id)}`
    );

    for (const linkedElement of linkedElements) {
      linkedElement.toggleAttribute('inert', isActive);
    }
  }
}

document.addEventListener('DOMContentLoaded', togglePolyfill);