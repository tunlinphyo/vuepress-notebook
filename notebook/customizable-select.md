# customizable-select

----

<baseline-status featureId="customizable-select"></baseline-status>

## Circle Select

<ThemedIframe
  src="/notebook-view/customizable-select/circle-select.html"
  title="Circle Select"
  max-width="24rem"
  height="20rem"
/>

[Customizable select](https://chrome.dev/css-wrapped-2025/#customizable-select)

This demo is inspired by this [CodePen](https://codepen.io/dylanbeattie/pen/dPGKZvg), and a custom element version is available at [offset-path](./motion-path.md#offset-path).

```css:line-numbers{4}
@supports (appearance: base-select) {
  select,
  ::picker(select) {
    appearance: base-select;
  }

  :where(select) {
    border: none;
    padding: 0;
    background-color: transparent;
    overflow: visible;
    border-radius: 50%;
    position: relative;

    &::picker-icon {
      display: none;
    }

    & selectedcontent {
      width: 3rem;
      aspect-ratio: 1;
      display: grid;
      place-content: center;
      font-size: 2rem;
      border-radius: 50%;
      background-color: var(--surface);

      .person {
        display: none;
      }
    }

    &:is(:focus-visible) {
      outline: 2px solid ActiveText;
      outline-offset: 2px;
    }

    & option {
      appearance: base-select;
      grid-area: option;
      position: relative;
      z-index: 0;
      width: 3rem;
      aspect-ratio: 1;
      display: grid;
      place-content: center;
      font-size: 2rem;
      border-radius: 50%;
      background-color: var(--surface);
      box-shadow: rgba(0,0,0,0.2) 0px 2px 8px 0px;

      offset-path: circle(0 at 50% 50%);
      offset-anchor: center;
      offset-rotate: 0deg;
      offset-distance: calc(-100% + (sibling-index()) * 100% / calc(sibling-count() - 1));
      scale: 0;

      cursor: pointer;
      transition: offset .35s var(--ease-sine-out), scale .35s var(--ease-sine-out);

      &::checkmark {
        display: none;
      }

      &:checked {
        scale: 1;
        z-index: 9;
      }
    }

    &:open {
      option {
        scale: 1;
        offset-path: circle(clamp(40px, 30vw, 80px) at 50% 50%);
        offset-distance: calc(-50% + (sibling-index()) * 100% / calc(sibling-count() - 1));

        &:is(:hover,:focus-visible) {
          scale: 1.1;
        }
        &:is(:focus-visible) {
          outline: 2px solid ActiveText;
          outline-offset: 2px;
        }

        &:checked {
          background-color: light-dark(oklch(from HighLight 0.8 c h / 1), oklch(from HighLight 0.4 c h / 1));
        }
      }
    }
  }

  ::picker(select) {
    outline: none;
    border: none;
    background-color: transparent;

    display: grid;
    grid-template-areas: 'option';
    overflow: visible;

    top: anchor(top);
    left: anchor(left);
    right: anchor(right);
    bottom: anchor(bottom);
  }
}
```

## Custom Select

<ThemedIframe
  src="/notebook-view/customizable-select/custom-select.html"
  title="Custom Select"
  max-width="24rem"
  height="24rem"
/>

```css:line-numbers
@supports (appearance: base-select) {
  select,
  ::picker(select) {
    appearance: base-select;
  }

  :where(select) {
    & selectedcontent {
      & span {
        display: none;
      }
    }

    & option {
      & span {
        display: block;
      }

      &::checkmark {
        display: none;
      }
    }
  }
}
```

## Time Select

<ThemedIframe
  src="/notebook-view/customizable-select/time-select.html"
  title="Time Select"
  max-width="28rem"
  height="20rem"
/>
