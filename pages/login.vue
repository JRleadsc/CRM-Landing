<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="login mt-20">
              <NuxtLink to="/">
                <img src="/images/logo/Logo.png" alt="logo">
              </NuxtLink>
              <div class="flex items-center mt-6">
                <p class="text-[#999EBF] text-[17px]">
                  حساب کاربری ندارید؟
                </p>
                <NuxtLink to="/login" class="text-[#3E369D] text-[17px] ms-2">
                  ثبت نام
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center mt-16 mb-32">
              <div class="relative flex w-[584px]">
                <div class="bg-white rounded-[40px] shadow-2xl w-full z-20 px-6 py-10 md:p-[76px]">
                  <form action="" class="">
                    <div class="flex flex-col gap-2">
                      <label for="username" class="text-sm">
                        ایمیل / شماره همراه
                      </label>
                      <input id="username" type="text" class="text-sm rounded-full h-[56px] bg-[#ECECEE]/40 px-[1.25rem]" placeholder="ایمیل / شماره همراه">
                    </div>
                    <div class="flex flex-col gap-2 mt-8">
                      <label for="password" class="text-sm">
                        رمز عبور
                      </label>
                      <span class="text-xs text-[#1C4694]">نمایش رمز عبور</span>
                      <input id="password" type="text" class="text-sm rounded-full h-[56px] bg-[#ECECEE]/40 px-[1.25rem]" placeholder="رمز عبور">
                    </div>
                    <div class="text-sm text-[#1C4694] mt-8 mb-9">
                      رمز عبور را فراموش کرده‌اید؟
                    </div>
                    <div class="flex gap-2">
                      <input id="remember" type="checkbox" class="">
                      <label for="remember" class="text-sm">
                        من را به خاطر بسپار
                      </label>
                    </div>
                    <div class="flex justify-center mt-14">
                      <button type="submit" class="btn border-0 h-[50px] w-[148px] rounded-full bg-[#E14CAB] hover:bg-[#E14CAB] font-medium text-white">
                        ورود
                      </button>
                    </div>
                    <div class="flex justify-center mt-10">
                      <button type="submit" class="flex items-center gap-2 btn btn-wide border-0 h-[50px] rounded-full bg-[#ECECEE] hover:bg-[#ECECEE] font-medium text-[#2C2D2E]">
                        <div>
                          <SvgGoogle />
                        </div>
                        <div>ورود با اکانت گوگل</div>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="absolute left-0.5 right-0.5 -bottom-1 z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2] rounded-b-[40px] h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'login'
})
</script>
