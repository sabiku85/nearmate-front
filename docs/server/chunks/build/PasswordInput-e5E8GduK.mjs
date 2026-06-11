import { a as _sfc_main$1 } from './FormField-mxugXI4u.mjs';
import { _ as _sfc_main$2 } from './Input-Cg7APMCe.mjs';
import { g as _sfc_main$8 } from './server.mjs';
import { defineComponent, useModel, ref, mergeProps, withCtx, unref, createVNode, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PasswordInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: { default: "Hasło" },
    name: { default: "password" },
    placeholder: { default: "Wprowadź hasło" },
    required: { type: Boolean, default: true },
    autofocus: { type: Boolean, default: false }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = _sfc_main$1;
      const _component_UInput = _sfc_main$2;
      const _component_UButton = _sfc_main$8;
      _push(ssrRenderComponent(_component_UFormField, mergeProps({
        label: props.label,
        name: props.name,
        required: props.required
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: model.value,
              "onUpdate:modelValue": ($event) => model.value = $event,
              type: unref(show) ? "text" : "password",
              placeholder: props.placeholder,
              autofocus: props.autofocus,
              leadingIcon: "lucide:lock-keyhole",
              variant: "outline",
              ui: {
                root: "w-full",
                base: "py-4 pr-12",
                leadingIcon: "text-primary-600"
              }
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "link",
                    size: "lg",
                    icon: unref(show) ? "lucide:eye-closed" : "lucide:eye",
                    "aria-label": unref(show) ? "Ukryj hasło" : "Pokaż hasło",
                    "aria-pressed": unref(show),
                    onClick: ($event) => show.value = !unref(show)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "link",
                      size: "lg",
                      icon: unref(show) ? "lucide:eye-closed" : "lucide:eye",
                      "aria-label": unref(show) ? "Ukryj hasło" : "Pokaż hasło",
                      "aria-pressed": unref(show),
                      onClick: ($event) => show.value = !unref(show)
                    }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                type: unref(show) ? "text" : "password",
                placeholder: props.placeholder,
                autofocus: props.autofocus,
                leadingIcon: "lucide:lock-keyhole",
                variant: "outline",
                ui: {
                  root: "w-full",
                  base: "py-4 pr-12",
                  leadingIcon: "text-primary-600"
                }
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "link",
                    size: "lg",
                    icon: unref(show) ? "lucide:eye-closed" : "lucide:eye",
                    "aria-label": unref(show) ? "Ukryj hasło" : "Pokaż hasło",
                    "aria-pressed": unref(show),
                    onClick: ($event) => show.value = !unref(show)
                  }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "autofocus"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/PasswordInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PasswordInput = Object.assign(_sfc_main, { __name: "AuthPasswordInput" });

export { PasswordInput as P };
//# sourceMappingURL=PasswordInput-e5E8GduK.mjs.map
