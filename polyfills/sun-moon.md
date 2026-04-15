# sun-moon (Custom Element)

## Demo
[Theme Canger](../notebook/clip-path.html#theme-changer)

This custom element was inspired by [Smooth Sun/Moon Animation with SVG Masks](https://shawneither.hashnode.dev/sunmoon-animation-svg-masks).

## Usag

```html
<sun-moon size="32"></sun-moon>
<sun-moon theme="light" size="2rem" sun-color="hotpink" moon-color="skyblue"></sun-moon>
```

`sun-moon`
```js
class SunMoon extends HTMLElement {
  static get observedAttributes() {
    return ['theme', 'size', 'sun-color', 'moon-color']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) this.render()
    if (!this.hasAttribute('theme')) this.theme = 'light'
    this.syncAttributes()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return
    this.syncAttributes()
  }

  get theme() {
    return this.getAttribute('theme') === 'dark' ? 'dark' : 'light'
  }

  set theme(value) {
    this.setAttribute('theme', value === 'dark' ? 'dark' : 'light')
  }

  normalizeLength(value) {
    if (!value) return ''
    return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value
  }

  syncAttributes() {
    if (!this.shadowRoot) return

    if (this.getAttribute('theme') !== this.theme) {
      this.setAttribute('theme', this.theme)
    }

    const size = this.normalizeLength(this.getAttribute('size'))
    const sunColor = this.getAttribute('sun-color') || 'CanvasText'
    const moonColor = this.getAttribute('moon-color') || sunColor
    const color = this.theme === 'dark' ? moonColor : sunColor

    this.style.setProperty('--sun-moon-size', size || '48px')
    this.style.setProperty('--sun-moon-color', color)
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(--sun-moon-size, 24px);
          height: var(--sun-moon-size, 24px);
          color: var(--sun-moon-color, CanvasText);
          line-height: 0;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        #center,
        #mask-rays,
        #mask-center {
          transform-origin: center;
          transition: transform 250ms ease-out;
        }

        #center {
          fill: currentColor;
          transform: rotate(-35deg);
        }

        #rays {
          stroke: currentColor;
          stroke-width: 2px;
        }

        :host([theme="dark"]) #center {
          transform: rotate(-35deg) scale(2);
        }

        :host([theme="dark"]) #mask-rays {
          transform: scale(0.5);
        }

        :host([theme="dark"]) #mask-center {
          transform: translateX(-18px);
        }
      </style>

      <svg viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <mask id="maskc">
            <rect x="0" y="0" width="32" height="32" fill="white"></rect>
            <circle id="mask-center" cx="40" cy="16" r="8" fill="black"></circle>
          </mask>
          <mask id="maskr">
            <circle id="mask-rays" cx="16" cy="16" r="16" fill="white"></circle>
          </mask>
        </defs>
        <circle id="center" mask="url(#maskc)" r="8" cx="16" cy="16"></circle>
        <path
          id="rays"
          mask="url(#maskr)"
          d="M6,16l-6,0 M8.929,8.929l-4.243,-4.243 M8.929,23.071l-4.243,4.243 M16,26l-0,6 M27.314,27.314l-4.243,-4.243 M32,16l-6,0 M27.314,4.686l-4.243,4.243 M16,-0l-0,6"
        ></path>
      </svg>
    `
  }
}
```
