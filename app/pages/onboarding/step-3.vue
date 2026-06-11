<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";
import { useOnboardingStore } from "~~/stores/onboarding";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";
import OnboardingProgress from "~/components/onboarding/OnboardingProgress.vue";

definePageMeta({ layout: "onboarding-steps", middleware: "auth" });

const auth = useAuthStore();
const onboarding = useOnboardingStore();

function skip() {
  auth.skipOnboarding();
  onboarding.skip();
  navigateTo("/");
}

function finish() {
  auth.updateUser({
    city: onboarding.location.city,
    age: onboarding.location.ageRange[0],
    bio: onboarding.profile.bio || auth.user?.bio || "",
    name: onboarding.profile.name || auth.user?.name || "",
  });
  auth.completeOnboarding();
  onboarding.saveStep3();
  navigateTo("/");
}
</script>

<template>
  <section class="mobile-app-frame w-full">
    <OnboardingProgress
      :step="3"
      @skip="skip"
    />
    <div class="space-y-6">
      <div class="mb-6 mt-8">
        <p class="screen-title font-semibold text-base">Prawie gotowe!</p>
        <p class="mt-1 font-light text-sm text-neutral-400">
          Jeszcze chwila i uzupełnisz swoje konto. W każdej chwili będziesz mógł
          zmienić dane.
        </p>
      </div>

      <div>
        <label class="field-label">Lokalizacja</label>
        <input
          v-model="onboarding.location.city"
          class="field-input"
          placeholder="Wybierz lokalizację"
        />
      </div>
      <!-- <div> -->
      <!-- <label class="field-label">Wiek</label> -->
      <div
        class="inline-flex rounded-2xl gap-x-2 border border-primary-100 bg-primary-50/60 p-4"
      >
        <!-- <input
            v-model="onboarding.location.ageRange[0]"
            type="range"
            min="18"
            max="60"
            class="w-full accent-[var(--color-primary-600)]"
          /> -->
        <!-- <div> -->
        <UIcon
          name="lucide:heart"
          class="size-6"
        />
        <!-- </div> -->
        <div class="mt-0.5 text-sm text-neutral-500">
          Dzięki kilku informacjom dobierzemy osoby i aktywności dopasowane do
          Ciebie.
        </div>
      </div>
      <!-- </div> -->
      <div>
        <NuxtLink
          to="/onboarding/step-2"
          class="base-btn secondary-btn"
        >
          Cofnij
        </NuxtLink>
        <AppPrimaryButton
          class="my-4"
          @click="finish"
        >
          Utwórz profil
        </AppPrimaryButton>
      </div>
    </div>
  </section>
</template>
