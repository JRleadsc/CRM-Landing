<template>
  <div class="mt-20">
    <div class="header-overlay" />

    <section class="">
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
                    درباره ما
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Possibilities">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="heading">
              <h1 class="heading_h">
                درباره ما
              </h1>
              <p class="heading_p lh-lg text-justify">
                در شرکت ما، با ارائه نرم‌افزار ارتباط با مشتری لینک جینیس، تلاش می‌کنیم تا به شما کمک کنیم تا ارتباط با مشتریان خود را بهبود بخشید و عملکرد کسب و کار خود را به سطح بالاتری برسانید.

                تیم متخصص ما از توانایی‌های فنی و دانش بالایی در زمینه CRM برخوردار است و با بهره‌گیری از جدیدترین تکنولوژی‌ها و روش‌های توسعه، نرم‌افزارهایی را ارائه می‌دهد که به طور کامل نیازهای شما را در مدیریت ارتباط با مشتریان برطرف می‌کنند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-5 mb-4 about pt-5 mt-1">
      <div class="container pb-2">
        <div class="row">
          <div class="video_section">
            <ClientOnly>
              <div class="player-container">
                <!-- Docs = https://github.com/LarchLiu/vue3-video-player -->
                <vue3-video-player src="http://jrleads.ir/video/iranserver-vid.MP4" cover="/images/poster2.png" />
              </div>
            </ClientOnly>

            <!-- <div id="videoMainElement45" class="relative col_vido">
              <video id="vid" class="w-100" poster="/images/poster2.png" style="z-index: -1;">
                <source src="http://jrleads.ir/video/iranserver-vid.MP4" type="video/mp4">
                <source src="http://jrleads.ir/video/iranserver-vid.MP4" type="video/ogg">
              </video>
              <div id="toggle" class="isr_content_29_col_play" style="z-index: 2;">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="71.167" height="82.113" viewBox="0 0 71.167 82.113">
                    <defs>
                      <filter
                        id="Path"
                        x="0"
                        y="0"
                        width="71.167"
                        height="82.113"
                        filterUnits="userSpaceOnUse"
                      >
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood flood-color="#201979" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g id="play_fill" data-name="play fill" transform="translate(9 6)">
                      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path)">
                        <path id="Path-2" data-name="Path" d="M0,2.752v58.61A2.75,2.75,0,0,0,4.191,63.7L51.858,34.4a2.746,2.746,0,0,0,0-4.68L4.191.412A2.75,2.75,0,0,0,0,2.752Z" transform="translate(9 6)" fill="#fff" />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div> -->
            <div class="content justify-content-end">
              <div>
                <h2 class="text-sm-start text-center about-title-1">
                  چرا لینک جینیس؟
                </h2>
                <h3 class="about-title-2 py-2">
                  بهترین‌ها را برای شما فراهم می کنیم
                </h3>
                <p class="text-justify mt-3" style="line-height: 40px;">
                  در شرکت ما، تمرکز ما بر رضایت مشتریان است و هدف ما ایجاد روابط قوی و بلندمدت با مشتریان شماست. با استفاده از نرم‌افزارهای ما، شما قادر خواهید بود تا به صورت مؤثرتری با مشتریان خود در ارتباط باشید، عملکرد کسب و کار خود را بهبود بخشید و رقابتی‌تر در بازار عمل کنید.
                </p>
                <p class="text-justify mt-3" style="line-height: 40px;">
                  از اینکه شما به شرکت ما مراجعه کرده‌اید، سپاسگزاریم. برای کسب اطلاعات بیشتر و مشاوره رایگان، لطفا با ما تماس بگیرید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sec-blue about-desc">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="">
              <h2 class="pb-3">
                JRLeads
              </h2>
              <h3 class="pb-5">
                امید هدیه‌ای برای آینده
              </h3>
              <div class="description">
                <div class="flex items-center flex-col">
                  <p class="text-justify">
                  مزایای استفاده از نرم‌افزارهای ما شامل موارد زیر می‌شود:
                </p>
                <ul class="flex flex-col gap-3 mt-3">
                  <li class="text-justify">
                    ۱.مدیریت جامع اطلاعات مشتریان: نرم‌افزارهای ما شامل امکاناتی برای ذخیره و مدیریت جامع اطلاعات مشتریان شما می‌باشند. این اطلاعات شامل جزئیات تماس، خریدهای قبلی، تاریخچه تعاملات و سوابق ارتباطی با مشتریان است. با دسترسی به این اطلاعات، شما قادر خواهید بود به طور کامل با مشتریان خود در ارتباط باشید و خدماتی مشتری‌محور و شخصی‌سازی شده ارائه دهید.
                  </li>
                  <li class="text-justify">
                    ۲.بهبود ارتباط با مشتریان: نرم‌افزارهای ما ابزارها و قابلیت‌های متنوعی برای بهبود ارتباط با مشتریان شما فراهم می‌کنند. از جمله قابلیت‌های مهم آن‌ها می‌توان به مدیریت تماس‌ها، برنامه‌ریزی قرار ملاقات‌ها، ارسال ایمیل‌ها و پیامک‌ها، و مانیتورینگ فعالیت‌های مشتری اشاره کرد. این امکانات به شما کمک می‌کنند تا در هر لحظه به راحتی ، با مشتریان خود در ارتباط باشید.
                  </li>
                  <li class="text-justify">
                    ۳.تحلیل داده‌ها و گزارش‌دهی: نرم‌افزارهای ما قابلیت تحلیل دقیق داده‌های مشتریان را فراهم می‌کنند. با تجزیه و تحلیل این داده‌ها، می‌توانید روند خرید مشتریان، الگوهای رفتاری آن‌ها، و عملکرد کمپین‌ها و استراتژی‌های بازاریابی را بررسی کنید. این اطلاعات به شما کمک می‌کنند تا تصمیمات بهتری درباره استراتژی‌های فروش و ارتباط با مشتریان بگیرید.
                  </li>
                </ul>
                </div>
                <div class="web-link">
                  <a href="#">
                    وب سایت JRLeads
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
