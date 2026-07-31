import { useApi } from '~/composables/useApi'
import type { Activity } from '~~/shared/types/app'

export const useActivitiesStore = defineStore('activities', {
  state: () => ({
    items: [] as Activity[],
    activeActivity: null as Activity | null,
    isLoading: false,
    error: null as string | null,
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
    // GET /activities
    async fetchActivities() {
      this.isLoading = true
      this.error = null
      const api = useApi()
      try {
        this.items = await api<Activity[]>('/activities')
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch activities'
        console.error('Error fetching activities:', err)
      } finally {
        this.isLoading = false
      }
    },
    // GET /activities/{id}
    async fetchActivityById(id: string) {
      this.isLoading = true
      this.error = null
      const api = useApi()
      try {
        this.activeActivity = await api<Activity>(`/activities/${id}`)
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Activity not found'
        console.error(`Error fetching activity ${id}:`, err)
      } finally {
        this.isLoading = false
      }
    },
    // POST /activities
    async createActivity(payload: Omit<Activity, 'id' | 'creator' | 'participantsCount' | 'isJoined'>) {
      const api = useApi()
      try {
        const newActivity = await api<Activity>('/activities', {
          method: 'POST',
          body: payload
        })
        this.items.push(newActivity)
        return newActivity
      } catch (err) {
        console.error('Error creating activity:', err)
        throw err
      }
    },
    // PUT /activities/{id}
    async updateActivity(id: string, payload: Partial<Activity>) {
      const api = useApi()
      try {
        const updated = await api<Activity>(`/activities/${id}`, {
          method: 'PUT',
          body: payload
        })
        this.items = this.items.map(a => a.id === id ? updated : a)
        if (this.activeActivity?.id === id) {
          this.activeActivity = updated
        }
      } catch (err) {
        console.error(`Error updating activity ${id}:`, err)
        throw err
      }
    },
    // DELETE /activities/{id}
    async deleteActivity(id: string) {
      const api = useApi()
      try {
        await api(`/activities/${id}`, { method: 'DELETE' })
        this.items = this.items.filter(a => a.id !== id)
      } catch (err) {
        console.error(`Error deleting activity ${id}:`, err)
        throw err
      }
    },
    // POST /activities/{id}/join
    async joinActivity(id: string) {
      const api = useApi()
      try {
        await api(`/activities/${id}/join`, { method: 'POST' })
        this.items = this.items.map((activity) =>
          activity.id === id
            ? { ...activity, isJoined: true, participantsCount: activity.participantsCount + 1 }
            : activity
        )
      } catch (err) {
        console.error(`Error joining activity ${id}:`, err)
      }
    }
  }
})