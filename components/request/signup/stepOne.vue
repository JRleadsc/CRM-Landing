<template>
  <div class="form-start">
    <p class="create-account-p text-[24px] text-[#2C2D2E] font-bold">
      حساب کاربری برای خود بسازید
    </p>
    <div class="row">
      <div class="col-xxl-6 col-12">
        <FormKit
          id="stepOne"
          v-model="formData"
          type="form"
          :actions="false"
          form-class="pt-[38px]"
          message-class="hidden"
          @submit="submitHandler"
        >
          <div class="row create-account-input">
            <div class="col-lg-6 col-12">
              <FormKit
                type="text"
                name="first_name"
                label="نام"
                :sections-schema="{
                  label: {
                    children: [
                      '$label',
                      {
                        $el: 'span',
                        children: '*'
                      }
                    ]
                  }
                }"
                placeholder="نام شما"
                label-class="form-label"
                input-class="form-control"
                message-class="form-error"
                validation="required"
              />
            </div>
            <div class="col-lg-6 col-12">
              <FormKit
                type="text"
                name="last_name"
                label="نام خانوادگی"
                :sections-schema="{
                  label: {
                    children: [
                      '$label',
                      {
                        $el: 'span',
                        children: '*'
                      }
                    ]
                  }
                }"
                label-class="form-label"
                input-class="form-control"
                placeholder="نام خانوادگی شما"
                message-class="form-error"
                validation="required"
              />
            </div>
          </div>
          <FormKit
            type="password"
            name="password"
            label="رمز عبور"
            :sections-schema="{
              label: {
                children: [
                  '$label',
                  {
                    $el: 'span',
                    children: '*'
                  }
                ]
              }
            }"
            label-class="form-label"
            input-class="form-control"
            message-class="form-error"
            validation="required|passValidator"
            :validation-messages="{
              passValidator: ' '
            }"
          />
          <div v-if="passCheck.length > 0">
            <div>
              <div class="text-[9px] mr-4 text-red-600">
                رمز عبور می‌بایست:
              </div>

              <div class="text-[9px] mr-4 text-red-600">
                <div v-for="(error, index) in passCheck" :key="index">
                  <div v-if="error.validation === 'min'">
                    حداقل 8 کارکتر باشد
                  </div>
                  <div v-else-if="error.validation === 'uppercase'">
                    شامل حروف بزرگ باشد
                  </div>
                  <div v-else-if="error.validation === 'lowercase'">
                    شامل حروف کوچک باشد
                  </div>
                  <div v-else-if="error.validation === 'digits'">
                    شامل اعداد باشد
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FormKit
            type="password"
            name="password_confirm"
            label="تکرار رمز عبور"
            :sections-schema="{
              label: {
                children: [
                  '$label',
                  {
                    $el: 'span',
                    children: '*'
                  }
                ]
              }
            }"
            label-class="form-label"
            input-class="form-control"
            message-class="form-error"
            validation="required|confirm"
          />
        </Formkit>
      </div>
      <div class="col-xxl-6 d-xxl-block d-none" />
      <div class="col-12">
        <div class="privacy">
          <p>
            با ایجاد یک حساب کاربری با
            <a href="">قوانین و مقررات</a>
            و
            <a href="">حریم خصوصی</a>
            لینک جینیس موافقت می کنید.
          </p>
        </div>
      </div>
      <div class="col-12">
        <div class="pt-[34px]">
          <button class="btn-md pink-btn" @click="submitFormHandler">
            مرحله بعد
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { submitForm } from '@formkit/core'

const emit = defineEmits(['changeStep'])

const passCheck = ref([])
const formData = ref({
  password: ''
})

watch(() => formData.value.password, (payload) => {
  passCheck.value = passValidatorWithDeatil(payload)
})

const submitFormHandler = () => {
  submitForm('stepOne')
}

const submitHandler = () => {
  useStoreSignup().register.first_name = formData.value.first_name
  useStoreSignup().register.last_name = formData.value.last_name
  useStoreSignup().register.password = formData.value.password

  emit('changeStep', 2)
}
</script>
