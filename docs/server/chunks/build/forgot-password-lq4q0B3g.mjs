import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-mxugXI4u.mjs';
import { _ as _sfc_main$3 } from './Input-Cg7APMCe.mjs';
import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, reactive, ref, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import * as z from 'zod';
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
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = z.object({
      email: z.email("Podaj poprawny adres e-mail").trim()
    });
    const state = reactive({
      email: void 0
    });
    const sent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="mb-6"><h1 class="section-title">Reset hasła</h1><p class="section-subtitle mt-2"> Jeśli konto istnieje, wyślemy link na podany adres. </p></div>`);
      if (!unref(sent)) {
        _push(ssrRenderComponent(_component_UForm, {
          schema: unref(schema),
          state: unref(state),
          class: "space-y-10",
          onSubmit: ($event) => sent.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
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
                      type: "text",
                      leadingIcon: "lucide:mail",
                      variant: "outline",
                      placeholder: "Podaj swój e-mail",
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
                        modelValue: unref(state).email,
                        "onUpdate:modelValue": ($event) => unref(state).email = $event,
                        type: "text",
                        leadingIcon: "lucide:mail",
                        variant: "outline",
                        placeholder: "Podaj swój e-mail",
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
              _push2(ssrRenderComponent(AppPrimaryButton, { type: "submit" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Wyślij link resetujący `);
                  } else {
                    return [
                      createTextVNode(" Wyślij link resetujący ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UFormField, {
                  label: "E-mail",
                  name: "email",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      type: "text",
                      leadingIcon: "lucide:mail",
                      variant: "outline",
                      placeholder: "Podaj swój e-mail",
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
                createVNode(AppPrimaryButton, { type: "submit" }, {
                  default: withCtx(() => [
                    createTextVNode(" Wyślij link resetujący ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="soft-card p-4 rounded-2xl text-sm text-neutral-600"> Link do zresetowania hasła został wysłany na podany adres e-mail. </div>`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "mt-6 inline-flex text-sm font-semibold text-primary-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Wróć do logowania `);
          } else {
            return [
              createTextVNode(" Wróć do logowania ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-lq4q0B3g.mjs.map
