// src/mocks/comment/comment.types.ts
import type { UserDTO } from '../user/user.types'

export interface CommentDTO {
  id: string
  mediaId: string       // к какому медиа относится
  author: UserDTO       // кто оставил комментарий
  text: string
  createdAt: string

  likesCount: number
  isLikedByMe: boolean

  parentId?: string     // если это ответ на другой комментарий
}

// Массив комментариев
export type CommentArrayDTO = CommentDTO[]
