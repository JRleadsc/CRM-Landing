<template>
  <div class="font-iran min-h-screen bg-body text-neutral" :class="useRoute().name !== 'index' ? 'internal-pages' : ''">
    <NuxtLoadingIndicator />
    <RobotMeta />

    <LayoutsDefaultHeader v-if="useRoute().name !== 'index'" />
    <div v-if="useRoute().name !== 'index'" class="header-overlay" :style="[useStoreResponsive().isMenuOpen?'display:block;opacity:0.4':'display:none;opacity:0']" />

    <slot />

    <LayoutsDefaultFooter />
  </div>
</template>

<script setup>


 const route = useRoute()
 watch(() => route.fullPath,() => {
    console.log("route fullPath updated1", route.fullPath)
	console.log("useStoreResponsive().isMenuOpen", useStoreResponsive().isMenuOpen)
	 if (useStoreResponsive().isMenuOpen) {
		 
		document.body.style.overflow = 'auto'

 		useStoreResponsive().isMenuOpen=false
		console.log("useStoreResponsive().isMenuOpen", useStoreResponsive().isMenuOpen)
	 		//this.$forceUpdate()
			
		// window.location.reload();
	
		
  } 
 }
)

useHead({
  script: [
    { src: '/js/bootstrap.min.js', body: true }
  ]
})
</script>
