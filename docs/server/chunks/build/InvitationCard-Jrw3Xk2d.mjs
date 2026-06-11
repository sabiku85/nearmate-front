import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Badge-B5y43hH3.mjs';
import { f as _sfc_main$b } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { i as initials } from './chat-KjjO50wx.mjs';
import { A as AppPrimaryButton, a as AppBaseButton } from './AppPrimaryButton-BEBmDIAY.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppGhostButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppBaseButton, mergeProps({
        variant: "outline",
        class: "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
      }, _attrs), {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppGhostButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppGhostButton = Object.assign(_sfc_main$1, { __name: "LayoutAppGhostButton" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InvitationCard",
  __ssrInlineRender: true,
  props: {
    invitation: {}
  },
  emits: ["accept", "decline"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1$1;
      const _component_UAvatar = _sfc_main$b;
      const _component_UBadge = _sfc_main$2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ ui: {
        root: "rounded-[16px] bg-white ring-transparent shadow-[0_4px_32px_0px_rgba(0,0,0,0.04)]",
        body: "p-4"
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              text: unref(initials)(__props.invitation.sender.name),
              size: "xl",
              class: "rounded-full bg-neutral-100 text-sm font-bold text-neutral-700"
            }, null, _parent2, _scopeId));
            _push2(`<div class="min-w-0 flex-1"${_scopeId}><p class="truncate text-base font-bold text-neutral-900"${_scopeId}>${ssrInterpolate(__props.invitation.sender.name)}</p><p class="text-xs text-neutral-400"${_scopeId}>${ssrInterpolate(__props.invitation.sender.mutualFriendsCount ?? 0)} wspólnych znajomych </p></div></div><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.invitation.sender.profileTags?.slice(0, 2) ?? [], (tag) => {
              _push2(ssrRenderComponent(_component_UBadge, {
                key: tag,
                color: "neutral",
                variant: "outline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tag)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tag), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="grid grid-cols-2 gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(AppGhostButton, {
              onClick: ($event) => _ctx.$emit("decline", __props.invitation.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Odrzuć `);
                } else {
                  return [
                    createTextVNode(" Odrzuć ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(AppPrimaryButton, {
              onClick: ($event) => _ctx.$emit("accept", __props.invitation.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Akceptuj `);
                } else {
                  return [
                    createTextVNode(" Akceptuj ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-start gap-3" }, [
                  createVNode(_component_UAvatar, {
                    text: unref(initials)(__props.invitation.sender.name),
                    size: "xl",
                    class: "rounded-full bg-neutral-100 text-sm font-bold text-neutral-700"
                  }, null, 8, ["text"]),
                  createVNode("div", { class: "min-w-0 flex-1" }, [
                    createVNode("p", { class: "truncate text-base font-bold text-neutral-900" }, toDisplayString(__props.invitation.sender.name), 1),
                    createVNode("p", { class: "text-xs text-neutral-400" }, toDisplayString(__props.invitation.sender.mutualFriendsCount ?? 0) + " wspólnych znajomych ", 1)
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.invitation.sender.profileTags?.slice(0, 2) ?? [], (tag) => {
                    return openBlock(), createBlock(_component_UBadge, {
                      key: tag,
                      color: "neutral",
                      variant: "outline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(AppGhostButton, {
                    onClick: ($event) => _ctx.$emit("decline", __props.invitation.id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Odrzuć ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(AppPrimaryButton, {
                    onClick: ($event) => _ctx.$emit("accept", __props.invitation.id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Akceptuj ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/invitation/InvitationCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "InvitationCard" });

export { __nuxt_component_2 as _ };
//# sourceMappingURL=InvitationCard-Jrw3Xk2d.mjs.map
