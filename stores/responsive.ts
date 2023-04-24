import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreResponsive = defineStore('responsive', {
  state: () => ({
    isMenuOpen: false
  }),
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreResponsive, import.meta.hot))
}
