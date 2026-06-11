<script setup lang="ts">
import { formatRelativeDate, initials } from "~/utils/formatters";
import { useChatStore } from "~~/stores/chat";
import { useInvitationsStore } from "~~/stores/invitations";

definePageMeta({ middleware: "auth" });

const chatStore = useChatStore();
const invitations = useInvitationsStore();
const searchQuery = ref("");

const filteredConversations = computed(() =>
  chatStore.conversations.filter(
    (conversation) =>
      conversation.participant.name
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      (conversation.lastMessage?.text ?? "")
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()),
  ),
);

function accept(id: string) {
  const conversationId = invitations.accept(id);
  if (conversationId) navigateTo(`/chat/${conversationId}`);
}
</script>

<template>
  <section class="w-full surface-card p-5">
    <h1 class="section-title mb-5">Wiadomości</h1>

    <div class="mb-4 grid grid-cols-2 gap-2 rounded-[20px] bg-neutral-100 p-1">
      <button
        class="rounded-[16px] px-4 py-3 text-sm font-semibold"
        :class="
          chatStore.chatTab === 'conversations'
            ? 'bg-white text-neutral-900 shadow-sm'
            : 'text-neutral-500'
        "
        @click="chatStore.chatTab = 'conversations'"
      >
        Rozmowy
      </button>
      <button
        class="rounded-[16px] px-4 py-3 text-sm font-semibold"
        :class="
          chatStore.chatTab === 'invitations'
            ? 'bg-white text-neutral-900 shadow-sm'
            : 'text-neutral-500'
        "
        @click="chatStore.chatTab = 'invitations'"
      >
        Zaproszenia
      </button>
    </div>

    <input
      v-model="searchQuery"
      class="field-input mb-4"
      placeholder="Szukaj"
    />

    <div
      v-if="chatStore.chatTab === 'conversations'"
      class="space-y-3"
    >
      <NuxtLink
        v-for="conversation in filteredConversations"
        :key="conversation.id"
        :to="`/chat/${conversation.id}`"
        class="soft-card flex items-center gap-3 p-4"
      >
        <div
          class="relative flex size-12 items-center justify-center rounded-full bg-neutral-100 font-semibold text-neutral-700"
        >
          {{ initials(conversation.participant.name) }}
          <span
            v-if="conversation.isOnline"
            class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-500"
          />
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex items-start justify-between gap-3">
            <p class="font-semibold text-neutral-900">
              {{ conversation.participant.name }}
            </p>
            <p class="text-xs text-neutral-400">
              {{ formatRelativeDate(conversation.lastMessage?.sentAt) }}
            </p>
          </div>
          <p class="truncate text-sm text-neutral-500">
            {{ conversation.lastMessage?.text ?? "Brak wiadomości" }}
          </p>
        </div>
        <span
          v-if="conversation.unreadCount"
          class="flex size-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"
        >
          {{ conversation.unreadCount }}
        </span>
      </NuxtLink>
    </div>

    <div
      v-else
      class="space-y-3"
    >
      <InvitationCard
        v-for="invitation in invitations.incoming"
        :key="invitation.id"
        :invitation="invitation"
        @accept="accept"
        @decline="invitations.decline"
      />
    </div>
  </section>
</template>
