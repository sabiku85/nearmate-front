import { getMockConversations, getMockMessages } from '~/data/mockDb'
import { formatTime } from '~/utils/formatters'
import { useAuthStore } from '~~/stores/auth'
import type { Conversation, Message, User } from '~~/shared/types/app'

export const useChatStore = defineStore('chat', {
  state: () => ({
    conversations: getMockConversations() as Conversation[],
    messages: getMockMessages() as Record<string, Message[]>,
    activeConversationId: null as string | null,
    threadSearchQuery: '',
    chatTab: 'conversations' as 'conversations' | 'invitations'
  }),
  getters: {
    unreadTotal: (state) => state.conversations.reduce((acc, item) => acc + item.unreadCount, 0)
  },
  actions: {
    ensureConversation(user: User) {
      const existing = this.conversations.find((item) => item.participant.id === user.id)
      if (existing) return existing.id

      const id = `c-${user.id}`
      this.conversations.unshift({
        id,
        participant: user,
        isOnline: true,
        unreadCount: 0,
        lastMessage: null
      })
      this.messages[id] = []
      return id
    },
    markAsRead(id: string) {
      this.conversations = this.conversations.map((item) =>
        item.id === id ? { ...item, unreadCount: 0 } : item
      )
    },
    sendMessage(conversationId: string, text: string) {
      const auth = useAuthStore()
      if (!auth.user || !text.trim()) return

      const message: Message = {
        id: `m-${Date.now()}`,
        senderId: auth.user.id,
        text: text.trim(),
        sentAt: new Date().toISOString(),
        read: true
      }

      this.messages[conversationId] = [...(this.messages[conversationId] ?? []), message]
      this.conversations = this.conversations.map((item) =>
        item.id === conversationId ? { ...item, lastMessage: message } : item
      )
    },
    mockIncomingReply(conversationId: string) {
      const thread = this.messages[conversationId]
      const participant = this.conversations.find((item) => item.id === conversationId)?.participant
      if (!thread || !participant) return

      const message: Message = {
        id: `m-in-${Date.now()}`,
        senderId: participant.id,
        text: `Brzmi dobrze. Widzimy się o ${formatTime(new Date().toISOString())}.`,
        sentAt: new Date().toISOString(),
        read: false
      }

      this.messages[conversationId] = [...thread, message]
      this.conversations = this.conversations.map((item) =>
        item.id === conversationId
          ? { ...item, lastMessage: message, unreadCount: item.unreadCount + 1 }
          : item
      )
    }
  }
})
