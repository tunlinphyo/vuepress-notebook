<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import {
  hasInitializedSharedState,
  LAYER_STORAGE_KEY,
  markSharedStateInitialized,
  sharedSettings,
  STORAGE_KEY,
  type ThemeMode,
} from './themedIframeState'

// todo add zoom props and default is 1

const props = withDefaults(
  defineProps<{
    src: string
    title: string
    height?: string
    maxWidth?: string
  }>(),
  {
    height: '34rem',
    maxWidth: '32rem'
  }
)

const iframeRef = ref<HTMLIFrameElement | null>(null)
const isLoading = ref(true)

function applyFrameSettings() {
  const iframe = iframeRef.value
  const doc = iframe?.contentDocument
  if (!doc) return

  const mode = sharedSettings.theme === 'system' ? 'light dark' : sharedSettings.theme
  doc.documentElement.style.colorScheme = mode

  if (sharedSettings.layerEnabled) {
    doc.documentElement.setAttribute('data-layer', '')
  } else {
    doc.documentElement.removeAttribute('data-layer')
  }
}

function handleLoad() {
  isLoading.value = false
  applyFrameSettings()
}

function syncIframeState() {
  const doc = iframeRef.value?.contentDocument
  if (doc?.readyState !== 'complete') return

  isLoading.value = false
  applyFrameSettings()
}

onMounted(() => {
  if (!hasInitializedSharedState) {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    if (savedTheme === 'system' || savedTheme === 'light' || savedTheme === 'dark') {
      sharedSettings.theme = savedTheme
    }

    sharedSettings.layerEnabled = localStorage.getItem(LAYER_STORAGE_KEY) === 'true'
    markSharedStateInitialized()
  }

  syncIframeState()
})

watch(() => sharedSettings.theme, (mode) => {
  localStorage.setItem(STORAGE_KEY, mode)
  applyFrameSettings()
})

watch(() => sharedSettings.layerEnabled, (enabled) => {
  localStorage.setItem(LAYER_STORAGE_KEY, String(enabled))
  applyFrameSettings()
})

watch(() => props.src, async () => {
  isLoading.value = true
  await nextTick()
  syncIframeState()
})
</script>

<template>
  <div class="themed-iframe">
    <div class="themed-iframe__toolbar" aria-label="Preview theme">
      <button
        v-for="mode in ['system', 'light', 'dark']"
        :key="mode"
        type="button"
        class="themed-iframe__toggle"
        :class="{ 'is-active': sharedSettings.theme === mode }"
        @click="sharedSettings.theme = mode as ThemeMode"
      >
        {{ mode }}
      </button>

      <div class="blob"></div>
    </div>

    <div
      class="themed-iframe__frame"
      :style="{
        width: '100%',
        maxWidth: props.maxWidth,
        height: props.height,
      }"
    >
      <div
        v-if="isLoading"
        class="themed-iframe__loading"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span class="themed-iframe__loading-spinner" aria-hidden="true"></span>
        <span class="themed-iframe__loading-text">Loading preview...</span>
      </div>

      <iframe
        ref="iframeRef"
        class="themed-iframe__element"
        :class="{ 'is-loading': isLoading }"
        :src="props.src"
        :title="props.title"
        :style="{
          width: '100%',
          height: '100%',
          display: 'block',
          margin: '0 auto',
          overflow: 'hidden',
        }"
        @load="handleLoad"
      />
    </div>

    <footer class="themed-iframe__footer">
      <label class="themed-iframe__switch">
        <span class="themed-iframe__switch-label">Layout Borders</span>
        <input v-model="sharedSettings.layerEnabled" type="checkbox" class="themed-iframe__switch-input">
        <span class="themed-iframe__action-toggle" aria-hidden="true"></span>
      </label>
    </footer>

    <div class="source-code-link">
      <a :href="`https://github.com/tunlinphyo/vuepress-notebook/blob/main/public${$props.src}`" target="_blank" rel="noopener noreferrer">Open Source Code</a>
    </div>
  </div>
</template>

<style scoped>

.themed-iframe {
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  margin-block: 2rem;

  --ease-spring-3: linear(
    0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077,
    1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,
    1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,
    0.997 69.8%, 1.003 76.9%, 1
  );
}

.themed-iframe__frame {
  position: relative;
  width: 100%;
}

.themed-iframe__element,
.themed-iframe__loading {
  border: 0;
  border: 1px solid var(--vp-c-brand-2);
  box-shadow: 0 20px 50px rgba(15,23,42,.12);
  border-radius: 24px;

  @supports(corner-shape: squircle) {
    border-radius: 48px;
    corner-shape: squircle;
  }
}

.themed-iframe__element {
  background: var(--vp-c-bg-soft);
  transition: opacity 0.2s ease;
}

.themed-iframe__element.is-loading {
  opacity: 0;
}

.themed-iframe__loading {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-content: center;
  gap: 0.75rem;
  background:
    radial-gradient(circle at top, color-mix(in srgb, var(--vp-c-brand-1) 14%, transparent), transparent 55%),
    linear-gradient(180deg, var(--vp-c-bg-soft), var(--vp-c-bg-elv));
  color: var(--vp-c-text-2);
  pointer-events: none;
}

.themed-iframe__loading-spinner {
  width: 2rem;
  height: 2rem;
  justify-self: center;
  border: 3px solid color-mix(in srgb, var(--vp-c-text-3) 40%, transparent);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 999px;
  animation: themed-iframe-spin 0.8s linear infinite;
}

.themed-iframe__loading-text {
  font-size: 0.95rem;
}

.themed-iframe__toolbar {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  position: relative;
  anchor-name: --toolbar;
}

.blob {
  position-anchor: --toolbar;
  position: absolute;
  z-index: 0;
  top: anchor(top);
  left: anchor(left);
  bottom: anchor(bottom);
  right: anchor(right);

  background-color: Canvas;
  border: 1px solid var(--vp-c-divider);
  border-radius: 100vh;
  pointer-events: none;

  transition: all 0.7s var(--ease-spring-3);
}

.themed-iframe__toggle {
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  background: transparent;
  color: var(--vp-c-text-2);
  font: inherit;
  text-transform: capitalize;
  cursor: pointer;
}

.themed-iframe__toggle.is-active {
  anchor-name: --toolbar;
  color: var(--vp-c-brand-2);
}

.themed-iframe__footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.themed-iframe__switch {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  user-select: none;
}

.themed-iframe__switch-label {
  font-size: 0.95rem;
}

.themed-iframe__switch-input {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.themed-iframe__action-toggle {
  width: 2.5rem;
  height: 1.5rem;
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 100vh;
  background-color: color-mix(in srgb, var(--vp-c-text-3) 32%, transparent);
  box-shadow: inset 0 0 0 1px var(--vp-c-divider);
  transition: background-color 0.2s ease;
}

.themed-iframe__action-toggle::after {
  content: '';
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100vh;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.25);
  transition: transform 0.2s ease;
}

.themed-iframe__switch-input:checked + .themed-iframe__action-toggle {
  background-color: var(--vp-c-brand-1);
}

.themed-iframe__switch-input:checked + .themed-iframe__action-toggle::after {
  transform: translateX(1rem);
}

.themed-iframe__switch-input:focus-visible + .themed-iframe__action-toggle {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.source-code-link {
  text-align: center;
}

@keyframes themed-iframe-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
