<template>
  <nav class="navbar navbar-expand-lg px-0" :class="useRoute().name !== 'index' ? 'px-0' : ''">
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
            <!-- <img src="/images/menu.svg" alt=""> -->
          </span>
        </button>
        <NuxtLink to="/" class="navbar-brand pt-0">
          <img class="d-xxl-block d-none" src="/images/Logo.png" alt="logo">

          <span class="d-xxl-none d-block">
            <SvgLogo class="w-[157px] h-[40px]" />
          </span>
        </NuxtLink>
      </div>

      <div class=" collapse navbar-collapse" id="navbarSupportedContent">
								<div class="h-100 d-flex justify-between flex-col">
                  <ul class="navbar-nav me-0">
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
              <span class="back-icon">
										  <svg xmlns="http://www.w3.org/2000/svg" width="27.75" height="27.75" viewBox="0 0 27.75 27.75">
											<g id="User_Circle" data-name="User Circle" transform="matrix(0.07, 0.998, -0.998, 0.07, 25.937, 0)">
											  <path id="Back" d="M0,0H26V26H0Z" fill="rgba(255,255,255,0)"/>
											  <path id="Path_122925" data-name="Path 122925" d="M16904.715,13030.78h-.018l-.02,0-.023,0-.014,0-.021,0-.014,0-.023,0-.014,0-.02,0-.016,0-.02-.006-.016-.006-.018-.006-.018-.007-.016-.007-.018-.009-.018-.008-.014-.008-.023-.013-.008,0a.787.787,0,0,1-.184-.152l-6.963-6.963a.749.749,0,0,1,1.057-1.062l5.723,5.722v-12.19a.749.749,0,1,1,1.5,0v12.194l5.721-5.726a.751.751,0,0,1,1.063,1.062l-6.965,6.96a.752.752,0,0,1-.215.173l-.016.007-.016.008-.023.011-.008,0-.029.011,0,0-.029.011h0l-.031.009h-.006l-.027.007-.01,0-.027,0h-.008l-.025,0h-.012l-.027,0h-.084Z" transform="translate(-16891.75 -13010.031)" fill="#1d1d1b"/>
											</g>
										  </svg>
										  
										</span>
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
              <span class="back-icon">
										  <svg xmlns="http://www.w3.org/2000/svg" width="27.75" height="27.75" viewBox="0 0 27.75 27.75">
											<g id="User_Circle" data-name="User Circle" transform="matrix(0.07, 0.998, -0.998, 0.07, 25.937, 0)">
											  <path id="Back" d="M0,0H26V26H0Z" fill="rgba(255,255,255,0)"/>
											  <path id="Path_122925" data-name="Path 122925" d="M16904.715,13030.78h-.018l-.02,0-.023,0-.014,0-.021,0-.014,0-.023,0-.014,0-.02,0-.016,0-.02-.006-.016-.006-.018-.006-.018-.007-.016-.007-.018-.009-.018-.008-.014-.008-.023-.013-.008,0a.787.787,0,0,1-.184-.152l-6.963-6.963a.749.749,0,0,1,1.057-1.062l5.723,5.722v-12.19a.749.749,0,1,1,1.5,0v12.194l5.721-5.726a.751.751,0,0,1,1.063,1.062l-6.965,6.96a.752.752,0,0,1-.215.173l-.016.007-.016.008-.023.011-.008,0-.029.011,0,0-.029.011h0l-.031.009h-.006l-.027.007-.01,0-.027,0h-.008l-.025,0h-.012l-.027,0h-.084Z" transform="translate(-16891.75 -13010.031)" fill="#1d1d1b"/>
											</g>
										  </svg>
										  
										</span>
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
              <li>
                <NuxtLink to="/blog" class="dropdown-item">
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
								  <div class="flex flex-col pl-4 taggle-option">
									<div class="text-sm font-semibold text-gray-900  border-bottom pb-3">
										پشتیبانی : ۴۴۳۱۲۲
									</div>
								  <div class="flex items-center pt-3">
									<div class=" ml-[16px]  text-sm font-semibold text-gray-900  w-[44px] h-[44px] rounded-full border-2 border-solid border-[#D1D3DF] flex items-center justify-center">
									  <span>EN</span>
								  </div>
								  <div class="">
									  <a class=" text-sm font-semibold text-[#2C2D2E] w-[62px] h-[44px] rounded-full border-2 border-solid border-[#D1D3DF] flex items-center justify-center" href="./login.html">
										  ورود
									  </a>
								  </div>
								  </div>
								</div>
								</div>
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
