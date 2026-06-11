// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // debug: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/a11y",
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
    "@nuxtjs/html-validator",
    "@pinia/nuxt",
    "@pinia/colada-nuxt",
    "@vite-pwa/nuxt",
    "dayjs-nuxt",
    "nuxt-security",
  ],
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "-mode",
  },
  vite: {
    optimizeDeps: {
      include: [
        "nuxt > @nuxt/devtools > @vitejs/devtools-kit/client",
        "nuxt > @nuxt/devtools > @vitejs/devtools/client/inject",
        "nuxt > @nuxt/devtools > @vue/devtools-core",
        "nuxt > @nuxt/devtools > @vue/devtools-kit",
        "nuxt > @nuxt/devtools > error-stack-parser-es",
        "nuxt > @nuxt/devtools > vite-plugin-vue-tracer/client/overlay",
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
});
