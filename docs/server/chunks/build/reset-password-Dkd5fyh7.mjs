import { _ as _sfc_main$1 } from './FormField-mxugXI4u.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import * as z from 'zod';
import { k as useAuthStore, n as navigateTo } from './server.mjs';
import { P as PasswordInput } from './PasswordInput-e5E8GduK.mjs';
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
import './Input-Cg7APMCe.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const newPasswordSchema = z.string("Hasło jest wymagane").trim().min(8, "Hasło musi składać się z co najmniej 8 znaków").refine((password) => /[A-Z]/.test(password), {
      message: "Hasło musi zawierać co najmniej 1 wielką literę."
    }).refine((password) => /[a-z]/.test(password), {
      message: "Hasło musi zawierać co najmniej 1 małą literę."
    }).refine((password) => /[0-9]/.test(password), {
      message: "Hasło musi zawierać co najmniej 1 cyfrę."
    }).refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Hasło musi zawierać co najmniej 1 znak specjalny."
    });
    const schema = z.object({
      newPassword: newPasswordSchema,
      confirmPassword: z.string("Potwierdzenie hasła jest wymagane")
    }).refine((data) => data.newPassword === data.confirmPassword, {
      message: "Hasła nie są zgodne.",
      path: ["confirmPassword"]
    });
    const state = reactive({
      newPassword: "",
      confirmPassword: ""
    });
    async function submit(_e) {
      await auth.updatePassword(state.newPassword);
      await navigateTo("/login");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mobile-app-frame w-full" }, _attrs))}><div class="mb-6"><h1 class="section-title">Ustaw nowe hasło</h1><p class="section-subtitle mt-2">Zmień hasło i wróć do aplikacji.</p></div>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-8",
        onSubmit: submit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PasswordInput, {
              modelValue: unref(state).newPassword,
              "onUpdate:modelValue": ($event) => unref(state).newPassword = $event,
              name: "newPassword",
              label: "Nowe hasło",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PasswordInput, {
              modelValue: unref(state).confirmPassword,
              "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
              name: "confirmPassword",
              label: "Powtórz nowe hasło"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AppPrimaryButton, {
              type: "submit",
              class: "my-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ustaw nowe hasło `);
                } else {
                  return [
                    createTextVNode(" Ustaw nowe hasło ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(PasswordInput, {
                modelValue: unref(state).newPassword,
                "onUpdate:modelValue": ($event) => unref(state).newPassword = $event,
                name: "newPassword",
                label: "Nowe hasło",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(PasswordInput, {
                modelValue: unref(state).confirmPassword,
                "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                name: "confirmPassword",
                label: "Powtórz nowe hasło"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(AppPrimaryButton, {
                type: "submit",
                class: "my-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ustaw nowe hasło ")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-Dkd5fyh7.mjs.map
