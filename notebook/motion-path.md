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

```css:line-numbers{10-13,29,30}
:where(circle-select) {
  position: relative;
}

:where(circle-option) {
  position: absolute;
  z-index: 0;
  inset: 0;

  offset-path: circle(0 at 50% 50%);
  offset-rotate: 0deg;
  offset-distance: 0;
  offset-anchor: auto;
  scale: 0;

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
    offset-distance: calc(25% + (var(--index) - 1) * 100% / var(--count));
  }
}
```
## People

<ThemedIframe
  src="/notebook-view/motion-path/css-only-select.html"
  title="Fan List demo"
  max-width="24rem"
  height="24rem"
/>
