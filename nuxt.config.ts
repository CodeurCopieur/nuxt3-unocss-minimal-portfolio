// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode'],
  unocss: {
    uno: true,
    preflight: true
  },
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
  devtools: { enabled: true }
})
