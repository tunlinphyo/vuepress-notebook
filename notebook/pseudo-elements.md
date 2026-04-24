# Pseudo Elements

## ::details-content
<baseline-status featureId="details-content"></baseline-status>
----
<baseline-status featureId="interpolate-size"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-elements/details-content.html"
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
      content: "arrow_forward_ios";
      font-family: "Material Symbols Outlined";
      font-weight: 100;
      font-style: normal;
      display: inline-block;
      color: var(--accent);
      transition: transform 0.3s var(--ease-sine-out);
    }
  }

  &::details-content {
    background-color: var(--accent);
    height: 0;
    transition: all 0.3s var(--ease-sine-out);
    transition-behavior: allow-discrete;
    /* content-visibility 0.3s allow-discrete */

    @supports (color: contrast-color(red)) {
      color: contrast-color(var(--accent));
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
  src="/notebook-view/pseudo-elements/marker.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
summary::marker {
  content: counter(count, decimal) ". ";
  color: var(--accent);
}
ul {
  list-style-type: poker-list;
}
li::marker {
  color: var(--accent);
}
@counter-style poker-list {
  system: cyclic;
  symbols: "\2660" "\2665" "\2666" "\2663";
  suffix: "  ";
}
```

## ::selection
<baseline-status featureId="selection"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-elements/selection.html"
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
