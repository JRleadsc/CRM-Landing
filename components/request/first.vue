<template>
  <div class="form-start flex flex-col justify-between">
    <div>
      <div class="text-[24px] text-[#2C2D2E] font-bold">
        <h2>
          رایگان شروع کنید
        </h2>
      </div>

      <FormKit
        id="login-form"
        v-model="formData"
        type="form"
        :actions="false"
        form-class="pt-[38px]"
        message-class="hidden"
        @submit="submitHandler"
      >
        <FormKit
          type="text"
          name="mobile"
          label="شماره همراه *"
          label-class="form-label"
          input-class="form-control ltr"
          placeholder="0915_______"
          message-class="text-xs -mt-4 mr-5 mb-2 text-red-500"
          validation="required|mobileNumber"
          :validation-messages="{
            required: 'شماره همراه را وارد کنید',
            mobileNumber: 'شماره همراه وارد شده معتبر نیست'
          }"
        />

        <FormKit
          type="text"
          name="email"
          label="ایمیل *"
          label-class="form-label"
          input-class="form-control ltr"
          placeholder="sample@gmail.com"
          message-class="text-xs -mt-4 mr-5 mb-2 text-red-500"
          validation="required|email"
          :validation-messages="{
            required: 'ایمیل را وارد کنید',
            email: 'ایمیل وارد شده معتبر نیست'
          }"
        />

        <FormKit
          type="text"
          name="company"
          label="نام شرکت *"
          label-class="form-label"
          input-class="form-control"
          placeholder="نام شرکت خود را وارد کنید"
          message-class="text-xs -mt-4 mr-5 mb-2 text-red-500"
          validation="required"
          :validation-messages="{
            required: 'نام شرکت را وارد کنید'
          }"
        />
        <div class="pt-[34px]">
          <div v-if="loading" class="btn-md pink-btn">
            <SvgLoading class="h-8 w-auto text-white" />
          </div>
          <FormKit v-else type="submit" input-class="btn-md pink-btn">
            <span class="text-white">ارسال درخواست</span>
          </FormKit>
        </div>
      </Formkit>
    </div>
  </div>
</template>

<script setup>
import { phoneNumberNormalizer, digitsFaToEn, digitsArToEn } from '@persian-tools/persian-tools'

const formData = ref({
  mobile: ''
})
const loading = ref(false)

const submitHandler = () => {
  loading.value = true
  formData.value.mobile = digitsFaToEn(digitsArToEn(phoneNumberNormalizer(formData.value.mobile, '0')))
  apiRequest('post', sendRequestDemo(), formData.value)
    .then((res) => {
      console.log(res)
      useRouter().push('/auth/step-1')
    })
    .catch((e) => {
      console.error(e)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
