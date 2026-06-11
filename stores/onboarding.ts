import {
  getMockInterestCategories,
  getMockInterestsByCategory,
} from "~/data/mockDb";
import type { Interest } from "~~/shared/types/app";

export const useOnboardingStore = defineStore("onboarding", {
  state: () => ({
    lastCompletedStep: 0 as 0 | 1 | 2 | 3,
    profile: {
      name: "",
      bio: "",
      avatarFile: null as File | null,
      avatarPreviewUrl: null as string | null,
    },
    interests: {
      categories: getMockInterestCategories(),
      selectedCategory: "Sport",
      selectedIds: [] as string[],
      categoryCache: {} as Record<string, Interest[]>,
    },
    location: {
      city: "Warszawa",
      ageRange: [24, 34] as [number, number],
    },
  }),
  actions: {
    loadCategoryInterests(category: string) {
      if (!this.interests.categoryCache[category]) {
        this.interests.categoryCache[category] =
          getMockInterestsByCategory(category);
      }

      this.interests.selectedCategory = category;
    },
    toggleInterest(id: string) {
      if (this.interests.selectedIds.includes(id)) {
        this.interests.selectedIds = this.interests.selectedIds.filter(
          (item) => item !== id,
        );
        return;
      }

      this.interests.selectedIds.push(id);
    },
    saveStep1() {
      this.lastCompletedStep = 1;
    },
    saveStep2() {
      this.lastCompletedStep = 2;
    },
    saveStep3() {
      this.lastCompletedStep = 3;
    },
    skip() {
      this.lastCompletedStep = 0;
    },
    reset() {
      this.lastCompletedStep = 0;
      this.profile = {
        name: "",
        bio: "",
        avatarFile: null,
        avatarPreviewUrl: null,
      };
      this.interests.selectedIds = [];
      this.location = { city: "Warszawa", ageRange: [24, 34] };
    },
  },
});
