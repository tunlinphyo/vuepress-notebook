# Motion Path

----

<baseline-status featureId="motion-path"></baseline-status>

----

<baseline-status featureId="sibling-count"></baseline-status>

## offset-path

<ThemedIframe
  src="/notebook-view/motion-path/select.html"
  title="Fan List demo"
  max-width="24rem"
  height="24rem"
/>

This demo uses a [custom element](../polyfills/circle-select.md) inspired by this [CodePen](https://codepen.io/dylanbeattie/pen/dPGKZvg), which explores the new CSS `customizable-select`.

```html:line-numbers
<circle-select name="person" value="1">
  <circle-selected></circle-selected>
  <circle-option value="1">
    <div class="people">😀</div>
  </circle-option>
  <circle-option value="2">
    <div class="people">😎</div>
  </circle-option>
  <circle-option value="3">
    <div class="people">🤠</div>
  </circle-option>
</circle-select>
```

```css:line-numbers{10-13,30,31}
:where(circle-select) {
  position: relative;
}

:where(circle-option) {
  position: absolute;
  z-index: 0;
  inset: 0;

  offset-path: circle(0 at 50% 50%);
  offset-rotate: 0deg;
  offset-distance: calc(-75% + (sibling-index() - 1) * 100% / calc(sibling-count() - 2));
  offset-anchor: auto;
  scale: 0;
  transition: offset .35s var(--ease-sine-out), scale .35s var(--ease-sine-out);

  &[selected] > * {
    background-color: SelectedItem;
  }
}

:where(circle-selected) {
  position: relative;
  z-index: 1;
}

:where(circle-select[open]) {
  :is(circle-option) {
    scale: 1;
    offset-path: circle(clamp(40px, 30vw, 80px) at 50% 50%);
    offset-distance: calc(-25% + (sibling-index() - 1) * 100% / calc(sibling-count() - 2));
  }
}
```
## People
<baseline-status featureId="container-anchor-position-queries"></baseline-status>

<ThemedIframe
  src="/notebook-view/motion-path/people.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

This demo used [toggle-polyfill](../polyfills/toggle-polyfill.md).

```css:line-numbers{10-13,19,20}
:where(ul) {
  display: grid;
  grid-template-areas: 'person';

  & li {
    --move: 0%;
    --distance: calc(50% + ((var(--index) - 1) * 50%) / max(1, (var(--count) - 1)) + var(--move));
    grid-area: person;

    offset-path: circle(clamp(40px, 50vw, 120px) at 50% 50%);
    offset-rotate: 0deg;
    offset-distance: 40%;
    offset-anchor: auto;
    transition: offset .5s var(--ease-in-3);
  }

  &[data-toggle] {
    & li {
      offset-distance: var(--distance);
      transition: offset 1s var(--ease-spring-3);
    }
  }
}
```
