<script setup lang="ts">
import * as z from "zod";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";

const schema = z.object({
  email: z.email("Podaj poprawny adres e-mail").trim(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
});

definePageMeta({ layout: "auth", middleware: "guest" });

const sent = ref(false);
</script>

<template>
  <section>
    <div class="mb-6">
      <h1 class="section-title">Reset hasła</h1>
      <p class="section-subtitle mt-2">
        Jeśli konto istnieje, wyślemy link na podany adres.
      </p>
    </div>

    <UForm
      v-if="!sent"
      :schema="schema"
      :state="state"
      class="space-y-10"
      @submit="sent = true"
    >
      <UFormField
        label="E-mail"
        name="email"
        required
      >
        <UInput
          v-model="state.email"
          type="text"
          leadingIcon="lucide:mail"
          variant="outline"
          placeholder="Podaj swój e-mail"
          autofocus
          :ui="{
            root: 'w-full',
            base: 'py-4',
            leadingIcon: 'text-primary-600',
          }"
        />
      </UFormField>

      <AppPrimaryButton type="submit">
        Wyślij link resetujący
      </AppPrimaryButton>
    </UForm>

    <div
      v-else
      class="soft-card p-4 rounded-2xl text-sm text-neutral-600"
    >
      Link do zresetowania hasła został wysłany na podany adres e-mail.
    </div>

    <NuxtLink
      to="/login"
      class="mt-6 inline-flex text-sm font-semibold text-primary-700"
    >
      Wróć do logowania
    </NuxtLink>
  </section>
</template>
