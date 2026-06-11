import { _ as __nuxt_component_0 } from './FeedSection-B0KyfVbW.mjs';
import { _ as __nuxt_component_1 } from './ActivityCard-DYNSPmBq.mjs';
import { _ as __nuxt_component_2 } from './InvitationCard-Jrw3Xk2d.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useActivitiesStore, a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
import { k as useAuthStore, n as navigateTo, _ as __nuxt_component_0$1, g as _sfc_main$8 } from './server.mjs';
import { _ as _sfc_main$1$1 } from './Badge-B5y43hH3.mjs';
import { g as getGreeting } from './chat-KjjO50wx.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GreetingBanner",
  __ssrInlineRender: true,
  props: {
    userName: {},
    onboardingComplete: { type: Boolean },
    skippedOnboardingAt: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UButton = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, {
        ui: {
          root: "overflow-hidden rounded-[18px] border-0 shadow-[0_22px_40px_rgba(83,42,204,0.28)]",
          body: "p-5 sm:p-6"
        },
        class: "rounded-[10px] bg-linear-[118.35deg,#801AAF_2.88%,#542CCC_89.57%] text-white shadow-[0_18px_44px_rgba(94,45,180,0.28)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div${_scopeId}><h1 class="text-xl font-bold tracking-[-0.04em]"${_scopeId}>${ssrInterpolate(unref(getGreeting)())}, ${ssrInterpolate(__props.userName.split(" ")[0])}! 👋 </h1><p class="mt-1 text-sm font-normal text-white/88"${_scopeId}> Jesteś gotowa na nowe znajomości? </p></div><div class="flex flex-wrap gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/people",
              class: "rounded-xl bg-neutral-900 px-5 py-3 text-sm font-normal text-white hover:bg-neutral-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Szukaj nowych znajomych `);
                } else {
                  return [
                    createTextVNode(" Szukaj nowych znajomych ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!props.onboardingComplete) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: "/onboarding/step-1",
                color: "neutral",
                variant: "soft",
                size: "lg",
                class: "rounded-xl bg-white/14 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Uzupełnij profil `);
                  } else {
                    return [
                      createTextVNode(" Uzupełnij profil ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-xl font-bold tracking-[-0.04em]" }, toDisplayString(unref(getGreeting)()) + ", " + toDisplayString(__props.userName.split(" ")[0]) + "! 👋 ", 1),
                  createVNode("p", { class: "mt-1 text-sm font-normal text-white/88" }, " Jesteś gotowa na nowe znajomości? ")
                ]),
                createVNode("div", { class: "flex flex-wrap gap-3" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/people",
                    class: "rounded-xl bg-neutral-900 px-5 py-3 text-sm font-normal text-white hover:bg-neutral-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Szukaj nowych znajomych ")
                    ]),
                    _: 1
                  }),
                  !props.onboardingComplete ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    to: "/onboarding/step-1",
                    color: "neutral",
                    variant: "soft",
                    size: "lg",
                    class: "rounded-xl bg-white/14 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Uzupełnij profil ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feed/GreetingBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GreetingBanner = Object.assign(_sfc_main$1, { __name: "FeedGreetingBanner" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const activities = useActivitiesStore();
    const invitations = useInvitationsStore();
    const invitationsStore = useInvitationsStore();
    function accept(id) {
      const conversationId = invitations.accept(id);
      if (conversationId) navigateTo(`/chat/${conversationId}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeedSection = __nuxt_component_0;
      const _component_ActivityCard = __nuxt_component_1;
      const _component_InvitationCard = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-7 pb-24" }, _attrs))}>`);
      _push(ssrRenderComponent(GreetingBanner, {
        "user-name": unref(auth).user?.name ?? "Karolina",
        "onboarding-complete": unref(auth).isOnboardingComplete,
        "skipped-onboarding-at": unref(auth).user?.skippedOnboardingAt
      }, null, _parent));
      _push(ssrRenderComponent(_component_FeedSection, {
        title: "Nadchodzące aktywności",
        "more-route": "/activities?tab=upcoming",
        "unread-total": unref(activities).upcoming.length
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none px-1 pb-1"${_scopeId}><!--[-->`);
            ssrRenderList(unref(activities).upcoming, (activity) => {
              _push2(`<div class="min-w-[78%] snap-start"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ActivityCard, {
                activity,
                variant: "upcoming",
                onSendInvitation: ($event) => unref(invitationsStore).sendToActivity($event)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none px-1 pb-1" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(activities).upcoming, (activity) => {
                  return openBlock(), createBlock("div", {
                    key: activity.id,
                    class: "min-w-[78%] snap-start"
                  }, [
                    createVNode(_component_ActivityCard, {
                      activity,
                      variant: "upcoming",
                      onSendInvitation: ($event) => unref(invitationsStore).sendToActivity($event)
                    }, null, 8, ["activity", "onSendInvitation"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FeedSection, {
        title: "Zaproszenia",
        "more-route": "/chat",
        "unread-total": unref(invitations).incoming.length
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(invitations).incoming, (invitation) => {
              _push2(ssrRenderComponent(_component_InvitationCard, {
                key: invitation.id,
                invitation,
                onAccept: accept,
                onDecline: unref(invitations).decline
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(invitations).incoming, (invitation) => {
                return openBlock(), createBlock(_component_InvitationCard, {
                  key: invitation.id,
                  invitation,
                  onAccept: accept,
                  onDecline: unref(invitations).decline
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-VQMPfZoI.mjs.map
