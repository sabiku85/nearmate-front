import { defineComponent, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { f as formatDate } from './chat-KjjO50wx.mjs';
import { u as useActivitiesStore, a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
import { A as AppPrimaryButton, a as AppBaseButton } from './AppPrimaryButton-BEBmDIAY.mjs';
import { m as useRoute } from './server.mjs';
import 'pinia';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "AppSecondaryButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppBaseButton, mergeProps({ class: "border border-neutral-200 bg-white text-neutral-700 hover:border-primary-200 hover:text-primary-700" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppSecondaryButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppSecondaryButton = Object.assign(_sfc_main$2, { __name: "LayoutAppSecondaryButton" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ActivityTagList",
  __ssrInlineRender: true,
  props: {
    tags: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(`<span class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/activity/ActivityTagList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ActivityTagList = Object.assign(_sfc_main$1, { __name: "ActivityTagList" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const activities = useActivitiesStore();
    const invitationsStore = useInvitationsStore();
    const activity = computed(
      () => activities.items.find((item) => item.id === route.params.id)
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(activity)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "surface-card space-y-7 p-6" }, _attrs))}>`);
        _push(ssrRenderComponent(ActivityTagList, {
          tags: unref(activity).tags
        }, null, _parent));
        _push(`<h1 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-neutral-900">${ssrInterpolate(unref(activity).title)}</h1><p class="mt-3 text-neutral-600">${ssrInterpolate(unref(activity).description)}</p><div class="mt-6 grid gap-4 text-sm text-neutral-500 sm:grid-cols-2"><div class="soft-card p-4">Termin: ${ssrInterpolate(unref(formatDate)(unref(activity).date))}</div><div class="soft-card p-4">Miejsce: ${ssrInterpolate(unref(activity).location)}</div><div class="soft-card p-4">Twórca: ${ssrInterpolate(unref(activity).creator.name)}</div><div class="soft-card p-4"> Uczestnicy: ${ssrInterpolate(unref(activity).participantsCount)}</div></div><div class="mt-6 flex flex-wrap gap-2">`);
        _push(ssrRenderComponent(AppPrimaryButton, {
          disabled: unref(activity).isJoined,
          onClick: ($event) => unref(activities).joinActivity(unref(activity).id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(activity).isJoined ? "Dołączono" : "Dołącz do aktywności")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(activity).isJoined ? "Dołączono" : "Dołącz do aktywności"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(AppSecondaryButton, {
          onClick: ($event) => unref(invitationsStore).sendToActivity(unref(activity).id)
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
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activities/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-PETt5ula.mjs.map
