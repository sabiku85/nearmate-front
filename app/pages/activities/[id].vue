<script setup lang="ts">
import { formatDate } from "~/utils/formatters";
import { useActivitiesStore } from "~~/stores/activities";
import { useInvitationsStore } from "~~/stores/invitations";
import AppPrimaryButton from "~~/app/components/layout/AppPrimaryButton.vue";
import AppSecondaryButton from "~~/app/components/layout/AppSecondaryButton.vue";
import ActivityTagList from "~~/app/components/activity/ActivityTagList.vue";

definePageMeta({ middleware: "auth" });
const route = useRoute();
const activities = useActivitiesStore();
const invitationsStore = useInvitationsStore();
const activity = computed(() =>
  activities.items.find((item) => item.id === route.params.id),
);
</script>

<template>
  <section
    v-if="activity"
    class="surface-card space-y-7 p-6"
  >
    <ActivityTagList :tags="activity.tags" />
    <h1 class="mt-4 text-3xl font-semibold tracking-[-0.04em] text-neutral-900">
      {{ activity.title }}
    </h1>
    <p class="mt-3 text-neutral-600">{{ activity.description }}</p>
    <div class="mt-6 grid gap-4 text-sm text-neutral-500 sm:grid-cols-2">
      <div class="soft-card p-4">Termin: {{ formatDate(activity.date) }}</div>
      <div class="soft-card p-4">Miejsce: {{ activity.location }}</div>
      <div class="soft-card p-4">Twórca: {{ activity.creator.name }}</div>
      <div class="soft-card p-4">
        Uczestnicy: {{ activity.participantsCount }}
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-2">
      <AppPrimaryButton
        :disabled="activity.isJoined"
        @click="activities.joinActivity(activity.id)"
      >
        {{ activity.isJoined ? "Dołączono" : "Dołącz do aktywności" }}
      </AppPrimaryButton>
      <AppSecondaryButton @click="invitationsStore.sendToActivity(activity.id)">
        Wyślij zaproszenie
      </AppSecondaryButton>
    </div>
  </section>
</template>
