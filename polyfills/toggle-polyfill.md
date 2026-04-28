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

`toggle-polyfill.js`

<<< ../public/polyfills/toggle-polyfill.js

