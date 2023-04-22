<template>
  <div class="font-iran min-h-screen bg-body text-neutral" :class="useRoute().name !== 'index' ? 'internal-pages' : ''">
    <NuxtLoadingIndicator />
    <RobotMeta />

    <slot />

    <LayoutsDefaultFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    { src: '/js/bootstrap.min.js', body: true }
  ]
})
</script>
