import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";

import {
  RiGiftLine,
  RiStore2Line,
} from "react-icons/ri";

import { TbTruckDelivery } from "react-icons/tb";
import { PiCoins } from "react-icons/pi";

export default function Header() {
  const menuItems = [
    {
      id: 1,
      title: "دسته بندی محصولات",
      icon: FiMenu,
    },
    {
      id: 2,
      title: "خرید سازمانی",
      icon: RiStore2Line,
    },
    {
      id: 3,
      title: "کارت هدیه",
      icon: RiGiftLine,
    },
    {
      id: 4,
      title: "خرید اقساطی",
      icon: TbTruckDelivery,
    },
    {
      id: 5,
      title: "خرید طلای دیجیتال",
      icon: PiCoins,
      badge: "جدید",
    },
    {
      id: 6,
      title: "فروشنده شو",
    },
  ];

  const menuItemClass =
    "flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer";

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        bg-white
        font-sans
        shadow-sm
      "
    >
      {/* TOP BANNER */}
      <img
        src="/img/bannerGif.gif"
        alt="Top Banner"
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* MAIN NAVBAR */}
      <div>
        <div
          className="
            max-w-[1600px]
            mx-auto
            px-8
            py-4
            flex
            items-center
            justify-between
            gap-8
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="
                w-10
                h-10
                border
                border-black
                rounded-[10px]
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-50
                transition
              "
            >
              <FiShoppingCart size={22} />
            </button>

            <div
              className="
                flex
                border
                border-black
                rounded-[10px]
                overflow-hidden
              "
            >
              <button
                type="button"
                className="
                  px-4
                  py-2
                  font-medium
                  text-gray-700
                  hover:text-black
                  cursor-pointer
                "
              >
                ثبت نام
              </button>

              <div className="w-px bg-gray-200" />

              <button
                type="button"
                className="
                  px-6
                  font-medium
                  text-gray-700
                  hover:text-black
                  cursor-pointer
                "
              >
                ورود
              </button>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex-1 flex" dir="rtl">
            <div className="relative w-full max-w-[645px]">
              <input
                type="text"
                dir="rtl"
                placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
                className="
                  w-full
                  h-14
                  rounded-sm
                  bg-gray-200
                  pr-16
                  pl-5
                  outline-none
                  text-gray-700
                  focus:ring-2
                  focus:ring-gray-300
                "
              />

              <FiSearch
                size={28}
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center">
            <a href="/" aria-label="Home Page">
              <img
                src="/img/mainlogo2.svg"
                alt="Technolife Logo"
                loading="lazy"
                className="
                  object-cover
                  cursor-pointer
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div
        dir="rtl"
        className="
          max-w-[1600px]
          mx-auto
          px-8
          h-12
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-10">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={menuItemClass}
              >
                {Icon && <Icon size={18} />}

                <span className="text-sm font-medium">
                  {item.title}
                </span>

                {item.badge && (
                  <span
                    className="
                      bg-pink-100
                      text-pink-700
                      text-xs
                      font-bold
                      px-2
                      py-0.5
                      rounded-full
                    "
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
