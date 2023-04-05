<template>
  <div class="busines">
    <p class="text-[24px] text-[#2C2D2E] font-bold">
      کسب و کار شما چگونه است؟
    </p>
    <div class="pt-5">
      <div v-if="pending">
        <div class="title-busines animate-pulse" />
        <div class="title-busines animate-pulse" />
        <div class="title-busines animate-pulse" />
      </div>
      <div v-else>
        <div v-for="item in data.results" :key="item.id" class="title-busines" @click="check(item.id)">
          <div class="flex items-center">
            <SvgFeatures class="h-20 w-auto" />
            <div>
              <h3 class="title-busines-h">
                {{ item.name }}
              </h3>
              <p class="title-busines-p">
                توضیحات در مورد این نوع
              </p>
            </div>
          </div>
          <div v-if="storeSignup.register.business === item.id" class="tick-busines">
            <SvgCheckItem />
          </div>
        </div>
        <div v-if="error" class="text-red-600 text-sm mt-4">
          لطفا یک گزینه را انتخاب نمایید.
        </div>
      </div>
      <div class="flex items-center pt-5" style="column-gap: 1rem;">
        <div class="cursor-pointer btn-demo-fill pink-btn" @click="next">
          بعدی
        </div>
        <div class="cursor-pointer btn-demo-outline white-btn" @click="emit('changeStep', 1)">
          قبلی
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data, pending } = useLazyAsyncData('business-type', () => apiRequest('get', getCompanyBusiness()), {
  initialCache: false
})

const props = defineProps({
  ding: { type: Boolean, default: false }
})
const { ding } = toRefs(props)

watch(ding, (payload) => {
  if (payload) {
    ding.value = false
    next()
  }
})

const emit = defineEmits(['changeStep'])
const storeSignup = useStoreSignup()
const error = ref(false)

const check = (id) => {
  storeSignup.register.business = id
  error.value = false
}

const next = () => {
  if (storeSignup.register.business) {
    error.value = false
    emit('changeStep', 3)
  } else {
    error.value = true
  }
}
</script>
