# clip-path

----

<baseline-status featureId="clip-path"></baseline-status>

## Cut Titles

<ThemedIframe
  src="/notebook-view/clip-path/title.html"
  title="Fan List demo"
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
  title="Fan List demo"
  max-width="32rem"
  height="20rem"
/>

This demo uses the custom [`<sun-moon>`](../polyfills/sun-moon) element.

```css:line-numbers{16,23}
:where(body) {
  &[theme=light] {
    background-color: white;
  }
  &[theme=dark] {
    background-color: black;
  }
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
