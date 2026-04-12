# Anchor Card Polyfills

## Demo
[anchor()](../notebook/anchor.md#anchor-card-polyfill)

## Usag
Use `anchorgroup` on a shared wrapper, then place one or more trigger elements with `anchoritem`, a single dialog element with `anchordialog`, and a close control with `anchorclose` inside that same group.

::: warning
The order matters: `anchoritem` items must come first and `anchordialog` must come after them. The polyfill promotes the active `anchoritem` into the anchor source, then toggles the shared group and dialog state around that item. If you change that structure, the card can fail to open or position correctly.
:::

```html
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

```js
main.addEventListener('anchorcard:open', ({ detail }) => {
  console.log('OPEN', detail.item, detial.target)
})
main.addEventListener('anchorcard:opened', ({ detail }) => {
  console.log('OPENED', detail.item, detial.target)
})
main.addEventListener('anchorcard:close', ({ detail }) => {
  console.log('CLOSE', detail.item, detial.target)
})
main.addEventListener('anchorcard:closed', ({ detail }) => {
  console.log('CLOSED', detail.item, detial.target)
})
```

## JavaScript

`anchor-card-polyfill.js`
```js:line-numbers
function anchorCardPolyfill() {
  const groups = document.querySelectorAll('[anchorgroup]')

  for (let group of groups) {
    const items = group.querySelectorAll('[anchoritem]')
    const list = group.querySelector('[anchorlist]')
    const target = group.querySelector('[anchordialog]')
    const targetClose = group.querySelector('[anchorclose]')

    if (!(list && target && targetClose)) continue

    let currentItem = null
    target.setAttribute('inert', '')

    for (let item of items) {
      item.addEventListener('click', () => handleItemClick(item))
    }

    targetClose.addEventListener('click', handleItemClose)

    function handleItemClick(item) {
      currentItem = item
      currentItem.setAttribute('anchoritem', 'open')
      group.dispatchEvent(new CustomEvent('anchorcard:open', {
        detail: { item, target }
      }))
      list.setAttribute('inert', '')
      setTimeout(() => {
        group.setAttribute('anchorgroup', 'open')
        group.addEventListener('transitionend', () => {
          target.removeAttribute('inert')
          target.setAttribute('anchordialog', 'open')
          group.dispatchEvent(new CustomEvent('anchorcard:opened', {
            detail: { item, target }
          }))
          targetClose.focus()
        }, { once: true })
      }, 0)
    }

    function handleItemClose() {
      if (!currentItem) return
      group.setAttribute('anchorgroup', '')
      target.setAttribute('anchordialog', '')
      group.dispatchEvent(new CustomEvent('anchorcard:close', {
        detail: { item: currentItem, target }
      }))
      target.setAttribute('inert', '')
      group.addEventListener('transitionend', () => {
        list.removeAttribute('inert')
        currentItem.setAttribute('anchoritem', '')
        group.dispatchEvent(new CustomEvent('anchorcard:closed', {
          detail: { item: currentItem, target }
        }))
        currentItem.focus()
        currentItem = null
      }, { once: true })
    }
  }
}

document.addEventListener('DOMContentLoaded', anchorCardPolyfill)
```

## CSS

`anchor-card-polyfill.css`
```css:line-numbers
:where([anchoritem]) {
  &[anchoritem=open] {
    opacity: 0;
    anchor-name: --anchor-card;
  }
}

:where([anchordialog]) {
  position: fixed;
  z-index: 9;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: min(95vw, 20rem);
  height: min(95vh, 20rem);

  display: none;
  opacity: 0;

  &[anchordialog=open] {
    opacity: 1;
  }
}

:where([anchorgroup=open]) {
  [anchordialog] {
    display: block;
    anchor-name: --anchor-card;
  }
}

:where([anchorgroup])::after {
  content: '';
  position-anchor: --anchor-card;
  position: fixed;
  z-index: 8;
  top: anchor(top);
  left: anchor(left);
  bottom: anchor(bottom);
  right: anchor(right);
  pointer-events: none;

  background-color: oklch(from Canvas l c h / 0.98);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 20px;
  @supports(corner-shape: squircle) {
    border-radius: 40px;
    corner-shape: squircle;
  }

  transition: all .3s cubic-bezier(.39,.575,.565,1);
}

:where([anchoritem],[anchorclose]) {
  &:is(:focus-visible) {
    outline: 2px solid LinkText;
    outline-offset: 2px;
  }
}
```
