import { getMockActivities } from '~/data/mockDb'
import type { Activity } from '~~/shared/types/app'

export const useActivitiesStore = defineStore('activities', {
  state: () => ({
    items: getMockActivities() as Activity[],
    tab: 'upcoming' as 'upcoming' | 'new' | 'mine'
  }),
  getters: {
    upcoming: (state) => state.items.filter((activity) => activity.isJoined),
    newActivities: (state) => state.items.filter((activity) => !activity.isJoined),
    mine(state) {
      return state.items.filter((activity) => activity.creator.id === 'me' || activity.isJoined)
    }
  },
  actions: {
    joinActivity(id: string) {
      this.items = this.items.map((activity) =>
        activity.id === id
          ? { ...activity, isJoined: true, participantsCount: activity.participantsCount + 1 }
          : activity
      )
    }
  }
})
