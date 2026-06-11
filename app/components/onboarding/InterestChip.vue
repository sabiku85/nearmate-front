<script setup lang="ts">
defineProps<{ label: string; selected?: boolean; icon?: string }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    class="flex items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition"
    :class="selected ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-neutral-200 bg-white text-neutral-700'"
    @click="$emit('toggle')"
  >
    <span class="flex size-7 items-center justify-center rounded-full bg-white/90 text-primary-500">
      <UIcon :name="icon ?? 'lucide:star'" class="text-sm" />
    </span>
    <span>{{ label }}</span>
  </button>
</template>
