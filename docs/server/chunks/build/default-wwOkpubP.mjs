import { _ as __nuxt_component_0 } from './UserCard-65ovm3tU.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { b as useDiscoveryStore, a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
import { _ as __nuxt_component_0$1, h as _sfc_main$e, m as useRoute } from './server.mjs';
import { u as useChatStore } from './chat-KjjO50wx.mjs';
import { A as AppLogo } from './AppLogo-0z9wBlM7.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './AppPrimaryButton-BEBmDIAY.mjs';
import 'pinia';
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
import '@pinia/colada';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const chatStore = useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$e;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur" }, _attrs))}><div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(AppLogo, null, null, _parent));
      _push(`<div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chat",
        class: "relative flex size-9 items-center justify-center rounded-full text-neutral-900 transition hover:text-primary-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:bell",
              class: "size-5"
            }, null, _parent2, _scopeId));
            if (unref(chatStore).unreadTotal) {
              _push2(`<span class="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary-600"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "lucide:bell",
                class: "size-5"
              }),
              unref(chatStore).unreadTotal ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute right-1.5 top-1.5 size-2 rounded-full bg-primary-600"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppHeader = Object.assign(_sfc_main$2, { __name: "LayoutAppHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppBottomNav",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const chatStore = useChatStore();
    const links = [
      { label: "", to: "/", icon: "lucide:home" },
      { label: "", to: "/activities", icon: "lucide:calendar-1" },
      { label: "", to: "/people", icon: "lucide:plus" },
      { label: "", to: "/chat", icon: "lucide:message-circle-more" },
      { label: "", to: "/profile", icon: "lucide:user" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$e;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-full items-end justify-between rounded-t-[24px] px-3 bg-[#EEE9FF]/45 md:hidden" }, _attrs))} data-v-80ac800b><div class="absolute bottom-0 left-0 right-0 h-full bg-[#EEE9FF] cutout-container" data-v-80ac800b><svg width="0" height="0" style="${ssrRenderStyle({ "position": "absolute" })}" data-v-80ac800b><defs data-v-80ac800b><clipPath id="smooth-cutout" clipPathUnits="objectBoundingBox" data-v-80ac800b><path d="M 0,0 
               L 0.38,0 
               C 0.47,0 0.42,0.63 0.5,0.63 
               S 0.54,0 0.62,0 
               L 1,0 1,1 0,1 Z" data-v-80ac800b></path></clipPath></defs></svg></div><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: ["nav-link relative flex-1", unref(route).path === link.to ? "nav-link-active" : ""]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${ssrRenderClass([
                link.to === "/people" ? "bg-primary-600 text-white shadow-[2px_10px_18px_0px_rgba(95,51,225,0.49)] -translate-y-5" : "",
                "flex size-10 items-center justify-center rounded-full"
              ])}" data-v-80ac800b${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: "text-2xl"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
              if (link.label) {
                _push2(`<span data-v-80ac800b${_scopeId}>${ssrInterpolate(link.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (link.to === "/chat" && unref(chatStore).unreadTotal) {
                _push2(`<span class="absolute right-3 top-1 flex size-4 items-center justify-center rounded-full bg-primary-600 text-[9px] text-white" data-v-80ac800b${_scopeId}>${ssrInterpolate(unref(chatStore).unreadTotal)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("span", {
                  class: [
                    "flex size-10 items-center justify-center rounded-full",
                    link.to === "/people" ? "bg-primary-600 text-white shadow-[2px_10px_18px_0px_rgba(95,51,225,0.49)] -translate-y-5" : ""
                  ]
                }, [
                  createVNode(_component_UIcon, {
                    name: link.icon,
                    class: "text-2xl"
                  }, null, 8, ["name"])
                ], 2),
                link.label ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(link.label), 1)) : createCommentVNode("", true),
                link.to === "/chat" && unref(chatStore).unreadTotal ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "absolute right-3 top-1 flex size-4 items-center justify-center rounded-full bg-primary-600 text-[9px] text-white"
                }, toDisplayString(unref(chatStore).unreadTotal), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppBottomNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppBottomNav = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-80ac800b"]]), { __name: "LayoutAppBottomNav" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const discoveryStore = useDiscoveryStore();
    const invitationsStore = useInvitationsStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-shell pb-28 md:pb-10" }, _attrs))}><div class="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<div class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px] pt-16"><main class="mobile-app-frame w-full min-w-0 max-w-none lg:mx-0 lg:max-w-none">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><aside class="hidden lg:block"><div class="surface-card sticky top-6 p-5"><h2 class="text-xl font-semibold tracking-[-0.03em] text-neutral-900"> Poznaj nowych znajomych </h2><p class="mt-2 text-sm text-neutral-500"> Szybki podgląd dopasowań z najbliższego otoczenia. </p><div class="mt-4 space-y-3"><!--[-->`);
      ssrRenderList(unref(discoveryStore).filteredPeople.slice(0, 3), (person) => {
        _push(ssrRenderComponent(_component_UserCard, {
          key: person.id,
          user: person,
          onInvite: ($event) => unref(invitationsStore).sendToUser($event)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></aside></div></div>`);
      _push(ssrRenderComponent(AppBottomNav, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-wwOkpubP.mjs.map
