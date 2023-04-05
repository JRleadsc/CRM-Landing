<template>
  <div class="my-20">
    <section>
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
              <p class="heading_p pb-4 lh-lg ">
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
                  با گزارش‌ها و داشبوردها در یک نگاه، اطلاعات کسب‌وکار را دریافت کنید.
                  <span />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 flex justify-end">
            <div class="form-start flex flex-col justify-between">
              <div>
                <div class="text-[24px] text-[#2C2D2E] font-bold">
                  <h2>
                    رایگان شروع کنید
                  </h2>
                  <h2 class="d-none">
                    تاییدیه ایمیل
                  </h2>
                </div>

                <form action="" class="d-none pt-[38px] ">
                  <div class="">
                    <label for="phone" class="form-label">
                      شماره همراه
                      <span>*</span>
                    </label>
                    <input id="phone" type="text" class="form-control" placeholder="+98 --- --- ---">
                  </div>
                  <div class="">
                    <label for="email" class="form-label">
                      ایمیل
                      <span>*</span>
                    </label>
                    <input id="email" type="email" class="form-control" placeholder="Sample@gmail.com">
                  </div>
                  <div class="">
                    <label for="company" class="form-label">
                      نام شرکت
                      <span>*</span>
                    </label>
                    <input id="company" type="text" class="form-control" placeholder="نام شرکت خود را وارد کنید">
                  </div>
                </form>
                <div class="content-confirm text-base text-[#6D728E] lh-lg pt-[38px]">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  </p>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  </p>
                </div>
              </div>
              <div class="pt-[34px]">
                <div>
                  <RequestVerify />
                  <p class="text-[18px] text-[#2C2D2E] pt-4">
                    آیا ایمیل را دریافت نکرده اید ؟
                    <a href="/auth/step-2" class="primary">
                      ارسال مجدد
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
