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
                <a class="dropdown-item" href="./help-center.html">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55" height="55" viewBox="0 0 89.768 85.354">
                      <defs>
                        <filter
                          id="Rectangle_7966"
                          x="0"
                          y="9.643"
                          width="75.212"
                          height="75.711"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dx="6" dy="9" input="SourceAlpha" />
                          <feGaussianBlur stdDeviation="9" result="blur" />
                          <feFlood flood-color="#45507a" flood-opacity="0.078" />
                          <feComposite operator="in" in2="blur" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                        <filter
                          id="Ellipse_576"
                          x="10.753"
                          y="0"
                          width="76.451"
                          height="76.381"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dx="6" dy="9" input="SourceAlpha" />
                          <feGaussianBlur stdDeviation="9" result="blur-2" />
                          <feFlood flood-color="#45507a" flood-opacity="0.078" />
                          <feComposite operator="in" in2="blur-2" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                        <filter
                          id="Path_77784"
                          x="26.675"
                          y="17.504"
                          width="63.093"
                          height="63.069"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dx="6" dy="9" input="SourceAlpha" />
                          <feGaussianBlur stdDeviation="9" result="blur-3" />
                          <feFlood flood-color="#45507a" flood-opacity="0.078" />
                          <feComposite operator="in" in2="blur-3" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                      </defs>
                      <g id="Group_31222" data-name="Group 31222" transform="translate(21 19.354)">
                        <g transform="matrix(1, 0, 0, 1, -21, -19.35)" filter="url(#Rectangle_7966)">
                          <g
                            id="Rectangle_7966-2"
                            data-name="Rectangle 7966"
                            transform="translate(21 27.64)"
                            fill="none"
                            stroke="#40aae2"
                            stroke-width="2.5"
                          >
                            <rect width="21.212" height="21.711" rx="7" stroke="none" />
                            <rect
                              x="1.25"
                              y="1.25"
                              width="18.712"
                              height="19.211"
                              rx="5.75"
                              fill="none"
                            />
                          </g>
                        </g>
                        <path
                          id="Path_77782"
                          data-name="Path 77782"
                          d="M-20197.922-15632.558h-7.309"
                          transform="translate(20211.9 15648.046)"
                          fill="none"
                          stroke="#40a9e1"
                          stroke-linecap="round"
                          stroke-width="2.5"
                        />
                        <path
                          id="Path_77783"
                          data-name="Path 77783"
                          d="M-20201.574-15632.558h-3.656"
                          transform="translate(20215.477 15654.36)"
                          fill="none"
                          stroke="#40a9e1"
                          stroke-linecap="round"
                          stroke-width="2.5"
                        />
                        <g transform="matrix(1, 0, 0, 1, -21, -19.35)" filter="url(#Ellipse_576)" style="mix-blend-mode: multiply;isolation: isolate">
                          <ellipse
                            id="Ellipse_576-2"
                            data-name="Ellipse 576"
                            cx="9.115"
                            cy="9.077"
                            rx="9.115"
                            ry="9.077"
                            transform="matrix(-1, -0.09, 0.09, -1, 51.27, 39.03)"
                            fill="none"
                            stroke="#ec4eae"
                            stroke-linecap="round"
                            stroke-width="2.5"
                          />
                        </g>
                        <g transform="matrix(1, 0, 0, 1, -21, -19.35)" filter="url(#Path_77784)">
                          <path
                            id="Path_77784-2"
                            data-name="Path 77784"
                            d="M5.557,5.534,0,0"
                            transform="translate(55 42.81) rotate(180)"
                            fill="none"
                            stroke="#ec4eae"
                            stroke-linecap="round"
                            stroke-width="2.5"
                          />
                        </g>
                        <path
                          id="Path_77785"
                          data-name="Path 77785"
                          d="M0,0A4.589,4.589,0,0,0,4.574,3.53"
                          transform="translate(26.7 9.741) rotate(-171)"
                          fill="none"
                          stroke="#e64cab"
                          stroke-linecap="round"
                          stroke-width="2.5"
                          style="mix-blend-mode: multiply;isolation: isolate"
                        />
                      </g>
                    </svg>

                  </div>
                  <div>
                    <p>
                      بخش آموزش
                    </p>
                    <span>
                      در اینجا مقالات آموزشی وب سایت را ببینید
                    </span>
                  </div>
                </a>
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
