# Toggle Polyfills

## Demo
[Fan List](../examples/fan-list.md)

This polyfill adds reliable animated close behavior for a `<dialog>` controlled through the `command` event with `command="close"` and `commandfor="<dialog-id>"`. When a close command or `cancel` event fires, it prevents the browser from closing the dialog immediately, applies `data-closing`, waits for the transition to finish, then calls `dialog.close()`.

It does not polyfill the declarative invoker attributes by itself. For broader browser support of `command`, `commandfor`, and dialog commands such as `show-modal` and `close`, use it with [invokers-polyfill](https://github.com/keithamus/invokers-polyfill).

## Usag

```html
<button commandfor="mydialog" command="show-modal">OPEN DIALOG</button>
<dialog id="mydialog">
  <button  commandfor="mydialog" command="close">CLOSE DIALOG</button>
  <article>
    <h1>Dialog</h1>
  </article>
</dialog>
```

## JavaScript

`dialog-polyfill.js`

<<< ../public/polyfills/dialog-polyfill.js
