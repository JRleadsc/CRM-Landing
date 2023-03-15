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
                    بخش آموزش مقدماتی
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
                    <SvgSearch />
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
                          <NuxtLink to="/help/knowledges/base">
                            لینک ۱
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single">
                            لینک ۲
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single-2">
                            لینک ۳
                          </NuxtLink>
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
                          <NuxtLink to="/help/knowledges/base">
                            لینک ۱
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single">
                            لینک ۲
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single-2">
                            لینک ۳
                          </NuxtLink>
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
                          <NuxtLink to="/help/knowledges/base">
                            لینک ۱
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single">
                            لینک ۲
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single-2">
                            لینک ۳
                          </NuxtLink>
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
                          <NuxtLink to="/help/knowledges/base">
                            لینک ۱
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single">
                            لینک ۲
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single-2">
                            لینک ۳
                          </NuxtLink>
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
                          <NuxtLink to="/help/knowledges/base">
                            لینک ۱
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single">
                            لینک ۲
                          </NuxtLink>
                        </div>
                        <div>
                          <NuxtLink to="/help/knowledges/single-2">
                            لینک ۳
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="side-item">
              <p class="lh-lg">
                عنوان دسته اصلی
              </p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                  <path id="Arrow-_R" data-name="Arrow- R" d="M-18342.2-15613.723l-8,8,8,8" transform="translate(18351.697 15615.844)" fill="none" stroke="#ececee" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>

              </span>
            </div>
            <div class="side-item">
              <p>
                عنوان دسته اصلی
              </p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                  <path id="Arrow-_R" data-name="Arrow- R" d="M-18342.2-15613.723l-8,8,8,8" transform="translate(18351.697 15615.844)" fill="none" stroke="#ececee" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>

              </span>
            </div>
            <div class="side-item active">
              <p>
                عنوان دسته اصلی
              </p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                  <path id="Arrow-_R" data-name="Arrow- R" d="M-18342.2-15613.723l-8,8,8,8" transform="translate(18351.697 15615.844)" fill="none" stroke="#ececee" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>

              </span>
            </div>
            <div class="side-item">
              <p>
                عنوان دسته اصلی
              </p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                  <path id="Arrow-_R" data-name="Arrow- R" d="M-18342.2-15613.723l-8,8,8,8" transform="translate(18351.697 15615.844)" fill="none" stroke="#ececee" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>

              </span>
            </div>
            <div class="side-item">
              <p>
                عنوان دسته اصلی
              </p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                  <path id="Arrow-_R" data-name="Arrow- R" d="M-18342.2-15613.723l-8,8,8,8" transform="translate(18351.697 15615.844)" fill="none" stroke="#ececee" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>

              </span>
            </div> -->
              </div>
              <div class="absolute border_side_items z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
            </div>
          </div>
          <div class="col-lg-8 col-12 side-content">
            <h1 class="heading_h">
              عنوان دسته اصلی
            </h1>
            <div class="sub-content pt-5">
              <h2>
                عنوان زیر دسته
              </h2>
              <h3 class="text-[#999EBF] text-base pt-4 pb-2 mb-2">
                مقالات با بالاترین امتیاز
              </h3>
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
              <NuxtLink to="/help/knowledges/base">
                <button class="btn-xs white-btn">
                  بیشتر
                </button>
              </NuxtLink>
            </div>
            <div class="sub-content pt-5">
              <h2>
                عنوان زیر دسته
              </h2>
              <h3 class="text-[#999EBF] text-base pt-4 pb-2 mb-2">
                مقالات با بالاترین امتیاز
              </h3>
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
              <NuxtLink to="/help/knowledges/single">
                <button class="btn-xs white-btn">
                  بیشتر
                </button>
              </NuxtLink>
            </div>
            <div class="sub-content pt-5">
              <h2>
                عنوان زیر دسته
              </h2>
              <h3 class="text-[#999EBF] text-base pt-4 pb-2 mb-2">
                مقالات با بالاترین امتیاز
              </h3>
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
              <NuxtLink to="/help/knowledges/single-2">
                <button class="btn-xs white-btn">
                  بیشتر
                </button>
              </NuxtLink>
            </div>
            <div class="sub-content pt-5">
              <h2>
                عنوان زیر دسته
              </h2>
              <h3 class="text-[#999EBF] text-base pt-4 pb-2 mb-2">
                مقالات با بالاترین امتیاز
              </h3>
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
              <button class="btn-xs white-btn">
                بیشتر
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
