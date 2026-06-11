<script setup lang="ts">
import { useChatStore } from "~~/stores/chat";
import AppLogo from "~/components/layout/AppLogo.vue";

const chatStore = useChatStore();
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <AppLogo />
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/chat"
          class="relative flex size-9 items-center justify-center rounded-full text-neutral-900 transition hover:text-primary-700"
        >
          <UIcon
            name="lucide:bell"
            class="size-5"
          />
          <span
            v-if="chatStore.unreadTotal"
            class="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary-600"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
