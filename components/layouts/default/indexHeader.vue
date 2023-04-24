<template>
  <div class="relative">
    <!-- <header class="relative h-[80px] flex items-center">
       <div class="container container-header">
         <div class="row">
           <div class="col-12 px-lg-3 px-0">
             <LayoutsDefaultHeaderNav />
           </div>
         </div>
       </div>
     </header> -->
    <header :style="[useStoreResponsive().isMenuOpen?'background:#fff':'background:transparent']" class="relative h-[80px] flex items-center">
      <div class="container container-header">
        <div class="row">
          <div class="col-12">
            <LayoutsDefaultHeaderNav />
          </div>
        </div>
      </div>
    </header>
    <div :class="[topMenuClass]" class="top-menu d-lg-none d-block absolute right-0 rounded-t-none z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2]  mx-auto" />
    <div class="header-overlay" :style="[useStoreResponsive().isMenuOpen?'display:block;opacity:0.4':'display:none;opacity:0']" />
  </div>
</template>

<script setup>
// watch()
// /useStoreSetting().isMenuOpen
// console.log(useStoreResponsive().isMenuOpen)
// console.log(useStoreResponsive().isMenuOpen)
const topMenuClass = ref('top-menu-opacity-off')

watch(useStoreResponsive(), (payload) => {
  console.log('change:' + useStoreResponsive().isMenuOpen)
  if (useStoreResponsive().isMenuOpen) {
 	topMenuClass.value = 'top-menu-opacity'
  } else {
    topMenuClass.value = 'top-menu-opacity-off'
  }
})
</script>
