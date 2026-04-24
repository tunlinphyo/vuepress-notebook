// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ThemedIframe from './components/ThemedIframe.vue'
import AdsenseBlock from './components/AdsenseBlock.vue'
import InterestInvokerLinkPreview from './components/InterestInvokerLinkPreview.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-outline-after': () =>
        h(AdsenseBlock),
      'doc-footer-before': () =>
        h('div', { class: 'adsense-mobile-only' }, h(AdsenseBlock))
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined' && !window.customElements.get('baseline-status')) {
      void import('baseline-status')
    }
    app.component('ThemedIframe', ThemedIframe)
    app.component('AdsenseBlock', AdsenseBlock)
    app.component('InterestInvokerLinkPreview', InterestInvokerLinkPreview)
  }
} satisfies Theme
