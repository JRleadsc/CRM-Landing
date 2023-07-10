<template>
  <div class="mt-20">
    <section>
      <div class="container">
        <div class="row pt-[33px]">
          <div class="col-12">
            <div>
              <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item text-sm text-[#6D728E]">
                    <NuxtLink to="/">
                      صفحه اصلی
                    </NuxtLink>
                  </li>
                  <li class="breadcrumb-item text-sm text-[#6D728E] active" aria-current="page">
                    پکیج‌ها
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Possibilities ">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="">
              <h1 class="heading_h">
                پکیج‌ها
              </h1>
              <p class="heading_p lh-lg ">
                ما مجموعهای از پکیجهای قیمتی در بازههای زمانی مختلف برای راحتی شما فراهم کردهایم. این پکیجها شامل امکانات متنوعی برای بهبود مدیریت ارتباط با مشتریان شما میباشند. با توجه به نیازهای کسب و کارتان، میتوانید یکی از پکیجهای زیر را انتخاب کنید:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="form-check form-switch">
              <div class="flex items-center gap-4 justify-center">
                <div :class="[activeClass?'active':'deactive']">
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    پکیج های سالانه
                  </label>
                </div>
                <div class="flex px-sm-2 px-0">
                  <label class="switch-btn">
                    <input type="checkbox" @change="switchPackage">
                    <span class="slider-btn round" />
                  </label>
                </div>
                <div :class="[activeClass?'deactive':'active']">
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    پکیج های ماهانه
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row plan-box">
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                عنوان پکیج
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              </p>
            </div>
            <div>
              <p class="price text-[18px] font-bold pb-3">
                <template v-if="activeClass">
                  ۲.۴۰۰.۰۰۰ تومان / سالانه
                </template>
                <template v-else>
                  ۱.۲۰۰.۰۰۰ تومان / ماهانه
                </template>
              </p>
              <button class="pink-btn rounded-full w-100">
                انتخاب
              </button>
            </div>
          </div>
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                عنوان پکیج
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              </p>
            </div>
            <div>
              <p class="price text-[18px] font-bold pb-3">
                <template v-if="activeClass">
                  ۲.۴۰۰.۰۰۰ تومان / سالانه
                </template>
                <template v-else>
                  ۱.۲۰۰.۰۰۰ تومان / ماهانه
                </template>
              </p>
              <button class="pink-btn rounded-full w-100">
                انتخاب
              </button>
            </div>
          </div>
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                عنوان پکیج
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              </p>
            </div>
            <div>
              <p class="price text-[18px] font-bold pb-3">
                <template v-if="activeClass">
                  ۲.۴۰۰.۰۰۰ تومان / سالانه
                </template>
                <template v-else>
                  ۱.۲۰۰.۰۰۰ تومان / ماهانه
                </template>
              </p>
              <button class="pink-btn rounded-full w-100">
                انتخاب
              </button>
            </div>
          </div>
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                عنوان پکیج
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              </p>
            </div>
            <div>
              <p class="price text-[18px] font-bold pb-3">
                <template v-if="activeClass">
                  ۲.۴۰۰.۰۰۰ تومان / سالانه
                </template>
                <template v-else>
                  ۱.۲۰۰.۰۰۰ تومان / ماهانه
                </template>
              </p>
              <button class="pink-btn rounded-full w-100">
                انتخاب
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="pricing-content pt-5 mt-4">
              <p class="text-[#6D728E] text-[18px] lh-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const switchPackage = () => {
  activeClass.value = !activeClass.value
}
const activeClass = ref(true)
</script>
