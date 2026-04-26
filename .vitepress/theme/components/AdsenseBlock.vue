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
    style="display:inline-block;width:220px;height:450px;margin-top: 2rem;border-radius:1rem;overflow:hidden"
    data-ad-client="ca-pub-6214917063722363"
    data-ad-slot="3432460652"
  />
</template>