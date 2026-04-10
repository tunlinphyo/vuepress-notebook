# anchor()

----

<baseline-status featureId="container-anchor-position-queries"></baseline-status>

----

<baseline-status featureId="anchor-positioning"></baseline-status>


[Anchor Tool](https://chrome.dev/anchor-tool/)

## position-try-fallbacks

<ThemedIframe
  src="/notebook-view/anchor/position-anchor.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers{2,6,7,11,34,40}
:where(button) {
  anchor-name: --popover;
}

:where([popover]) {
  container-type: anchored;
  position-anchor: --popover;
  top: auto;
  bottom: anchor(top);
  left: anchor(right);
  position-try-fallbacks: --try-bottom;

  .popover-content {
    scale: 0;
    transition: scale 0.25s ease-out;
    transform-origin: left bottom;
  }
  &:popover-open .popover-content {
    scale: 1;
    transition: all .6s var(--ease-spring-2);

    @starting-style {
      scale: 0;
    }
  }

  @supports (animation-name: test-starting-style) {
    transition:
      display 0.25s allow-discrete,
      overlay 0.25s allow-discrete;
  }
}

@position-try --try-bottom {
  top: anchor(bottom);
  bottom: auto;
  left: anchor(right);
}

@container anchored(fallback: --try-bottom) {
  [popover] .popover-content {
    transform-origin: left top;
  }
}
```

## position-try-fallbacks

<ThemedIframe
  src="/notebook-view/anchor/anchor-card.html"
  title="Fan List demo"
  max-width="30rem"
  height="24rem"
/>
