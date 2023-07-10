<template>
  <footer class="bg-[#ECECEE]">
    <div class="container lg:px-20 h-100">
      <div class="row h-100">
        <div class="col-md-6 col-12">
          <div class="flex flex-col justify-between h-full px-4 pt-[24px]">
            <div>
              <div class="pb-[15px] ">
                <SvgLogo class="d-sm-block d-none  w-[230px] h-auto" />
                <span class="d-sm-none d-block">
                  <SvgLogo class="w-[157px] h-auto" />
                </span>
              </div>
              <div class="text-lg text-[#6D728E]">
                <p class="mb-3">
                  متفاوت تر مدیریت کنید
                </p>
                <p>
                  هوشمندانه تر بفروشید!
                </p>
              </div>
            </div>
            <div class="">
              <h3 class="sm:text-[22px] text-[18px] pt-md-0 pt-5 text-[#2C2D2E] font-bold pb-4">
                عضویت در خبرنامه
              </h3>
              <div class=" newsletter">
                <input class="h-[50px] pr-[20px] rounded-l-none rounded-r-[40px] placeholder-[#B5B5C1]" type="text" placeholder="ایمیل خود را وارد کنید">
                <button class="font-bold w-[131px] h-[50px] flex items-center justify-center text-sm text-[#2C2D2E] shadow-2xl bg-white rounded-full">
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="xl:col-span-1 sm:col-span-2 px-4">
            <div class="flex flex-col items-end sm:items-start pt-[30px]">
              <div class="flex justify-between 2xl:w-[38%] xl:w-[57%] md:w-[73%] sm:w-[50%] menu-box-footer">
                <div>
                  <h3 class="text-[28px] sm:text-[18px] font-bold text-[#2C2D2E] pb-[26px]">
                    پشتیبانی
                  </h3>
                  <ul class="menu-footer list-none">
                    <li>
                      <NuxtLink to="./faq">
                        سوالات متداول
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="./contact">
                        تماس با ما
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/about">
                        درباره ما
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-[28px] sm:text-[18px] font-bold text-[#2C2D2E] pb-[26px]">
                    منو
                  </h3>
                  <ul class="menu-footer list-none">
                    <li>
                      <NuxtLink to="./features">
                        ویژگی‌ها
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/client">
                        مشتریان ما
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/price">
                        قیمت‌ها
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex items-center gap-8 pt-[70px]">
                <div>
                  <a href="https://instagram.com/linkgns" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <path id="Mask" d="M10,20c-2.683,0-3.04-.011-4.123-.059a5.96,5.96,0,0,1-4.2-1.619,5.958,5.958,0,0,1-1.618-4.2C.012,13.048,0,12.691,0,10S.012,6.952.06,5.877a5.959,5.959,0,0,1,1.618-4.2A5.959,5.959,0,0,1,5.877.06C6.952.012,7.309,0,10,0s3.048.012,4.124.06a5.958,5.958,0,0,1,4.2,1.618,5.96,5.96,0,0,1,1.619,4.2C19.989,6.96,20,7.317,20,10s-.011,3.04-.059,4.124a5.959,5.959,0,0,1-1.619,4.2,5.959,5.959,0,0,1-4.2,1.619C13.04,19.989,12.683,20,10,20ZM10,1.8c-2.678,0-2.993.01-4.041.059A4.343,4.343,0,0,0,2.953,2.953,4.343,4.343,0,0,0,1.86,5.959C1.812,7.007,1.8,7.322,1.8,10s.01,2.994.059,4.041a4.347,4.347,0,0,0,1.093,3.007,4.352,4.352,0,0,0,3.006,1.093c1.051.048,1.367.058,4.041.058s2.991-.01,4.041-.058a4.356,4.356,0,0,0,3.007-1.093,4.356,4.356,0,0,0,1.093-3.007c.048-1.05.058-1.366.058-4.041s-.01-2.99-.058-4.041a4.352,4.352,0,0,0-1.093-3.006A4.347,4.347,0,0,0,14.041,1.86C12.994,1.812,12.679,1.8,10,1.8Zm0,13.334A5.135,5.135,0,1,1,15.136,10,5.141,5.141,0,0,1,10,15.135Zm0-8.469A3.334,3.334,0,1,0,13.334,10,3.337,3.337,0,0,0,10,6.666Zm5.339-.8a1.2,1.2,0,1,1,1.2-1.2A1.2,1.2,0,0,1,15.339,5.862Z" fill="#2c2d2e" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="https://t.me/linkgns" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" /></svg>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/jrlead/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <path id="Mask" d="M19.167,20H.833L0,19.167V.833L.833,0H19.167L20,.833V19.167L19.167,20h0ZM12.583,9.917c1.5,0,1.5,1.445,1.5,2.5v4.667h3V11.917a6.1,6.1,0,0,0-.667-3.261A3.152,3.152,0,0,0,13.5,7.333a3.059,3.059,0,0,0-2.833,1.5V7.5H7.834v9.583h3V12.334C10.833,11.165,10.969,9.917,12.583,9.917ZM3,7.5H3v9.583H6V7.5ZM4.416,2.667a1.75,1.75,0,0,0,0,3.5A1.712,1.712,0,0,0,6.167,4.416,1.752,1.752,0,0,0,4.416,2.667Z" fill="#2c2d2e" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/Jrleadsco?s=09" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.637" height="15.874" viewBox="0 0 19.637 15.874">
                      <path id="Mask" d="M19.637,1.882a7.369,7.369,0,0,1-2.291.655,4.356,4.356,0,0,0,1.8-2.209,7.428,7.428,0,0,1-2.536.982A3.961,3.961,0,0,0,13.664,0,4.016,4.016,0,0,0,9.655,4.009a3.068,3.068,0,0,0,.082.9A11.3,11.3,0,0,1,1.391.655,3.693,3.693,0,0,0,.818,2.7a4.108,4.108,0,0,0,1.8,3.355,3.3,3.3,0,0,1-1.8-.491v.082A3.969,3.969,0,0,0,4.009,9.573a4.146,4.146,0,0,1-1.064.164,2.265,2.265,0,0,1-.736-.082,3.879,3.879,0,0,0,3.764,2.782A8.185,8.185,0,0,1,.982,14.155,3.984,3.984,0,0,1,0,14.073a11.454,11.454,0,0,0,6.137,1.8A11.352,11.352,0,0,0,17.592,4.418V3.927A9.7,9.7,0,0,0,19.637,1.882Z" fill="#2c2d2e" />
                    </svg>
                  </a>
                </div>
                <!-- <div>
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.046" height="17.674" viewBox="0 0 11.046 17.674">
                      <path id="Mask" d="M3.239,17.674,3.213,9.64H0V6.427H3.213V4.418C3.213,1.437,5.06,0,7.719,0a24.681,24.681,0,0,1,2.688.137V3.253H8.563c-1.447,0-1.727.687-1.727,1.7V6.427h4.21L9.439,9.64h-2.6v8.033Z" transform="translate(0 0)" fill="#2c2d2e" />
                    </svg>
                  </a>
                </div> -->
              </div>
            </div>
            <div class="text-[#6D728E] text-sm pt-[25px] flex lg:flex-row sm:flex-col lg:items-center info 2xl:gap-16 xl:gap-8 lg:gap-12 sm:gap-4 justify-end">
              <div>
                support@linkgns.com
              </div>
              <div>
                پشتیبانی: 05137278982
              </div>
              <div>
                تهران, خیابان ولیعصر کوچه مهناز پلاک ۲۷
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="min-h-[44px] lg:px-20 bg-[#E0E0E2] flex items-center">
      <div class="container">
        <div class="rwo">
          <div class="col-12">
            <div class="flex items-center gap-x-9 copyright">
              <div class="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path id="ic_feedback_24px" d="M3.2,2h9.6a1.2,1.2,0,0,1,1.194,1.2L14,14l-2.4-2.4H3.2A1.2,1.2,0,0,1,2,10.4V3.2A1.2,1.2,0,0,1,3.2,2ZM7.4,9.2H8.6V8H7.4Zm0-2.4H8.6V4.4H7.4Z" transform="translate(-2 -2)" fill="#2c2d2e" />
                  </svg>
                </span>
                <p class="text-[#706F7C] text-[11px] pr-[10px]">
                  ارائه شده از طرف
                </p>
                <p class="flex items-center text-[#2C2D2E] font-bold text-[11px] px-2">
                  JRLeads
                </p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5">
                    <path id="chevron-left" d="M0,1.065,3.09,4.5,0,7.943.951,9,5,4.5.951,0Z" transform="translate(0 5) rotate(-90)" fill="#2c2d2e" />
                  </svg>
                </span>
              </div>
              <div class="flex items-center gap-x-2 text-[#2C2D2E] text-[13px]">
                <p>
                  Copyright © 2020
                </p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">
                    <path id="Shape" d="M9.21,12a.365.365,0,0,0,.165-.04.374.374,0,0,0,.2-.335V9.736a4.741,4.741,0,0,0,3.137-1.541A4.9,4.9,0,0,0,14,4.875,4.847,4.847,0,0,0,9.211,0H4.789A4.838,4.838,0,0,0,0,4.875,4.838,4.838,0,0,0,4.789,9.75l.642,0h.292c.4,0,.427.011.515.078l2.751,2.1A.363.363,0,0,0,9.21,12ZM8.039,2.547a1.755,1.755,0,0,1,1.345.63,1.834,1.834,0,0,1-.093,2.441l-1.667,1.7a.874.874,0,0,1-1.251,0l-1.667-1.7a1.832,1.832,0,0,1-.1-2.446,1.756,1.756,0,0,1,1.345-.63A1.733,1.733,0,0,1,7,2.891,1.735,1.735,0,0,1,8.039,2.547Z" fill="#2c2d2e" />
                  </svg>
                </span>
                <p>
                  Linkgns.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
