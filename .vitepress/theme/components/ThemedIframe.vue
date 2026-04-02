<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

type ThemeMode = 'system' | 'light' | 'dark'
const STORAGE_KEY = 'themed-iframe-mode'

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
const theme = ref<ThemeMode>('system')

function applyTheme() {
  const iframe = iframeRef.value
  const doc = iframe?.contentDocument
  if (!doc) return

  const mode = theme.value === 'system' ? 'light dark' : theme.value
  doc.documentElement.style.colorScheme = mode
}

onMounted(() => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  if (savedTheme === 'system' || savedTheme === 'light' || savedTheme === 'dark') {
    theme.value = savedTheme
  }
})

watch(theme, (mode) => {
  localStorage.setItem(STORAGE_KEY, mode)
  applyTheme()
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
        :class="{ 'is-active': theme === mode }"
        @click="theme = mode as ThemeMode"
      >
        {{ mode }}
      </button>

      <div class="blob"></div>
    </div>

    <iframe
      ref="iframeRef"
      :src="props.src"
      :title="props.title"
      :style="{
        width: '100%',
        maxWidth: props.maxWidth,
        height: props.height,
        border: '0',
        borderRadius: '24px',
        display: 'block',
        margin: '0 auto',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(15,23,42,.12)'
      }"
      @load="applyTheme"
    />
  </div>
</template>

<style scoped>

.themed-iframe {
  display: grid;
  gap: 0.75rem;
  justify-items: center;

  --ease-spring-3: linear(
    0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077,
    1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,
    1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,
    0.997 69.8%, 1.003 76.9%, 1
  );
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
</style>
