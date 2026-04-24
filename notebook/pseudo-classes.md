# Pseudo Classes

## :any-link
<baseline-status featureId="link-selectors"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-classes/any-link.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
a:any-link {
  color: var(--accent);
  text-decoration: none;
}
```

## :empty
<baseline-status featureId="empty"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-classes/empty.html"
  title="Fan List demo"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
.with-loading:empty {
  &::before {
    content: "progress_activity";
    font-family: "Material Symbols Outlined";
    font-weight: 100;
    font-style: normal;
    font-size: 1.5rem;
    display: inline-block;
    color: var(--accent);
    animation: loading .7s var(--ease-sine-out) infinite;
  }
}
```

## :has()
<baseline-status featureId="has"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-classes/has.html"
  title="Fan List demo"
  max-width="28rem"
  height="20rem"
/>

```css:line-numbers
:where(section) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &:has(.featured) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
```

