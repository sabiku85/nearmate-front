import { m as useRoute, k as useAuthStore, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, ref, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useChatStore, i as initials, a as formatTime } from './chat-KjjO50wx.mjs';
import { A as AppPrimaryButton } from './AppPrimaryButton-BEBmDIAY.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const setInterval = (() => {
});
function useChatTransport(conversationId) {
  const chatStore = useChatStore();
  let pollInterval = null;
  function connect() {
    pollInterval = setInterval();
  }
  function disconnect() {
    if (pollInterval) clearInterval(pollInterval);
  }
  return {
    connect,
    disconnect,
    send: (text) => chatStore.sendMessage(conversationId, text)
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const auth = useAuthStore();
    const chatStore = useChatStore();
    const conversation = computed(
      () => chatStore.conversations.find((item) => item.id === route.params.id)
    );
    const messages = computed(
      () => chatStore.messages[String(route.params.id)] ?? []
    );
    const filteredMessages = computed(
      () => chatStore.threadSearchQuery ? messages.value.filter(
        (message) => message.text.toLowerCase().includes(chatStore.threadSearchQuery.toLowerCase())
      ) : messages.value
    );
    const text = ref("");
    const transport = useChatTransport(String(route.params.id));
    function send() {
      transport.send(text.value);
      text.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(conversation)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "surface-card overflow-hidden" }, _attrs))}><div class="border-b border-neutral-200 px-5 py-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/chat",
          class: "mb-4 inline-flex text-sm font-semibold text-neutral-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Powrót`);
            } else {
              return [
                createTextVNode("Powrót")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-3"><div class="relative flex size-12 items-center justify-center rounded-full bg-neutral-100 font-semibold text-neutral-700">${ssrInterpolate(unref(initials)(unref(conversation).participant.name))} `);
        if (unref(conversation).isOnline) {
          _push(`<span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-500"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><p class="font-semibold text-neutral-900">${ssrInterpolate(unref(conversation).participant.name)}</p>`);
        if (unref(conversation).isOnline) {
          _push(`<p class="text-sm text-emerald-600"> Online </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="px-5 py-4"><input${ssrRenderAttr("value", unref(chatStore).threadSearchQuery)} class="field-input" placeholder="Szukaj w rozmowie"></div><div class="space-y-4 bg-white px-5 py-2"><!--[-->`);
        ssrRenderList(unref(filteredMessages), (message) => {
          _push(`<div class="${ssrRenderClass([
            message.senderId === unref(auth).user?.id ? "ml-auto rounded-br-md bg-neutral-900 text-white" : "rounded-bl-md bg-neutral-100 text-neutral-900",
            "max-w-[78%] rounded-[22px] px-4 py-3"
          ])}"><p class="whitespace-pre-line text-base">${ssrInterpolate(message.text)}</p><p class="${ssrRenderClass([
            message.senderId === unref(auth).user?.id ? "text-white/70" : "text-neutral-400",
            "mt-2 text-sm"
          ])}">${ssrInterpolate(unref(formatTime)(message.sentAt))}</p></div>`);
        });
        _push(`<!--]--></div><div class="border-t border-neutral-200 px-5 py-4"><div class="flex gap-3"><input${ssrRenderAttr("value", unref(text))} class="field-input" placeholder="Napisz wiadomość...">`);
        _push(ssrRenderComponent(AppPrimaryButton, {
          class: "",
          onClick: send
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Wyślij `);
            } else {
              return [
                createTextVNode(" Wyślij ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B2xsFgNR.mjs.map
