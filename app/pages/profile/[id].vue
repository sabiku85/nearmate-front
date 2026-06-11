<script setup lang="ts">
import { initials } from "~/utils/formatters";
import { useAuthStore } from "~~/stores/auth";
import { useDiscoveryStore } from "~~/stores/discovery";
import { useInvitationsStore } from "~~/stores/invitations";
import AppPrimaryButton from "~~/app/components/layout/AppPrimaryButton.vue";

definePageMeta({ middleware: "auth" });
const route = useRoute();
const auth = useAuthStore();
const discovery = useDiscoveryStore();
const invitationsStore = useInvitationsStore();
const person = computed(() =>
  discovery.people.find((item) => item.id === route.params.id),
);
const sharedInterests = computed(() =>
  (person.value?.interests ?? []).filter((interest) =>
    auth.user?.interests.some((own) => own.id === interest.id),
  ),
);
</script>

<template>
  <div
    v-if="person"
    class="surface-card p-6"
  >
    <div
      class="flex flex-col gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex items-center gap-4">
        <div
          class="flex size-20 items-center justify-center rounded-full bg-neutral-100 text-xl font-bold text-neutral-700"
        >
          {{ initials(person.name) }}
        </div>
        <div>
          <h1
            class="text-3xl font-semibold tracking-[-0.04em] text-neutral-900"
          >
            {{ person.name }}
          </h1>
          <p class="mt-1 text-neutral-500">
            {{ person.city }} · {{ person.age }} lat
          </p>
        </div>
      </div>
      <AppPrimaryButton @click="invitationsStore.sendToUser(person.id)">
        Wyślij zaproszenie
      </AppPrimaryButton>
    </div>

    <div class="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]">
      <div>
        <h2 class="text-lg font-semibold text-neutral-900">O mnie</h2>
        <p class="mt-2 text-neutral-600">{{ person.bio }}</p>

        <h2 class="mt-6 text-lg font-semibold text-neutral-900">
          Wspólne zainteresowania
        </h2>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="interest in sharedInterests"
            :key="interest.id"
            class="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700"
          >
            {{ interest.name }}
          </span>
        </div>
      </div>

      <div class="soft-card p-5">
        <p class="text-sm text-neutral-500">Dopasowanie</p>
        <p class="mt-2 text-4xl font-black tracking-[-0.05em] text-primary-700">
          {{ person.compatibilityScore }}%
        </p>
        <p class="mt-3 text-sm text-neutral-500">
          Profil pasuje do Twoich aktywności, lokalizacji i wspólnych
          zainteresowań.
        </p>
      </div>
    </div>
  </div>
</template>
