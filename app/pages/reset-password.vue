<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useAuthStore } from "~~/stores/auth";
import PasswordInput from "~/components/auth/PasswordInput.vue";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";

const auth = useAuthStore();
definePageMeta({ layout: "auth", middleware: "guest" });

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
    newPassword: newPasswordSchema,
    confirmPassword: z.string("Potwierdzenie hasła jest wymagane"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Hasła nie są zgodne.",
    path: ["confirmPassword"],
  });

type Schema = z.output<typeof schema>;

const state = reactive<Schema>({
  newPassword: "",
  confirmPassword: "",
});

async function submit(_e: FormSubmitEvent<Schema>) {
  await auth.updatePassword(state.newPassword);
  await navigateTo("/login");
}
</script>

<template>
  <section class="mobile-app-frame w-full">
    <div class="mb-6">
      <h1 class="section-title">Ustaw nowe hasło</h1>
      <p class="section-subtitle mt-2">Zmień hasło i wróć do aplikacji.</p>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="space-y-8"
      @submit="submit"
    >
      <PasswordInput
        v-model="state.newPassword"
        name="newPassword"
        label="Nowe hasło"
        autofocus
      />

      <PasswordInput
        v-model="state.confirmPassword"
        name="confirmPassword"
        label="Powtórz nowe hasło"
      />

      <AppPrimaryButton
        type="submit"
        class="my-4"
      >
        Ustaw nowe hasło
      </AppPrimaryButton>
    </UForm>
  </section>
</template>
