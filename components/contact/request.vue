<template>
  <section class="contact-us-form">
    <div class="container relative">
      <div class="row">
        <div class="col-12">
          <div class="">
            <h3 class="font-bold text-[24px] text-[#484F79]">
              اکنون به ما پیام دهید
            </h3>
          </div>
        </div>
      </div>
      <div class="form-start w-100 shadow-none pt-3 px-0 h-auto">
        <FormKit
          id="login-form"
          v-model="formData"
          type="form"
          :actions="false"
          form-class="pt-[38px]"
          message-class="hidden"
          @submit="submitHandler"
        >
          <div class="flex gap-6">
            <div class="w-full">
              <FormKit
                type="text"
                name="mobile"
                label="نام و نام خانوادگی *"
                label-class="form-label"
                input-class="form-control"
                placeholder="نام شما"
                message-class="text-xs -mt-4 mr-5 mb-2 text-red-500"
                validation="required"
                :validation-messages="{
                  required: 'نام خود را وارد کنید'
                }"
              />
            </div>

            <div class="w-full">
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
            </div>
          </div>

          <FormKit
            type="textarea"
            name="message"
            label="متن پیام *"
            rows="8"
            label-class="form-label"
            input-class="form-control"
            message-class="text-xs mt-2 mr-5 mb-2 text-red-500"
            validation="required"
            :validation-messages="{
              required: 'متن پیام را وارد کنید'
            }"
          />
          <div class="pt-[34px]">
            <div v-if="loading" class="btn-md pink-btn">
              <SvgLoading class="h-8 w-auto text-white" />
            </div>
            <FormKit v-else type="submit" input-class="btn-md pink-btn">
              <span class="text-white">ارسال پیام</span>
            </FormKit>
          </div>
        </Formkit>
      </div>
    </div>
  </section>
</template>

<script setup>
const formData = ref({
  mobile: ''
})
const loading = ref(false)

const submitHandler = () => {
  loading.value = true
  apiRequest('post', sendRequestContact(), formData.value)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.error(e)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
