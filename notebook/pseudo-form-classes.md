# Pseudo Form Classes

## :autofill
<baseline-status featureId="autofill"></baseline-status>
----
<baseline-status featureId="caret-shape"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-form-classes/autofill.html"
  title=":autofill"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
:where(input) {
  border: 1px solid GrayText;
  caret-color: var(--accent);
  caret-shape: block;

  &:autofill {
    box-shadow: inset 0 0 0 5rem var(--bg-color);
    border: 2px dotted var(--accent);
  }
}
```

## form-validity-pseudos
<baseline-status featureId="form-validity-pseudos"></baseline-status>

<ThemedIframe
  src="/notebook-view/pseudo-form-classes/form-validity.html"
  title="form-validity-pseudos"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
:where(input) {
  &:valid {
    background-color: oklch(from green l c h / 0.1);
    color: green;
    border-color: green;
  }
  &:invalid {
    background-color: oklch(from red l c h / 0.1);
    color: red;
    border-color: red;
  }
}
```

## user-pseudos
<baseline-status featureId="user-pseudos"></baseline-status>

::: tip
`:valid` and `:invalid` match immediately, so a required empty field can look "wrong" before the user has typed anything. `:user-valid` and `:user-invalid` are usually better for form feedback because they wait until the user has interacted with the control, which avoids noisy first-paint errors and makes validation states feel less premature.
:::

<ThemedIframe
  src="/notebook-view/pseudo-form-classes/user-pseudos.html"
  title="user-pseudos"
  max-width="20rem"
  height="24rem"
/>

```css:line-numbers
:where(input) {
  &:user-valid {
    background-color: oklch(from green l c h / 0.1);
    color: green;
    border-color: green;
  }
  &:user-invalid {
    background-color: oklch(from red l c h / 0.1);
    color: red;
    border-color: red;
  }
}
```
