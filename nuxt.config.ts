// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxtjs/html-validator',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@vite-pwa/nuxt',
    'dayjs-nuxt',
    'nuxt-security'
  ],
  vite: {
    optimizeDeps: {
      include: [
        "dayjs", // CJS
        "dayjs/plugin/updateLocale", // CJS
        "dayjs/plugin/relativeTime", // CJS
        "dayjs/plugin/utc", // CJS
        "zod",
      ],
    },
  },
  alias: {
    dayjs: "dayjs",
  },
  googleFonts: {
    families: {
      "Lexend Deca": [300, 400, 500, 600, 700],
    },
  },
  app: {
    head: {
      title: "nearMate",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "nearMate Application" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
})