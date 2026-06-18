# nearMate

- **Intro**:
  nearMate is a Nuxt 4 frontend for a social discovery app. It includes authentication, onboarding, activity browsing, invitations, chat, and profile flows. The current implementation uses local mock data, so you can run it without a backend.

- **Tech Stack**:
  Nuxt 4, Vue 3, TypeScript, Pinia, Nuxt UI, Tailwind CSS 4, Zod, Day.js, `@nuxt/image`, `@nuxt/icon`, `@vite-pwa/nuxt`, `nuxt-security`, `@nuxtjs/google-fonts`, `@nuxtjs/html-validator`, and `Vitest`.

- **Project Structure**:
  `app/` contains the application code, including pages, components, layouts, middleware, plugins, composables, and assets.
  `stores/` holds the Pinia stores for auth, activities, chat, discovery, invitations, and onboarding.
  `data/` contains the mock database used by the stores.
  `shared/` defines shared TypeScript types.
  `public/` stores static assets such as `favicon.ico` and `robots.txt`.
  `docs/` is the generated static output used for GitHub Pages deployment.
- **Getting Started**:
  - **Prerequisites:**
    Node.js 20+ and `pnpm` are recommended. This repository includes a `pnpm-lock.yaml`, so `pnpm` is the default package manager.

  - **Installation:**
    run `pnpm install`.

  - **Available Scripts:**
    `pnpm dev` starts the local dev server,
    `pnpm build` creates a production build,
    `pnpm preview` serves the production build locally,
    `pnpm generate` creates the static GitHub Pages output using `.env.gh`.

- **Development**:
  - Nuxt route middleware (`auth`, `guest`, `onboarding`) to control access,
  - Pinia stores for application state,
  - a mock data layer in `data/mockDb.ts`,
  - `useChatTransport` to simulate chat activity.
  - UI styling comes from Nuxt UI and Tailwind CSS,
  - `@nuxtjs/google-fonts` provides the Lexend Deca font,
  - `nuxt-security` adds security headers,
  - `@nuxtjs/html-validator` checks HTML output,
  - `@vite-pwa/nuxt` supports PWA behavior.
