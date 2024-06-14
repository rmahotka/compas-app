// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: ["@nuxtjs/google-fonts"],
   googleFonts: {
    'PT Sans':  {
      wght: [400, 700],
    }
  }
})