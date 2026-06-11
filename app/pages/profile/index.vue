<script setup lang="ts">
import { initials } from '~/utils/formatters'
import { useActivitiesStore } from '~~/stores/activities'
import { useAuthStore } from '~~/stores/auth'
import { useInvitationsStore } from '~~/stores/invitations'

definePageMeta({ middleware: 'auth' })
const auth = useAuthStore()
const activities = useActivitiesStore()
const invitationsStore = useInvitationsStore()
</script>

<template>
  <div v-if="auth.user" class="surface-card p-6">
    <div class="flex flex-col items-center gap-4 border-b border-neutral-200 pb-6 text-center">
      <div class="flex size-24 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-700">
        {{ initials(auth.user.name) }}
      </div>
      <div>
        <h1 class="text-3xl font-semibold tracking-[-0.04em] text-neutral-900">{{ auth.user.name }}</h1>
        <p class="mt-2 text-neutral-500">{{ auth.user.city }} · {{ auth.user.age }} lat</p>
      </div>
    </div>

    <section class="mt-6">
      <h2 class="text-lg font-semibold text-neutral-900">O mnie</h2>
      <p class="mt-2 text-neutral-600">{{ auth.user.bio }}</p>
    </section>

    <section class="mt-6">
      <h2 class="text-lg font-semibold text-neutral-900">Zainteresowania</h2>
      <div class="mt-3 flex flex-wrap gap-2">
        <span v-for="interest in auth.user.interests" :key="interest.id" class="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
          {{ interest.name }}
        </span>
      </div>
    </section>

    <section class="mt-6">
      <h2 class="text-lg font-semibold text-neutral-900">Moje aktywności</h2>
      <div class="mt-3 space-y-3">
        <ActivityCard v-for="activity in activities.mine" :key="activity.id" :activity="activity" variant="upcoming" @send-invitation="invitationsStore.sendToActivity($event)" />
      </div>
    </section>
  </div>
</template>
