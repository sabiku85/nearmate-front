import { F as getMockUsers, k as useAuthStore, G as getMockInvitations, E as getMockActivities } from './server.mjs';
import { defineStore } from 'pinia';
import { u as useChatStore } from './chat-KjjO50wx.mjs';

const useActivitiesStore = defineStore("activities", {
  state: () => ({
    items: getMockActivities(),
    tab: "upcoming"
  }),
  getters: {
    upcoming: (state) => state.items.filter((activity) => activity.isJoined),
    newActivities: (state) => state.items.filter((activity) => !activity.isJoined),
    mine(state) {
      return state.items.filter((activity) => activity.creator.id === "me" || activity.isJoined);
    }
  },
  actions: {
    joinActivity(id) {
      this.items = this.items.map(
        (activity) => activity.id === id ? { ...activity, isJoined: true, participantsCount: activity.participantsCount + 1 } : activity
      );
    }
  }
});
const useDiscoveryStore = defineStore("discovery", {
  state: () => ({
    people: getMockUsers(),
    searchQuery: "",
    city: "",
    ageRange: [18, 60]
  }),
  getters: {
    filteredPeople(state) {
      return state.people.filter((person) => {
        const matchesQuery = [person.name, person.bio, ...person.interests.map((item) => item.name)].join(" ").toLowerCase().includes(state.searchQuery.toLowerCase());
        const matchesCity = !state.city || person.city.toLowerCase().includes(state.city.toLowerCase());
        const matchesAge = person.age >= state.ageRange[0] && person.age <= state.ageRange[1];
        return matchesQuery && matchesCity && matchesAge;
      });
    }
  }
});
const useInvitationsStore = defineStore("invitations", {
  state: () => ({
    incoming: getMockInvitations(),
    outgoing: []
  }),
  actions: {
    accept(id) {
      const invitation = this.incoming.find((item) => item.id === id);
      if (!invitation) return null;
      this.incoming = this.incoming.filter((item) => item.id !== id);
      const chatStore = useChatStore();
      return chatStore.ensureConversation(invitation.sender);
    },
    decline(id) {
      this.incoming = this.incoming.filter((item) => item.id !== id);
    },
    sendToUser(userId) {
      this.outgoing.push({
        id: `out-${userId}`,
        sender: useAuthStore().user,
        recipient: useDiscoveryStore().people.find((person) => person.id === userId),
        type: "user",
        status: "pending",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    },
    sendToActivity(activityId) {
      const activity = useActivitiesStore().items.find((item) => item.id === activityId);
      if (!activity) return;
      this.outgoing.push({
        id: `activity-${activityId}`,
        sender: useAuthStore().user,
        recipient: activity.creator,
        type: "activity",
        status: "pending",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        activityId
      });
    }
  }
});

export { useInvitationsStore as a, useDiscoveryStore as b, useActivitiesStore as u };
//# sourceMappingURL=invitations-CWH8zIgv.mjs.map
