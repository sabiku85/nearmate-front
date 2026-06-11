import { B as defineNuxtRouteMiddleware, k as useAuthStore, n as navigateTo } from './server.mjs';
import { u as useOnboardingStore } from './onboarding-CtNdTPgR.mjs';
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

const onboarding = defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();
  const onboarding2 = useOnboardingStore();
  if (auth.isAuthenticated && !auth.isOnboardingComplete) {
    return navigateTo(`/onboarding/step-${onboarding2.lastCompletedStep + 1}`);
  }
});

export { onboarding as default };
//# sourceMappingURL=onboarding-BiR2Cc_C.mjs.map
