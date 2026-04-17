import { defineConfig } from 'vitepress'

const customElements = new Set([
  'baseline-status',
  'circle-select',
  'circle-option',
  'circle-selected',
  'sun-moon',
])

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cody Draft',
  description: "Tun's Code Drafts",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => customElements.has(tag),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/examples/about-me-card' }
    // ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'About Me Card', link: '/examples/about-me-card' },
          // { text: 'Anchor Flip', link: '/examples/anchor-flip' },
          { text: 'Color Picker', link: '/examples/color-picker' },
          { text: 'Cool CSS', link: '/examples/cool-css' },
          // { text: 'Fan List', link: '/examples/fan-list' },
          // { text: 'Fancy Nav', link: '/examples/fancy-nav' },
          // { text: 'Markdown Examples', link: '/examples/markdown-examples' },
        ]
      },
      {
        text: 'Notebook',
        items: [
          { text: 'anchor()', link: '/notebook/anchor' },
          { text: 'animation-timeline', link: '/notebook/animation-timeline' },
          { text: 'clip-path', link: '/notebook/clip-path' },
          { text: '@counter-style', link: '/notebook/counter-style' },
          { text: 'customizable-select', link: '/notebook/customizable-select' },
          { text: 'dialog-closedby', link: '/notebook/dialog-closedby' },
          { text: 'invoker-commands', link: '/notebook/invoker-commands' },
          { text: 'motion-path', link: '/notebook/motion-path' },
          { text: 'popover-hint', link: '/notebook/popover-hint' },
          { text: '@property', link: '/notebook/property' },
          { text: 'scroll-state()', link: '/notebook/scroll-state' },
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'anchor-card', link: '/polyfills/anchor-card' },
          { text: 'circle-select', link: '/polyfills/circle-select' },
          { text: 'dialog-polyfill', link: '/polyfills/dialog-polyfill' },
          { text: 'sun-moon', link: '/polyfills/sun-moon' },
          { text: 'toggle-polyfill', link: '/polyfills/toggle-polyfill' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tunlinphyo' },
      {
        icon: {
          svg: `<svg viewBox="0 0 64 64"><g><path fill="currentCOlor" fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18v28c0 8.837 7.163 16 16 16h28c8.837 0 16-7.163 16-16V18c0-8.837-7.163-16-16-16zm10 30a2 2 0 0 1-.662 1.487l-10 9a2 2 0 1 1-2.676-2.974L23.01 32l-8.348-7.513a2 2 0 0 1 2.676-2.974l10 9A2 2 0 0 1 28 32zm20 11a2 2 0 1 0 0-4H32a2 2 0 1 0 0 4z"></path></g></svg>`,
        },
        link: 'https://github.com/tunlinphyo'
      }
    ]
  }
})
