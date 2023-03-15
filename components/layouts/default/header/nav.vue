<template>
  <nav class="navbar navbar-expand-lg" :class="useRoute().name !== 'index' ? 'px-0' : ''">
    <div class="container-fluid p-0">
      <div class="flex items-center menu-toggle">
        <button
          class="relative right-0 navbar-toggler z-40"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src="/images/menu.svg" alt="">
          </span>
        </button>
        <NuxtLink to="/" class="navbar-brand pt-0">
          <SvgLogo class="d-xxl-block d-none" />

          <span class="d-xxl-none d-block">
            <SvgLogo class="w-[157px] h-[40px]" />
          </span>
        </NuxtLink>
      </div>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <div class="top-menu d-lg-none d-block absolute right-0 rounded-t-none z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] w-full mx-auto" />
        <ul class="navbar-nav mb-2 mb-lg-0 me-0">
          <li class="nav-item">
            <NuxtLink to="/price" class="nav-link active" aria-current="page">
              قیمت‌ها
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="flex items-center nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div>
                ویژگی‌ها
              </div>
              <div class="arrow-item">
                <SvgArrowDown />
              </div>
            </a>
            <ul class="dropdown-menu absolute shadow-lg border-0" aria-labelledby="navbarDropdown">
              <span class="triangle" />
              <li>
                <NuxtLink to="features" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      فرآیند فروش خود را خودکار کنید
                    </p>
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </span>
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="features" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      فرآیند فروش خود را خودکار کنید
                    </p>
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </span>
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="features" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      فرآیند فروش خود را خودکار کنید
                    </p>
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </span>
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="features" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      فرآیند فروش خود را خودکار کنید
                    </p>
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/client">
              مشتریان ما
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="flex items-center nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div>
                منابع
              </div>
              <div class="arrow-item">
                <SvgArrowDown />
              </div>
            </a>
            <ul class="dropdown-menu absolute shadow-lg border-0" aria-labelledby="navbarDropdown">
              <span class="triangle" />
              <li>
                <NuxtLink to="/blogs" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      وبلاگ
                    </p>
                    <span>
                      آخرین مقالات و اخبار را در وبلاگ ما بخوانید
                    </span>
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="faq" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      سوالات متداول
                    </p>
                    <span>
                      پاسخ سؤالات خود را در اینجا پیدا کنید
                    </span>
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/whats-news" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      آخرین بروزرسانی‌ها
                    </p>
                    <span>
                      لیست آخرین تغییرات لینک جینیس را در اینجا ببینید
                    </span>
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/help-center" class="dropdown-item">
                  <div>
                    <SvgFeatures />
                  </div>
                  <div>
                    <p>
                      بخش آموزش
                    </p>
                    <span>
                      در اینجا مقالات آموزشی وب سایت را ببینید
                    </span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">
              درباره ما
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">
              تماس با ما
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center md:flex-row  left">
        <div class="text-sm font-semibold text-gray-900 ml-[22px] support">
          پشتیبانی : ۴۴۳۱۲۲
        </div>
        <NuxtLink to="/request-demo" class="text-sm font-semibold text-gray-900 ml-[12px]">
          <button class="btn-header h-[44px] bg-[#2E2E2E] text-white w-[150px] items-center justify-center rounded-full">
            درخواست دمو
          </button>
        </NuxtLink>
        <div class="d-none d-xl-flex ml-[16px]  text-sm font-semibold text-gray-900 w-[44px] h-[44px] rounded-full border-2 border-solid border-[#D1D3DF] flex items-center justify-center">
          <span>EN</span>
        </div>
        <div class="d-none d-xl-block">
          <a class=" text-sm font-semibold text-[#2C2D2E]" href="/login">
            ورود
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
