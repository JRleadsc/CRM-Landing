<template>
  <section class="testimonials bg-white py-5 mb-3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="pb-5 text-[22px] text-[#2C2D2E] font-bold">
            نظر ۱
          </div>
          <div class="flex flex-col justify-center gap-3 testimonial-box">
            <div class="flex items-center justify-between flex-sm-row flex-column">
              <div class="flex gap-x-[20px] items-center">
                <span>
                  <img src="/images/auther.png" alt="">
                </span>
                <div class="">
                  <h4 class="text-[20px] text-[#484F79] font-bold">
                    حامد گورابی
                  </h4>
                  <p class="font-size-base text-[#B5B5C1] pt-2">
                    ۱ ساعت پیش
                  </p>
                </div>
              </div>
            </div>
            <p class="text-[18px] text-[#999EBF] lh-lg text-sm-start text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            </p>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-12">
          <div class="">
            <h3 class="font-bold text-[24px] text-[#484F79]">
              ارسال نظر جدید
            </h3>
          </div>
        </div>
      </div>
      <div class="row testimonials-form">
        <div class=" col-12">
          <div class="form-start w-100 shadow-none pt-0 ps-0">
            <div class="row">
              <div class="col-xxl-6 col-12">
                <form action="" class="pt-[38px] ">
                  <div class="row ">
                    <div class="col-lg-6 col-12">
                      <div class="">
                        <label for="name" class="form-label">
                          نام و نام خانوادگی
                          <span>*</span>
                        </label>
                        <input id="name" type="text" class="form-control" placeholder="نام شما">
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="">
                        <label for="email" class="form-label">
                          ایمیل
                          <span>*</span>
                        </label>
                        <input id="email" type="text" class="form-control" placeholder="نام خانوادگی شما">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-xxl-6 d-xxl-block d-none" />
            </div>
            <div class="row">
              <div class="col-12">
                <label for="text" class="form-label">
                  متن نظر
                  <span>*</span>
                </label>
                <textarea id="text" class="form-control" rows="8" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="pt-[34px]">
                  <button class="btn-md pink-btn">
                    ارسال نظر
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 d-xxl-block d-none" />
      </div>
    </div>
  </section>
</template>
