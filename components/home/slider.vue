<template>
  <div class="bg-[#3E369D]">
    <div class="container">
      <section class="sec-blue min-h-[790px] pt-[79px]">
        <div class="pb-[25px] text-center">
          <h2 class="pb-4">
            چگونه کار می کند
          </h2>
          <h3 class="">
            شرح ویژگی‌ها و قابلیت‌ها
          </h3>
        </div>
        <div class="flex items-center flex-wrap mt-16">
          <div>
            <div class="cursor-pointer h-[114px] bth-slider text-white pr-[47px] w-[550px] rounded-full flex flex-col items-start text-base mb-3 justify-center gap-4" @click="slide = 1">
              <p>
                همه چیز را پیدا کنید
              </p>
              <p>
                تماس، مشتری و مکالمه
              </p>
            </div>
            <div class="cursor-pointer h-[114px] bth-slider text-white pr-[47px] w-[550px] rounded-full flex flex-col items-start text-base mb-3 justify-center gap-4" @click="slide = 2">
              <p>
                همه چیز را پیدا کنید
              </p>
              <p>
                تماس، مشتری و مکالمه
              </p>
            </div>
            <div class="cursor-pointer h-[114px] bth-slider text-white pr-[47px] w-[550px] rounded-full flex flex-col items-start text-base mb-3 justify-center gap-4" @click="slide = 3">
              <p>
                همه چیز را پیدا کنید
              </p>
              <p>
                تماس، مشتری و مکالمه
              </p>
            </div>
          </div>
          <div class="absolute left-56">
            <img v-if="slide === 1" src="/images/slide-1.jpg" class="rounded-2xl">
            <img v-else-if="slide === 2" src="/images/slide-2.jpg" class="rounded-2xl">
            <img v-else-if="slide === 3" src="/images/slide-1.jpg" class="rounded-2xl">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const slide = ref(1)
</script>
