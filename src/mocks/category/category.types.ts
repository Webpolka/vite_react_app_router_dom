// src/mocks/category/category.types.ts

export interface CategoryDTO {
  id: string | number
  title: string
  image: string       // путь к картинке
  link: string        // ссылка на страницу категории
}

// Массив категорий
export type CategoryArrayDTO = CategoryDTO[]
