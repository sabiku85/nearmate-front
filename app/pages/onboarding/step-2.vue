<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";
import { useOnboardingStore } from "~~/stores/onboarding";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";
import InterestChip from "~/components/onboarding/InterestChip.vue";

definePageMeta({ layout: "onboarding-steps", middleware: "auth" });

const onboarding = useOnboardingStore();
const auth = useAuthStore();
onboarding.loadCategoryInterests(onboarding.interests.selectedCategory);

const visibleInterests = computed(
  () =>
    onboarding.interests.categoryCache[onboarding.interests.selectedCategory] ??
    [],
);

function skip() {
  auth.skipOnboarding();
  onboarding.skip();
  navigateTo("/");
}

function next() {
  onboarding.saveStep2();
  navigateTo("/onboarding/step-3");
}
</script>

<template>
  <section class="mobile-app-frame w-full">
    <OnboardingProgress
      :step="2"
      @skip="skip"
    />
    <div class="space-y-4">
      <div class="mb-6 mt-8">
        <p class="screen-title font-semibold text-base">
          Wybierz zainteresowania
        </p>
        <p class="mt-1 font-light text-sm text-neutral-400">
          Wybierz swoje zainteresowania z listy
        </p>
      </div>
      <div>
        <!-- <USelect v-model="onboarding.interests.selectedCategory" multiple :items="items" class="w-48" /> -->

        <label class="field-label">Wybierz</label>
        <select
          v-model="onboarding.interests.selectedCategory"
          class="field-input"
          @change="
            onboarding.loadCategoryInterests(
              onboarding.interests.selectedCategory,
            )
          "
        >
          <option
            value=""
            disabled
          >
            Wybierz kategorię
          </option>
          <option
            v-for="category in onboarding.interests.categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="grid gap-2">
        <InterestChip
          v-for="interest in visibleInterests"
          :key="interest.id"
          :label="interest.name"
          :icon="interest.icon"
          :selected="onboarding.interests.selectedIds.includes(interest.id)"
          @toggle="onboarding.toggleInterest(interest.id)"
        />
      </div>

      <div class="w-full flex justify-center">
        <UButton
          type="button"
          variant="link"
          class="text-xs font-normal text-neutral-400 hover:text-neutral-500 hover:cursor-pointer"
        >
          Pokaż więcej
        </UButton>
      </div>

      <div>
        <NuxtLink
          to="/onboarding/step-1"
          class="base-btn secondary-btn"
        >
          Cofnij
        </NuxtLink>
        <AppPrimaryButton
          type="button"
          class="my-4"
          @click="next"
        >
          Kontynuuj
        </AppPrimaryButton>
      </div>
    </div>
  </section>
</template>
