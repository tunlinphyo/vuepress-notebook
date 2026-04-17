# dialog-closedby

----

<baseline-status featureId="dialog-closedby"></baseline-status>

## Closedby

<ThemedIframe
  src="/notebook-view/dialog-closedby/dialog.html"
  title="Fan List demo"
  max-width="24rem"
  height="20rem"
/>

```html:line-numbers
<dialog id="bynone" closedby="none">
  <h2>Dialog (closedby=none)</h2>
  <p>
    No user-triggered closing of dialogs at all. This is the default behavior.
  </p>
  <footer>
    <button id="confirmok" commandfor="bynone" command="close">Close</button>
  </footer>
</dialog>

<dialog id="bycloser" closedby="closerequest">
  <h2>Dialog (closedby=closerequest)</h2>
  <p>
    Pressing ESC (or other close trigger) closes the dialog
  </p>
  <footer>
    <button commandfor="bycloser" command="close">Close</button>
  </footer>
</dialog>

<dialog id="byany" closedby="any">
  <h2>Dialog (closedby=any)</h2>
  <p>
    Clicking outside the dialog, or pressing ESC, closes the dialog. Similar to popover="auto" behavior.
  </p>
  <footer>
    <button commandfor="byany" command="close">Close</button>
  </footer>
</dialog>
```
