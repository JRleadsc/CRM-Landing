import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification'

import '@/assets/css/toast.css'

const options = {
  position: 'bottom-left',
  maxToasts: 20,
  timeout: 20000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  bodyClassName: ['font-iran'],
  icon: false,
  rtl: true
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options)
})
