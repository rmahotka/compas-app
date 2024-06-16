// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: ["@nuxt/fonts", "vue3-carousel-nuxt"],
  fonts: {
    families: [{ name: "PT Sans", provider: "google" }],
  },
});
