<template>
  <div class="busines">
    <p class="text-[24px] text-[#2C2D2E] font-bold">
      کسب و کار شما چگونه است؟
    </p>
    <div class="pt-5">
      <div>
        <div class="title-busines">
          <div class="flex items-center">
            <SvgFeatures class="h-20 w-auto" />
            <div>
              <h3 class="title-busines-h">
                عنوان
              </h3>
              <p class="title-busines-p">
                توضیحات در مورد این نوع
              </p>
            </div>
          </div>
          <div v-if="false" class="tick-busines">
            <SvgCheckItem />
          </div>
        </div>
      </div>
      <div class="flex items-center pt-5" style="column-gap: 1rem;">
        <div class="cursor-pointer btn-demo-fill pink-btn">
          بعدی
        </div>
        <div class="cursor-pointer btn-demo-outline white-btn">
          قبلی
        </div>
      </div>
    </div>
  </div>
</template>
