import {
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiSend,
} from "react-icons/fi";

export default function Footer() {
  const footerColumns = [
    {
      title: "دسترسی سریع",
      links: [
        "بلاگ",
        "تماس با ما",
        "قوانین سایت",
        "سوالات متداول",
        "پیگیری سفارش",
      ],
    },
    {
      title: "پرفروش ترین محصولات",
      links: [
        "گوشی موبایل",
        "لپ تاپ",
        "هدفون",
        "ساعت هوشمند",
        "پاوربانک",
      ],
    },
    {
      title: "درباره ما",
      links: [
        "داستان ما",
        "همکاری با ما",
        "فرصت شغلی",
        "اخبار",
        "نمایندگی ها",
      ],
    },
    {
      title: "پشتیبانی",
      links: [
        "ثبت تیکت",
        "گارانتی",
        "شرایط مرجوعی",
        "راهنمای خرید",
        "حریم خصوصی",
      ],
    },
    {
      title: "پنل فروشندگان",
      links: [
        "ثبت نام فروشنده",
        "قوانین فروشندگان",
        "پنل مدیریت",
        "گزارش فروش",
      ],
    },
  ];

  return (
    <footer
      className="
        mt-20
        bg-gradient-to-l
        from-[#203F82]
        to-[#0077B8]
        text-white
      "
      dir="rtl"
    >
      <div className="max-w-[1526px] mx-auto px-8 py-12">

        <div className="flex justify-between items-start mb-10">

          <img
            src="/img/mainlogo2.svg"
            alt="logo"
            className="h-12 brightness-0 invert"
          />

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              bg-white
              text-gray-800
              px-4
              py-2
              rounded-md
              text-sm
              font-medium
            "
          >
            بازگشت به بالا
          </button>

        </div>

        <div className="border-t border-white/20 pt-10">

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              gap-10
            "
          >

            {footerColumns.map((column) => (
              <div key={column.title}>

                <h3 className="font-bold mb-5">
                  {column.title}
                </h3>

                <ul className="space-y-3 text-sm text-white/80">

                  {column.links.map((link) => (
                    <li
                      key={link}
                      className="hover:text-white cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}

                </ul>

              </div>
            ))}

            <div>

              <h3 className="font-bold mb-5">
                دانلود اپلیکیشن
              </h3>

              <div className="space-y-3">

                <button className="w-full bg-white text-black rounded px-4 py-2 text-sm">
                  دانلود اندروید
                </button>

                <button className="w-full bg-white text-black rounded px-4 py-2 text-sm">
                  دانلود iOS
                </button>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-8">

          <div
            className="
              flex
              flex-col
              lg:flex-row
              justify-between
              gap-8
            "
          >

            <div>

              <h3 className="font-bold mb-4">
                ارتباط با ما
              </h3>

              <p className="text-sm text-white/80">
                تهران، میدان آزادی
              </p>

              <p className="text-sm text-white/80 mt-2">
                021-12345678
              </p>

              <p className="text-sm text-white/80 mt-2">
                info@technolike.ir
              </p>

            </div>

            <div>

              <h3 className="font-bold mb-4">
                شبکه‌های اجتماعی
              </h3>

              <div className="flex gap-4 text-2xl">

                <FiInstagram className="cursor-pointer" />

                <FiTwitter className="cursor-pointer" />

                <FiYoutube className="cursor-pointer" />

                <FiSend className="cursor-pointer" />

              </div>

            </div>

          </div>

        </div>

        <div
          className="
            border-t
            border-white/20
            mt-10
            pt-8
            flex
            flex-wrap
            justify-between
            items-center
            gap-8
          "
        >

          <div className="flex gap-3">

            <img
              src="/img/enamad.png"
              alt=""
              className="w-16 h-16 rounded bg-white p-1"
            />

            <img
              src="/img/samandehi.png"
              alt=""
              className="w-16 h-16 rounded bg-white p-1"
            />

            <img
              src="/img/etehadieh.png"
              alt=""
              className="w-16 h-16 rounded bg-white p-1"
            />

            <img
              src="/img/enamad.png"
              alt=""
              className="w-16 h-16 rounded bg-white p-1"
            />

          </div>

          <div className="text-sm text-white/70">
            © 1405 تمامی حقوق برای تکنولایک محفوظ است.
          </div>

        </div>

      </div>
    </footer>
  );
}