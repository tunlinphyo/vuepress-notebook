# clip-path

----

<baseline-status featureId="clip-path"></baseline-status>

## Cut Titles

<ThemedIframe
  src="/notebook-view/clip-path/title.html"
  title="Cut Titles"
  max-width="24rem"
  height="20rem"
/>

This version cuts the title with a simple polygon so only the top portion stays visible. For a related scrolling effect, check out [scroll-state(snapped: x)](..//notebook/scroll-state.html#scroll-state-snapped-x). If you want to sketch your own shapes, [clip-path Maker](https://bennettfeely.com/clippy/) is a quick way to prototype them.

```css:line-numbers{4}
:where(h2) {
  font-size: calmp(2rem, 8vw, 4rem);
  font-weight: 400;
  clip-path: polygon(0 0, 100% 0, 100% 52%, 0 52%);
}
```

## Theme Changer

<ThemedIframe
  src="/notebook-view/clip-path/light-dark.html"
  title="Theme Changer"
  max-width="32rem"
  height="20rem"
/>

This demo uses the custom [`<sun-moon>`](../polyfills/sun-moon) element.

```css:line-numbers{16,23}
:where(body) {
  background-color: Canvas;
  transition: background-color 0s linear 0.5s;
}

:where(body[togelling]) {
  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background-color: Canvas;
    clip-path: circle(0% at calc(100% - 3rem) 3rem);
    animation: theme-changing 0.5s var(--ease-sine-in);
  }
}

@keyframes theme-changing {
  to {
    clip-path: circle(150% at calc(100% - 3rem) 3rem);
  }
}
```

```js:line-numbers
const root = document.documentElement
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')

const getTheme = () => {
  const colorSchemeValue = root.style.colorScheme.trim()

  if (colorSchemeValue === 'dark' || colorSchemeValue === 'light') {
    return colorSchemeValue
  }

  return colorScheme.matches ? 'dark' : 'light'
}

const syncSunMoonTheme = () => {
  const theme = getTheme()
  sunMoon.theme = theme
  document.body.setAttribute('togelling', '')
  document.body.addEventListener('animationend', () => {
    document.body.removeAttribute('togelling')
    document.body.setAttribute('theme', theme)
  })
}

const toggleTheme = () => {
  const nextTheme = getTheme() === 'dark' ? 'light' : 'dark'
  root.style.colorScheme = nextTheme
}

syncSunMoonTheme()
colorScheme.addEventListener('change', syncSunMoonTheme)
toggleButton.addEventListener('click', toggleTheme)

new MutationObserver(syncSunMoonTheme).observe(root, {
  attributes: true,
  attributeFilter: ['style'],
})
```

## shape()

<ThemedIframe
  src="/notebook-view/clip-path/shape.html"
  title="shape()"
  max-width="32rem"
  height="20rem"
/>

```css
:where(.box--one) {
  --corner: 2rem;
  --curve: 0rem;
  clip-path: shape(
    from var(--corner) 0%,
    line to calc(100% - var(--corner)) 0%,
    arc to 100% var(--corner) of var(--curve),
    line to 100% calc(100% - var(--corner)),
    arc to calc(100% - var(--corner)) 100% of var(--curve),
    line to var(--corner) 100%,
    arc to 0% calc(100% - var(--corner)) of var(--curve),
    line to 0% var(--corner),
    arc to var(--corner) 0% of var(--curve),
    close
  );
}
:where(.box--two) {
  --corner: 3rem;
  --curve: 0.5rem;
  clip-path: shape(
    from var(--corner) 0%,
    line to calc(100% - var(--corner)) 0%,
    curve to 100% var(--corner) with calc(100% - var(--curve)) 0% / 100% var(--curve),
    line to 100% calc(100% - var(--corner)),
    curve to calc(100% - var(--corner)) 100% with 100% calc(100% - var(--curve)) / calc(100% - var(--curve)) 100%,
    line to var(--corner) 100%,
    curve to 0% calc(100% - var(--corner)) with var(--curve) 100% / 0% calc(100% - var(--curve)),
    line to 0% var(--corner),
    curve to var(--corner) 0% with 0% var(--curve) / var(--curve) 0%,
    close
  );
}
```

## Browser

<ThemedIframe
  src="/notebook-view/clip-path/browser.html"
  title="Browser"
  max-width="32rem"
  height="20rem"
/>

```css:line-numbers

:where(.browser) {
  clip-path: polygon(0 0, 40% 0, 2% 100%, 8% 100%, 46% 0, 100% 0, 100% 100%, 0 100%);
  border: 2px solid ActiveText;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 5;
    inset: 0;
    background-color: ActiveText;
  }

  &::before {
    clip-path: polygon(calc(40% - 4px) 0, 40% 0, 2% 100%, calc(2% - 3px) 100%);
  }
  &::after {
    clip-path: polygon(calc(46% - 2px) 0, calc(46% + 1px) 0, calc(8% + 2px) 100%, calc(8% - 2px) 100%);
  }
}
```
