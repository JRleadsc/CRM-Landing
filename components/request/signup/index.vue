<template>
  <div class="col-12">
    <div class="main-account relative">
      <div class="account flex w-full  z-20 relative">
        <div class="levels">
          <div class="step" :class="{ 'active': step === 1 }" @click="goToStep(1)">
            <div>
              <p>
                مرحله اول
              </p>
              <span>
                حساب کاربری برای خود بسازید
              </span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                <path
                  id="Arrow-_R"
                  data-name="Arrow- R"
                  d="M-18342.2-15613.723l-8,8,8,8"
                  transform="translate(18351.697 15615.844)"
                  fill="none"
                  stroke="#ececee"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
          <div class="step" :class="{ 'active': step === 2 }" @click="goToStep(2)">
            <div>
              <p>
                مرحله دوم
              </p>
              <span>
                کسب و کار شما چگونه است؟
              </span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                <path
                  id="Arrow-_R"
                  data-name="Arrow- R"
                  d="M-18342.2-15613.723l-8,8,8,8"
                  transform="translate(18351.697 15615.844)"
                  fill="none"
                  stroke="#ececee"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
          <div class="step" :class="{ 'active': step === 3 }" @click="goToStep(3)">
            <div>
              <p>
                مرحله سوم
              </p>
              <span>
                شرکت خود را معرفی کنید
              </span>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.619" height="20.242" viewBox="0 0 11.619 20.242">
                <path
                  id="Arrow-_R"
                  data-name="Arrow- R"
                  d="M-18342.2-15613.723l-8,8,8,8"
                  transform="translate(18351.697 15615.844)"
                  fill="none"
                  stroke="#ececee"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="create-account w-full">
          <RequestSignupStepOne v-if="step === 1" @change-step="changeStep" />
          <RequestSignupStepTwo v-else-if="step === 2" :ding="ding" @change-step="changeStep" />
          <RequestSignupStepThree v-else-if="step === 3" @change-step="changeStep" />
        </div>
      </div>
      <div class="border-account absolute h-32  rounded-t-none  z-10 bg-gradient-to-r from-[#EC4EAE] to-[#40AAE2]  mx-auto" />
    </div>
  </div>
</template>

<script setup>
import { submitForm } from '@formkit/core'

const step = ref(1)
const ding = ref(false)

const goToStep = (id) => {
  if (step.value === 1 && id > 1) {
    submitForm('stepOne')
  } else if (step.value === 2 && id === 1) {
    step.value = 1
  } else if (step.value === 2 && id === 3) {
    ding.value = true
    setTimeout(() => {
      ding.value = false
    }, 250)
  } else if (step.value === 3) {
    step.value = id
  }
}

const changeStep = (id) => {
  step.value = id
}
</script>
