import { k as useAuthStore, H as getMockMessages, I as getMockConversations } from './server.mjs';
import { defineStore } from 'pinia';

function formatDate(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(iso));
}
function formatShortDate(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date(iso));
}
function formatTime(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(iso));
}
function formatRelativeDate(iso) {
  if (!iso) return "";
  const target = new Date(iso);
  const now = /* @__PURE__ */ new Date();
  const sameDay = target.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  if (sameDay) return formatTime(iso);
  if (target.toDateString() === yesterday.toDateString()) return "Wczoraj";
  if (target.toDateString() === tomorrow.toDateString()) return "Jutro";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(target);
}
function formatScheduleLabel(iso) {
  if (!iso) return "";
  const relative = formatRelativeDate(iso);
  const time = formatTime(iso);
  if (relative === "Dzisiaj" || relative === "Wczoraj" || relative === "Jutro") {
    return `${relative}, ${time}`;
  }
  const now = /* @__PURE__ */ new Date();
  const target = new Date(iso);
  if (target.toDateString() === now.toDateString()) {
    return `Dzisiaj, ${time}`;
  }
  return formatShortDate(iso);
}
function getGreeting(hour = (/* @__PURE__ */ new Date()).getHours()) {
  if (hour >= 5 && hour < 17) return "Dzień dobry";
  return "Dobry wieczór";
}
function initials(name) {
  return name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}
const useChatStore = defineStore("chat", {
  state: () => ({
    conversations: getMockConversations(),
    messages: getMockMessages(),
    activeConversationId: null,
    threadSearchQuery: "",
    chatTab: "conversations"
  }),
  getters: {
    unreadTotal: (state) => state.conversations.reduce((acc, item) => acc + item.unreadCount, 0)
  },
  actions: {
    ensureConversation(user) {
      const existing = this.conversations.find((item) => item.participant.id === user.id);
      if (existing) return existing.id;
      const id = `c-${user.id}`;
      this.conversations.unshift({
        id,
        participant: user,
        isOnline: true,
        unreadCount: 0,
        lastMessage: null
      });
      this.messages[id] = [];
      return id;
    },
    markAsRead(id) {
      this.conversations = this.conversations.map(
        (item) => item.id === id ? { ...item, unreadCount: 0 } : item
      );
    },
    sendMessage(conversationId, text) {
      const auth = useAuthStore();
      if (!auth.user || !text.trim()) return;
      const message = {
        id: `m-${Date.now()}`,
        senderId: auth.user.id,
        text: text.trim(),
        sentAt: (/* @__PURE__ */ new Date()).toISOString(),
        read: true
      };
      this.messages[conversationId] = [...this.messages[conversationId] ?? [], message];
      this.conversations = this.conversations.map(
        (item) => item.id === conversationId ? { ...item, lastMessage: message } : item
      );
    },
    mockIncomingReply(conversationId) {
      const thread = this.messages[conversationId];
      const participant = this.conversations.find((item) => item.id === conversationId)?.participant;
      if (!thread || !participant) return;
      const message = {
        id: `m-in-${Date.now()}`,
        senderId: participant.id,
        text: `Brzmi dobrze. Widzimy się o ${formatTime((/* @__PURE__ */ new Date()).toISOString())}.`,
        sentAt: (/* @__PURE__ */ new Date()).toISOString(),
        read: false
      };
      this.messages[conversationId] = [...thread, message];
      this.conversations = this.conversations.map(
        (item) => item.id === conversationId ? { ...item, lastMessage: message, unreadCount: item.unreadCount + 1 } : item
      );
    }
  }
});

export { formatTime as a, formatRelativeDate as b, formatScheduleLabel as c, formatDate as f, getGreeting as g, initials as i, useChatStore as u };
//# sourceMappingURL=chat-KjjO50wx.mjs.map
