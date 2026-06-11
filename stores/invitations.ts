import { getMockInvitations } from '~/data/mockDb'
import { useActivitiesStore } from '~~/stores/activities'
import { useAuthStore } from '~~/stores/auth'
import { useChatStore } from '~~/stores/chat'
import { useDiscoveryStore } from '~~/stores/discovery'
import type { Invitation } from '~~/shared/types/app'

export const useInvitationsStore = defineStore('invitations', {
  state: () => ({
    incoming: getMockInvitations() as Invitation[],
    outgoing: [] as Invitation[]
  }),
  actions: {
    accept(id: string) {
      const invitation = this.incoming.find((item) => item.id === id)
      if (!invitation) return null

      this.incoming = this.incoming.filter((item) => item.id !== id)
      const chatStore = useChatStore()
      return chatStore.ensureConversation(invitation.sender)
    },
    decline(id: string) {
      this.incoming = this.incoming.filter((item) => item.id !== id)
    },
    sendToUser(userId: string) {
      this.outgoing.push({
        id: `out-${userId}`,
        sender: useAuthStore().user!,
        recipient: useDiscoveryStore().people.find((person) => person.id === userId)!,
        type: 'user',
        status: 'pending',
        createdAt: new Date().toISOString()
      })
    },
    sendToActivity(activityId: string) {
      const activity = useActivitiesStore().items.find((item) => item.id === activityId)
      if (!activity) return

      this.outgoing.push({
        id: `activity-${activityId}`,
        sender: useAuthStore().user!,
        recipient: activity.creator,
        type: 'activity',
        status: 'pending',
        createdAt: new Date().toISOString(),
        activityId
      })
    }
  }
})
