# animation-timeline

----

<baseline-status featureId="scroll-driven-animations"></baseline-status>

## Timeline Demo

<ThemedIframe
  src="/ui-view/animation-timeline/index.html"
  title="Animation Timeline"
  max-width="32rem"
  height="20rem"
/>

## scroll()

<ThemedIframe
  src="/notebook-view/animation-timeline/scroll.html"
  title="Fan List demo"
  max-width="24rem"
  height="20rem"
/>

References: [Chrome Developer](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
 |
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)

::: tip ORDER MATTERS
Always declare `animation-timeline` after `animation`; otherwise, it will be overwritten.
:::

```css:line-numbers{5,6}
:where(.full-range) {
  transform-origin: left center;
  scale: 0 1;

  animation: scale-x auto linear forwards;
  animation-timeline: scroll(nearest block);
}

@keyframes scale-x {
  0% { scale: 0 1; }
  100% { scale: 1 1; }
}
```

```css:line-numbers{7}
:where(.with-range) {
  transform-origin: left center;
  scale: 0 1;

  animation: scale-x auto linear forwards;
  animation-timeline: scroll(nearest block);
  animation-range: 25% 75%;
}

@keyframes scale-x {
  0% { scale: 0 1; }
  100% { scale: 1 1; }
}
```

## view()

<ThemedIframe
  src="/notebook-view/animation-timeline/view.html"
  title="Fan List demo"
  max-width="20rem"
  height="28rem"
/>

[Playground](https://scroll-driven-animations.style/tools/view-timeline/ranges/#range-start-name=cover&range-start-percentage=0&range-end-name=cover&range-end-percentage=100&view-timeline-axis=block&view-timeline-inset=0&subject-size=smaller&subject-animation=reveal&interactivity=clicktodrag&show-areas=yes&show-fromto=yes&show-labels=yes)

::: info
EXIT-CROSSING 100% = EXIT 100% = COVER 100%

----

EXIT-CROSSING 0% = EXIT 0% = CONTAIN 100%

<br>

ENTRY-CROSSING 100% = ENTRY 100% = CONTAIN 0%

----

ENTRY-CROSSING 0% = ENTRY 0% = COVER 0%
:::

```css
:where(.contain) {
  animation: scale-x auto linear forwards;
  animation-timeline: view();
  animation-range: contain;
}
:where(.card) {
  animation-timeline: view(50vh 0); /* view(EXIT_INSET 50vh ENTRY_INSET 0) */
  animation-range: cover;
}
:where(.card) {
  animation-timeline: view(block 20vh); /* view(EXIT_INSET 20vh ENTRY_INSET 20vh) */
  animation-range: cover;
}
:where(.card) {
  animation-timeline: view(block 20vh 0); /* view(EXIT_INSET 20vh ENTRY_INSET 0) */
  animation-range: cover;
}
```

## scroll-timeline-name

<ThemedIframe
  src="/notebook-view/animation-timeline/timeline-name.html"
  title="Fan List demo"
  max-width="28rem"
  height="20rem"
/>

```css:line-numbers{2,6,12,21,24,27}
:where(body) {
  timeline-scope: --one-scroller, --two-scroller;
}

:where(.scrollbox--one) {
  scroll-timeline: --one-scroller block;
  /* scroll-timeline-name: --one-scroller;
  scroll-timeline-axis: y; */
}

:where(.scrollbox--two) {
  scroll-timeline: --two-scroller block;
  /* scroll-timeline-name: --two-scroller;
  scroll-timeline-axis: y; */
}

:where(.bar) {
  animation: scale-x auto linear forwards;

  &.bar--root {
    animation-timeline: scroll();
  }
  &.bar--one {
    animation-timeline: --one-scroller;
  }
  &.bar--two {
    animation-timeline: --two-scroller;
  }
}

@keyframes scale-x {
  0% { scale: 0 1; }
  100% { scale: 1 1; }
}
```
