import { getMockCurrentUser } from "~/data/mockDb";
import type { User } from "~~/shared/types/app";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
    isBooted: false,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token),
    isOnboardingComplete: (state) => Boolean(state.user?.onboardingCompleted),
  },
  actions: {
    async bootstrap() {
      if (!this.token) {
        this.isBooted = true;
        return;
      }

      this.user = this.user ?? getMockCurrentUser();
      this.isBooted = true;
    },
    async login(identifier: string) {
      this.token = `demo-token:${identifier}`;
      this.user = getMockCurrentUser();
    },
    async register(payload: { name: string; nick: string; email: string }) {
      this.token = `demo-token:${payload.email}`;
      this.user = {
        ...getMockCurrentUser(),
        name: payload.name,
        nick: payload.nick,
        email: payload.email,
        onboardingCompleted: false,
      };
    },
    updateUser(payload: Partial<User>) {
      if (!this.user) return;
      this.user = { ...this.user, ...payload };
    },
    async updatePassword(newPassword: string) {
      // await $fetch("/api/auth/reset-password", {
      //   method: "POST",
      //   body: { newPassword },
      // });
      console.log("Password updated to: ", newPassword);
    },
    completeOnboarding() {
      if (!this.user) return;
      this.user = {
        ...this.user,
        onboardingCompleted: true,
        skippedOnboardingAt: null,
      };
    },
    skipOnboarding() {
      if (!this.user) return;
      this.user = {
        ...this.user,
        skippedOnboardingAt: new Date().toISOString(),
      };
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isBooted = true;
    },
  },
});
