<template>
  <div class="font-iran min-h-screen bg-body text-neutral" :class="useRoute().name !== 'index' ? 'internal-pages' : ''">
    <NuxtLoadingIndicator />

    <LayoutsDefaultHeader v-if="useRoute().name !== 'index'" />
    <div v-if="useRoute().name !== 'index'" class="header-overlay" />

    <slot />

    <LayoutsDefaultFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    { src: '/js/bootstrap.min.js', body: true },
    { src: '/js/owl.carousel.min.js', body: true }
  ]
})
</script>
