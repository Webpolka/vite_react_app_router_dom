// src/mocks/comment/comment.mocks.ts
import type { CommentDTO, CommentArrayDTO } from "./comment.types";
import { mockUsers } from "../user/user.mocks";

// Один комментарий
export const mockComment: CommentDTO = {
  id: "c1",
  mediaId: "m1",
  author: mockUsers[1],
  text: "Красивое фото!",
  createdAt: new Date().toISOString(),

  likesCount: 5,
  isLikedByMe: true,
};

// Массив комментариев
export const mockComments: CommentArrayDTO = Array.from({ length: 10 }).map(
  (_, i) => ({
    id: `c${i + 1}`,
    mediaId: `m${Math.floor(Math.random() * 5) + 1}`, // рандомно к медиа
    author: mockUsers[i % mockUsers.length],
    text: `Комментарий ${i + 1}`,
    createdAt: new Date(Date.now() - i * 1000 * 60 * 10).toISOString(),

    likesCount: Math.floor(Math.random() * 20),
    isLikedByMe: Math.random() > 0.5,

    parentId: i % 3 === 0 ? `c${i}` : undefined, // делаем случайно вложенные ответы
  })
);

// {
//   mockComments
//     .filter((c) => c.mediaId === "m1")
//     .map((c) => <CommentCard key={c.id} comment={c} />);
// }
