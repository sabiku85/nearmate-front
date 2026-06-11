import { g as _sfc_main$8 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OnboardingProgress",
  __ssrInlineRender: true,
  props: {
    step: {},
    skipLabel: {}
  },
  emits: ["skip"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const percentage = computed(() => ({ 1: 33, 2: 67, 3: 96 })[props.step]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6 space-y-2" }, _attrs))}><div class="flex items-center justify-between gap-3 text-sm font-semibold text-neutral-500"><span>Krok ${ssrInterpolate(__props.step)} z 3</span><span>${ssrInterpolate(unref(percentage))}%</span></div><div class="h-2 rounded-full bg-neutral-100"><div class="h-2 rounded-full bg-linear-[118.35deg,#801AAF_2.88%,#542CCC_89.57%] transition-all" style="${ssrRenderStyle({ width: `${unref(percentage)}%` })}"></div></div><div class="flex justify-end">`);
      if (__props.step <= 3) {
        _push(ssrRenderComponent(_component_UButton, {
          type: "button",
          variant: "link",
          class: "text-xs font-normal text-neutral-400 hover:text-neutral-500 hover:cursor-pointer",
          onClick: ($event) => emit("skip")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.skipLabel ?? "Uzupełnij profil później")}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.skipLabel ?? "Uzupełnij profil później"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/onboarding/OnboardingProgress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OnboardingProgress = Object.assign(_sfc_main, { __name: "OnboardingProgress" });

export { OnboardingProgress as O };
//# sourceMappingURL=OnboardingProgress-BuoekJwB.mjs.map
