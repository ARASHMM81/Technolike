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
      title: "دسته بندی محصولات",
      icon: <FiMenu />,
    },
    {
      title: "خرید سازمانی",
      icon: <RiStore2Line />,
    },
    {
      title: "کارت هدیه",
      icon: <RiGiftLine />,
    },
    {
      title: "خرید اقساطی",
      icon: <TbTruckDelivery />,
    },
    {
      title: "خرید طلای دیجیتال",
      icon: <PiCoins />,
      badge: "جدید",
    },
    {
      title: "فروشنده شو",
    },
  ];

  return (
    <header className="w-full bg-white font-sans">
      {/* TOP BANNER */}
<img
  src="/img/bannerGif.gif"
  alt="banner"
  className="w-full h-full object-cover"
/>
      {/* MAIN NAVBAR */}
      <div className=" border-gray-100">
        <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between gap-8">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 border border-black rounded-xl flex items-center justify-center cursor-pointer">
              <FiShoppingCart size={22} />
            </div>

            <div className="flex border border-black rounded-xl overflow-hidden"> 
              <button className="px-4 py-2 font-medium cursor-pointer text-gray-700 hover:text-black">
                ثبت نام
              </button>
              <div className="w-px bg-gray-200" />
              <button className="px-6  font-medium cursor-pointer text-gray-700 hover:text-black">
                ورود
              </button>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex-1 flex" dir="rtl">
            <div className="relative w-full max-w-[645px]">
              <input
                dir="rtl"
                type="text"
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
          <div className="flex items-center gap-3">
            <div className="text-right leading-none">

            </div>

              <a href="/">
                <img
                src="/img/mainlogo2.svg"
                alt="logo"
                className="w-full h-full object-cover cursor-pointer"
                />
              </a>
          </div>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="max-w-[1600px] mx-auto px-8 h-6 flex items-center justify-between" dir="rtl">
        <div className="flex items-center gap-10 ">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-2
                text-gray-700
                cursor-pointer
                hover:text-black
                transition
              "
            >
              {item.icon}

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
                    
                    rounded-full
                  "
                >
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}