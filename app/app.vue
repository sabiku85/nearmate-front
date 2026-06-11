<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";

const auth = useAuthStore();

await auth.bootstrap();

useHead({
  htmlAttrs: {
    lang: "pl",
  },
  title: "nearMate",
});
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div
      v-if="!auth.isBooted"
      class="flex min-h-screen items-center justify-center"
    >
      <div class="surface-card h-32 w-32 animate-pulse" />
    </div>
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
