<script setup lang="ts">
defineProps<{
  title: string;
  moreRoute?: string;
  // linkTo?: string;
  unreadTotal?: number;
}>();
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <h2 class="text-xl font-bold text-neutral-900">{{ title }}</h2>
        <span
          class="inline-flex size-5 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-normal text-neutral-900"
        >
          {{ unreadTotal || 0 }}
        </span>
      </div>
      <NuxtLink
        v-if="moreRoute"
        :to="moreRoute"
        class="text-sm font-semibold text-neutral-800 transition hover:text-primary-700"
      >
        Więcej
      </NuxtLink>
    </div>
    <div class="space-y-3">
      <slot />
    </div>
  </section>
</template>
