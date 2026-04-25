<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }
})
</script>

<template>
  <ins
    class="adsbygoogle"
    style="display:inline-block;margin-top:20px;border-radius:12px;overflow:clip"
    data-ad-client="ca-pub-6214917063722363"
    data-ad-slot="3432460652"
    data-ad-format="auto"
    data-full-width-responsive="true"
    :style="{
      with: '220px!important',
      height: '450px!important',
      maxHeight: '450px!important',
    }"
  />
</template>