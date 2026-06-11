import { k as useAuthStore, h as _sfc_main$e, _ as __nuxt_component_0$1, n as navigateTo } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useOnboardingStore } from './onboarding-CtNdTPgR.mjs';
import { A as AppPrimaryButton } from './AppPrimaryButton-BEBmDIAY.mjs';
import { O as OnboardingProgress } from './OnboardingProgress-BuoekJwB.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-3",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const onboarding = useOnboardingStore();
    function skip() {
      auth.skipOnboarding();
      onboarding.skip();
      navigateTo("/");
    }
    function finish() {
      auth.updateUser({
        city: onboarding.location.city,
        age: onboarding.location.ageRange[0],
        bio: onboarding.profile.bio || auth.user?.bio || "",
        name: onboarding.profile.name || auth.user?.name || ""
      });
      auth.completeOnboarding();
      onboarding.saveStep3();
      navigateTo("/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mobile-app-frame w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(OnboardingProgress, {
        step: 3,
        onSkip: skip
      }, null, _parent));
      _push(`<div class="space-y-6"><div class="mb-6 mt-8"><p class="screen-title font-semibold text-base">Prawie gotowe!</p><p class="mt-1 font-light text-sm text-neutral-400"> Jeszcze chwila i uzupełnisz swoje konto. W każdej chwili będziesz mógł zmienić dane. </p></div><div><label class="field-label">Lokalizacja</label><input${ssrRenderAttr("value", unref(onboarding).location.city)} class="field-input" placeholder="Wybierz lokalizację"></div><div class="inline-flex rounded-2xl gap-x-2 border border-primary-100 bg-primary-50/60 p-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:heart",
        class: "size-6"
      }, null, _parent));
      _push(`<div class="mt-0.5 text-sm text-neutral-500"> Dzięki kilku informacjom dobierzemy osoby i aktywności dopasowane do Ciebie. </div></div><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/onboarding/step-2",
        class: "base-btn secondary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cofnij `);
          } else {
            return [
              createTextVNode(" Cofnij ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppPrimaryButton, {
        class: "my-4",
        onClick: finish
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Utwórz profil `);
          } else {
            return [
              createTextVNode(" Utwórz profil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-3-DL7zpg2z.mjs.map
