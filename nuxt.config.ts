import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["vuetify/styles"],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  modules: [
    // @ts-ignore
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins?.push(vuetify())
      )
    },
  ],
})
