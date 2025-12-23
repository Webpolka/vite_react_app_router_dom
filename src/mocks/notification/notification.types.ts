// src/mocks/notification/notification.types.ts
import type { UserDTO } from '../user/user.types'

export interface NotificationDTO {
  id: string

  type: 'like' | 'comment' | 'follow' | 'message' | 'order'

  actor: UserDTO         // кто инициировал событие
  targetId?: string      // id поста, товара или комментария
  payload?: NotificationPayload// доп. данные (ссылка, текст, сумма и т.д.)

  isRead: boolean
  createdAt: string
}

// Массив уведомлений
export type NotificationArrayDTO = NotificationDTO[]


type NotificationPayload = 
  | { text: string } // для like, comment
  | { postId: string; text?: string } // для comment
  | { productId: string; amount?: number } // для order
  | { followId: string } // для follow
  | { messageId: string } // для messag


//   {mockNotifications.map(n => (
//     <NotificationCard key={n.id} notification={n} />
//   ))}