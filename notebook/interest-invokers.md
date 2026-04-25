# interest-invoker

----
<baseline-status featureId="interest-invokers"></baseline-status>

::: tip
Unlike command invokers, which only work on button elements, interest invokers can be set on links `(<a> tags)` as well as buttons.
:::

<InterestInvokerLinkPreview />

----

## Interestfor Demo

Hover the remote buttons below and verify that a popover appears for the hovered button.

<ThemedIframe
  src="/notebook-view/interest-invokers/remote.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

## interestfor

<ThemedIframe
  src="/notebook-view/interest-invokers/interestfor.html"
  title="Fan List demo"
  max-width="24rem"
  height="20rem"
/>

```html:line-numbers
<a href="https://tun-online.web.app/" target="_blank" interestfor="interest">Tun's Portfolio</a>

<div id="interest" popover="hint">
  <div class="popover">
    <iframe src="https://tun-online.web.app/" frameborder="0"></iframe>
  </div>
</div>
```

```css:line-numbers
[interestfor] {
  interest-delay: 0.2s;
}
:interest-source {
  background-color: var(--accent);
  color: contrast-color(var(--accent));
}
```

```js:line-numbers
const iframe = document.querySelector('iframe')

iframe.addEventListener('load', () => {
  iframe.style.transform = 'scale(0.5)'
  iframe.style.transformOrigin = 'top left'
  iframe.style.width = '200%'
  iframe.style.height = '200%'
})
```

<!-- ## Mega Menu

<ThemedIframe
  src="/notebook-view/interest-invokers/mega-menu.html"
  title="Fan List demo"
  max-width="28rem"
  height="20rem"
/> -->