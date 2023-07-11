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
                پایه
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                <ul class="text-[12px]">
                  <li>مدیریت سرنخ های فروش</li>
                  <li>مدیریت ارسال و دریافت SMS</li>
                  <li>مدیریت کمپین های تبلیغاتی</li>
                  <li>مدیریت افراد و شرکت‌ها</li>
                  <li>مدیریت فرصت های فروش</li>
                  <li>مدیریت چاپ و ارسال پیش فاکتورها</li>
                  <li>مدیریت فاکتورهای مشتریان</li>
                  <li>مدیریت ارائه سرویس به مشتریان و مدیریت مشکلات محصولات</li>
                  <li>پورتال مشتریان برای سیستم تیکتینگ و پرداخت آنلاین (براساس تعداد مشتریان)</li>
                  <li>مدیریت تماس ها، جلسات و وظایف</li>
                  <li>یادآوری انجام فعالیت‌ها در نرم افزار و از طریق SMS</li>
                  <li>مدیریت فایل های مشتریان</li>
                  <li>کارتابل کاربران با قابلیت اختصاصی سازی هر کاربر</li>
                  <li>پشتیبانی از چند واحد پولی متفاوت</li>
                  <li>ارتباط با Outlook</li>
                  <li>گزارش های از پیش تعریف شده</li>
                  <li>ارتباط با Google Calendar</li>
                  <li>ارتباط با Google Drive</li>
                  <li>ارتباط با Dropbox</li>
                  <li>دسترسی به ویدئوها و مستندات آموزشی</li>
                  <li>گفتگوی آنلاین با کارشناسان</li>
                </ul>
              </p>
            </div>
            <NuxtLink to="/contact" class="mt-4">
              <button class="pink-btn rounded-full w-100">
                لطفا تماس بگیرید
              </button>
            </NuxtLink>
          </div>
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                حرفه‌ای
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                <ul class="text-[12px]">
                  <li>تمامی موارد پلن پایه</li>
                  <li>+</li>
                  <li>مدیریت محصولات در فرصت های فروش</li>
                  <li>مدیریت پرداخت های مشتریان</li>
                  <li>مدیریت پروژه‌ها</li>
                  <li>مدیریت تایم شیت کاربران</li>
                  <li>مدیریت محصولات</li>
                  <li>مدیریت تامین کنندگان و سفارشات خرید</li>
                  <li>گزارش ساز برای ایجاد گزارش های تکمیلی</li>
                  <li>اختصاصی سازی منو های انتخابی</li>
                  <li>اختصاصی سازی فرم های موجود</li>
                  <li>ارتباط با نرم افزارهای فروش</li>
                </ul>
              </p>
            </div>
            <NuxtLink to="/contact">
              <button class="pink-btn rounded-full w-100">
                لطفا تماس بگیرید
              </button>
            </NuxtLink>
          </div>
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                بینهایت
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                <ul class="text-[12px]">
                  <li>تمامی موارد پلن حرفه‌ای</li>
                  <li>+</li>
                  <li>مدیریت قراردادهای فروش</li>
                  <li>مسیر فروش</li>
                  <li>روند فروش چندگانه</li>
                  <li>جریان کار (Workflow)</li>
                  <li>امکان تعریف و پایش اهداف در سطح هر کاربر و یا تیم</li>
                  <li>مدیریت حق دسترسی به اطلاعات در گروه شرکت‌ها</li>
                  <li>استفاده از API</li>
                  <li>فرایند دریافت تاییدیه (Approval)</li>
                  <li>ارتباط با نرم افزارهای دیگر سازمانی</li>
                  <li>ساخت فرم های جدید برای مدیریت فرایندها</li>
                </ul>
              </p>
            </div>
            <NuxtLink to="/contact">
              <button class="pink-btn rounded-full w-100">
                لطفا تماس بگیرید
              </button>
            </NuxtLink>
          </div>
          <div class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                اختصاصی
              </h4>
              <p class="pricing_content text-[12px] text-[#706F7C]">
                <ul class="text-[12px]">
                  <li>تمامی موارد پلن نامحدود</li>
                  <li>+</li>
                  <li>مدیر مشتری اختصاصی</li>
                  <li>ممیزی نحوه استفاده از نرم افزار هر 3 ماه یکبار</li>
                  <li>طراحی فرایند اختصاصی</li>
                </ul>
              </p>
            </div>
            <NuxtLink to="/contact">
              <button class="pink-btn rounded-full w-100">
                لطفا تماس بگیرید
              </button>
            </NuxtLink>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-12">
            <div class="pricing-content pt-5 mt-4">
              <p class="text-[#6D728E] text-[18px] lh-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div> -->
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
