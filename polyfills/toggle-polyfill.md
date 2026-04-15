# Toggle Polyfills

## Demo
[People](../notebook/motion-path.html#people)

This polyfill adds a simple toggle behavior for elements that use the `toogletarget` attribute. When triggered, it updates the target element with `data-toggle` and synchronizes the `inert` state for the target and any linked inert sections.

It does not handle UI show and hide by itself. The polyfill only manages state through `data-toggle` and `inert`, so any visual presentation should be handled separately with your own CSS or UI logic.

## Usag One

```html
<main>
  <button class="toggle" toogletarget="section">TOGGLE</button>
  <section id="section">
    Section to toggle
  </section>
<main>
```

## Usag Two

```html
<main>
  <section data-inert-section>
    <button class="toggle" toogletarget="section">SHOW</button>
    Section to become inert when toggled on
  </section>
  <section id="section">
    <button class="toggle" toogletarget="section">HIDE</button>
    Section to show
  </section>
<main>
```

## JavaScript

`toggle-polyfill.js`
```js
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
```

## Example CSS

```html:line-numbers
<main>
  <button toogletarget="people"></button>
  <ul id="people">
    <li>😀</li>
    <li>😭</li>
    <li>🥹</li>
    <li>😊</li>
  </ul>
</main>
```

```css:line-numbers
:where(button) {
  display: flex;
  justify-content: center;
  align-items: center;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 0;
    border-top: 2px solid currentColor;
    transition: rotate 1s var(--ease-spring-3);
  }
  &::before { rotate: 90deg; }
  &::after { rotate: 0deg; }
}
:where(ul) {
  & li {
    --move: 0%;
    --distance: calc(50% + ((var(--index) - 1) * 50%) / max(1, (var(--count) - 1)) + var(--move));

    offset-path: circle(clamp(40px, 50vw, 120px) at 50% 50%);
    offset-rotate: 0deg;
    offset-distance: 25%;
    offset-anchor: auto;
    transition: offset 1s var(--ease-spring-3);
  }

  &[data-toggle] {
    & li {
      offset-distance: var(--distance);
    }
  }
}

:where(main:has(#people[data-toggle])) {
  :is(button) {
    &::before { rotate: 225deg; }
    &::after { rotate: 135deg; }
  }
}
```
