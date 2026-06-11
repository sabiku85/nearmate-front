<script setup lang="ts">
import { useActivitiesStore } from "~~/stores/activities";
import { useAuthStore } from "~~/stores/auth";
import { useInvitationsStore } from "~~/stores/invitations";
import GreetingBanner from "~/components/feed/GreetingBanner.vue";

definePageMeta({ middleware: ["auth", "onboarding"] });

const auth = useAuthStore();
const activities = useActivitiesStore();
const invitations = useInvitationsStore();
const invitationsStore = useInvitationsStore();

function accept(id: string) {
  const conversationId = invitations.accept(id);
  if (conversationId) navigateTo(`/chat/${conversationId}`);
}
</script>

<template>
  <section class="space-y-7 pb-24">
    <GreetingBanner
      :user-name="auth.user?.name ?? 'Karolina'"
      :onboarding-complete="auth.isOnboardingComplete"
      :skipped-onboarding-at="auth.user?.skippedOnboardingAt"
    />

    <FeedSection
      title="Nadchodzące aktywności"
      more-route="/activities?tab=upcoming"
      :unread-total="activities.upcoming.length"
    >
      <div
        class="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none px-1 pb-1"
      >
        <div
          v-for="activity in activities.upcoming"
          :key="activity.id"
          class="min-w-[78%] snap-start"
        >
          <ActivityCard
            :activity="activity"
            variant="upcoming"
            @send-invitation="invitationsStore.sendToActivity($event)"
          />
        </div>
      </div>
    </FeedSection>

    <FeedSection
      title="Zaproszenia"
      more-route="/chat"
      :unread-total="invitations.incoming.length"
    >
      <InvitationCard
        v-for="invitation in invitations.incoming"
        :key="invitation.id"
        :invitation="invitation"
        @accept="accept"
        @decline="invitations.decline"
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
