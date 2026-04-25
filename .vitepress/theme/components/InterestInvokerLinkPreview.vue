<script setup lang="ts">
import { onMounted, ref } from 'vue'

const SCRIPT_SRC = '/assets/interestfor.min.js'

const website = ref<string>("https://tun-online.web.app/")

let interestInvokerScriptPromise: Promise<void> | null = null

const iframeRef = ref<HTMLIFrameElement | null>(null)

function styleIframePreview() {
  const iframe = iframeRef.value
  if (!iframe) return

  iframe.style.transform = 'scale(0.5)'
  iframe.style.transformOrigin = 'top left'
  iframe.style.width = '200%'
  iframe.style.height = '200%'
}

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
  iframeRef.value?.addEventListener('load', styleIframePreview, { once: true })
  styleIframePreview()
  void ensureInterestInvokerScript().catch(() => {})
})
</script>

<template>
  <div>
    Hover over the link to preview it, interact with the preview, <br>
    then click to visit <a
      :href="website"
      target="_blank"
      rel="noreferrer"
      class="interest-link-preview__link"
      interestfor="interest-link-preview-popover"
    >Tun's Portfolio
    </a>
  </div>

  <div id="interest-link-preview-popover" class="popover-ui" popover="hint">
    <div class="popover">
      <iframe
        ref="iframeRef"
        class="interest-link-preview__frame"
        :src="website"
        title="Tun's Portfolio preview"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  padding-inline: 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
}

@supports (corner-shape: squircle) {
  a {
    border-radius: 1rem;
    corner-shape: squircle;
  }
}

a[interestfor] {
  interest-delay: 0.2s;
}

a:interest-source {
  background-color: var(--vp-c-brand-1);
  color: contrast-color(var(--vp-c-brand-1));
}

.popover-ui {
  container-type: anchored;

  position: absolute;
  margin: 0;
  padding: 0;
  inset: auto;
  /* position-area: top; */
  top: auto;
  bottom: anchor(top);
  justify-self: anchor-center;
  position-try-fallbacks: --try-bottom;
  border: none;
  outline: none;
  background-color: transparent;
  overflow: visible;
  max-width: 100%;
  max-height: 100%;
}

.popover-ui .popover {
  width: min(22rem, calc(100vw - 3rem));
  height: 15rem;
  overflow: clip;
  background-color: Canvas;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border: 2px solid var(--vp-c-brand-1);
  scale: 0.25;
  opacity: 0;
  transform-origin: bottom center;
  transition: all 0.2s cubic-bezier(.39,.575,.565,1);
  border-radius: 20px;
}

@supports (corner-shape: squircle) {
  .popover-ui .popover {
    border-radius: 40px;
    corner-shape: squircle;
  }
}

.popover-ui .popover iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.popover-ui:popover-open .popover {
  scale: 1;
  opacity: 1;
}

@starting-style {
  .popover-ui:popover-open .popover {
    scale: 0.25;
    opacity: 0;
  }
}

@supports (animation-name: test-starting-style) {
  .popover-ui {
    transition:
      display 0.2s allow-discrete,
      overlay 0.2s allow-discrete;
  }
}

@position-try --try-bottom {
  top: anchor(bottom);
  bottom: auto;
}

@container anchored(fallback: --try-bottom) {
  .popover-ui .popover {
    transform-origin: top center;
  }
}
</style>
