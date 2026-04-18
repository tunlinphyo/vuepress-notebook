# invoker-commands

----

<baseline-status featureId="invoker-commands"></baseline-status>

----

<baseline-status featureId="sibling-count"></baseline-status>

::: info
- `show-popover`: `el.showPopover()`
- `hide-popover`: `el.hidePopover()`
- `toggle-popover`: `el.togglePopover()`
- `show-modal`: `dialogEl.showModal()`
- `close`: `dialogEl.close()`
:::

## Dialog

<ThemedIframe
  src="/notebook-view/invoker-commands/dialog.html"
  title="Fan List demo"
  max-width="24rem"
  height="20rem"
/>

```html:line-numbers
<main>
  <button
    commandfor="confirm"
    command="show-modal"
    data-message="This action cannot be undone. Continue?">
    Open Confirm
  </button>
</main>

<dialog id="confirm">
  <h2>This is confirm message!</h2>
  <footer>
    <button commandfor="confirm" command="close">No</button>
    <button id="confirmok" commandfor="confirm" command="--on-confirm">Yes</button>
  </footer>
</dialog>
```

```css:line-numbers
:where(dialog) {
  translate: 0 -75%;
  opacity: 0;
  scale: 0.5;
  transition: all 0.6s var(--ease-spring-2);

  &::backdrop {
    opacity: 0;
    transition: opacity 0.2s var(--ease-in-3);
  }

  &[open] {
    translate: 0 0;
    opacity: 1;
    scale: 1;
    transition: all 0.6s var(--ease-spring-2);

    @starting-style {
      translate: 0 75%;
      opacity: 0;
      scale: 0.5;
    }

    &::backdrop {
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    }
  }

  @supports (animation-name: test-starting-style) {
    transition:
      all 0.2s var(--ease-sine-out),
      display 0.2s allow-discrete,
      overlay 0.2s allow-discrete;
  }
}
```

```js:line-numbers
dialog.addEventListener('command', (e) => {
  const message = e.source.dataset.message || ''
  const titleEl = e.target.querySelector('h2')
  if (titleEl && message) titleEl.innerText = message

  if (e.command === "--on-confirm") {
    console.log('Confirm:: ', titleEl.innerText)
    dialog.close()
  }
});
```

## Fan Menu

<ThemedIframe
  src="/notebook-view/invoker-commands/fan-menu.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```html:line-numbers
<button class="btn-circle open-fan" commandfor="fanlist" command="show-modal"></button>

<dialog id="fanlist">
  <button class="btn-circle close-fan" commandfor="fanlist" command="close"></button>

  <div class="wheel" style="--count: 6">
    <div class="wheel-item" style="--index: 1">
      <button commandfor="popover1" command="show-popover"></button>
    </div>
    <div class="wheel-item" style="--index: 2">
      <button commandfor="popover2" command="show-popover"></button>
    </div>
    ...
  </div>
</dialog>
```

```css:line-numbers
:where(dialog) {
  background-color: transparent;

  &::backdrop {
    transition: opacity 0.5s var(--ease-1);
  }

  &[open] {
    &::backdrop {
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    }
  }

  @supports (animation-name: test-starting-style) {
    transition:
      display 0.5s allow-discrete,
      overlay 0.5s allow-discrete;
  }
}

:where(.wheel) {
  --step: calc(75deg / sibling-count());
  --offset: calc((sibling-count() - 1) / 2);
  --degree: 0deg;
  --move-x: max(32vw, 30vh);

  .wheel-item {
    position: absolute;
    z-index: 0;
    right: 0;
    padding-inline-end: calc(var(--move-x) * 2);
    transform-origin: right center;
    transform: translate(var(--move-x), 0) rotate(var(--degree));
    opacity: 0;
    transition: transform 1s var(--ease-spring-3), opacity .25s var(--ease-1);
  }
}

:where(dialog[open]) {
  .wheel-item {
    opacity: 1;
    --degree: calc(((sibling-index() - 1) - var(--offset)) * var(--step) * -1);

    @starting-style {
      transform: translate(var(--move-x), 0) rotate(0deg);
      opacity: 0;
    }
  }
}
```

## Mini App

<ThemedIframe
  src="/notebook-view/invoker-commands/mini-app.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```html:line-numbers
<main>
  <header>
    <h1>Mini App</h1>
  </header>
  <ul>
    <li>
      <button commandfor="itempage" command="--open-item" data-id="1">Item One</button>
    </li>
    ...
  </ul>
</main>

<dialog id="itempage">
  <header>
    <button commandfor="itempage" command="close"></button>
    <h2 id="title"></h2>
  </header>
  <article>
    ...
  </article>
</dialog>
```

```css:line-numbers

:where(dialog) {
  translate: 100% 0;
  transition: translate 0.3s var(--ease-sine-out);

  &:open {
    translate: 0 0;

    @starting-style {
      translate: 100% 0;
    }
  }

  @supports (animation-name: test-starting-style) {
    transition:
      translate 0.3s var(--ease-sine-out),
      display 0.3s allow-discrete,
      overlay 0.3s allow-discrete;
  }
}
```
