import { reactive } from 'vue'

export type ThemeMode = 'system' | 'light' | 'dark'

export const STORAGE_KEY = 'themed-iframe-mode'
export const LAYER_STORAGE_KEY = 'themed-iframe-layer'

export const sharedSettings = reactive<{
  theme: ThemeMode
  layerEnabled: boolean
}>({
  theme: 'system',
  layerEnabled: false
})

export let hasInitializedSharedState = false

export function markSharedStateInitialized() {
  hasInitializedSharedState = true
}
