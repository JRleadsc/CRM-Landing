<template>
  <FormKit
    v-model="formData"
    type="form"
    :actions="false"
    message-class="hidden"
    @submit="submitHandler"
  >
    <FormKit
      type="text"
      name="token"
      label="کد ارسال شده *"
      label-class="form-label"
      input-class="form-control ltr"
      placeholder="_______"
      message-class="text-xs -mt-4 mr-5 mb-2 text-red-500"
      validation="required"
      :validation-messages="{
        required: 'شماره همراه را وارد کنید'
      }"
    />

    <div v-if="loading" class="btn-md pink-btn">
      <SvgLoading class="h-8 w-auto text-white" />
    </div>
    <FormKit v-else type="submit" input-class="btn-md pink-btn">
      <span class="text-white">ارسال درخواست</span>
    </FormKit>
  </FormKit>
</template>

<script setup>
const formData = ref(null)
const loading = ref(false)

const submitHandler = () => {
  console.log(formData.value)
  useRouter().push('/auth/signup')
}
</script>
