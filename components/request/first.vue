<template>
  <div class="form-start flex flex-col justify-between">
    <div>
      <div class="text-[24px] text-[#2C2D2E] font-bold">
        <h2>
          رایگان شروع کنید
        </h2>
      </div>

      <form action="" class="pt-[38px] ">
        <div class="">
          <label for="phone" class="form-label">
            شماره همراه
            <span>*</span>
          </label>
          <input id="phone" type="text" class="form-control" placeholder="+98 --- --- ---">
        </div>
        <div class="">
          <label for="email" class="form-label">
            ایمیل
            <span>*</span>
          </label>
          <input id="email" type="email" class="form-control" placeholder="Sample@gmail.com">
        </div>
        <div class="">
          <label for="company" class="form-label">
            نام شرکت
            <span>*</span>
          </label>
          <input id="company" type="text" class="form-control" placeholder="نام شرکت خود را وارد کنید">
        </div>
        <div class="pt-[34px]">
          <NuxtLink to="/request-demo-step-2">
            <button class="btn-md pink-btn">
              ارسال درخواست
            </button>
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const formData = ref(null)

const submitHandler = () => {
  console.log(formData.value)
}
</script>
