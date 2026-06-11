import { m as useRoute, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './ActivityCard-DYNSPmBq.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useActivitiesStore, a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
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
import './Badge-B5y43hH3.mjs';
import './chat-KjjO50wx.mjs';
import './AppPrimaryButton-BEBmDIAY.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const activities = useActivitiesStore();
    const invitationsStore = useInvitationsStore();
    const tab = computed(() => String(route.query.tab || "upcoming"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ActivityCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "surface-card p-5 space-y-6 pt-16" }, _attrs))}><div class="mb-5 flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/activities?tab=upcoming",
        class: [
          "base-btn secondary-btn",
          unref(tab) === "upcoming" ? "border-primary-400! text-primary-700!" : ""
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nadchodzące`);
          } else {
            return [
              createTextVNode("Nadchodzące")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/activities?tab=new",
        class: ["base-btn secondary-btn", unref(tab) === "new" ? "border-primary-400! text-primary-700!" : ""]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nowe`);
          } else {
            return [
              createTextVNode("Nowe")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/activities?tab=mine",
        class: ["base-btn secondary-btn", unref(tab) === "mine" ? "border-primary-400! text-primary-700!" : ""]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Moje`);
          } else {
            return [
              createTextVNode("Moje")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(tab) === "new" ? unref(activities).newActivities : unref(tab) === "mine" ? unref(activities).mine : unref(activities).upcoming, (activity) => {
        _push(ssrRenderComponent(_component_ActivityCard, {
          key: activity.id,
          activity,
          variant: unref(tab) === "new" ? "new" : "upcoming",
          onJoin: unref(activities).joinActivity,
          onSendInvitation: ($event) => unref(invitationsStore).sendToActivity($event)
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DV_FeAu2.mjs.map
