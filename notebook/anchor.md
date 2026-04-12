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

## anchor-hover

<ThemedIframe
  src="/notebook-view/anchor/anchor-hover.html"
  title="Fan List demo"
  max-width="24rem"
  height="20rem"
/>

```css:line-numbers{2,9,15}
:where(ul) {
  anchor-name: --anchorhover;

  & a {
    width: 4rem;
    aspect-ratio: 3/2;

    &:is(:hover,:focus-visible) {
      anchor-name: --anchorhover;
    }
  }
}

:where(.blob) {
  position-anchor: --anchorhover;
  position: fixed;
  top: anchor(top);
  left: anchor(left);
  bottom: anchor(bottom);
  right: anchor(right);
}
```

## anchor-card

<ThemedIframe
  src="/notebook-view/anchor/anchor-card.html"
  title="Fan List demo"
  max-width="32rem"
  height="20rem"
/>

This code uses the [Polyfill](../polyfills/anchor-card.md).

```html:line-numbers
<main anchorgroup>
  <ul anchorlist>
    <li><button anchoritem>Card One</button></li>
    <li><button anchoritem>Card Two</button></li>
    <li><button anchoritem>Card Three</button></li>
    <li><button anchoritem>Card Four</button></li>
  </ul>

  <article anchordialog>
    <button anchorclose></button>
    <div class="scroll-y">
      <h1 id="title"></h1>
    </div>
  </article>
</main>
```

```js:line-numbers
const main = document.querySelector('main')
main.addEventListener('anchorcard:open', ({ detail }) => {
  const item = detail.currentItem
  const target = detail.target 
  const content = item.textContent.trim()
  const title = target.querySelector('#title')

  title.textContent = content
})
```
