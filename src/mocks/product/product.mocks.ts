// src/mocks/product/product.mocks.ts
import type { ProductDTO, ProductArrayDTO } from './product.types'
import { mockUsers } from '../user/user.mocks'
import { mockComments } from '../comment/comment.mocks'

// Один продукт
export const mockProduct: ProductDTO = {
  id: 'p1',
  title: 'Гитара Fender Stratocaster',
  description: 'Идеальное состояние, почти новая, с кейсом',
  price: 45000,
  currency: 'RUB',
  condition: 'used',
  media: ['/products/1.jpg', '/products/1-2.jpg'],
  seller: mockUsers[0],
  status: 'active',

  likesCount: 25,
  isLikedByMe: true,

  commentsCount: 2,
  comments: mockComments.slice(0, 2),

  createdAt: new Date().toISOString()
}

// Массив продуктов
export const mockProducts: ProductArrayDTO = Array.from({ length: 10 }).map((_, i) => ({
  id: `p${i + 1}`,
  title: `Товар ${i + 1}`,
  description: `Описание товара ${i + 1}`,
  price: Math.floor(Math.random() * 100000) / 100,
  currency: 'RUB',
  condition: Math.random() > 0.5 ? 'new' : 'used',
  media: [`/products/${i + 1}.jpg`],
  seller: mockUsers[i % mockUsers.length],
  status: 'active',

  likesCount: Math.floor(Math.random() * 50),
  isLikedByMe: Math.random() > 0.5,

  commentsCount: Math.floor(Math.random() * 10),
  comments: mockComments.slice(0, Math.floor(Math.random() * mockComments.length)),

  createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString()
}))
