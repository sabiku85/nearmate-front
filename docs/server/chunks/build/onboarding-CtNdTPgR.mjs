import { C as getMockInterestsByCategory, D as getMockInterestCategories } from './server.mjs';
import { defineStore } from 'pinia';

const useOnboardingStore = defineStore("onboarding", {
  state: () => ({
    lastCompletedStep: 0,
    profile: {
      name: "",
      bio: "",
      avatarFile: null,
      avatarPreviewUrl: null
    },
    interests: {
      categories: getMockInterestCategories(),
      selectedCategory: "Sport",
      selectedIds: [],
      categoryCache: {}
    },
    location: {
      city: "Warszawa",
      ageRange: [24, 34]
    }
  }),
  actions: {
    loadCategoryInterests(category) {
      if (!this.interests.categoryCache[category]) {
        this.interests.categoryCache[category] = getMockInterestsByCategory(category);
      }
      this.interests.selectedCategory = category;
    },
    toggleInterest(id) {
      if (this.interests.selectedIds.includes(id)) {
        this.interests.selectedIds = this.interests.selectedIds.filter(
          (item) => item !== id
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
        avatarPreviewUrl: null
      };
      this.interests.selectedIds = [];
      this.location = { city: "Warszawa", ageRange: [24, 34] };
    }
  }
});

export { useOnboardingStore as u };
//# sourceMappingURL=onboarding-CtNdTPgR.mjs.map
