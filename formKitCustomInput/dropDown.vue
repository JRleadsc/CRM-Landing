<template>
  <div ref="target" class="text-[#2C2D2E]" @click="openDrop = !openDrop">
    <div id="dropBox" class="dropdown flex items-center position-relative">
      <div id="dropBoxText" class="ps-2">
        <div v-if="select" id="dropBoxSelect">
          {{ select }}
        </div>
        <div v-else id="dropBoxText">
          انتخاب کنید
        </div>
      </div>

      <SvgArrowDown :class="{ 'rotate-180': openDrop }" />

      <ul v-if="openDrop" id="dropDownMenu" class="dropdown-menus">
        <li
          v-for="item in props.context.items"
          :key="item.id"
          class="dropdown-item flex items-center justify-between"
          @click="selectDrop(item.title, item.id)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  context: Object
})

const openDrop = ref(false)
const target = ref(null)
const select = ref(props.context.selected)

watch(() => props.context.reset, (payload) => {
  if (payload) {
    select.value = null
  }
})

const selectDrop = (item, index) => {
  select.value = item
  props.context.node.input(index)
}

onClickOutside(target, () => {
  openDrop.value = false
})
</script>
