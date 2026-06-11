<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import PasswordInput from "~/components/auth/PasswordInput.vue";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";

const schema = z.object({
  identifier: z
    .string("E-mail lub nick jest wymagany")
    .trim()
    .min(2, "Pole musi składać się z co najmniej 2 znaków"),
  password: z
    .string("Hasło jest wymagane")
    .trim()
    .min(8, "Hasło musi składać się z co najmniej 8 znaków"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  identifier: undefined,
  password: undefined,
});

definePageMeta({ layout: "auth", middleware: "guest" });

const auth = useAuthStore();
async function submit(_e: FormSubmitEvent<Schema>) {
  await auth.login(state.identifier || "demo");
  await navigateTo(auth.isOnboardingComplete ? "/" : "/onboarding/step-1");
}
</script>

<template>
  <section class="mobile-app-frame w-full">
    <div class="mb-6">
      <h1 class="section-title text-xl font-bold">Miło Cię widzieć!</h1>
      <p class="section-subtitle font-light text-base mt-2">
        Dołącz do naszej społeczności.
      </p>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit="submit"
    >
      <UFormField
        label="E-mail / nick"
        name="identifier"
        required
      >
        <UInput
          v-model="state.identifier"
          type="text"
          leadingIcon="lucide:mail"
          variant="outline"
          placeholder="Wprowadź e-mail lub nick"
          autofocus
          :ui="{
            root: 'w-full',
            base: 'py-4',
            leadingIcon: 'text-primary-600',
          }"
        />
      </UFormField>

      <PasswordInput v-model="state.password" />

      <div class="flex justify-end my-10">
        <NuxtLink
          to="/forgot-password"
          class="text-sm font-semibold text-primary-700"
          >Zapomniałeś hasła?
        </NuxtLink>
      </div>
      <AppPrimaryButton type="submit"> Zaloguj się </AppPrimaryButton>
    </UForm>

    <div
      class="mt-10 mb-4 flex items-center justify-between text-sm text-neutral-500"
    >
      <span>Nie masz konta?</span>
      <NuxtLink
        to="/register"
        class="font-semibold text-primary-700"
        >Zarejestruj się</NuxtLink
      >
    </div>
  </section>
</template>
