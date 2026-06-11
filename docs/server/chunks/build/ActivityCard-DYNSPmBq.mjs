import { _ as _sfc_main$1, a as _sfc_main$2 } from './Badge-B5y43hH3.mjs';
import { f as _sfc_main$b, _ as __nuxt_component_0$1, h as _sfc_main$e } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { i as initials, c as formatScheduleLabel } from './chat-KjjO50wx.mjs';
import { A as AppPrimaryButton } from './AppPrimaryButton-BEBmDIAY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActivityCard",
  __ssrInlineRender: true,
  props: {
    activity: {},
    variant: {}
  },
  emits: ["join", "sendInvitation"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_UBadge = _sfc_main$2;
      const _component_UAvatar = _sfc_main$b;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$e;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        ui: {
          root: __props.variant === "upcoming" ? "overflow-hidden rounded-[20px] border-0 shadow-none" : "rounded-[20px] border border-white/80 bg-white shadow-[0_14px_36px_rgba(29,19,59,0.08)]",
          body: "p-4"
        },
        class: __props.variant === "upcoming" ? "bg-[#dfeaf8]" : ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><div class="min-w-0"${_scopeId}>`);
            if (__props.variant === "upcoming") {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "solid",
                class: "mb-3 rounded-full bg-white/70 px-4 py-1 text-[11px] font-bold tracking-[0.02em] text-neutral-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` POTWIERDZONO `);
                  } else {
                    return [
                      createTextVNode(" POTWIERDZONO ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.variant === "new") {
              _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                text: unref(initials)(__props.activity.creator.name),
                size: "md",
                class: "rounded-full bg-neutral-100 text-xs font-bold text-neutral-700"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: __props.activity.id ? `/activities/${__props.activity.id}` : "#"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-bold tracking-[-0.03em] text-neutral-900"${_scopeId2}>${ssrInterpolate(__props.activity.title)}</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-bold tracking-[-0.03em] text-neutral-900" }, toDisplayString(__props.activity.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: __props.activity.id ? `/activities/${__props.activity.id}` : "#"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-xl font-bold tracking-[-0.03em] text-neutral-900"${_scopeId2}>${ssrInterpolate(__props.activity.title)}</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-xl font-bold tracking-[-0.03em] text-neutral-900" }, toDisplayString(__props.activity.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
            if (__props.variant === "new") {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "outline",
                class: "shrink-0 rounded-full border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(Math.max(0, 8 - __props.activity.participantsCount))} wolne miejsca `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(Math.max(0, 8 - __props.activity.participantsCount)) + " wolne miejsca ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2 text-sm text-neutral-600"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:calendar",
              class: "size-4 text-neutral-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(formatScheduleLabel)(__props.activity.date))}</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:map-pin",
              class: "size-4 text-neutral-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.activity.location)}</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:users",
              class: "size-4 text-neutral-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.activity.participantsCount)} osób</span></div></div>`);
            _push2(ssrRenderComponent(AppPrimaryButton, {
              disabled: __props.variant === "new" && __props.activity.isJoined,
              onClick: ($event) => __props.variant === "new" ? _ctx.$emit("join", __props.activity.id) : _ctx.$emit("sendInvitation", __props.activity.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.variant === "new" ? __props.activity.isJoined ? "Dołączono" : "Dołącz do aktywności" : "Akceptuj")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.variant === "new" ? __props.activity.isJoined ? "Dołączono" : "Dołącz do aktywności" : "Akceptuj"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                  createVNode("div", { class: "min-w-0" }, [
                    __props.variant === "upcoming" ? (openBlock(), createBlock(_component_UBadge, {
                      key: 0,
                      color: "neutral",
                      variant: "solid",
                      class: "mb-3 rounded-full bg-white/70 px-4 py-1 text-[11px] font-bold tracking-[0.02em] text-neutral-700"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" POTWIERDZONO ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    __props.variant === "new" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center gap-3"
                    }, [
                      createVNode(_component_UAvatar, {
                        text: unref(initials)(__props.activity.creator.name),
                        size: "md",
                        class: "rounded-full bg-neutral-100 text-xs font-bold text-neutral-700"
                      }, null, 8, ["text"]),
                      createVNode(_component_NuxtLink, {
                        to: __props.activity.id ? `/activities/${__props.activity.id}` : "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-lg font-bold tracking-[-0.03em] text-neutral-900" }, toDisplayString(__props.activity.title), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])) : (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode(_component_NuxtLink, {
                        to: __props.activity.id ? `/activities/${__props.activity.id}` : "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-xl font-bold tracking-[-0.03em] text-neutral-900" }, toDisplayString(__props.activity.title), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]))
                  ]),
                  __props.variant === "new" ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    color: "neutral",
                    variant: "outline",
                    class: "shrink-0 rounded-full border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(Math.max(0, 8 - __props.activity.participantsCount)) + " wolne miejsca ", 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-2 text-sm text-neutral-600" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "lucide:calendar",
                      class: "size-4 text-neutral-500"
                    }),
                    createVNode("span", null, toDisplayString(unref(formatScheduleLabel)(__props.activity.date)), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "lucide:map-pin",
                      class: "size-4 text-neutral-500"
                    }),
                    createVNode("span", null, toDisplayString(__props.activity.location), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "lucide:users",
                      class: "size-4 text-neutral-500"
                    }),
                    createVNode("span", null, toDisplayString(__props.activity.participantsCount) + " osób", 1)
                  ])
                ]),
                createVNode(AppPrimaryButton, {
                  disabled: __props.variant === "new" && __props.activity.isJoined,
                  onClick: ($event) => __props.variant === "new" ? _ctx.$emit("join", __props.activity.id) : _ctx.$emit("sendInvitation", __props.activity.id)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.variant === "new" ? __props.activity.isJoined ? "Dołączono" : "Dołącz do aktywności" : "Akceptuj"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/activity/ActivityCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "ActivityCard" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ActivityCard-DYNSPmBq.mjs.map
