# scroll-target-group

----

<baseline-status featureId="scroll-target-group"></baseline-status>

## Scroll Marker Group

<ThemedIframe
  src="/notebook-view/scroll-target-group/scroll-marker.html"
  title="Fan List demo"
  max-width="25rem"
  height="20rem"
/>

```css
:where(main) {
  overflow-y: auto;

  scroll-behavior: smooth;
  scroll-padding-top: 1.5rem;
  scroll-marker-group: after;

  &::scroll-marker-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.75rem;
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
    background-image: linear-gradient(to bottom, transparent, 2px, var(--bg-color) 2px, 4px, transparent 0);
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
