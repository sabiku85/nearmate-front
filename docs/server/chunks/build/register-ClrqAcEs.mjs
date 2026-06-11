import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-mxugXI4u.mjs';
import { _ as _sfc_main$3 } from './Input-Cg7APMCe.mjs';
import { k as useAuthStore, _ as __nuxt_component_0$1, n as navigateTo } from './server.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import * as z from 'zod';
import { u as useOnboardingStore } from './onboarding-CtNdTPgR.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
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
      nick: z.string("E-mail lub nick jest wymagany").trim().min(2, "Pole musi składać się z co najmniej 2 znaków"),
      email: z.email("Podaj poprawny adres e-mail").trim(),
      newPassword: newPasswordSchema,
      confirmPassword: z.string("Potwierdzenie hasła jest wymagane")
    }).refine((data) => data.newPassword === data.confirmPassword, {
      message: "Hasła nie są zgodne.",
      path: ["confirmPassword"]
    });
    const state = reactive({
      nick: "",
      email: "",
      newPassword: "",
      confirmPassword: ""
    });
    const auth = useAuthStore();
    async function submit(_e) {
      await auth.register({
        ...state,
        name: state.nick || state.email
      });
      const onboarding = useOnboardingStore();
      onboarding.profile.name = state.nick || state.email;
      await navigateTo("/onboarding/step-1");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mobile-app-frame w-full" }, _attrs))}><div class="mb-6"><h1 class="section-title">Załóż konto</h1><p class="section-subtitle mt-2">Dołącz do naszej społeczności</p></div>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-8",
        onSubmit: submit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Nick",
              name: "identifier",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).nick,
                    "onUpdate:modelValue": ($event) => unref(state).nick = $event,
                    type: "text",
                    variant: "outline",
                    placeholder: "Twój nick",
                    autofocus: "",
                    ui: {
                      root: "w-full",
                      base: "py-4",
                      leadingIcon: "text-primary-600"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).nick,
                      "onUpdate:modelValue": ($event) => unref(state).nick = $event,
                      type: "text",
                      variant: "outline",
                      placeholder: "Twój nick",
                      autofocus: "",
                      ui: {
                        root: "w-full",
                        base: "py-4",
                        leadingIcon: "text-primary-600"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "E-mail",
              name: "email",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    type: "email",
                    variant: "outline",
                    placeholder: "Adres e-mail",
                    ui: {
                      root: "w-full",
                      base: "py-4",
                      leadingIcon: "text-primary-600"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      type: "email",
                      variant: "outline",
                      placeholder: "Adres e-mail",
                      ui: {
                        root: "w-full",
                        base: "py-4",
                        leadingIcon: "text-primary-600"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PasswordInput, {
              modelValue: unref(state).newPassword,
              "onUpdate:modelValue": ($event) => unref(state).newPassword = $event,
              name: "newPassword"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PasswordInput, {
              modelValue: unref(state).confirmPassword,
              "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
              name: "confirmPassword"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AppPrimaryButton, {
              type: "submit",
              class: "my-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Zarejestruj się `);
                } else {
                  return [
                    createTextVNode(" Zarejestruj się ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormField, {
                label: "Nick",
                name: "identifier",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).nick,
                    "onUpdate:modelValue": ($event) => unref(state).nick = $event,
                    type: "text",
                    variant: "outline",
                    placeholder: "Twój nick",
                    autofocus: "",
                    ui: {
                      root: "w-full",
                      base: "py-4",
                      leadingIcon: "text-primary-600"
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormField, {
                label: "E-mail",
                name: "email",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    type: "email",
                    variant: "outline",
                    placeholder: "Adres e-mail",
                    ui: {
                      root: "w-full",
                      base: "py-4",
                      leadingIcon: "text-primary-600"
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(PasswordInput, {
                modelValue: unref(state).newPassword,
                "onUpdate:modelValue": ($event) => unref(state).newPassword = $event,
                name: "newPassword"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(PasswordInput, {
                modelValue: unref(state).confirmPassword,
                "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                name: "confirmPassword"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(AppPrimaryButton, {
                type: "submit",
                class: "my-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Zarejestruj się ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-6 mb-3 flex items-center justify-between text-sm text-neutral-500"><span>Masz już konto?</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "font-semibold text-primary-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Zaloguj się`);
          } else {
            return [
              createTextVNode("Zaloguj się")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-ClrqAcEs.mjs.map
