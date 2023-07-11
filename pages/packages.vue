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
            <div class="heading">
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
                <div :class="[activeClass ? 'active' : 'deactive']">
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
                <div :class="[activeClass ? 'deactive' : 'active']">
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
              <div class="pricing_content text-[12px] text-[#706F7C]">
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">بازاریابی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت سرنخ های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارسال و دریافت SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت کمپین های تبلیغاتی
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">فروش</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت افراد و شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت چاپ و ارسال پیش فاکتورها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فاکتورهای مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت محصولات در فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت پرداخت های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت قراردادهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مسیر فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      روند فروش چندگانه
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">خدمات پس از فروش</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارائه سرویس به مشتریان و مدیریت مشکلات محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پورتال مشتریان برای سیستم تیکتینگ و پرداخت آنلاین (براساس تعداد مشتریان)
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-9/12 text-black/70 font-bold">مدیریت فعالیت‌ها</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تماس ها، جلسات و وظایف
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      یادآوری انجام فعالیت‌ها در نرم افزار و از طریق SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فایل های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت تایم شیت کاربران
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت پروژه‌ها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">مدیریت محصولات و تامین کنندگان</span>
                  <div class="w-2/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت تامین کنندگان و سفارشات خرید
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-7/12 text-black/70 font-bold">امکانات عمومی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      کارتابل کاربران با قابلیت اختصاصی سازی هر کاربر
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پشتیبانی از چند واحد پولی متفاوت
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Outlook
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Calendar
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Drive
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Dropbox
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش های از پیش تعریف شده
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      گزارش ساز برای ایجاد گزارش های تکمیلی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      اختصاصی سازی منو های انتخابی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      اختصاصی سازی فرم های موجود
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      جریان کار (Workflow)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      امکان تعریف و پایش اهداف در سطح هر کاربر و یا تیم
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت حق دسترسی به اطلاعات در گروه شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      استفاده از API
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      فرایند دریافت تاییدیه (Approval)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای دیگر سازمانی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ساخت فرم های جدید برای مدیریت فرایندها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">آموزش و پیاده سازی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      دسترسی به ویدئوها و مستندات آموزشی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گفتگوی آنلاین با کارشناسان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیر مشتری اختصاصی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ممیزی نحوه استفاده از نرم افزار هر 3 ماه یکبار
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink to="/contact" class="mt-5">
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
              <div class="pricing_content text-[12px] text-[#706F7C]">
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">بازاریابی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت سرنخ های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارسال و دریافت SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت کمپین های تبلیغاتی
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">فروش</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت افراد و شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت چاپ و ارسال پیش فاکتورها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فاکتورهای مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت محصولات در فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت پرداخت های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت قراردادهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مسیر فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      روند فروش چندگانه
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">خدمات پس از فروش</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارائه سرویس به مشتریان و مدیریت مشکلات محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پورتال مشتریان برای سیستم تیکتینگ و پرداخت آنلاین (براساس تعداد مشتریان)
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-9/12 text-black/70 font-bold">مدیریت فعالیت‌ها</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تماس ها، جلسات و وظایف
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      یادآوری انجام فعالیت‌ها در نرم افزار و از طریق SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فایل های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تایم شیت کاربران
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت پروژه‌ها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">مدیریت محصولات و تامین کنندگان</span>
                  <div class="w-2/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تامین کنندگان و سفارشات خرید
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-7/12 text-black/70 font-bold">امکانات عمومی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      کارتابل کاربران با قابلیت اختصاصی سازی هر کاربر
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پشتیبانی از چند واحد پولی متفاوت
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Outlook
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Calendar
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Drive
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Dropbox
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش های از پیش تعریف شده
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش ساز برای ایجاد گزارش های تکمیلی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      اختصاصی سازی منو های انتخابی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      اختصاصی سازی فرم های موجود
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      جریان کار (Workflow)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      امکان تعریف و پایش اهداف در سطح هر کاربر و یا تیم
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیریت حق دسترسی به اطلاعات در گروه شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      استفاده از API
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      فرایند دریافت تاییدیه (Approval)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای دیگر سازمانی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ساخت فرم های جدید برای مدیریت فرایندها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">آموزش و پیاده سازی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      دسترسی به ویدئوها و مستندات آموزشی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گفتگوی آنلاین با کارشناسان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیر مشتری اختصاصی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ممیزی نحوه استفاده از نرم افزار هر 3 ماه یکبار
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink to="/contact" class="mt-5">
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
              <div class="pricing_content text-[12px] text-[#706F7C]">
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">بازاریابی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت سرنخ های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارسال و دریافت SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت کمپین های تبلیغاتی
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">فروش</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت افراد و شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت چاپ و ارسال پیش فاکتورها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فاکتورهای مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت محصولات در فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت پرداخت های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت قراردادهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مسیر فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      روند فروش چندگانه
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">خدمات پس از فروش</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارائه سرویس به مشتریان و مدیریت مشکلات محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پورتال مشتریان برای سیستم تیکتینگ و پرداخت آنلاین (براساس تعداد مشتریان)
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-9/12 text-black/70 font-bold">مدیریت فعالیت‌ها</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تماس ها، جلسات و وظایف
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      یادآوری انجام فعالیت‌ها در نرم افزار و از طریق SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فایل های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تایم شیت کاربران
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت پروژه‌ها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">مدیریت محصولات و تامین کنندگان</span>
                  <div class="w-2/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تامین کنندگان و سفارشات خرید
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-7/12 text-black/70 font-bold">امکانات عمومی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      کارتابل کاربران با قابلیت اختصاصی سازی هر کاربر
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پشتیبانی از چند واحد پولی متفاوت
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Outlook
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Calendar
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Drive
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Dropbox
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش های از پیش تعریف شده
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش ساز برای ایجاد گزارش های تکمیلی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      اختصاصی سازی منو های انتخابی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      اختصاصی سازی فرم های موجود
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      جریان کار (Workflow)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      امکان تعریف و پایش اهداف در سطح هر کاربر و یا تیم
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت حق دسترسی به اطلاعات در گروه شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      استفاده از API
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      فرایند دریافت تاییدیه (Approval)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای دیگر سازمانی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ساخت فرم های جدید برای مدیریت فرایندها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">آموزش و پیاده سازی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      دسترسی به ویدئوها و مستندات آموزشی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گفتگوی آنلاین با کارشناسان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      مدیر مشتری اختصاصی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgTimes class="h-6 w-auto text-red-600" />
                    <span class="w-10/12">
                      ممیزی نحوه استفاده از نرم افزار هر 3 ماه یکبار
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink to="/contact" class="mt-5">
              <button class="pink-btn rounded-full w-100">
                لطفا تماس بگیرید
              </button>
            </NuxtLink>
          </div>
          <div v-if="activeClass" class="pricing_plan">
            <div>
              <h4 class="pricing_title text-[#3E369D] text-[18px] font-bold pb-3">
                اختصاصی
              </h4>
              <div class="pricing_content text-[12px] text-[#706F7C]">
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">بازاریابی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت سرنخ های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارسال و دریافت SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت کمپین های تبلیغاتی
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="text-black/70 font-bold">فروش</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت افراد و شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت چاپ و ارسال پیش فاکتورها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فاکتورهای مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت محصولات در فرصت های فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت پرداخت های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت قراردادهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مسیر فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      روند فروش چندگانه
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">خدمات پس از فروش</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت ارائه سرویس به مشتریان و مدیریت مشکلات محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پورتال مشتریان برای سیستم تیکتینگ و پرداخت آنلاین (براساس تعداد مشتریان)
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-9/12 text-black/70 font-bold">مدیریت فعالیت‌ها</span>
                  <div class="w-11/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تماس ها، جلسات و وظایف
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      یادآوری انجام فعالیت‌ها در نرم افزار و از طریق SMS
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت فایل های مشتریان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تایم شیت کاربران
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت پروژه‌ها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">مدیریت محصولات و تامین کنندگان</span>
                  <div class="w-2/12 border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت محصولات
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت تامین کنندگان و سفارشات خرید
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-7/12 text-black/70 font-bold">امکانات عمومی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      کارتابل کاربران با قابلیت اختصاصی سازی هر کاربر
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      پشتیبانی از چند واحد پولی متفاوت
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Outlook
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Calendar
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Google Drive
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با Dropbox
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش های از پیش تعریف شده
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گزارش ساز برای ایجاد گزارش های تکمیلی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      اختصاصی سازی منو های انتخابی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      اختصاصی سازی فرم های موجود
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای فروش
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      جریان کار (Workflow)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      امکان تعریف و پایش اهداف در سطح هر کاربر و یا تیم
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیریت حق دسترسی به اطلاعات در گروه شرکت‌ها
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      استفاده از API
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      فرایند دریافت تاییدیه (Approval)
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ارتباط با نرم افزارهای دیگر سازمانی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ساخت فرم های جدید برای مدیریت فرایندها
                    </span>
                  </li>
                </ul>
                <div class="group-title flex gap-6 items-center my-3">
                  <span class="w-full text-black/70 font-bold">آموزش و پیاده سازی</span>
                  <div class="w-full border-b border-black/70" />
                </div>
                <ul class="text-[12px] flex flex-col gap-2.5 text-justify">
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      دسترسی به ویدئوها و مستندات آموزشی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      گفتگوی آنلاین با کارشناسان
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      مدیر مشتری اختصاصی
                    </span>
                  </li>
                  <li class="flex items-center gap-1">
                    <SvgCheck class="h-6 w-auto text-green-600" />
                    <span class="w-10/12">
                      ممیزی نحوه استفاده از نرم افزار هر 3 ماه یکبار
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink to="/contact" class="mt-5">
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
