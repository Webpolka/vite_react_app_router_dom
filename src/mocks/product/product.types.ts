// src/mocks/product/product.types.ts
import type { UserDTO } from '../user/user.types'
import type { CommentDTO } from '../comment/comment.types'

export interface ProductDTO {
  id: string
  title: string
  description?: string

  price: number
  currency: 'RUB' | 'USD' | 'EUR'
  condition: 'new' | 'used'

  media: string[]               // картинки или видео ссылками
  seller: UserDTO               // кто продаёт

  status: 'active' | 'sold' | 'archived'

  likesCount: number
  isLikedByMe: boolean

  commentsCount: number
  comments?: CommentDTO[]       // можно подгружать для карточки

  createdAt: string
}

// Массив продуктов
export type ProductArrayDTO = ProductDTO[]
