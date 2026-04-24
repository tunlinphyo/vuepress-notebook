<script setup lang="ts">
import { onMounted } from 'vue'

const SCRIPT_SRC = '/assets/interestfor.min.js'
const SOURCE_URL = 'https://github.com/tunlinphyo/vuepress-notebook/blob/main/.vitepress/theme/components/InterestInvokerLinkPreview.vue'

let interestInvokerScriptPromise: Promise<void> | null = null

function ensureInterestInvokerScript() {
  if (typeof document === 'undefined') return Promise.resolve()

  const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
  if (existingScript) return Promise.resolve()

  if (!interestInvokerScriptPromise) {
    interestInvokerScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.type = 'module'
      script.async = true
      script.src = SCRIPT_SRC
      script.addEventListener('load', () => resolve(), { once: true })
      script.addEventListener('error', () => reject(new Error(`Failed to load ${SCRIPT_SRC}`)), { once: true })
      document.head.appendChild(script)
    })
  }

  return interestInvokerScriptPromise
}

onMounted(() => {
  void ensureInterestInvokerScript().catch(() => {})
})
</script>

<template>
  <div class="interest-link-preview">
    <div class="interest-link-preview__surface">
      <a
        href="https://tun-online.web.app/"
        target="_blank"
        rel="noreferrer"
        class="interest-link-preview__link"
        interestfor="interest-link-preview-popover"
      >
        Tun's Portfolio
      </a>
    </div>

    <div id="interest-link-preview-popover" popover="hint" class="interest-link-preview__popover">
      <div class="interest-link-preview__card">
        <iframe
          class="interest-link-preview__frame"
          src="https://tun-online.web.app/"
          title="Tun's Portfolio preview"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.interest-link-preview {
  --interest-accent: var(--vp-c-brand-1);
  --interest-surface: color-mix(in srgb, var(--vp-c-bg-soft) 88%, var(--vp-c-text-1) 12%);
  --interest-ease-sine-out: cubic-bezier(.39, .575, .565, 1);
}

.interest-link-preview *,
.interest-link-preview *::before,
.interest-link-preview *::after {
  box-sizing: border-box;
}

.interest-link-preview__link {
  display: inline-block;
  padding-inline: 0.5rem;
  border-radius: 0.25rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  interest-delay: 0.2s;
}

@supports (corner-shape: squircle) {
  .interest-link-preview__link {
    border-radius: 1rem;
    corner-shape: squircle;
  }
}

.interest-link-preview__link:hover {
  color: var(--vp-c-brand-1);
}

.interest-link-preview__link:interest-source {
  background-color: var(--interest-accent);
  color: var(--vp-c-bg);
}

.interest-link-preview__popover {
  position: absolute;
  inset: auto;
  position-area: top;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  overflow: visible;
  max-width: 100%;
  max-height: 100%;
}

.interest-link-preview__card {
  width: min(20rem, calc(100vw - 3rem));
  height: 15rem;
  overflow: clip;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  transform-origin: bottom center;
  opacity: 0;
  scale: 0.5;
  transition: all 0.2s var(--interest-ease-sine-out);
}

@supports (corner-shape: squircle) {
  .interest-link-preview__card {
    border-radius: 40px;
    corner-shape: squircle;
  }
}

.interest-link-preview__popover:popover-open .interest-link-preview__card {
  opacity: 1;
  scale: 1;
}

.interest-link-preview__frame {
  width: 200%;
  height: 200%;
  border: 0;
  transform: scale(0.5);
  transform-origin: top left;
}

.interest-link-preview__source {
  text-align: center;
}
</style>
