<template>
  <section class="pt-[100px] text-center pb-20">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="pb-[25px]">
            <h2 class="text-[24px] text-[#2C2D2E] font-bold pb-4 title-section">
              چرا لینک جینیس ؟
            </h2>
            <h3 class="text-sm text-[#6D728E]">
              شرح ویژگی‌ها و قابلیت‌ها
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Splide :options="options">
            <SplideSlide>
              <div class="item">
                <div class="w-[380px] h-[380px] py-[3rem] flex flex-col items-center justify-start box transition-all rounded-[40px] mx-auto">
                  <div class="top-img">
                    <span>
                      <SvgMeetings class="h-20 w-auto" />
                    </span>
                  </div>
                  <div class="pb-[27px]">
                    <p class="text-base text-[#2C2D2E] font-bold  pb-[6px]">
                      مدیریت جلسه‌ها
                    </p>
                    <!-- <p class="text-base text-[#2C2D2E] font-bold">
                      از عملکرد شما
                    </p> -->
                  </div>
                  <div class="px-[30px]">
                    <p class="text-[17px] text-[#999EBF] leading-[30px] text-justify">
                      برنامه ریزی جلسات، کنترل جلسات جهت ارتباط با مشتریان و مخاطبین خود، ثبت اطلاعات آنها به عنوان شرکت کننده در نرم افزار CRM لینک جینیس یکی دیگر از ویژگی‌های انحصاری این نرم افزار می باشد.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="item">
                <div class="w-[380px] h-[380px] py-[3rem] flex flex-col items-center justify-start box transition-all rounded-[40px] mx-auto">
                  <div class="top-img">
                    <span>
                      <SvgLeads class="h-20 w-auto" />
                    </span>
                  </div>
                  <div class="pb-[27px]">
                    <p class="text-base text-[#2C2D2E] font-bold pb-[6px]">
                      مدیریت سرنخ‌ها ( لید‌ها )
                    </p>
                    <!-- <p class="text-base text-[#2C2D2E] font-bold">
                      از عملکرد شما
                    </p> -->
                  </div>
                  <div class="px-[30px]">
                    <p class="text-[17px] text-[#999EBF] leading-[30px] text-justify">
                      جمع آوری سرنخ‌ها از طریق کانال‌های مختلف مانند وب سایت، اپلیکیشن و یا کمپین‌های تبلیغاتی جهت افزایش فروش مجدد و ایجاد چرخه فروش. با ایجاد سرنخ و یا همان لید می توانید با جذب مشتریان بالقوه همراه با تحلیل و آنالیز، خدمات و محصولات مرتبط را به آنان به فروش برسانید.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="item">
                <div class="w-[380px] h-[380px] py-[3rem] flex flex-col items-center justify-start box transition-all rounded-[40px] mx-auto">
                  <div class="top-img">
                    <span>
                      <SvgContracts class="h-20 w-auto" />
                    </span>
                  </div>
                  <div class="pb-[27px]">
                    <p class="text-base text-[#2C2D2E] font-bold  pb-[6px]">
                      مدیریت قراردادها
                    </p>
                    <!-- <p class="text-base text-[#2C2D2E] font-bold">
                      از عملکرد شما
                    </p> -->
                  </div>
                  <div class="px-[30px]">
                    <p class="text-[17px] text-[#999EBF] leading-[30px] text-justify">
                      در لینک جینیس به آسانی تمامی قراردادهای خود را مدیریت کنید، با ایجاد امضای الترونیکی قراردادها را منعقد و آنها را مدیریت کنید. تمامی اطلاعات مندرج در قرارداد در نرم افزار CRM ثبت می شود و به صورت آرشیو در دسترس خواهد بود.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="item">
                <div class="w-[380px] h-[380px] py-[3rem] flex flex-col items-center justify-start box transition-all rounded-[40px] mx-auto">
                  <div class="top-img">
                    <span>
                      <SvgDashboards class="h-20 w-auto" />
                    </span>
                  </div>
                  <div class="pb-[27px]">
                    <p class="text-base	text-[#2C2D2E] font-bold  pb-[6px]">
                      برقراری ارتباط با تیم خود
                    </p>
                    <!-- <p class="text-base	text-[#2C2D2E] font-bold">
                      از عملکرد شما
                    </p> -->
                  </div>
                  <div class="px-[30px]">
                    <p class="text-[17px] text-[#999EBF] leading-[30px] text-justify">
                      مدیریت تیم در نرم افزار لینک جینیس جهت ارتباط دقیق تر و بهتر با پرسنل پیاده سازی شده است و
                      همچنین می‌توانید کارشناسان سازمان خود را در تیم‌های کاری مختلف گروه بندی کنید و برای هر گروه وظایف مشخصی تعریف نمایید.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="item">
                <div class="w-[380px] h-[380px] py-[3rem] flex flex-col items-center justify-start box transition-all rounded-[40px] mx-auto">
                  <div class="top-img">
                    <span>
                      <SvgReports class="h-20 w-auto" />
                    </span>
                  </div>
                  <div class="pb-[27px]">
                    <p class="text-base	text-[#2C2D2E] font-bold  pb-[6px]">
                      گزارش گیری
                    </p>
                    <!-- <p class="text-base	text-[#2C2D2E] font-bold">
                      از عملکرد شما
                    </p> -->
                  </div>
                  <div class="px-[30px]">
                    <p class="text-[17px] text-[#999EBF] leading-[30px] text-justify">
                      تهیه گزارش دقیق یکی از مهم ترین ویژگی‌های یک نرم افزار CRM می‌باشد. شما با استفاده از این امکان می‌توانید کلیه گزارش‌های مربوط به تماس‌ها، سرنخ‌ها، فروش و حتی کمپین‌های تبلیغاتی خود را تهیه نمایید. این گزارش‌ها در بخش میزان عملکرد پرسنل و تیم هم کارایی لازم را دارد.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="item">
                <div class="w-[380px] h-[380px] py-[3rem] flex flex-col items-center justify-start box transition-all rounded-[40px] mx-auto">
                  <div class="top-img">
                    <span>
                      <SvgCalls class="h-20 w-auto" />
                    </span>
                  </div>
                  <div class="pb-[27px]">
                    <p class="text-base text-[#2C2D2E] font-bold  pb-[6px]">
                      مدیریت تماس‌ها
                    </p>
                    <!-- <p class="text-base text-[#2C2D2E] font-bold">
                      از عملکرد شما
                    </p> -->
                  </div>
                  <div class="px-[30px]">
                    <p class="text-[17px] text-[#999EBF] leading-[30px] text-justify">
                      با این امکان در نرم افزار لینک جینیس، برای کلیه تماس‌های سازمان خود برنامه ریزی کنید. تماس‌ها را رصد کنید، تحلیل کنید و برای هریک گزارش دقیق تهیه نمایید. کلیه تماس‌ها در سازمان شما با این ویژگی دریافت و ثبت خواهند شد. جهت تعاملات بیشتر با مشتریان از این بخش می توانید استفاده نمایید.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const options = ref({
  direction: 'rtl',
  arrows: false,
  pagination: true,
  type: 'loop',
  autoplay: true,
  interval: 6000,
  gap: 32,
  focus: 'center',
  perPage: 3,
  autoWidth: true,
  breakpoints: {
    640: {
      perPage: 1

    },
    767: {
      perPage: 2

    },
    1024: {
      perPage: 3

    }
  }
})
</script>

<style>
.splide__arrow {
  background: none !important;
}
.splide__arrow svg {
  fill: #AEB5CF !important;
  @apply h-7 w-auto
}
.splide__arrows--rtl .splide__arrow--next {
    left: -11px;
    right: auto;
}
.splide__arrows--rtl .splide__arrow--prev {
    left: auto;
    right: -11px;
}
</style>
<style scoped>
.h-\[380px\] {
    height: 520px;
    /* overflow-y: scroll; */
}
.top-img {
flex: 0 0 130px;
}
</style>
