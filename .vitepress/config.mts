import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coder's Notebook",
  description: "A VitePress Site",
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
          { text: 'Color Picker', link: '/examples/color-picker' },
          { text: 'Fan List', link: '/examples/fan-list' },
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
        ]
      },
      {
        text: 'Other',
        items: [
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tunlinphyo' }
    ]
  }
})
