import { h as _sfc_main$e, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { i as initials } from './chat-KjjO50wx.mjs';
import { A as AppPrimaryButton } from './AppPrimaryButton-BEBmDIAY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserCard",
  __ssrInlineRender: true,
  props: {
    user: {},
    compact: { type: Boolean, default: false }
  },
  emits: ["invite"],
  setup(__props) {
    function formatRating(rating) {
      return (rating ?? 4.9).toFixed(1).replace(".", ",");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "soft-card p-4" }, _attrs))}><div class="flex items-start gap-3"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-700">${ssrInterpolate(unref(initials)(__props.user.name))}</div><div class="min-w-0 flex-1"><div class="flex items-start justify-between gap-3"><div><p class="font-semibold text-neutral-900">${ssrInterpolate(__props.user.name)}, ${ssrInterpolate(__props.user.age)} lat </p><div class="mt-1 flex items-center gap-1 text-xs text-neutral-500">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:map-pin",
        class: "size-3.5 shrink-0"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.user.distanceKm ? `${__props.user.distanceKm} km` : __props.user.city)}</span></div></div><span class="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-neutral-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:star",
        class: "size-3.5 text-primary-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(formatRating(__props.user.rating))}</span></div>`);
      if (__props.compact && __props.user.compatibilityScore) {
        _push(`<span class="status-pill mt-3 bg-primary-50/60">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "lucide:heart",
          class: "size-3"
        }, null, _parent));
        _push(` ${ssrInterpolate(__props.user.compatibilityScore)}% dopasowanie </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="mt-3 text-sm leading-relaxed text-neutral-600">${ssrInterpolate(__props.user.bio)}</p><div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(__props.user.interests.slice(0, 3), (interest) => {
        _push(`<span class="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600">${ssrInterpolate(interest.name)}</span>`);
      });
      _push(`<!--]--></div>`);
      if (__props.compact && __props.user.mutualFriendsCount) {
        _push(`<p class="mt-3 text-xs text-neutral-400">${ssrInterpolate(__props.user.mutualFriendsCount)} wspólnych znajomych </p>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.compact) {
        _push(`<div class="mt-4 flex gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/profile/${__props.user.id}`,
          class: "base-btn secondary-btn flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Profil `);
            } else {
              return [
                createTextVNode(" Profil ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AppPrimaryButton, {
          class: "flex-1 px-3 py-2 text-xs",
          onClick: ($event) => _ctx.$emit("invite", __props.user.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Wyślij zaproszenie `);
            } else {
              return [
                createTextVNode(" Wyślij zaproszenie ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.compact) {
        _push(ssrRenderComponent(AppPrimaryButton, {
          class: "mt-4 gap-2",
          onClick: ($event) => _ctx.$emit("invite", __props.user.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "lucide:heart",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(` Wyślij zaproszenie `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "lucide:heart",
                  class: "size-4"
                }),
                createTextVNode(" Wyślij zaproszenie ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/UserCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "UserCard" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=UserCard-65ovm3tU.mjs.map
