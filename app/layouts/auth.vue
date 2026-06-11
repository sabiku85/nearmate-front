<script setup
        lang="ts">
        import AppLogo from '~/components/layout/AppLogo.vue'
</script>

<template>
  <div class="page-shell">
    <div class="auth-shell">
      <div class="auth-card">
        <div class="mb-8 flex justify-center">
          <AppLogo />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
