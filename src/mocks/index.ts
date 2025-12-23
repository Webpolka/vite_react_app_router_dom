// src/mocks/index.ts

// Пользователи
export { mockUser, mockUsers } from './user/user.mocks'

// Медиа
export { mockMedia, mockMedias } from './media/media.mocks'

// Комментарии
export { mockComment, mockComments } from './comment/comment.mocks'

// Продукты
export { mockProduct, mockProducts } from './product/product.mocks'

// Чаты
export { mockChat, mockChats } from './chat/chat.mocks'

// Уведомления
export { mockNotification, mockNotifications } from './notification/notification.mocks'


// Теперь можешь испоользовать один импорт и указывать все что нужноо в нем :
// import { mockUsers, mockMedias, mockProducts, mockChats, mockNotifications } from '@/mocks'
