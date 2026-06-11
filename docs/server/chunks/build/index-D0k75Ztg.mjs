import { h as _sfc_main$e, g as _sfc_main$8, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_0 } from './UserCard-65ovm3tU.mjs';
import { _ as __nuxt_component_0$1 } from './FeedSection-B0KyfVbW.mjs';
import { _ as __nuxt_component_2 } from './InvitationCard-Jrw3Xk2d.mjs';
import { _ as __nuxt_component_1 } from './ActivityCard-DYNSPmBq.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { b as useDiscoveryStore, a as useInvitationsStore, u as useActivitiesStore } from './invitations-CWH8zIgv.mjs';
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
import './chat-KjjO50wx.mjs';
import './AppPrimaryButton-BEBmDIAY.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Badge-B5y43hH3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const discovery = useDiscoveryStore();
    const invitationsStore = useInvitationsStore();
    const activities = useActivitiesStore();
    function accept(id) {
      const conversationId = invitationsStore.accept(id);
      if (conversationId) navigateTo(`/chat/${conversationId}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_UButton = _sfc_main$8;
      const _component_UserCard = __nuxt_component_0;
      const _component_FeedSection = __nuxt_component_0$1;
      const _component_InvitationCard = __nuxt_component_2;
      const _component_ActivityCard = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-7 pb-24" }, _attrs))}><div class="space-y-4"><div class="flex items-center gap-2"><h1 class="text-xl font-bold text-neutral-900"> Poznaj nowych znajomych </h1><span class="inline-flex size-5 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-normal text-neutral-900">${ssrInterpolate(unref(discovery).filteredPeople.length)}</span></div><div class="relative">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "lucide:search",
        class: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(discovery).searchQuery)} class="field-input pl-11" placeholder="Szukaj po nazwie lub zainteresowaniu"></div><div class="flex items-center justify-between text-sm font-semibold">`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        variant: "link",
        class: "text-neutral-800 transition hover:text-primary-700 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sortuj `);
          } else {
            return [
              createTextVNode(" Sortuj ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        variant: "link",
        class: "text-neutral-800 transition hover:text-primary-700 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Filtruj `);
          } else {
            return [
              createTextVNode(" Filtruj ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(unref(discovery).filteredPeople, (person) => {
        _push(ssrRenderComponent(_component_UserCard, {
          key: person.id,
          user: person,
          compact: "",
          onInvite: ($event) => unref(invitationsStore).sendToUser($event)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_FeedSection, {
        title: "Zaproszenia",
        "more-route": "/chat",
        "unread-total": unref(invitationsStore).incoming.length
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(invitationsStore).incoming, (invitation) => {
              _push2(ssrRenderComponent(_component_InvitationCard, {
                key: invitation.id,
                invitation,
                onAccept: accept,
                onDecline: unref(invitationsStore).decline
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(invitationsStore).incoming, (invitation) => {
                return openBlock(), createBlock(_component_InvitationCard, {
                  key: invitation.id,
                  invitation,
                  onAccept: accept,
                  onDecline: unref(invitationsStore).decline
                }, null, 8, ["invitation", "onDecline"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FeedSection, {
        title: "Nowe aktywności",
        "more-route": "/activities?tab=new",
        "unread-total": unref(activities).newActivities.length
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(activities).newActivities, (activity) => {
              _push2(ssrRenderComponent(_component_ActivityCard, {
                key: activity.id,
                activity,
                variant: "new",
                onJoin: unref(activities).joinActivity
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(activities).newActivities, (activity) => {
                return openBlock(), createBlock(_component_ActivityCard, {
                  key: activity.id,
                  activity,
                  variant: "new",
                  onJoin: unref(activities).joinActivity
                }, null, 8, ["activity", "onJoin"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D0k75Ztg.mjs.map
