// src/mocks/user/user.types.ts

export interface UserDTO {
  id: string
  username: string
  displayName: string
  avatarUrl?: string

  rating: number
  followersCount: number
  followingCount: number

  isFollowing?: boolean
  isMe?: boolean
}

// Если нужно использовать сразу массив юзеров, можно создать тип-алиас
export type UserArrayDTO = UserDTO[]
