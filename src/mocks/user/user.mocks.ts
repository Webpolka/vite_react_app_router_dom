// src/mocks/user/user.mocks.ts

import type { UserDTO, UserArrayDTO } from './user.types'

// Один одиночный юзер
export const mockUser: UserDTO = {
  id: 'u1',
  username: 'bro_user',
  displayName: 'Братан',
  avatarUrl: '/avatars/1.jpg',
  rating: 4.8,
  followersCount: 123,
  followingCount: 45,
  isMe: true
}

// Массив юзеров для ленты, списка друзей и т.д.
export const mockUsers: UserArrayDTO = Array.from({ length: 10 }).map((_, i) => ({
  id: `u${i + 1}`,
  username: `user${i + 1}`,
  displayName: `User ${i + 1}`,
  avatarUrl: `/avatars/${(i % 5) + 1}.jpg`,
  rating: +(Math.random() * 5).toFixed(1),
  followersCount: Math.floor(Math.random() * 500),
  followingCount: Math.floor(Math.random() * 200),
  isFollowing: Math.random() > 0.5
}))


// <UserCard user={mockUser} />
// {mockUsers.map(u => <UserCard key={u.id} user={u} />)}