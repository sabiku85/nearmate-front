import { _ as __nuxt_component_1 } from './ActivityCard-DYNSPmBq.mjs';
import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { i as initials } from './chat-KjjO50wx.mjs';
import { u as useActivitiesStore, a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
import { k as useAuthStore } from './server.mjs';
import './Badge-B5y43hH3.mjs';
import './AppPrimaryButton-BEBmDIAY.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const activities = useActivitiesStore();
    const invitationsStore = useInvitationsStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActivityCard = __nuxt_component_1;
      if (unref(auth).user) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "surface-card p-6" }, _attrs))}><div class="flex flex-col items-center gap-4 border-b border-neutral-200 pb-6 text-center"><div class="flex size-24 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-700">${ssrInterpolate(unref(initials)(unref(auth).user.name))}</div><div><h1 class="text-3xl font-semibold tracking-[-0.04em] text-neutral-900">${ssrInterpolate(unref(auth).user.name)}</h1><p class="mt-2 text-neutral-500">${ssrInterpolate(unref(auth).user.city)} · ${ssrInterpolate(unref(auth).user.age)} lat</p></div></div><section class="mt-6"><h2 class="text-lg font-semibold text-neutral-900">O mnie</h2><p class="mt-2 text-neutral-600">${ssrInterpolate(unref(auth).user.bio)}</p></section><section class="mt-6"><h2 class="text-lg font-semibold text-neutral-900">Zainteresowania</h2><div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(auth).user.interests, (interest) => {
          _push(`<span class="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">${ssrInterpolate(interest.name)}</span>`);
        });
        _push(`<!--]--></div></section><section class="mt-6"><h2 class="text-lg font-semibold text-neutral-900">Moje aktywności</h2><div class="mt-3 space-y-3"><!--[-->`);
        ssrRenderList(unref(activities).mine, (activity) => {
          _push(ssrRenderComponent(_component_ActivityCard, {
            key: activity.id,
            activity,
            variant: "upcoming",
            onSendInvitation: ($event) => unref(invitationsStore).sendToActivity($event)
          }, null, _parent));
        });
        _push(`<!--]--></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DAgV7Eam.mjs.map
