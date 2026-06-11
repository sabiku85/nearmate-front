<script setup lang="ts">
import { useChatStore } from "~~/stores/chat";

const route = useRoute();
const chatStore = useChatStore();

const links = [
  { label: "", to: "/", icon: "lucide:home" },
  { label: "", to: "/activities", icon: "lucide:calendar-1" },
  { label: "", to: "/people", icon: "lucide:plus" },
  { label: "", to: "/chat", icon: "lucide:message-circle-more" },
  { label: "", to: "/profile", icon: "lucide:user" },
];
</script>

<template>
  <nav
    class="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-full items-end justify-between rounded-t-[24px] px-3 bg-[#EEE9FF]/45 md:hidden"
  >
    <div
      class="absolute bottom-0 left-0 right-0 h-full bg-[#EEE9FF] cutout-container"
    >
      <svg
        width="0"
        height="0"
        style="position: absolute"
      >
        <defs>
          <clipPath
            id="smooth-cutout"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="M 0,0 
               L 0.38,0 
               C 0.47,0 0.42,0.63 0.5,0.63 
               S 0.54,0 0.62,0 
               L 1,0 1,1 0,1 Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>

    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="nav-link relative flex-1"
      :class="route.path === link.to ? 'nav-link-active' : ''"
    >
      <span
        class="flex size-10 items-center justify-center rounded-full"
        :class="
          link.to === '/people'
            ? 'bg-primary-600 text-white shadow-[2px_10px_18px_0px_rgba(95,51,225,0.49)] -translate-y-5'
            : ''
        "
      >
        <UIcon
          :name="link.icon"
          class="text-2xl"
        />
      </span>
      <span v-if="link.label">{{ link.label }}</span>
      <span
        v-if="link.to === '/chat' && chatStore.unreadTotal"
        class="absolute right-3 top-1 flex size-4 items-center justify-center rounded-full bg-primary-600 text-[9px] text-white"
      >
        {{ chatStore.unreadTotal }}
      </span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.cutout-container {
  clip-path: url(#smooth-cutout);
}
</style>
