import { _ as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "inline-flex items-center gap-2 text-2xl font-black tracking-wider text-neutral-900"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>near<span class="text-[#7c1eb4]"${_scopeId}>Mate</span></span>`);
      } else {
        return [
          createVNode("span", null, [
            createTextVNode("near"),
            createVNode("span", { class: "text-[#7c1eb4]" }, "Mate")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLogo = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "LayoutAppLogo" });

export { AppLogo as A };
//# sourceMappingURL=AppLogo-0z9wBlM7.mjs.map
