<script setup lang="ts">
import { formatTime, initials } from "~/utils/formatters";
import { useAuthStore } from "~~/stores/auth";
import { useChatStore } from "~~/stores/chat";
import { useChatTransport } from "~~/app/composables/useChatTransport";
import AppPrimaryButton from "~~/app/components/layout/AppPrimaryButton.vue";

definePageMeta({ middleware: "auth" });

const route = useRoute();
const auth = useAuthStore();
const chatStore = useChatStore();
const conversation = computed(() =>
  chatStore.conversations.find((item) => item.id === route.params.id),
);
const messages = computed(
  () => chatStore.messages[String(route.params.id)] ?? [],
);
const filteredMessages = computed(() =>
  chatStore.threadSearchQuery
    ? messages.value.filter((message) =>
        message.text
          .toLowerCase()
          .includes(chatStore.threadSearchQuery.toLowerCase()),
      )
    : messages.value,
);

const text = ref("");
const transport = useChatTransport(String(route.params.id));

onMounted(() => {
  chatStore.markAsRead(String(route.params.id));
  transport.connect();
});

onUnmounted(() => {
  transport.disconnect();
});

function send() {
  transport.send(text.value);
  text.value = "";
}
</script>

<template>
  <div
    v-if="conversation"
    class="surface-card overflow-hidden"
  >
    <div class="border-b border-neutral-200 px-5 py-4">
      <NuxtLink
        to="/chat"
        class="mb-4 inline-flex text-sm font-semibold text-neutral-500"
        >Powrót</NuxtLink
      >
      <div class="flex items-center gap-3">
        <div
          class="relative flex size-12 items-center justify-center rounded-full bg-neutral-100 font-semibold text-neutral-700"
        >
          {{ initials(conversation.participant.name) }}
          <span
            v-if="conversation.isOnline"
            class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-500"
          />
        </div>
        <div>
          <p class="font-semibold text-neutral-900">
            {{ conversation.participant.name }}
          </p>
          <p
            class="text-sm text-emerald-600"
            v-if="conversation.isOnline"
          >
            Online
          </p>
        </div>
      </div>
    </div>

    <div class="px-5 py-4">
      <input
        v-model="chatStore.threadSearchQuery"
        class="field-input"
        placeholder="Szukaj w rozmowie"
      />
    </div>

    <div class="space-y-4 bg-white px-5 py-2">
      <div
        v-for="message in filteredMessages"
        :key="message.id"
        class="max-w-[78%] rounded-[22px] px-4 py-3"
        :class="
          message.senderId === auth.user?.id
            ? 'ml-auto rounded-br-md bg-neutral-900 text-white'
            : 'rounded-bl-md bg-neutral-100 text-neutral-900'
        "
      >
        <p class="whitespace-pre-line text-base">{{ message.text }}</p>
        <p
          class="mt-2 text-sm"
          :class="
            message.senderId === auth.user?.id
              ? 'text-white/70'
              : 'text-neutral-400'
          "
        >
          {{ formatTime(message.sentAt) }}
        </p>
      </div>
    </div>

    <div class="border-t border-neutral-200 px-5 py-4">
      <div class="flex gap-3">
        <input
          v-model="text"
          class="field-input"
          placeholder="Napisz wiadomość..."
          @keyup.enter="send"
        />
        <AppPrimaryButton
          class=""
          @click="send"
        >
          Wyślij
        </AppPrimaryButton>
      </div>
    </div>
  </div>
</template>
