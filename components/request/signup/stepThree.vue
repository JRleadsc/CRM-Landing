
import { SvgArrowDown } from '~~/.nuxt/components';

<template>
  <div class="form-start">
    <p class="create-account-p text-[24px] text-[#2C2D2E] font-bold">
      شرکت خود را معرفی کنید
    </p>
    <div class="row h-100 pb-5">
      <div class="col-xxl-6 col-12 flex flex-col justify-between">
        <div>
          <form action="" class="pt-[38px] ">
            <div class="">
              <label for="company" class="form-label">
                نام شرکت یا برند
                <span>*</span>
              </label>
              <input id="company" type="text" class="form-control" placeholder="Name">
            </div>
            <FormKit
              :type="dropDownForm"
              name="company_type"
              label="نوع شرکت"
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
              :items="typeDrop"
              validation="required"
            />
            <div class="">
              <label for="company" class="form-label">
                نوع شرکت
                <span>*</span>
              </label>
              <div id="dropBox" class="dropdown flex items-center position-relative" @click="type = !type">
                <p id="dropBoxText" class="ps-2">
                  انتخاب نمایید
                </p>
                <SvgArrowDown :class="{ 'rotate-180': type }" />

                <ul id="dropDownMenu" class="dropdown-menus animate__animated animate__fadeIn" :class="{ 'hidden': !type }">
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                </ul>
              </div>
            </div>
            <div class="">
              <label for="company" class="form-label">
                چند نفر هستید
                <span>*</span>
              </label>
              <div id="dropBox" class="dropdown flex items-center position-relative" @click="type = !type">
                <p id="dropBoxText" class="ps-2">
                  انتخاب نمایید
                </p>
                <SvgArrowDown :class="{ 'rotate-180': type }" />

                <ul id="dropDownMenu" class="dropdown-menus animate__animated animate__fadeIn" :class="{ 'hidden': !type }">
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                  <li class="dropdown-item flex items-center justify-between">
                    عنوان یک آیتم
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center pt-5" style="column-gap: 1rem;">
          <button type="submit" class="btn-demo-fill pink-btn">
            ثبت نهایی
          </button>
          <div class="cursor-pointer btn-demo-outline white-btn">
            قبلی
          </div>
        </div>
      </div>
      <div class="col-xxl-6 d-xxl-block d-none" />
    </div>
  </div>
</template>

<script setup>
import { createInput } from '@formkit/vue'
import dropDown from '@/formKitCustomInput/dropDown.vue'

const { data: typeData, pending: typePending } = useLazyAsyncData('get-company-type', () => apiRequest('get', getCompanyType()), {
  initialCache: false
})
const typeDrop = ref([])
watch(typePending, (payload) => {
  if (!payload) {
    typeData.value.results.forEach((item) => {
      typeDrop.value.push({ title: item.name, id: item.id })
    })
  }
})

const dropDownForm = createInput(dropDown, {
  props: ['items']
})
</script>
