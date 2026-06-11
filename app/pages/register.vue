<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useAuthStore } from "~~/stores/auth";
import { useOnboardingStore } from "~~/stores/onboarding";
import PasswordInput from "~/components/auth/PasswordInput.vue";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";

const newPasswordSchema = z
  .string("Hasło jest wymagane")
  .trim()
  .min(8, "Hasło musi składać się z co najmniej 8 znaków")
  .refine((password) => /[A-Z]/.test(password), {
    message: "Hasło musi zawierać co najmniej 1 wielką literę.",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Hasło musi zawierać co najmniej 1 małą literę.",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Hasło musi zawierać co najmniej 1 cyfrę.",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Hasło musi zawierać co najmniej 1 znak specjalny.",
  });

const schema = z
  .object({
    nick: z
      .string("E-mail lub nick jest wymagany")
      .trim()
      .min(2, "Pole musi składać się z co najmniej 2 znaków"),
    email: z.email("Podaj poprawny adres e-mail").trim(),
    newPassword: newPasswordSchema,
    confirmPassword: z.string("Potwierdzenie hasła jest wymagane"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Hasła nie są zgodne.",
    path: ["confirmPassword"],
  });

type Schema = z.output<typeof schema>;

const state = reactive<Schema>({
  nick: "",
  email: "",
  newPassword: "",
  confirmPassword: "",
});

const auth = useAuthStore();
definePageMeta({ layout: "auth", middleware: "guest" });

async function submit(_e: FormSubmitEvent<Schema>) {
  await auth.register({
    ...state,
    name: state.nick || state.email,
  });
  const onboarding = useOnboardingStore();
  onboarding.profile.name = state.nick || state.email;
  await navigateTo("/onboarding/step-1");
}
</script>

<template>
  <section class="mobile-app-frame w-full">
    <div class="mb-6">
      <h1 class="section-title">Załóż konto</h1>
      <p class="section-subtitle mt-2">Dołącz do naszej społeczności</p>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="space-y-8"
      @submit="submit"
    >
      <UFormField
        label="Nick"
        name="identifier"
        required
      >
        <UInput
          v-model="state.nick"
          type="text"
          variant="outline"
          placeholder="Twój nick"
          autofocus
          :ui="{
            root: 'w-full',
            base: 'py-4',
            leadingIcon: 'text-primary-600',
          }"
        />
      </UFormField>

      <UFormField
        label="E-mail"
        name="email"
        required
      >
        <UInput
          v-model="state.email"
          type="email"
          variant="outline"
          placeholder="Adres e-mail"
          :ui="{
            root: 'w-full',
            base: 'py-4',
            leadingIcon: 'text-primary-600',
          }"
        />
      </UFormField>

      <PasswordInput
        v-model="state.newPassword"
        name="newPassword"
      />

      <PasswordInput
        v-model="state.confirmPassword"
        name="confirmPassword"
      />

      <AppPrimaryButton
        type="submit"
        class="my-4"
      >
        Zarejestruj się
      </AppPrimaryButton>
    </UForm>

    <div
      class="mt-6 mb-3 flex items-center justify-between text-sm text-neutral-500"
    >
      <span>Masz już konto?</span>
      <NuxtLink
        to="/login"
        class="font-semibold text-primary-700"
        >Zaloguj się</NuxtLink
      >
    </div>
  </section>
</template>
