import { B as defineNuxtRouteMiddleware, k as useAuthStore, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'xss';
import 'ipx';
import 'pinia';
import '@pinia/colada';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const auth = defineNuxtRouteMiddleware(() => {
  const auth2 = useAuthStore();
  if (!auth2.isAuthenticated) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-Bvhh0Zo5.mjs.map
