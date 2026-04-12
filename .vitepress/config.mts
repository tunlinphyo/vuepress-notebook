import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cody Draft',
  description: "Tun's Code Drafts",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag === 'baseline-status',
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
          { text: 'Fan List', link: '/examples/fan-list' },
          { text: 'Fancy Nav', link: '/examples/fancy-nav' },
          // { text: 'Markdown Examples', link: '/examples/markdown-examples' },
        ]
      },
      {
        text: 'Notebook',
        items: [
          { text: 'Cool CSS', link: '/notebook/cool-css' },
          { text: 'anchor()', link: '/notebook/anchor' },
          { text: 'animation-timeline', link: '/notebook/animation-timeline' },
          { text: '@counter-style', link: '/notebook/counter-style' },
          { text: 'motion-path', link: '/notebook/motion-path' },
          { text: '@property', link: '/notebook/property' },
          { text: 'scroll-state()', link: '/notebook/scroll-state' },
          // { text: 'Wheel Select', link: '/notebook/wheel-select' },
        ]
      },
      {
        text: 'Polyfills',
        items: [
          { text: 'anchor-card', link: '/polyfills/anchor-card' },
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
