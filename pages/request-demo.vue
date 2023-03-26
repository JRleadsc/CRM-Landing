<template>
  <div class="mt-20">
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
      <div class="row">
        <div class="col-12">
          <div class="mw-100 relative py-5 my-5">
            <nuxt-img
              src="/images/picdemo.png"
              loading="lazy"
              quality="80"
              format="webp"
              alt="image"
              class="w-100 rounded-[40px]"
            />
            <div class="req-desc-box">
              <div class="req-box d-md-flex d-none">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              </div>
              <div class="req-contact">
                <div>
                  <span>
                    <svg
                      id="Icon_-_Phone"
                      data-name="Icon - Phone"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        id="Path_77768"
                        data-name="Path 77768"
                        d="M16.283,16.284A16.845,16.845,0,0,0,19.8,11.205a1,1,0,0,0-.221-1.1L18.487,9.012a2.04,2.04,0,0,1-.113-2.941l1.565-1.565a2.666,2.666,0,0,1,3.771,0l.869.869A4.259,4.259,0,0,1,25.712,9.2a20.953,20.953,0,0,1-5.948,10.564A20.953,20.953,0,0,1,9.2,25.713,4.259,4.259,0,0,1,5.373,24.58l-.868-.868a2.666,2.666,0,0,1,0-3.771l1.564-1.564a2,2,0,0,1,2.828,0l1.2,1.205a1,1,0,0,0,1.1.221,16.88,16.88,0,0,0,5.079-3.52Z"
                        transform="translate(1.243 1.241)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <!-- <path id="Path_77769" data-name="Path 77769" d="M32,0H0V32H32Z" fill="none"/> -->
                    </svg>

                  </span>
                </div>
                <div class="contact">
                  <p>
                    با بخش فروش تماس بگیرید
                  </p>
                  <span class="cursor-pointer">
                    ۲۱۳۳۴۴۵۵۶۶
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
