<script setup lang="ts">
const props = defineProps<{ step: 1 | 2 | 3; skipLabel?: string }>();
const emit = defineEmits<{ skip: [] }>();
const percentage = computed(() => ({ 1: 33, 2: 67, 3: 96 })[props.step]);
</script>

<template>
  <div class="mb-6 space-y-2">
    <div
      class="flex items-center justify-between gap-3 text-sm font-semibold text-neutral-500"
    >
      <span>Krok {{ step }} z 3</span>
      <span>{{ percentage }}%</span>
    </div>
    <div class="h-2 rounded-full bg-neutral-100">
      <div
        class="h-2 rounded-full bg-linear-[118.35deg,#801AAF_2.88%,#542CCC_89.57%] transition-all"
        :style="{ width: `${percentage}%` }"
      />
    </div>
    <div class="flex justify-end">
      <UButton
        v-if="step <= 3"
        type="button"
        variant="link"
        class="text-xs font-normal text-neutral-400 hover:text-neutral-500 hover:cursor-pointer"
        @click="emit('skip')"
      >
        {{ skipLabel ?? "Uzupełnij profil później" }}
      </UButton>
    </div>
  </div>
</template>
