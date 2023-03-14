<template>
  <form action="" class="pt-[38px] ">
    <div class="">
      <label for="token" class="form-label">
        کد ارسال شده
        <span>*</span>
      </label>
      <input id="token" name="token" type="text" class="form-control ltr" placeholder="______">
    </div>
    <div class="pt-[34px]">
      <NuxtLink to="/auth/step-2">
        <button class="btn-md pink-btn">
          تایید کد
        </button>
      </NuxtLink>
    </div>
  </form>
</template>

<script setup>
const formData = ref(null)

const submitHandler = () => {
  console.log(formData.value)
}
</script>
