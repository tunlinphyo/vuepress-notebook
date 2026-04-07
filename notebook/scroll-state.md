# scroll-state()

----

<baseline-status featureId="scroll-state()"></baseline-status>

## scroll-state(stuck: top)

<ThemedIframe
  src="/notebook-view/scroll-state/stuck.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css{5,}
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
