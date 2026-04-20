# scroll-target-group

----

<baseline-status featureId="scroll-target-group"></baseline-status>

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

## Scroll Marker Group

<ThemedIframe
  src="/notebook-view/scroll-target-group/scroll-marker.html"
  title="Fan List demo"
  max-width="25rem"
  height="20rem"
/>
