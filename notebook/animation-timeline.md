# animation-timeline

----

<baseline-status featureId="scroll-driven-animations"></baseline-status>

## scroll()

<ThemedIframe
  src="/notebook-view/animation-timeline/scroll.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

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
