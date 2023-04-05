<template>
  <div class="my-20">
    <div class="header-overlay" />
    <div class="container">
      <div class="row pt-[33px]">
        <div class="col-xl-6 col-lg-6">
          <div>
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item text-sm text-[#6D728E]">
                  <NuxtLink to="/">
                    صفحه اصلی
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item text-sm text-[#6D728E] active" aria-current="page">
                  درخواست دمو
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <h1 class="heading_h">
              درخواست دمو
            </h1>
            <p class=" pb-4 lh-lg text-[#2C2D2E] font-bold">
              به صورت رایگان ۳۰ روز از لینک جینیس استفاده کنید و ببینید چقدر آسان است:
            </p>
            <ul class="request-demo relative">
              <li>
                ردیابی مخاطبین و اتوماسیون های اداری شما
                <span />
              </li>
              <li>
                هر نوع تعامل مشتری مانند ایمیل ها، تماس ها، جلسات و موارد دیگر را ردیابی کنید
                <span />
              </li>
              <li>
                دید کاملی از هر مشتری داشته باشید
                <span />
              </li>
              <li>
                با گزارش&zwnj;ها و داشبوردها در یک نگاه، اطلاعات کسب&zwnj;وکار را دریافت کنید.
                <span />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 flex justify-end">
          <RequestFirst />
        </div>
      </div>
    </div>
  </div>
</template>
