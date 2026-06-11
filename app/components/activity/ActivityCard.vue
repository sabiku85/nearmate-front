<script setup lang="ts">
import { formatScheduleLabel, initials } from "~/utils/formatters";
import type { Activity } from "~~/shared/types/app";
import ActivityTagList from "~/components/activity/ActivityTagList.vue";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";

defineProps<{ activity: Activity; variant: "upcoming" | "new" }>();
defineEmits<{ join: [id: string]; sendInvitation: [id: string] }>();
</script>

<template>
  <UCard
    :ui="{
      root:
        variant === 'upcoming'
          ? 'overflow-hidden rounded-[20px] border-0 shadow-none'
          : 'rounded-[20px] border border-white/80 bg-white shadow-[0_14px_36px_rgba(29,19,59,0.08)]',
      body: 'p-4',
    }"
    :class="variant === 'upcoming' ? 'bg-[#dfeaf8]' : ''"
  >
    <div class="space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <UBadge
            v-if="variant === 'upcoming'"
            color="neutral"
            variant="solid"
            class="mb-3 rounded-full bg-white/70 px-4 py-1 text-[11px] font-bold tracking-[0.02em] text-neutral-700"
          >
            POTWIERDZONO
          </UBadge>

          <div
            class="flex items-center gap-3"
            v-if="variant === 'new'"
          >
            <UAvatar
              :text="initials(activity.creator.name)"
              size="md"
              class="rounded-full bg-neutral-100 text-xs font-bold text-neutral-700"
            />
            <NuxtLink :to="activity.id ? `/activities/${activity.id}` : '#'">
              <h3 class="text-lg font-bold tracking-[-0.03em] text-neutral-900">
                {{ activity.title }}
              </h3>
            </NuxtLink>
          </div>

          <div v-else>
            <NuxtLink :to="activity.id ? `/activities/${activity.id}` : '#'">
              <h3 class="text-xl font-bold tracking-[-0.03em] text-neutral-900">
                {{ activity.title }}
              </h3>
            </NuxtLink>
          </div>
        </div>

        <UBadge
          v-if="variant === 'new'"
          color="neutral"
          variant="outline"
          class="shrink-0 rounded-full border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500"
        >
          {{ Math.max(0, 8 - activity.participantsCount) }} wolne miejsca
        </UBadge>
      </div>

      <div class="space-y-2 text-sm text-neutral-600">
        <div class="flex items-center gap-2">
          <UIcon
            name="lucide:calendar"
            class="size-4 text-neutral-500"
          />
          <span>{{ formatScheduleLabel(activity.date) }}</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon
            name="lucide:map-pin"
            class="size-4 text-neutral-500"
          />
          <span>{{ activity.location }}</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon
            name="lucide:users"
            class="size-4 text-neutral-500"
          />
          <span>{{ activity.participantsCount }} osób</span>
        </div>
      </div>

      <AppPrimaryButton
        :disabled="variant === 'new' && activity.isJoined"
        @click="
          variant === 'new'
            ? $emit('join', activity.id)
            : $emit('sendInvitation', activity.id)
        "
      >
        {{
          variant === "new"
            ? activity.isJoined
              ? "Dołączono"
              : "Dołącz do aktywności"
            : "Akceptuj"
        }}
      </AppPrimaryButton>
    </div>
  </UCard>
</template>
