<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    autofocus?: boolean;
  }>(),
  {
    label: "Hasło",
    name: "password",
    placeholder: "Wprowadź hasło",
    required: true,
    autofocus: false,
  },
);

const model = defineModel<string>({ default: "" });
const show = ref(false);
</script>

<template>
  <UFormField
    :label="props.label"
    :name="props.name"
    :required="props.required"
  >
    <UInput
      v-model="model"
      :type="show ? 'text' : 'password'"
      :placeholder="props.placeholder"
      :autofocus="props.autofocus"
      leadingIcon="lucide:lock-keyhole"
      variant="outline"
      :ui="{
        root: 'w-full',
        base: 'py-4 pr-12',
        leadingIcon: 'text-primary-600',
      }"
    >
      <template #trailing>
        <UButton
          color="neutral"
          variant="link"
          size="lg"
          :icon="show ? 'lucide:eye-closed' : 'lucide:eye'"
          :aria-label="show ? 'Ukryj hasło' : 'Pokaż hasło'"
          :aria-pressed="show"
          @click="show = !show"
        />
      </template>
    </UInput>
  </UFormField>
</template>
