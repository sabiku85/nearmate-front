<script setup lang="ts">
import { useActivitiesStore } from "~~/stores/activities";
import { useInvitationsStore } from "~~/stores/invitations";

definePageMeta({ middleware: "auth" });
const route = useRoute();
const activities = useActivitiesStore();
const invitationsStore = useInvitationsStore();
const tab = computed(() => String(route.query.tab || "upcoming"));
</script>

<template>
  <div class="surface-card p-5 space-y-6 pt-16">
    <div class="mb-5 flex flex-wrap gap-2">
      <NuxtLink
        to="/activities?tab=upcoming"
        class="base-btn secondary-btn"
        :class="
          tab === 'upcoming' ? 'border-primary-400! text-primary-700!' : ''
        "
        >Nadchodzące</NuxtLink
      >
      <NuxtLink
        to="/activities?tab=new"
        class="base-btn secondary-btn"
        :class="tab === 'new' ? 'border-primary-400! text-primary-700!' : ''"
        >Nowe</NuxtLink
      >
      <NuxtLink
        to="/activities?tab=mine"
        class="base-btn secondary-btn"
        :class="tab === 'mine' ? 'border-primary-400! text-primary-700!' : ''"
        >Moje</NuxtLink
      >
    </div>

    <div class="space-y-3">
      <ActivityCard
        v-for="activity in tab === 'new'
          ? activities.newActivities
          : tab === 'mine'
            ? activities.mine
            : activities.upcoming"
        :key="activity.id"
        :activity="activity"
        :variant="tab === 'new' ? 'new' : 'upcoming'"
        @join="activities.joinActivity"
        @send-invitation="invitationsStore.sendToActivity($event)"
      />
    </div>
  </div>
</template>
