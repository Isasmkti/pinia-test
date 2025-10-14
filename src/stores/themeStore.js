import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    // state untuk menyimpan tema saat ini
  state: () => ({
    isDark: false
  }),
  //actions untuk mengubah tema
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
    }
  }
})
