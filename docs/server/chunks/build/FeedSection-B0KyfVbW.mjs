import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FeedSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    moreRoute: {},
    unreadTotal: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2"><h2 class="text-xl font-bold text-neutral-900">${ssrInterpolate(__props.title)}</h2><span class="inline-flex size-5 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-normal text-neutral-900">${ssrInterpolate(__props.unreadTotal || 0)}</span></div>`);
      if (__props.moreRoute) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.moreRoute,
          class: "text-sm font-semibold text-neutral-800 transition hover:text-primary-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Więcej `);
            } else {
              return [
                createTextVNode(" Więcej ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feed/FeedSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "FeedSection" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=FeedSection-B0KyfVbW.mjs.map
