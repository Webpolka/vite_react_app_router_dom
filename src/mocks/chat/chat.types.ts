// src/mocks/chat/chat.types.ts
import type { UserDTO } from '../user/user.types'

export interface ChatDTO {
  id: string
  type: 'private' | 'product'          // обычный чат или по товару
  productId?: string                   // если чат привязан к товару

  participants: UserDTO[]              // кто участвует в чате
  lastMessage?: MessageDTO             // последнее сообщение
  unreadCount: number                  // кол-во непрочитанных сообщений

  createdAt: string
}

// Массив чатов
export type ChatArrayDTO = ChatDTO[]


// Мессенджи
export interface MessageDTO {
  id: string
  chatId: string
  sender: UserDTO

  text?: string
  mediaUrl?: string
  type: 'text' | 'image'

  isRead: boolean
  createdAt: string
}

// Массив сообщений
export type MessageArrayDTO = MessageDTO[]


// {mockChats.map(chat => (
//   <ChatCard key={chat.id} chat={chat} />
// ))}
