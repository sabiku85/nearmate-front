import { getMockUsers } from '~/data/mockDb'
import type { User } from '~~/shared/types/app'

export const useDiscoveryStore = defineStore('discovery', {
  state: () => ({
    people: getMockUsers() as User[],
    searchQuery: '',
    city: '',
    ageRange: [18, 60] as [number, number]
  }),
  getters: {
    filteredPeople(state) {
      return state.people.filter((person) => {
        const matchesQuery = [person.name, person.bio, ...person.interests.map((item) => item.name)]
          .join(' ')
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
        const matchesCity = !state.city || person.city.toLowerCase().includes(state.city.toLowerCase())
        const matchesAge = person.age >= state.ageRange[0] && person.age <= state.ageRange[1]
        return matchesQuery && matchesCity && matchesAge
      })
    }
  }
})
