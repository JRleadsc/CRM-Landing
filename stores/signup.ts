import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreSignup = defineStore('signup', {
  state: () => ({
    register: {
      first_name: '',
      last_name: '',
      company_name: '',
      password: '',
      business: '',
      employee: '',
      company_type: '',
      request: ''
    }
  }),
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreSignup, import.meta.hot))
}
