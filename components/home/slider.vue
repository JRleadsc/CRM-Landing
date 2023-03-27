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
        <div class="flex flex-col lg:flex-row lg:items-center lg:-space-x-20 lg:space-x-reverse mt-16">
          <div class="d-lg-none mb-4">
            <Splide :options="options">
              <SplideSlide>
                <div class="cursor-pointer h-[87px] bth-slider text-white rounded-full flex flex-col justify-center items-center text-base mb-3 gap-2" :class="{'active': slide === 1}" @click="slide = 1">
                  <p>
                    همه چیز را پیدا کنید
                  </p>
                  <p>
                    تماس، مشتری و مکالمه
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="cursor-pointer h-[87px] bth-slider text-white rounded-full flex flex-col justify-center items-center text-base mb-3 gap-2" :class="{'active': slide === 2}" @click="slide = 2">
                  <p>
                    همه چیز را پیدا کنید
                  </p>
                  <p>
                    تماس، مشتری و مکالمه
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="cursor-pointer h-[87px] bth-slider text-white rounded-full flex flex-col justify-center items-center text-base mb-3 gap-2" :class="{'active': slide === 3}" @click="slide = 3">
                  <p>
                    همه چیز را پیدا کنید
                  </p>
                  <p>
                    تماس، مشتری و مکالمه
                  </p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="d-none d-lg-block">
            <div class="cursor-pointer h-[114px] bth-slider text-white pr-[47px] w-[550px] rounded-full flex flex-col justify-center items-start text-base mb-3 gap-4" :class="{'active': slide === 1}" @click="slide = 1">
              <p>
                همه چیز را پیدا کنید
              </p>
              <p>
                تماس، مشتری و مکالمه
              </p>
            </div>
            <div class="cursor-pointer h-[114px] bth-slider text-white pr-[47px] w-[550px] rounded-full flex flex-col justify-center items-start text-base mb-3 gap-4" :class="{'active': slide === 2}" @click="slide = 2">
              <p>
                همه چیز را پیدا کنید
              </p>
              <p>
                تماس، مشتری و مکالمه
              </p>
            </div>
            <div class="cursor-pointer h-[114px] bth-slider text-white pr-[47px] w-[550px] rounded-full flex flex-col justify-center items-start text-base mb-3 gap-4" :class="{'active': slide === 3}" @click="slide = 3">
              <p>
                همه چیز را پیدا کنید
              </p>
              <p>
                تماس، مشتری و مکالمه
              </p>
            </div>
          </div>
          <div class="">
            <img v-if="slide === 1" src="/images/slide-1.jpg" class="rounded-2xl">
            <img v-else-if="slide === 2" src="/images/slide-2.jpg" class="rounded-2xl">
            <img v-else-if="slide === 3" src="/images/slide-3.jpg" class="rounded-2xl">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const slide = ref(1)

const options = ref({
  direction: 'rtl',
  arrows: false,
  pagination: false,
  type: 'loop',
  focus: 'center',
  perPage: 1,
  gap: 10,
  padding: '2.5rem'
})
</script>
