<script setup lang="ts">
import AppBaseButton from "./AppBaseButton.vue";
</script>

<template>
  <AppBaseButton
    class="border border-neutral-200 bg-white text-neutral-700 hover:border-primary-200 hover:text-primary-700"
  >
    <slot />
  </AppBaseButton>
</template>
