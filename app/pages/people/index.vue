<script setup lang="ts">
import { useActivitiesStore } from "~~/stores/activities";
import { useDiscoveryStore } from "~~/stores/discovery";
import { useInvitationsStore } from "~~/stores/invitations";

definePageMeta({ middleware: "auth" });

const discovery = useDiscoveryStore();
const invitationsStore = useInvitationsStore();
const activities = useActivitiesStore();

function accept(id: string) {
  const conversationId = invitationsStore.accept(id);
  if (conversationId) navigateTo(`/chat/${conversationId}`);
}
</script>

<template>
  <section class="space-y-7 pb-24">
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <h1 class="text-xl font-bold text-neutral-900">
          Poznaj nowych znajomych
        </h1>
        <span
          class="inline-flex size-5 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-normal text-neutral-900"
        >
          {{ discovery.filteredPeople.length }}
        </span>
      </div>

      <div class="relative">
        <UIcon
          name="lucide:search"
          class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
        />
        <input
          v-model="discovery.searchQuery"
          class="field-input pl-11"
          placeholder="Szukaj po nazwie lub zainteresowaniu"
        />
      </div>

      <div class="flex items-center justify-between text-sm font-semibold">
        <UButton
          type="button"
          variant="link"
          class="text-neutral-800 transition hover:text-primary-700 cursor-pointer"
        >
          Sortuj
        </UButton>
        <UButton
          type="button"
          variant="link"
          class="text-neutral-800 transition hover:text-primary-700 cursor-pointer"
        >
          Filtruj
        </UButton>
      </div>
    </div>

    <div class="space-y-3">
      <UserCard
        v-for="person in discovery.filteredPeople"
        :key="person.id"
        :user="person"
        compact
        @invite="invitationsStore.sendToUser($event)"
      />
    </div>

    <FeedSection
      title="Zaproszenia"
      more-route="/chat"
      :unread-total="invitationsStore.incoming.length"
    >
      <InvitationCard
        v-for="invitation in invitationsStore.incoming"
        :key="invitation.id"
        :invitation="invitation"
        @accept="accept"
        @decline="invitationsStore.decline"
      />
    </FeedSection>

    <FeedSection
      title="Nowe aktywności"
      more-route="/activities?tab=new"
      :unread-total="activities.newActivities.length"
    >
      <ActivityCard
        v-for="activity in activities.newActivities"
        :key="activity.id"
        :activity="activity"
        variant="new"
        @join="activities.joinActivity"
      />
    </FeedSection>
  </section>
</template>
