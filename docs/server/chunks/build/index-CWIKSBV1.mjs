import { _ as __nuxt_component_0$1, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_2 } from './InvitationCard-Jrw3Xk2d.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useChatStore, i as initials, b as formatRelativeDate } from './chat-KjjO50wx.mjs';
import { a as useInvitationsStore } from './invitations-CWH8zIgv.mjs';
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
import './AppPrimaryButton-BEBmDIAY.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chatStore = useChatStore();
    const invitations = useInvitationsStore();
    const searchQuery = ref("");
    const filteredConversations = computed(
      () => chatStore.conversations.filter(
        (conversation) => conversation.participant.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || (conversation.lastMessage?.text ?? "").toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
    function accept(id) {
      const conversationId = invitations.accept(id);
      if (conversationId) navigateTo(`/chat/${conversationId}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_InvitationCard = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full surface-card p-5" }, _attrs))}><h1 class="section-title mb-5">Wiadomości</h1><div class="mb-4 grid grid-cols-2 gap-2 rounded-[20px] bg-neutral-100 p-1"><button class="${ssrRenderClass([
        unref(chatStore).chatTab === "conversations" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500",
        "rounded-[16px] px-4 py-3 text-sm font-semibold"
      ])}"> Rozmowy </button><button class="${ssrRenderClass([
        unref(chatStore).chatTab === "invitations" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500",
        "rounded-[16px] px-4 py-3 text-sm font-semibold"
      ])}"> Zaproszenia </button></div><input${ssrRenderAttr("value", unref(searchQuery))} class="field-input mb-4" placeholder="Szukaj">`);
      if (unref(chatStore).chatTab === "conversations") {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(filteredConversations), (conversation) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: conversation.id,
            to: `/chat/${conversation.id}`,
            class: "soft-card flex items-center gap-3 p-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative flex size-12 items-center justify-center rounded-full bg-neutral-100 font-semibold text-neutral-700"${_scopeId}>${ssrInterpolate(unref(initials)(conversation.participant.name))} `);
                if (conversation.isOnline) {
                  _push2(`<span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-500"${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><p class="font-semibold text-neutral-900"${_scopeId}>${ssrInterpolate(conversation.participant.name)}</p><p class="text-xs text-neutral-400"${_scopeId}>${ssrInterpolate(unref(formatRelativeDate)(conversation.lastMessage?.sentAt))}</p></div><p class="truncate text-sm text-neutral-500"${_scopeId}>${ssrInterpolate(conversation.lastMessage?.text ?? "Brak wiadomości")}</p></div>`);
                if (conversation.unreadCount) {
                  _push2(`<span class="flex size-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"${_scopeId}>${ssrInterpolate(conversation.unreadCount)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("div", { class: "relative flex size-12 items-center justify-center rounded-full bg-neutral-100 font-semibold text-neutral-700" }, [
                    createTextVNode(toDisplayString(unref(initials)(conversation.participant.name)) + " ", 1),
                    conversation.isOnline ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-500"
                    })) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "min-w-0 flex-1" }, [
                    createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                      createVNode("p", { class: "font-semibold text-neutral-900" }, toDisplayString(conversation.participant.name), 1),
                      createVNode("p", { class: "text-xs text-neutral-400" }, toDisplayString(unref(formatRelativeDate)(conversation.lastMessage?.sentAt)), 1)
                    ]),
                    createVNode("p", { class: "truncate text-sm text-neutral-500" }, toDisplayString(conversation.lastMessage?.text ?? "Brak wiadomości"), 1)
                  ]),
                  conversation.unreadCount ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "flex size-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"
                  }, toDisplayString(conversation.unreadCount), 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(unref(invitations).incoming, (invitation) => {
          _push(ssrRenderComponent(_component_InvitationCard, {
            key: invitation.id,
            invitation,
            onAccept: accept,
            onDecline: unref(invitations).decline
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CWIKSBV1.mjs.map
