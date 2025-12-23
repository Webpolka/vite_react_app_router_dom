import Button from "@/ui/button";
import { Link } from "react-router";
import HeaderOffCanvas from "@/components/header/headerOffcanvas";
import { mockCategories } from "@/mocks/category/category.mocks";

// меню для офканваса формируем из моков категорий
const menuItems = [
  { title: "Образы", to: "/" },
  { title: "Продать", to: "/sell" },
  { title: "Новинки", to: "/new" },
  { title: "Предзаказ", to: "/preorder" },
  // добавляем категории из моков
  ...mockCategories.map((cat) => ({
    title: cat.title,
    to: cat.link,
  })),
];

// передаем кнопки для действий а хедере
const headerActions = [
  { to: "/profile", icon: "user", label: "Профиль" },
  { to: "/favorites", icon: "like", label: "Избранное" },
  { to: "/cart", icon: "cart", label: "Корзина" },
];

export default function Header() {
  return (
    <header>
      {/* container */}
      <div className="site-container">
        {/* header row */}
        <div className="min-h-[100px] flex items-center justify-between ">
          {/* Left side */}
          <div className="flex items-center flex-shrink-0 gap-5 md:gap-7.5 xl:gap-7.5">
            <HeaderOffCanvas items={menuItems} />

            <Link
              to="/"
              className="flex items-center overflow-hidden h-11 w-[140px] min-[365px]:w-[150px] min-[375px]:w-[175px] min-[380px]:w-[203px]"
            >
              <img
                src="/images/logo-placeholder.png"
                alt="Логотип"
                loading="lazy"
              ></img>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0">
            <Button
              to="/sell"
              className="max-[576px]:hidden min-h-11 bg-black text-grayscale-white px-7.5 hover:opacity-80"
            >
              Продать
            </Button>
            <div className="flex items-center gap-2 sm:gap-5 translate-x-2.5 sm:translate-x-0">
              <div className="flex items-center gap-1 min-[350px]:gap-2 sm:gap-5 flex-shrink-0">
                {headerActions.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-label={item.label}
                    className="block w-7.5 h-7.5"
                  >
                    <svg className="w-full h-full fill-none stroke-black">
                      <use href={`/icons/symbol/sprite.svg#${item.icon}`} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
