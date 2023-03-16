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
                    <NuxtLink to="/help-center">
                      بخش آموزش
                    </NuxtLink>
                  </li>
                  <li class="breadcrumb-item text-sm text-[#6D728E] active" aria-current="page">
                    <NuxtLink to="/help/developer-docs">
                      منابع برنامه نویسان
                    </NuxtLink>
                  </li>
                  <li class="breadcrumb-item text-sm text-[#6D728E] active" aria-current="page">
                    CMS documentation
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5">
      <div class="container">
        <div class="row flex knowledege-base">
          <div class="col-lg-4 col-12 side-right">
            <div class="mb-3">
              <form class="search mb-0 position-relative pb-1" action="">
                <input id="" type="text" name="" class="search_input" placeholder="جستجو">
                <a id="icon-search" href="" title="search" class="search_a">
                  <span class="icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.074" height="22.872" viewBox="0 0 22.074 22.872">
                      <g id="Group_100" data-name="Group 100" transform="translate(0.074)">
                        <g id="Group_85" data-name="Group 85" transform="translate(0 0)">
                          <g id="Ellipse_14" data-name="Ellipse 14" fill="none" stroke="#fff" stroke-width="1.5">
                            <circle cx="11" cy="11" r="11" stroke="none" />
                            <circle cx="11" cy="11" r="10.25" fill="none" />
                          </g>
                          <path
                            id="Path_68"
                            data-name="Path 68"
                            d="M-4419.383-20760.232l-2.947,3.012"
                            transform="translate(4423.317 20779.031)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </svg>

                  </span>
                </a>
              </form>
            </div>
            <div class="relative flex">
              <div class="accordion-side side-items z-20">
                <div id="accordionPanelsStayOpenExample" class="accordion ">
                  <div class="accordion-item">
                    <h2 id="panelsStayOpen-headingOne" class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        عنوان دسته اصلی
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                      <div class="accordion-body">
                        <div>
                          <a href="">
                            لینک ۱
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۲
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۳
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="panelsStayOpen-headingThree" class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        عنوان دسته اصلی
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div class="accordion-body">
                        <div>
                          <a href="">
                            لینک ۱
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۲
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۳
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="" class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        عنوان دسته اصلی
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div class="accordion-body">
                        <div>
                          <a href="">
                            لینک ۱
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۲
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۳
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item ">
                    <h2 id="panelsStayOpen-headingTwo" class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        عنوان دسته اصلی
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body">
                        <div>
                          <a href="">
                            لینک ۱
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۲
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۳
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item ">
                    <h2 id="" class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        عنوان دسته اصلی
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body">
                        <div>
                          <a href="">
                            لینک ۱
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۲
                          </a>
                        </div>
                        <div>
                          <a href="">
                            لینک ۳
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute border_side_items z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
            </div>
          </div>
          <div class="col-lg-8 col-12 side-content">
            <h1 class="heading_h">
              CMS
            </h1>
            <article class="documantion">
              <div class="sub-content ">
                <h2>
                  ویژگی های اساسی
                </h2>
                <p class="">
                  CMS Source Code API به شما امکان می دهد با فایل های ذخیره شده در سیستم فایل توسعه دهنده HubSpot خود تعامل داشته باشید. این فایل ها شامل تمام قالب ها، ماژول ها، CSS، JS و سایر دارایی های CMS هستند که در Design Manager دیده می شوند. از طریق این API می توانید:
                </p>
                <ul>
                  <li>
                    ردیابی مخاطبین و مدیریت خط لوله
                  </li>
                  <li>
                    هر ایمیل تعامل مشتری، تماس ها، جلسات و موارد دیگر را ردیابی کنید
                  </li>
                  <li>
                    دید کاملی از هر مشتری داشته باشید
                  </li>
                  <li>
                    با گزارش&zwnj;ها و داشبوردها در یک نگاه، اطلاعات کسب&zwnj;وکار را دریافت کنید.
                  </li>
                </ul>
                <h2>
                  محیط و مسیر
                </h2>
                <p class="">
                  نقاط پایانی کد منبع API از پارامترهای محیط و مسیر برای شناسایی فایل‌ها در سیستم فایل توسعه‌دهنده CMS استفاده می‌کنند. این پارامترها معمولاً در خود مسیر نقطه پایانی مانند /cms/v3/source-code/{environment}/content/{path} مشخص می‌شوند.
                </p>
                <p class="pt-5">
                  پارامتر محیط به این اشاره دارد که آیا شما با نسخه منتشر نشده یا زنده هر فایل در حال تعامل هستید. برای تغییرات منتشر نشده، از پیش نویس استفاده کنید. برای تغییرات زنده، از منتشر شده استفاده کنید.
                </p>
                <div class="note my-3">
                  <p class="lh-lg">
                    <strong>لطفاً توجه داشته باشید:</strong> اگر حساب شما برای پرداخت خودکار کارت اعتباری تنظیم نشده است، لطفاً با مدیر موفقیت مشتریان خود تماس بگیرید یا نحوه پرداخت یک بار کارت اعتباری را بیاموزید.
                  </p>
                </div>
                <p>
                  همانطور که در یک سیستم عامل مبتنی بر یونیکس می بینید، یک کاراکتر / قبل از آن وجود ندارد. هنگام آپلود یک فایل جدید، این محل باید محل ایجاد فایل باشد. هنگام بازیابی یا آپلود تغییرات در یک فایل موجود، این باید با مسیر فایل موجود مطابقت داشته باشد.
                </p>
                <p class="pt-5">
                  همانطور که در یک سیستم عامل مبتنی بر یونیکس می بینید، یک کاراکتر / قبل از آن وجود ندارد. هنگام آپلود یک فایل جدید، این محل باید محل ایجاد فایل باشد. هنگام بازیابی یا آپلود تغییرات در یک فایل موجود، این باید با مسیر فایل موجود مطابقت داشته باشد.
                </p>
                <h2>
                  محیط و مسیر
                </h2>
                <p>
                  می‌توانید با استفاده از /cms/v3/source-code/{environment}/content/{path} یک فایل را از حساب HubSpot آنها دانلود کنید.
                </p>
                <p class="pb-3 pt-5">
                  برای انجام این کار، از یک درخواست HTTP GET استفاده کنید که نوع محتوای برنامه/octet-stream را می‌پذیرد. این به شما امکان می دهد محتویات فایل باینری واقعی مسیر داده شده را دانلود کنید.
                </p>
                <strong class="h3 text-[#3E369D]">
                  به عنوان مثال
                </strong>
                <p class="pt-3">
                  دانلود فایل:
                  <br>
                  دریافت /cms/v3/source-code/published/content/my-file.js
                  <br>
                  پذیرش: برنامه / جریان هشتگانه
                  <br>
                  توجه داشته باشید که نمی توانید کل محتویات یک پوشه را دانلود کنید. در عوض، باید پوشه را واکشی کنید
                  <br>
                  ابرداده (به زیر مراجعه کنید) و هر یک از فرزندان آن را جداگانه بازیابی کنید.
                </p>

                <div class="pe-xs-0 flex items-center is-helpfull justify-content-sm-between flex-wrap justify-content-center">
                  <p class="text-white">
                    این مقاله به شما کمک کرد؟
                  </p>
                  <div class="py-sm-0 py-2">
                    <button class="white-btn me-sm-4 ">
                      بله
                    </button>
                    <button class="white-btn">
                      خیر
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
