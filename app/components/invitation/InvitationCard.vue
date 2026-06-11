<script setup lang="ts">
import { initials } from "~/utils/formatters";
import AppPrimaryButton from "../layout/AppPrimaryButton.vue";
import AppGhostButton from "../layout/AppGhostButton.vue";
import type { Invitation } from "~~/shared/types/app";

defineProps<{ invitation: Invitation }>();
defineEmits<{ accept: [id: string]; decline: [id: string] }>();
</script>

<template>
  <UCard
    :ui="{
      root: 'rounded-[16px] bg-white ring-transparent shadow-[0_4px_32px_0px_rgba(0,0,0,0.04)]',
      body: 'p-4',
    }"
  >
    <div class="space-y-4">
      <div class="flex items-start gap-3">
        <UAvatar
          :text="initials(invitation.sender.name)"
          size="xl"
          class="rounded-full bg-neutral-100 text-sm font-bold text-neutral-700"
        />
        <div class="min-w-0 flex-1">
          <p class="truncate text-base font-bold text-neutral-900">
            {{ invitation.sender.name }}
          </p>
          <p class="text-xs text-neutral-400">
            {{ invitation.sender.mutualFriendsCount ?? 0 }} wspólnych znajomych
          </p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="tag in invitation.sender.profileTags?.slice(0, 2) ?? []"
          :key="tag"
          color="neutral"
          variant="outline"
        >
          {{ tag }}
        </UBadge>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <AppGhostButton @click="$emit('decline', invitation.id)">
          Odrzuć
        </AppGhostButton>
        <AppPrimaryButton @click="$emit('accept', invitation.id)">
          Akceptuj
        </AppPrimaryButton>
      </div>
    </div>
  </UCard>
</template>
