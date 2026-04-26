# scroll-markers

----

<baseline-status featureId="scroll-buttons"></baseline-status>

----

<baseline-status featureId="scroll-markers"></baseline-status>

## Fancy Slide Demo

This slider combines native scroll controls, linked targets, and scroll-state driven layout changes using only CSS. The carousel uses `::scroll-button()` to render built-in previous and next controls, the side links use `scroll-target-group` so the active target stays in sync with the scroller, and each slide participates in a `scroll-state()` container query so the snapped item can expand into the featured card.

<ThemedIframe
  src="/ui-view/scroll-button/index.html"
  title="Fan List demo"
  max-width="32rem"
  height="20rem"
/>

## Scroll Button

<ThemedIframe
  src="/notebook-view/scroll-markers/scroll-button.html"
  title="Fan List demo"
  max-width="28rem"
  height="20rem"
/>

```css:line-numbers
:where(.carousel) {
  --carousel-padding: 1rem;
  --card-width: min(100vw, 20rem);

  box-sizing: border-box;
  width: 100%;
  padding: var(--carousel-padding);
  overflow-x: auto;
  padding: 1rem calc(var(--carousel-padding) * 2);

  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;
  scroll-behavior: smooth;
  overscroll-behavior-x: none;
  anchor-name: --carousel-control;

  &::scroll-button(inline-start) {
    content: "arrow_back_ios_new" / "Scroll Left";
    left: calc(anchor(left) + (var(--carousel-padding) * 0.5));
  }
  &::scroll-button(inline-end) {
    content: "arrow_forward_ios" / "Scroll Right";
    right: calc(anchor(right) + (var(--carousel-padding) * 0.5));
  }

  &::scroll-button(*) {
    position: absolute;
    position-anchor: --carousel-control;
  }
}

.carousel::scroll-button(*):disabled {
  opacity: 0.2;
}
.carousel::scroll-button(*):disabled {
  opacity: 0.2;
}

:where(.carousel-item) {
  container-type: scroll-state;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
```

## Scroll Marker Group

<ThemedIframe
  src="/notebook-view/scroll-markers/scroll-marker.html"
  title="Fan List demo"
  max-width="28rem"
  height="20rem"
/>

```css:line-numbers
:where(.carousel) {
  scroll-marker-group: after;

  &::scroll-marker-group {
    position: fixed;
    position-anchor: --carousel-control;
    bottom: calc(anchor(bottom) + 0.75rem);
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

:where(.carousel-item) {
  container-type: scroll-state;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  &::scroll-marker {
    content: '';
    width: 0.75rem;
    aspect-ratio: 1;
    background-color: oklch(from CanvasText l c h / 0.5);
    border-radius: 50%;
  }

  &::scroll-marker:target-current {
    background-color: ActiveText;
  }
  &::scroll-marker:is(:hover, :focus-visible) {
    outline: 2px solid ActiveText;
    outline-offset: 0;
  }
}
```

## Scroll Button (Multiple)

<ThemedIframe
  src="/notebook-view/scroll-markers/products.html"
  title="Fan List demo"
  max-width="28rem"
  height="22rem"
/>

```css:line-numbers{19,23-25}
:where(section) {
  margin-bottom: 1rem;
}

:where(.carousel) {
  --carousel-padding: 1rem;
  --card-width: min(40vw, 12rem);

  box-sizing: border-box;
  width: 100%;
  padding: var(--carousel-padding);
  overflow-x: auto;
  padding: 1rem var(--carousel-padding);

  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: 1rem;

  scrollbar-width: none;
  scroll-behavior: smooth;
  overscroll-behavior-x: none;
  anchor-name: --carousel-control;
  anchor-scope: --carousel-control;
}

:where(.carousel-item) {
  container-type: scroll-state;
  scroll-snap-align: start;
}
```
