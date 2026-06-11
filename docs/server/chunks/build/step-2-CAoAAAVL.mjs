import { O as OnboardingProgress } from './OnboardingProgress-BuoekJwB.mjs';
import { k as useAuthStore, g as _sfc_main$8, _ as __nuxt_component_0$1, n as navigateTo, h as _sfc_main$e } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useOnboardingStore } from './onboarding-CtNdTPgR.mjs';
import { A as AppPrimaryButton } from './AppPrimaryButton-BEBmDIAY.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InterestChip",
  __ssrInlineRender: true,
  props: {
    label: {},
    selected: { type: Boolean },
    icon: {}
  },
  emits: ["toggle"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["flex items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition", __props.selected ? "border-primary-500 bg-primary-50 text-primary-700" : "border-neutral-200 bg-white text-neutral-700"]
      }, _attrs))}><span class="flex size-7 items-center justify-center rounded-full bg-white/90 text-primary-500">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.icon ?? "lucide:star",
        class: "text-sm"
      }, null, _parent));
      _push(`</span><span>${ssrInterpolate(__props.label)}</span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/onboarding/InterestChip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const InterestChip = Object.assign(_sfc_main$1, { __name: "OnboardingInterestChip" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-2",
  __ssrInlineRender: true,
  setup(__props) {
    const onboarding = useOnboardingStore();
    const auth = useAuthStore();
    onboarding.loadCategoryInterests(onboarding.interests.selectedCategory);
    const visibleInterests = computed(
      () => onboarding.interests.categoryCache[onboarding.interests.selectedCategory] ?? []
    );
    function skip() {
      auth.skipOnboarding();
      onboarding.skip();
      navigateTo("/");
    }
    function next() {
      onboarding.saveStep2();
      navigateTo("/onboarding/step-3");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OnboardingProgress = OnboardingProgress;
      const _component_UButton = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mobile-app-frame w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_OnboardingProgress, {
        step: 2,
        onSkip: skip
      }, null, _parent));
      _push(`<div class="space-y-4"><div class="mb-6 mt-8"><p class="screen-title font-semibold text-base"> Wybierz zainteresowania </p><p class="mt-1 font-light text-sm text-neutral-400"> Wybierz swoje zainteresowania z listy </p></div><div><label class="field-label">Wybierz</label><select class="field-input"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(onboarding).interests.selectedCategory) ? ssrLooseContain(unref(onboarding).interests.selectedCategory, "") : ssrLooseEqual(unref(onboarding).interests.selectedCategory, "")) ? " selected" : ""}> Wybierz kategorię </option><!--[-->`);
      ssrRenderList(unref(onboarding).interests.categories, (category) => {
        _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(onboarding).interests.selectedCategory) ? ssrLooseContain(unref(onboarding).interests.selectedCategory, category) : ssrLooseEqual(unref(onboarding).interests.selectedCategory, category)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
      });
      _push(`<!--]--></select></div><div class="grid gap-2"><!--[-->`);
      ssrRenderList(unref(visibleInterests), (interest) => {
        _push(ssrRenderComponent(InterestChip, {
          key: interest.id,
          label: interest.name,
          icon: interest.icon,
          selected: unref(onboarding).interests.selectedIds.includes(interest.id),
          onToggle: ($event) => unref(onboarding).toggleInterest(interest.id)
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="w-full flex justify-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        variant: "link",
        class: "text-xs font-normal text-neutral-400 hover:text-neutral-500 hover:cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pokaż więcej `);
          } else {
            return [
              createTextVNode(" Pokaż więcej ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/onboarding/step-1",
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
        type: "button",
        class: "my-4",
        onClick: next
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontynuuj `);
          } else {
            return [
              createTextVNode(" Kontynuuj ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/step-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-2-CAoAAAVL.mjs.map
