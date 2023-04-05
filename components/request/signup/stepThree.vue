<template>
  <div class="form-start">
    <p class="create-account-p text-[24px] text-[#2C2D2E] font-bold">
      شرکت خود را معرفی کنید
    </p>
    <div class="row h-100 pb-5">
      <div class="col-xxl-6 col-12 flex flex-col justify-between">
        <div>
          <FormKit
            id="stepThree"
            v-model="formData"
            type="form"
            :actions="false"
            form-class="pt-[38px]"
            message-class="hidden"
            @submit="submitHandler"
          >
            <FormKit
              type="text"
              name="company_name"
              label="نام شرکت"
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
              placeholder="نام شرکت"
              message-class="form-error"
              validation="required"
            />
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
            <FormKit
              :type="dropDownForm"
              name="employee"
              label="چند نفر هستید"
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
              :items="employeeDrop"
              validation="required"
            />
          </Formkit>
        </div>
        <div class="flex items-center pt-5" style="column-gap: 1rem;">
          <div v-if="loading" class="btn-demo-outline" @click="submitFormHandler">
            <SvgLoading />
          </div>
          <div v-else class="cursor-pointer btn-demo-fill pink-btn" @click="submitFormHandler">
            ثبت نهایی
          </div>
          <div class="cursor-pointer btn-demo-outline white-btn" @click="emit('changeStep', 2)">
            قبلی
          </div>
        </div>
      </div>
      <div class="col-xxl-6 d-xxl-block d-none" />
    </div>
  </div>
</template>

<script setup>
import { submitForm } from '@formkit/core'
import { createInput } from '@formkit/vue'
import dropDown from '@/formKitCustomInput/dropDown.vue'

const emit = defineEmits(['changeStep'])

const dropDownForm = createInput(dropDown, {
  props: ['items']
})

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

const { data: employeeData, pending: employeePending } = useLazyAsyncData('get-employee', () => apiRequest('get', getCompanyEmployee()), {
  initialCache: false
})
const employeeDrop = ref([])
watch(employeePending, (payload) => {
  if (!payload) {
    employeeData.value.results.forEach((item) => {
      employeeDrop.value.push({ title: item.name, id: item.id })
    })
  }
})

const storeSignup = useStoreSignup()
const formData = ref(null)
const loading = ref(false)

const submitFormHandler = () => {
  submitForm('stepThree')
}

const submitHandler = () => {
  loading.value = true

  storeSignup.register.company_name = formData.value.company_name
  storeSignup.register.company_type = formData.value.company_type
  storeSignup.register.employee = formData.value.employee
  storeSignup.register.request = useRoute().params.id

  apiRequest('post', sendSignup(), storeSignup.register)
    .then(() => {
      useToast().success('ثبت نام با موفقیت انجام شد')
    })
    .catch(() => {
      useToast().error('درخواست شما معتبر نیست')
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
