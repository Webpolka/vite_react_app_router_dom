import SearchForm from "@/components/searchForm";
import Categories from "@/components/categories/categories";
import { mockCategories } from "@/mocks/category/category.mocks";

export function Home() {
  return (
    <>
      <SearchForm
        onSubmit={(query) => {
          console.log("Ищем:", query);
          // тут будет AJAX
        }}
      />

      <Categories items={mockCategories} />
    </>
  );
}
