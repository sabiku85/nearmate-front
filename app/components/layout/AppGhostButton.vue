<script setup lang="ts">
import AppBaseButton from "./AppBaseButton.vue";
</script>

<template>
  <AppBaseButton
    variant="outline"
    class="text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
  >
    <slot />
  </AppBaseButton>
</template>
