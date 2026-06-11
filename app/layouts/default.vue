<script setup lang="ts">
import { useDiscoveryStore } from "~~/stores/discovery";
import { useInvitationsStore } from "~~/stores/invitations";
import AppHeader from "~/components/layout/AppHeader.vue";
import AppBottomNav from "~/components/layout/AppBottomNav.vue";

const discoveryStore = useDiscoveryStore();
const invitationsStore = useInvitationsStore();
</script>

<template>
  <div class="page-shell pb-28 md:pb-10">
    <div class="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
      <AppHeader />
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px] pt-16">
        <main
          class="mobile-app-frame w-full min-w-0 max-w-none lg:mx-0 lg:max-w-none"
        >
          <slot />
        </main>
        <aside class="hidden lg:block">
          <div class="surface-card sticky top-6 p-5">
            <h2
              class="text-xl font-semibold tracking-[-0.03em] text-neutral-900"
            >
              Poznaj nowych znajomych
            </h2>
            <p class="mt-2 text-sm text-neutral-500">
              Szybki podgląd dopasowań z najbliższego otoczenia.
            </p>
            <div class="mt-4 space-y-3">
              <UserCard
                v-for="person in discoveryStore.filteredPeople.slice(0, 3)"
                :key="person.id"
                :user="person"
                @invite="invitationsStore.sendToUser($event)"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
    <AppBottomNav />
  </div>
</template>
