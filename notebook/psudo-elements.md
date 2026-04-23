# Pseudo Elements

## ::details-content
<baseline-status featureId="details-content"></baseline-status>
----
<baseline-status featureId="interpolate-size"></baseline-status>

<ThemedIframe
  src="/notebook-view/psudo-elements/details-content.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
details {
  interpolate-size: allow-keywords;
  overflow: clip;

  summary {
    padding: 0.5rem 1rem;

    &::marker {
      display: none;
    }

    &::after {
      content: "▸";
      transition: transform 0.3s var(--ease-sine-out);
    }
  }

  &::details-content {
    background-color: var(--accent);
    height: 0;
    transition: height 0.3s var(--ease-sine-out);

    @supports (color: contrast-color(red)) {
      color: contrast-color(var(--accent));
    }

    @supports (animation-name: test-starting-style) {
      transition:
        all 0.3s var(--ease-sine-out),
        display 0.3s allow-discrete,
        overlay 0.3s allow-discrete;
    }
  }

  &[open] {
    summary::after {
      transform: rotate(90deg);
    }

    &::details-content {
      padding: 1rem;
      height: auto;

      @starting-style {
        height: 0;
      }
    }
  }
}
```

## ::marker
<baseline-status featureId="marker"></baseline-status>

<ThemedIframe
  src="/notebook-view/psudo-elements/marker.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
summary::marker {
  color: var(--accent);
}
li::marker {
  content: "✝ ";
  font-size: 1.2em;
  color: var(--accent);
}
```

## ::selection
<baseline-status featureId="selection"></baseline-status>

<ThemedIframe
  src="/notebook-view/psudo-elements/selection.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
::selection {
  background-color: var(--accent);
  color: white;

  @supports (color: contrast-color(red)) {
    color: contrast-color(var(--accent));
  }
}
```
