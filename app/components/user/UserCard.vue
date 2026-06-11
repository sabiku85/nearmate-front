<script setup lang="ts">
import { initials } from "~/utils/formatters";
import type { User } from "~~/shared/types/app";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";

withDefaults(defineProps<{ user: User; compact?: boolean }>(), {
  compact: false,
});
defineEmits<{ invite: [id: string] }>();

function formatRating(rating?: number) {
  return (rating ?? 4.9).toFixed(1).replace(".", ",");
}
</script>

<template>
  <article class="soft-card p-4">
    <div class="flex items-start gap-3">
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-700"
      >
        {{ initials(user.name) }}
      </div>
      <div class="min-w-0 flex-1">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="font-semibold text-neutral-900">
              {{ user.name }}, {{ user.age }} lat
            </p>
            <div class="mt-1 flex items-center gap-1 text-xs text-neutral-500">
              <UIcon
                name="lucide:map-pin"
                class="size-3.5 shrink-0"
              />
              <span>{{
                user.distanceKm ? `${user.distanceKm} km` : user.city
              }}</span>
            </div>
          </div>
          <span
            class="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-neutral-700"
          >
            <UIcon
              name="lucide:star"
              class="size-3.5 text-primary-500"
            />
            {{ formatRating(user.rating) }}
          </span>
        </div>

        <span
          v-if="compact && user.compatibilityScore"
          class="status-pill mt-3 bg-primary-50/60"
        >
          <UIcon
            name="lucide:heart"
            class="size-3"
          />
          {{ user.compatibilityScore }}% dopasowanie
        </span>

        <p class="mt-3 text-sm leading-relaxed text-neutral-600">
          {{ user.bio }}
        </p>

        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="interest in user.interests.slice(0, 3)"
            :key="interest.id"
            class="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600"
          >
            {{ interest.name }}
          </span>
        </div>

        <p
          v-if="compact && user.mutualFriendsCount"
          class="mt-3 text-xs text-neutral-400"
        >
          {{ user.mutualFriendsCount }} wspólnych znajomych
        </p>

        <div
          v-if="!compact"
          class="mt-4 flex gap-2"
        >
          <NuxtLink
            :to="`/profile/${user.id}`"
            class="base-btn secondary-btn flex-1"
          >
            Profil
          </NuxtLink>
          <AppPrimaryButton
            class="flex-1 px-3 py-2 text-xs"
            @click="$emit('invite', user.id)"
          >
            Wyślij zaproszenie
          </AppPrimaryButton>
        </div>
      </div>
    </div>

    <AppPrimaryButton
      v-if="compact"
      class="mt-4 gap-2"
      @click="$emit('invite', user.id)"
    >
      <UIcon
        name="lucide:heart"
        class="size-4"
      />
      Wyślij zaproszenie
    </AppPrimaryButton>
  </article>
</template>
