import { defineComponent, computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { i as initials } from './chat-KjjO50wx.mjs';
import { m as useRoute, k as useAuthStore } from './server.mjs';
import { b as useDiscoveryStore, a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
import { A as AppPrimaryButton } from './AppPrimaryButton-BEBmDIAY.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const auth = useAuthStore();
    const discovery = useDiscoveryStore();
    const invitationsStore = useInvitationsStore();
    const person = computed(
      () => discovery.people.find((item) => item.id === route.params.id)
    );
    const sharedInterests = computed(
      () => (person.value?.interests ?? []).filter(
        (interest) => auth.user?.interests.some((own) => own.id === interest.id)
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(person)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "surface-card p-6" }, _attrs))}><div class="flex flex-col gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between"><div class="flex items-center gap-4"><div class="flex size-20 items-center justify-center rounded-full bg-neutral-100 text-xl font-bold text-neutral-700">${ssrInterpolate(unref(initials)(unref(person).name))}</div><div><h1 class="text-3xl font-semibold tracking-[-0.04em] text-neutral-900">${ssrInterpolate(unref(person).name)}</h1><p class="mt-1 text-neutral-500">${ssrInterpolate(unref(person).city)} · ${ssrInterpolate(unref(person).age)} lat </p></div></div>`);
        _push(ssrRenderComponent(AppPrimaryButton, {
          onClick: ($event) => unref(invitationsStore).sendToUser(unref(person).id)
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
        _push(`</div><div class="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]"><div><h2 class="text-lg font-semibold text-neutral-900">O mnie</h2><p class="mt-2 text-neutral-600">${ssrInterpolate(unref(person).bio)}</p><h2 class="mt-6 text-lg font-semibold text-neutral-900"> Wspólne zainteresowania </h2><div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(sharedInterests), (interest) => {
          _push(`<span class="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">${ssrInterpolate(interest.name)}</span>`);
        });
        _push(`<!--]--></div></div><div class="soft-card p-5"><p class="text-sm text-neutral-500">Dopasowanie</p><p class="mt-2 text-4xl font-black tracking-[-0.05em] text-primary-700">${ssrInterpolate(unref(person).compatibilityScore)}% </p><p class="mt-3 text-sm text-neutral-500"> Profil pasuje do Twoich aktywności, lokalizacji i wspólnych zainteresowań. </p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Da0XGBY-.mjs.map
