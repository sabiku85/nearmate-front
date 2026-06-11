<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useAuthStore } from "~~/stores/auth";
import { useOnboardingStore } from "~~/stores/onboarding";
import AppPrimaryButton from "~/components/layout/AppPrimaryButton.vue";
import OnboardingProgress from "~/components/onboarding/OnboardingProgress.vue";

definePageMeta({ layout: "onboarding-steps", middleware: "auth" });

const onboarding = useOnboardingStore();
const auth = useAuthStore();
// const fileInput = ref<HTMLInputElement>();
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const MIN_DIMENSIONS = { width: 200, height: 200 };
const MAX_DIMENSIONS = { width: 4096, height: 4096 };
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

function goNext() {
  onboarding.saveStep1();
  navigateTo("/onboarding/step-2");
}

function skip() {
  auth.skipOnboarding();
  onboarding.skip();
  navigateTo("/");
}

// function handleFile(event: Event) {
//   const target = event.target as HTMLInputElement;
//   const file = target.files?.[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       onboarding.profile.avatar = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);
//   }
// }

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  );
};

const schema = z.object({
  image: z
    .instanceof(File, {
      message: "Wybierz zdjęcie, które chcesz przesłać.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: `Zdjęcie jest zbyt duże. Wybierz zdjęcie mniejsze niż ${formatBytes(MAX_FILE_SIZE)}.`,
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message:
        "Prześlij zdjęcie w jednym z obsługiwanych formatów (JPEG, PNG, or WebP).",
    })
    .refine(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const meetsDimensions =
                img.width >= MIN_DIMENSIONS.width &&
                img.height >= MIN_DIMENSIONS.height &&
                img.width <= MAX_DIMENSIONS.width &&
                img.height <= MAX_DIMENSIONS.height;
              resolve(meetsDimensions);
            };
            img.src = e.target?.result as string;
          };
          reader.readAsDataURL(file);
        }),
      {
        message: `Wymiary zdjęcia są nieprawidłowe. Prześlij zdjęcie o wymiarach między ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} a ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pikseli.`,
      },
    ),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  image: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>

<template>
  <section class="mobile-app-frame w-full">
    <OnboardingProgress
      :step="1"
      @skip="skip"
    />
    <div class="mb-6 mt-8">
      <p class="screen-title font-semibold text-base">Uzupełnij swój profil</p>
      <!-- <p class="mt-1 font-light text-sm text-neutral-400">
        Wybierz swoje zainteresowania z listy
      </p> -->
    </div>
    <div class="mb-6 flex flex-col items-center">
      <div
        class="relative mb-4 flex size-32 items-center justify-center rounded-full bg-linear-[118.35deg,#801AAF_2.88%,#542CCC_89.57%] text-white"
      >
        <UAvatar
          v-if="onboarding?.profile?.avatarPreviewUrl"
          :src="onboarding.profile.avatarPreviewUrl"
          icon="lucide:user"
          :alt="onboarding.profile.name || 'Avatar'"
          class="size-32 rounded-full object-cover"
        />
        <UIcon
          v-else
          name="lucide:user"
          class="text-6xl"
        />

        <UForm
          :schema="schema"
          :state="state"
          @submit="onSubmit"
        >
          <UFormField
            name="image"
            class="absolute bottom-0 right-0 flex items-center justify-center size-9"
          >
            <UFileUpload
              variant="button"
              accept="image/*"
              :ui="{
                base: 'rounded-full bg-white text-primary-600 hover:bg-neutral-100 hover:cursor-pointer shadow-md',
              }"
            />
          </UFormField>

          <UButton
            type="submit"
            label="Submit"
            color="neutral"
            class="hidden"
          />
        </UForm>

        <!-- <UInput
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="handleFile"
          class="hidden"
        /> -->
      </div>
      <!-- <div
        v-else
        class="relative mb-4 flex size-32 items-center justify-center rounded-full bg-linear-[118.35deg,#801AAF_2.88%,#542CCC_89.57%] text-white"
      >
        <UIcon
          name="lucide:user"
          class="text-6xl"
        />
        <UButton
          class="absolute bottom-0 right-0 flex size-9 items-center justify-center rounded-full bg-white text-primary-600 hover:bg-neutral-100 hover:cursor-pointer shadow-md"
        >
          <UIcon
            name="lucide:upload"
            class="size-5"
          />
        </UButton>
      </div> -->
    </div>

    <!-- <UFileUpload
      variant="button"
      class="size-9"
      :ui="{
        base: 'rounded-full bg-white text-primary-600 hover:bg-neutral-100 hover:cursor-pointer shadow-md',
      }"
    /> -->

    <UForm
      class="space-y-4"
      @submit="goNext"
    >
      <div>
        <UFormField
          name="bio"
          label="Napisz o sobie"
        >
          <UTextarea
            v-model="onboarding.profile.bio"
            id="user-bio"
            name="user-bio"
            class="w-full autoresize"
            placeholder="Napisz kilka słów o sobie, Twoich zainteresowaniach i jakie masz cele"
            autofocus
          />
        </UFormField>
      </div>
      <AppPrimaryButton
        type="submit"
        class="my-4"
      >
        Przejdź dalej
      </AppPrimaryButton>
    </UForm>
  </section>
</template>
