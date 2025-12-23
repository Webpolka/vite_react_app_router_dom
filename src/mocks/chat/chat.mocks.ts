// src/mocks/chat/chat.mocks.ts
import type { MessageDTO, ChatDTO } from './chat.types'
import { mockUsers } from '../user/user.mocks'

//  Массив сообщений для примера
const mockMessages: MessageDTO[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `msg${i + 1}`,
  chatId: 'c1',
  sender: mockUsers[i % mockUsers.length],
  text: `Привет, сообщение ${i + 1}`,
  type: 'text',
  isRead: i % 2 === 0,
  createdAt: new Date(Date.now() - i * 1000 * 60 * 5).toISOString()
}))

//  Один чат
export const mockChat: ChatDTO = {
  id: 'c1',
  type: 'private',
  participants: [mockUsers[0], mockUsers[1]],
  lastMessage: mockMessages[mockMessages.length - 1],
  unreadCount: mockMessages.filter(m => !m.isRead).length,
  createdAt: new Date().toISOString()
}

//  Массив чатов
export const mockChats: ChatDTO[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `c${i + 1}`,
  type: 'private',
  participants: [mockUsers[i % mockUsers.length], mockUsers[(i + 1) % mockUsers.length]],
  lastMessage: mockMessages[i % mockMessages.length],
  unreadCount: Math.floor(Math.random() * 5),
  createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString()
}))
