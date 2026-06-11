<script setup lang="ts">
defineProps<{ tags: string[] }>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <span v-for="tag in tags" :key="tag" class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
      {{ tag }}
    </span>
  </div>
</template>
