// src/mocks/media/media.types.ts
import type { UserDTO } from '../user/user.types'
import type { CommentDTO } from '../comment/comment.types'

export interface MediaDTO {
  id: string
  url: string
  type: 'image' | 'video'
  title?: string
  description?: string

  uploadedBy: UserDTO   // автор медиа
  createdAt: string

  likesCount: number
  isLikedByMe: boolean

  commentsCount: number
  comments?: CommentDTO[]  // опционально, для мока
}

// Массив медиа
export type MediaArrayDTO = MediaDTO[]
