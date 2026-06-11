<template>
  <UButton
    :ui="{
      base: 'inline-flex items-center justify-center h-10 px-4 py-3 rounded-[10px] transition text-sm font-semibold cursor-pointer disabled:cursor-not-allowed',
    }"
  >
    <slot />
  </UButton>
</template>
