import type { Activity, Conversation, Interest, Invitation, Message, User } from '~~/shared/types/app'

function pickInterest(index: number) {
  const interest = interestPool[index]
  if (!interest) {
    throw new Error(`Missing interest at index ${index}`)
  }

  return interest
}

function pickUser(index: number) {
  const user = users[index]
  if (!user) {
    throw new Error(`Missing user at index ${index}`)
  }

  return user
}

const interestPool: Interest[] = [
  { id: 'running', name: 'Bieganie', category: 'Sport', icon: 'lucide:star' },
  { id: 'bike', name: 'Rower', category: 'Sport', icon: 'lucide:bike' },
  { id: 'yoga', name: 'Yoga', category: 'Sport', icon: 'lucide:triangle' },
  { id: 'fitness', name: 'Fitness', category: 'Sport', icon: 'lucide:dumbbell' },
  { id: 'swim', name: 'Pływanie', category: 'Sport', icon: 'lucide:waves' },
  { id: 'climb', name: 'Liny', category: 'Sport', icon: 'lucide:mountain' },
  { id: 'skate', name: 'Siatkówka', category: 'Sport', icon: 'lucide:circle-dot' },
  { id: 'games', name: 'Gaming', category: 'Gry', icon: 'lucide:gamepad-2' },
  { id: 'rpg', name: 'Gry RPG', category: 'Gry', icon: 'lucide:dices' },
  { id: 'board', name: 'Planszówki', category: 'Gry', icon: 'lucide:library-big' },
  { id: 'indie', name: 'Brydż', category: 'Gry', icon: 'lucide:sparkles' },
  { id: 'photo', name: 'Fotografia', category: 'Kultura', icon: 'lucide:camera' },
  { id: 'coffee', name: 'Kawiarnie', category: 'Lifestyle', icon: 'lucide:coffee' },
  { id: 'walk', name: 'Spacery', category: 'Lifestyle', icon: 'lucide:footprints' },
  { id: 'coffee-short', name: 'Kawa', category: 'Lifestyle', icon: 'lucide:coffee' },
  { id: 'film', name: 'Film', category: 'Kultura', icon: 'lucide:clapperboard' }
]

const me: User = {
  id: 'me',
  name: 'Karolina Nowak',
  nick: 'karola_fit',
  email: 'karolina@example.com',
  avatarUrl: null,
  city: 'Warszawa',
  age: 29,
  bio: 'Lubię spontaniczne aktywności, poranne biegi i ludzi, którzy naprawdę chcą wyjść z domu.',
  interests: [pickInterest(0), pickInterest(1), pickInterest(11), pickInterest(12)],
  compatibilityScore: 98,
  onboardingCompleted: true,
  skippedOnboardingAt: null
}

const users: User[] = [
  {
    id: 'u1',
    name: 'Paulina Kowalska',
    nick: 'paulinafit',
    email: 'paulina@example.com',
    avatarUrl: null,
    city: 'Krakow',
    age: 30,
    bio: 'Biegam rano, po pracy wybieram rower albo squash.',
    interests: [pickInterest(14), pickInterest(12), pickInterest(15)],
    compatibilityScore: 97,
    rating: 4.9,
    distanceKm: 2,
    onboardingCompleted: true,
    skippedOnboardingAt: null,
    mutualFriendsCount: 10,
    profileTags: ['Fotografia', 'Podróżowanie']
  },
  {
    id: 'u2',
    name: 'Aleksandra Jarr',
    nick: 'aleksfoto',
    email: 'aleksandra@example.com',
    avatarUrl: null,
    city: 'Krakow',
    age: 28,
    bio: 'Fotografia uliczna, dobre espresso i spokojne spacery po mieście.',
    interests: [pickInterest(11), pickInterest(12), pickInterest(9)],
    compatibilityScore: 95,
    rating: 4.8,
    distanceKm: 3,
    onboardingCompleted: true,
    skippedOnboardingAt: null,
    mutualFriendsCount: 3,
    profileTags: ['Fotografia', 'Podróżowanie']
  },
  {
    id: 'u3',
    name: 'Sara Nowak',
    nick: 'saranowak',
    email: 'sara@example.com',
    avatarUrl: null,
    city: 'Warszawa',
    age: 40,
    bio: 'Lubię fotografowanie, spacery po mieście i dobre kawy w nieoczywistych miejscach.',
    interests: [pickInterest(13), pickInterest(11), pickInterest(14)],
    compatibilityScore: 92,
    rating: 4.9,
    distanceKm: 2,
    onboardingCompleted: true,
    skippedOnboardingAt: null,
    mutualFriendsCount: 2
  },
  {
    id: 'u4',
    name: 'Anita Mazur',
    nick: 'anitafit',
    email: 'anita@example.com',
    avatarUrl: null,
    city: 'Krakow',
    age: 31,
    bio: 'Zbieram ekipę na wspólne rowery i luźne aktywności weekendowe.',
    interests: [pickInterest(1), pickInterest(4), pickInterest(12)],
    compatibilityScore: 92,
    rating: 4.7,
    distanceKm: 2,
    onboardingCompleted: true,
    skippedOnboardingAt: null,
    mutualFriendsCount: 1
  }
]

const activities: Activity[] = [
  {
    id: 'a1',
    title: 'Weekend Planszówek',
    creator: pickUser(1),
    date: '2026-05-18T09:00:00',
    location: 'Kawiarnia "Pożegnanie z Afryką"',
    description: 'Spokojny poranek z planszówkami i nowymi znajomościami przy kawie.',
    tags: ['Planszówki', 'Kawa', 'Nowe osoby'],
    participantsCount: 6,
    isJoined: true
  },
  {
    id: 'a2',
    title: 'Wspólny workout',
    creator: pickUser(3),
    date: '2026-05-18T18:30:00',
    location: 'Siłownia Calypso',
    description: 'Krótki trening i luźne wyjście po zajęciach.',
    tags: ['Trening', 'Wellness', 'Ekipa'],
    participantsCount: 4,
    isJoined: true
  },
  {
    id: 'a3',
    title: 'Nocne fotografowanie',
    creator: pickUser(1),
    date: '2026-05-18T09:00:00',
    location: 'Kawiarnia "Pożegnanie z Afryką"',
    description: 'Wspólny spacer z aparatami i szybka kawa po drodze.',
    tags: ['Fotografia', 'Spacer'],
    participantsCount: 6,
    isJoined: false
  },
  {
    id: 'a4',
    title: 'Partyjka squasha',
    creator: pickUser(0),
    date: '2026-09-13T18:00:00',
    location: 'Squash AGHS',
    description: 'Luźna gra na dwa korty dla początkujących i średniozaawansowanych.',
    tags: ['Sport', 'Squash'],
    participantsCount: 6,
    isJoined: false
  }
]

const invitations: Invitation[] = [
  {
    id: 'i1',
    sender: pickUser(1),
    recipient: me,
    type: 'user',
    status: 'pending',
    createdAt: '2026-05-17T08:10:00',
    message: 'Masz ochotę dołączyć do aktywności?'
  },
  {
    id: 'i2',
    sender: pickUser(0),
    recipient: me,
    type: 'user',
    status: 'pending',
    createdAt: '2026-05-17T09:10:00',
    message: 'Wpadniesz na wspólną aktywność w tym tygodniu?'
  }
]

const messagesByConversation: Record<string, Message[]> = {
  c1: [
    { id: 'm1', senderId: 'u1', text: 'Cześć, jesteś już?', sentAt: '2026-04-18T14:15:00', read: true },
    { id: 'm2', senderId: 'me', text: 'Daj mi jeszcze kilka minut na dojazd, zaraz będę.', sentAt: '2026-04-18T14:16:00', read: true },
    { id: 'm3', senderId: 'u1', text: 'Czekam na Ciebie przed wejściem :)', sentAt: '2026-04-18T14:18:00', read: false }
  ],
  c2: [
    { id: 'm4', senderId: 'u2', text: 'Świetna jest ostatnia planszówka!', sentAt: '2026-04-17T13:15:00', read: false }
  ],
  c3: [
    { id: 'm5', senderId: 'u3', text: 'Dzięki za wczoraj, do usłyszenia!', sentAt: '2024-12-12T12:45:00', read: true }
  ]
}

const conversations: Conversation[] = [
  { id: 'c1', participant: pickUser(0), isOnline: true, unreadCount: 2, lastMessage: messagesByConversation.c1?.at(-1) ?? null },
  { id: 'c2', participant: pickUser(1), isOnline: false, unreadCount: 0, lastMessage: messagesByConversation.c2?.at(-1) ?? null },
  { id: 'c3', participant: pickUser(2), isOnline: true, unreadCount: 5, lastMessage: messagesByConversation.c3?.at(-1) ?? null }
]

export function getMockCurrentUser() {
  return structuredClone(me)
}

export function getMockInterestCategories() {
  return Array.from(new Set(interestPool.map((interest) => interest.category)))
}

export function getMockInterestsByCategory(category: string) {
  return interestPool.filter((interest) => interest.category === category)
}

export function getMockUsers() {
  return structuredClone(users)
}

export function getMockActivities() {
  return structuredClone(activities)
}

export function getMockInvitations() {
  return structuredClone(invitations)
}

export function getMockConversations() {
  return structuredClone(conversations)
}

export function getMockMessages() {
  return structuredClone(messagesByConversation)
}
