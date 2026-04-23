# scroll-target-group

----

<baseline-status featureId="scroll-target-group"></baseline-status>

----

<baseline-status featureId="attr"></baseline-status>

## Scroll Target Demo

This demo show how `scroll-target-group` can keep a compact in-page navigation in sync with the active section. Each day acts as a scroll target, and the generated markers let you jump between sections while the current target updates automatically as you scroll.
Each event is positioned with `attr()`, so the layout can read `data-hour-start` and `data-hour-end` directly from the markup and map them into the day grid without extra JavaScript.

```css
:where(.event) {
  top: calc(((100% / 25) * attr(data-hour-start type(<number>))) + 1rem);
  height: calc((attr(data-hour-end type(<number>)) - attr(data-hour-start type(<number>))) * 2rem);
}
```

<ThemedIframe
  src="/ui-view/mini-calendar/index.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

## Scroll Marker Group

<ThemedIframe
  src="/notebook-view/scroll-target-group/scroll-marker.html"
  title="Fan List demo"
  max-width="25rem"
  height="20rem"
/>

```css
:where(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 1.5rem;
  scroll-marker-group: after;

  &::scroll-marker-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

:where(section) {
  width: 100%;

  &::scroll-marker {
    --bg-color: oklch(from CanvasText l c h / 0.8);
    cursor: pointer;
    width: 2rem;
    height: 6px;
    scale: 0.3 1;
    transition: scale 0.3s var(--ease-sine-out);
    transform-origin: left center;
    background-color: transparent;
    background-image: linear-gradient(
      to bottom,
      transparent 0 calc(50% - 1px),
      var(--bg-color) calc(50% - 1px) calc(50% + 1px),
      transparent calc(50% + 1px) 100%
    );
  }

  &::scroll-marker:target-current {
    --bg-color: ActiveText;
    scale: 1;
  }
}
```

## Scroll Target Group

<ThemedIframe
  src="/notebook-view/scroll-target-group/scroll-target.html"
  title="Fan List demo"
  max-width="25rem"
  height="20rem"
/>

```html
<nav>
  <ul>
    <li><a href="#section-1"></a></li>
    <li><a href="#section-2"></a></li>
    <li><a href="#section-3"></a></li>
    ...
  </ul>
</nav>
<main>
  <section id="section-1">...</section>
  <section id="section-2">...</section>
  ...
</main>
```

```css:line-numbers
:where(html, body) {
  scroll-behavior: smooth;
  scroll-padding-top: 1.5rem;
}

:where(nav) {
  scroll-target-group: auto;

  & a {
    scale: 0.3 1;
    transition: scale 0.3s var(--ease-sine-out);

    &:target-current {
      scale: 1;
    }
  }
}
```
