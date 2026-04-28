# scroll-state()

----

<baseline-status featureId="container-scroll-state-queries"></baseline-status>

## Scroll Stuck

<ThemedIframe
  src="/ui-view/scroll-stuck/index.html"
  title="Fan List demo"
  max-width="32rem"
  height="20rem"
/>

## Scroll Direction

<ThemedIframe
  src="/notebook-view/scroll-state/auto-nav.html"
  title="Animation Timeline"
  max-width="32rem"
  height="20rem"
/>

```css:line-numbers
:where(html) {
  container-type: scroll-state size;
}
@container scroll-state(scrolled: top) {
  .header {
    animation: show-header 0.5s var(--ease-sine-in) forwards;
  }
}
@container scroll-state(scrolled: bottom) {
  .header {
    animation: hide-header 0.5s var(--ease-sine-out) forwards;
  }
}
@keyframes hide-header {
  from,10% { translate: -50% 0; }
  to { translate: -50% -150%; }
}
@keyframes show-header {
  from,10% { translate: -50% -150%; }
  to { translate: -50% 0; }
}
```

## scroll-state(stuck: top)

<ThemedIframe
  src="/notebook-view/scroll-state/stuck.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

References: [Chrome Developer](https://developer.chrome.com/blog/css-scroll-state-queries)

::: tip NOTE
Set `container-type: scroll-state` on the sticky element, then use `scroll-state` from its children.
:::

```css:line-numbers{5,14}
:where(.sticky-title) {
  position: sticky;
  z-index: 1;
  top: 0;
  container-type: scroll-state;

  & span {
    background-color: Canvas;
    color: CanvasText;
  }

  @supports (container-type: scroll-state) {
    & span {
      @container scroll-state(stuck: top) {
        background-color: Highlight;
        color: HighlightText;
      }
    }
  }
}
```

```
stuck: none | top | right | bottom | left | block-start | inline-start | block-end | inline-end
```

## scroll-state(snapped: x)

<ThemedIframe
  src="/notebook-view/scroll-state/snapped.html"
  title="Fan List demo"
  max-width="24rem"
  height="18rem"
/>

```css:line-numbers{8,19}
:where(ul) {
  display: flex;
  overflow-y: auto;
  scroll-snap-type: x mandatory;
}
:where(li) {
  flex: 0 0 80%;
  container-type: scroll-state;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  & div {
    opacity: 0.8;
    scale: 0.8;
  }

  @supports (container-type: scroll-state) {
    & div {
      @container scroll-state(snapped: x) {
        opacity: 1;
        scale: 1;
      }
    }
  }

}
@supports not (container-type: scroll-state) {
  ul {
    gap: 1rem;

    li > div {
      scale: 1;
      opacity: 1;
    }
  }
}
```

```
snappe: none | x | y | block | inline | both
```

## scroll-state(scrollable: top)


<ThemedIframe
  src="/notebook-view/scroll-state/scrollable.html"
  title="Fan List demo"
  max-width="20rem"
  height="20rem"
/>

```css:line-numbers{3,12,19}
:where(ul) {
  overflow-y: auto;
  container-type: scroll-state size;

  li.hint--top,
  li.hint--bottom {
    scale: 0.25;
    opacity: 0;
  }
}

@container scroll-state(scrollable: top) {
  li.hint--top {
    scale: 1;
    opacity: 1;
  }
}

@container scroll-state(scrollable: bottom) {
  li.hint--bottom {
    scale: 1;
    opacity: 1;
  }
}
```

```
scrollable: none | top | right | bottom | left | block-start | inline-start | block-end | inline-end | x | y | block | inline
```
