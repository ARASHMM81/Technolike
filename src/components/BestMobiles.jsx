export default function BestMobiles() {
  const brands = [
    {
      id: 1,
      name: "سامسونگ",
      image: "/img/samsung.png",
    },
    {
      id: 2,
      name: "پوکو",
      image: "/img/poco.png",
    },
    {
      id: 3,
      name: "آیفون",
      image: "/img/iphone.png",
    },
    {
      id: 4,
      name: "آنر",
      image: "/img/honor.png",
    },
    {
      id: 5,
      name: "شیائومی",
      image: "/img/xiaomi.png",
    },
  ];

  return (
    <section className="max-w-[1526px] mx-auto mt-10 px-8">
      <h2 className="text-center text-2xl font-bold mb-5">
        برترین‌های موبایل
      </h2>

      <div
        className="
          flex
          items-center
          justify-center
          gap-14
          flex-wrap
        "
        dir="rtl"
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="
              flex
              flex-col
              items-center
              cursor-pointer
              group
            "
          >
            <div
              className="
                w-[150px]
                h-[150px]
                rounded-3xl
                bg-[#EAF6FF]
                overflow-hidden
                transition
                duration-300
                group-hover:scale-105
              "
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <span className="mt-4 font-medium">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}