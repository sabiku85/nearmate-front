<script setup lang="ts">
import AppBaseButton from "./AppBaseButton.vue";
</script>

<template>
  <AppBaseButton
    class="w-full bg-primary-500 text-neutral-50 hover:bg-primary-700 disabled:bg-primary-300"
  >
    <slot />
  </AppBaseButton>
</template>
