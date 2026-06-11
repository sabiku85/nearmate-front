<script setup lang="ts">
import { getGreeting } from "~/utils/formatters";

const props = defineProps<{
  userName: string;
  onboardingComplete: boolean;
  skippedOnboardingAt?: string | null;
}>();
</script>

<template>
  <section class="space-y-8">
    <UCard
      :ui="{
        root: 'overflow-hidden rounded-[18px] border-0 shadow-[0_22px_40px_rgba(83,42,204,0.28)]',
        body: 'p-5 sm:p-6',
      }"
      class="rounded-[10px] bg-linear-[118.35deg,#801AAF_2.88%,#542CCC_89.57%] text-white shadow-[0_18px_44px_rgba(94,45,180,0.28)]"
    >
      <div class="space-y-4">
        <div>
          <h1 class="text-xl font-bold tracking-[-0.04em]">
            {{ getGreeting() }}, {{ userName.split(" ")[0] }}! 👋
          </h1>
          <p class="mt-1 text-sm font-normal text-white/88">
            Jesteś gotowa na nowe znajomości?
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/people"
            class="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-normal text-white hover:bg-neutral-800"
          >
            Szukaj nowych znajomych
          </NuxtLink>

          <UButton
            v-if="!props.onboardingComplete"
            to="/onboarding/step-1"
            color="neutral"
            variant="soft"
            size="lg"
            class="rounded-xl bg-white/14 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20"
          >
            Uzupełnij profil
          </UButton>
        </div>
      </div>
    </UCard>
  </section>
</template>
