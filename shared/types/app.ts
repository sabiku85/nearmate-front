export interface Interest {
  id: string
  name: string
  category: string
  icon?: string
}

export interface User {
  id: string
  name: string
  nick: string
  email: string
  avatarUrl: string | null
  city: string
  age: number
  bio: string
  interests: Interest[]
  compatibilityScore?: number
  rating?: number
  distanceKm?: number
  onboardingCompleted: boolean
  skippedOnboardingAt: string | null
  isFriend?: boolean
  mutualFriendsCount?: number
  profileTags?: string[]
}

export interface Activity {
  id: string
  title: string
  creator: User
  date: string
  location: string
  description: string
  tags: string[]
  participantsCount: number
  isJoined: boolean
}

export interface Invitation {
  id: string
  sender: User
  recipient: User
  type: 'user' | 'activity'
  status: 'pending' | 'accepted' | 'declined'
  createdAt: string
  activityId?: string
  message?: string
}

export interface Message {
  id: string
  senderId: string
  text: string
  sentAt: string
  read: boolean
}

export interface Conversation {
  id: string
  participant: User
  isOnline: boolean
  unreadCount: number
  lastMessage: Message | null
}
