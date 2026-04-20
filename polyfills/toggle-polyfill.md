# Toggle Polyfills

## Demo
[People](../notebook/motion-path.html#people)

This polyfill adds toggle behavior for elements activated through the `command` event with `command="--toggle"` and `commandfor="<target-id>"`. It opens and closes the target by toggling its `inert` attribute, keeps any matching `[data-inert-<target-id>]` sections in sync, and moves focus into the opened region before returning focus to the last trigger when closed.

It does not handle visual show and hide by itself. The polyfill only manages `inert` state and focus, so presentation should be handled with your own CSS or UI logic. For broader browser support of `command` and `commandfor`, use it with [invokers-polyfill](https://github.com/keithamus/invokers-polyfill).

## Usag One

```html
<main>
  <button class="toggle" commandfor="section" command="--toggle">TOGGLE</button>
  <section id="section">
    Section to toggle
  </section>
<main>
```

## Usag Two

```html
<main>
  <section data-inert-section>
    <button class="toggle" commandfor="section" command="--toggle">SHOW</button>
    Section to become inert when toggled on
  </section>
  <section id="section">
    <button class="toggle" commandfor="section" command="--toggle">HIDE</button>
    Section to show
  </section>
<main>
```

## TypeScript

`toggle-polyfill.ts`
```js
const lastFocusedTrigger = new WeakMap<HTMLElement, HTMLElement>()
const processedEvents = new WeakSet<Event>()
const FIRST_FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([type="hidden"]):not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function togglePolyfill() {
  setupToggleListeners(document)
}

function handleToggleActivation(event: Event) {
  if (processedEvents.has(event)) return

  processedEvents.add(event)

  if (event.defaultPrevented) return
  if (event.type !== 'command') return

  const commandEvent = event as CommandEvent
  if (commandEvent.command !== '--toggle') return

  const trigger = getToggleTrigger(commandEvent)
  if (!trigger) return

  const target = getToggleTarget(event)
  if (!target) return

  const isOpening = target.hasAttribute('inert')

  target.toggleAttribute('inert', !isOpening)
  syncInert(target)

  if (isOpening) {
    lastFocusedTrigger.set(target, trigger)
    focusFirstFocusableElement(target)
    return
  }

  lastFocusedTrigger.get(target)?.focus()
}

function getToggleTrigger(event: CommandEvent) {
  return event.source instanceof HTMLElement ? event.source : null
}

function getToggleTarget(event: Event) {
  return event.target instanceof HTMLElement ? event.target : null
}

function focusFirstFocusableElement(target: HTMLElement) {
  target.querySelector<HTMLElement>(FIRST_FOCUSABLE_SELECTOR)?.focus()
}

function getLinkedElements(id: string) {
  return document.querySelectorAll<HTMLElement>(`[data-inert-${CSS.escape(id)}]`)
}

function syncInert(target: HTMLElement) {
  const isOpen = !target.hasAttribute('inert')

  if (!target.id) return

  for (const linkedElement of getLinkedElements(target.id)) {
    linkedElement.toggleAttribute('inert', isOpen)
  }
}

function setupToggleListeners(target: Document | ShadowRoot) {
  target.addEventListener('command', handleToggleActivation, true)
}

declare global {
  interface Window {
    resetToggleInert: (id: string) => void
  }
}

window.resetToggleInert = (id: string) => {
  const target = id ? (document.getElementById(id) as HTMLElement | null) : null
  if (!target) return
  if (target.hasAttribute('inert')) return

  target.setAttribute('inert', '')

  for (const linkedElement of getLinkedElements(id)) {
    linkedElement.removeAttribute('inert')
  }
}

document.addEventListener('DOMContentLoaded', togglePolyfill)
```
