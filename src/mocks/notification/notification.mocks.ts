// src/mocks/notification/notification.mocks.ts
import type { NotificationDTO, NotificationArrayDTO } from './notification.types'
import { mockUsers } from '../user/user.mocks'

// Одно уведомление
export const mockNotification: NotificationDTO = {
  id: 'n1',
  type: 'like',
  actor: mockUsers[1],
  targetId: 'm1', // id медиа
  payload: { text: 'Поставил лайк на ваше фото' },
  isRead: false,
  createdAt: new Date().toISOString()
}

// Массив уведомлений
export const mockNotifications: NotificationArrayDTO = Array.from({ length: 10 }).map((_, i) => ({
  id: `n${i + 1}`,
  type: ['like', 'comment', 'follow', 'message', 'order'][i % 5] as NotificationDTO['type'],
  actor: mockUsers[i % mockUsers.length],
  targetId: `t${i + 1}`,
  payload: { text: `Событие ${i + 1}` },
  isRead: Math.random() > 0.5,
  createdAt: new Date(Date.now() - i * 1000 * 60 * 15).toISOString()
}))
