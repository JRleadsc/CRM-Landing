<template>
  <div class="">
    <section class="min-h-[780px] rounded-t-none rounded-b-[130px] ">
      <div class="container z-20 relative px-0">
        <div class="bg-white  sec-header z-20 relative">
          <LayoutsDefaultIndexHeader />

          <div class="">
            <div class="text-center xl:px-[40px] px-[10px]">
              <h1 class="text-[51px] text-[#2C2D2E] pt-[83px] pb-[55px] font-semibold title-head">
                هوشمند و جامع<br>
                سیستم مدیریت مشتری
              </h1>
              <h2 class="text-[#3E369D] text-[22px] font-semibold title-brand">
                برای برندهای مطرح جهانی
              </h2>
              <NuxtLink to="/request-demo" class="flex justify-center mt-8">
                <button class="bg-[#E14CAB] text-white rounded-full btn-demo">
                  درخواست دمو
                </button>
              </NuxtLink>
              <div class="flex items-center justify-center mt-[73px] brands">
                <div class="pl-[50px]">
                  آنها که به ما <br>
                  اعتماد کردند
                </div>
                <div class="flex items-center gap-x-8">
                  <!-- <span>
                          <img src="/images/microsoft.png" alt="" srcset="">
                      </span>
                      <span>
                          <img src="/images/Google-Logo-PNG-Photos.png" alt="" srcset="">
                      </span>
                      <span>
                          <img src="/images/1280px-Qualcomm-Logo.svg.png" alt="" srcset="">
                      </span>
                      <span>
                        <img src="/images/1280px-Cisco_logo.svg.png" alt="" srcset="">
                      </span> -->
                  <div class="d-xl-block d-none ">
                    <img src="/images/client-xl.png" alt="">
                  </div>
                  <div class="d-xl-none d-block pt-4">
                    <img src="/images/Clients.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-box-index absolute h-[7.5rem]  rounded-t-none rounded-b-[130px] z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] mx-auto" />
      </div>
    </section>

    <HomeFeaturesSlider />

    <HomeSlider />

    <section class="jr_vid">
      <div class="container">
        <div class="row">
          <div class="video_section">
            <div class="content">
              <div>
                <h2 class="text-sm-start font-bold text-[24px] text-center">
                  معرفی لینک جینیس
                </h2>
                <p class="text-sm-start text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                </p>
              </div>
              <div class="d-lg-block d-none">
                <a href="./about-us.html">
                  <button class="btn-outline">
                    بیشتر بخوانید
                  </button>
                </a>
              </div>
            </div>

            <ClientOnly>
              <div class="player-container">
                <!-- Docs = https://github.com/LarchLiu/vue3-video-player -->
                <vue3-video-player class="rounded-3xl" src="/video/iranserver-vid.MP4" cover="/images/poster2.png" />
              </div>
            </ClientOnly>

            <!-- <div id="videoMainElement45" class="relative col_vido">
              <video id="vid" class="w-100" poster="/images/poster2.png">
                <source src="http://jrleads.ir/video/iranserver-vid.MP4" type="video/mp4">
                <source src="http://jrleads.ir/video/iranserver-vid.MP4" type="video/ogg">
              </video>
              <div id="toggle" class="isr_content_29_col_play">
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
          </div>
        </div>
        <div class="row d-lg-none d-block pt-4">
          <div class="col-12">
            <div class="d-flex justify-center">
              <a href="./about-us.html">
                <button class="btn-outline">
                  بیشتر بخوانید
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grid grid-cols-1 featurs-section xs:py-[50px] text-center bg-white">
      <div class="pb-[53px]">
        <div class="flex justify-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
              <g id="Icons" transform="translate(-0.09 -0.276)">
                <path
                  id="Path_77770"
                  data-name="Path 77770"
                  d="M-16042.8-14074.161l8.553,8.554,14.946-14.948"
                  transform="translate(16059.935 14099.5)"
                  fill="none"
                  stroke="#ec4eae"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                />
                <g id="Group_31192" data-name="Group 31192" transform="translate(47.515 46.509)">
                  <path
                    id="Path_77773"
                    data-name="Path 77773"
                    d="M-15809.344-14029l-15.258,15.256"
                    transform="translate(15824.602 14028.998)"
                    fill="none"
                    stroke="#ec4eae"
                    stroke-linecap="round"
                    stroke-width="6"
                  />
                  <path
                    id="Path_77774"
                    data-name="Path 77774"
                    d="M-15824.605-14029l15.258,15.256"
                    transform="translate(15824.605 14028.998)"
                    fill="none"
                    stroke="#ec4eae"
                    stroke-linecap="round"
                    stroke-width="6"
                  />
                </g>
                <path
                  id="Path_77775"
                  data-name="Path 77775"
                  d="M-15967.921-14060.15l-39.892,42.248"
                  transform="translate(16028.289 14079.384)"
                  fill="none"
                  stroke="#40aae2"
                  stroke-linecap="round"
                  stroke-width="6"
                />
                <g
                  id="Rectangle_7959"
                  data-name="Rectangle 7959"
                  transform="translate(0.09 0.276)"
                  fill="none"
                  stroke="#40aae2"
                  stroke-width="6"
                >
                  <rect width="80" height="80" rx="26" stroke="none" />
                  <rect
                    x="3"
                    y="3"
                    width="74"
                    height="74"
                    rx="23"
                    fill="none"
                  />
                </g>
              </g>
            </svg>

          </span>
        </div>
        <h2 class="text-[28px] font-bold text-[#2C2D2E] py-[34px] title-section">
          برای مشاهده همه ویژگی ها بیشتر کاوش کنید
        </h2>
        <h3 class="text-[17px] text-[#6D728E] desc">
          چه چیزی لینک جینیس را منحصر به فرد می کند؟
        </h3>
      </div>
      <div class="flex flex-col justify-center items-center">
        <NuxtLink to="/features">
          <button class="btn-text font-bold min-w-[348px] h-[64px] bg-[#EC4EAE] rounded-full flex items-center justify-center text-[20px] text-white transition-all mb-[10px]">
            لیست کامل ویژگی‌ها را ببینید
          </button>
        </NuxtLink>
        <NuxtLink to="/contact">
          <button class="btn-text font-bold min-w-[348px] h-[64px] rounded-full flex items-center justify-center text-[20px] text-[#2C2D2E] transition-all border border-solid border-[#263d4a33]">
            <span class="pl-4">
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
                  d="M13.233,16.284a16.845,16.845,0,0,1-3.517-5.079,1,1,0,0,1,.221-1.1l1.092-1.091a2.04,2.04,0,0,0,.113-2.941L9.577,4.505a2.666,2.666,0,0,0-3.771,0l-.869.869A4.259,4.259,0,0,0,3.8,9.2,20.953,20.953,0,0,0,9.752,19.765a20.953,20.953,0,0,0,10.564,5.948,4.259,4.259,0,0,0,3.827-1.133l.868-.868a2.666,2.666,0,0,0,0-3.771l-1.564-1.564a2,2,0,0,0-2.828,0l-1.2,1.205a1,1,0,0,1-1.1.221,16.88,16.88,0,0,1-5.079-3.52Z"
                  transform="translate(1.241 1.241)"
                  fill="none"
                  stroke="#263d4a"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path id="Path_77769" data-name="Path 77769" d="M0,0H32V32H0Z" fill="none" />
              </svg>

            </span>
            با بخش فروش تماس بگیرید
          </button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
