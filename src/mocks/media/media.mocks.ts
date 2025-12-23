// src/mocks/media/media.mocks.ts
import type { MediaDTO, MediaArrayDTO } from './media.types'
import { mockUsers } from '../user/user.mocks'
import { mockComments } from '../comment/comment.mocks'

// 👆 Один медиа-объект
export const mockMedia: MediaDTO = {
  id: 'm1',
  url: '/media/1.jpg',
  type: 'image',
  title: 'Красивый закат',
  description: 'Фото с прогулки на пляже',
  uploadedBy: mockUsers[0],
  createdAt: new Date().toISOString(),

  likesCount: 42,
  isLikedByMe: true,

  commentsCount: 3,
  comments: mockComments.slice(0, 3)
}

// Массив медиа
export const mockMedias: MediaArrayDTO = Array.from({ length: 10 }).map((_, i) => ({
  id: `m${i + 1}`,
  url: `/media/${i + 1}.jpg`,
  type: 'image',
  title: `Фото ${i + 1}`,
  description: `Описание фото ${i + 1}`,
  uploadedBy: mockUsers[i % mockUsers.length],
  createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString(),

  likesCount: Math.floor(Math.random() * 100),
  isLikedByMe: Math.random() > 0.5,

  commentsCount: Math.floor(Math.random() * 20),
  comments: mockComments.slice(0, Math.floor(Math.random() * mockComments.length))
}))


// {mockProducts.map(p => (
//     <ProductCard key={p.id} product={p} />
//   ))}