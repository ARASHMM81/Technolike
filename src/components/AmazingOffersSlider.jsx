import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

export default function AmazingOffersSlider() {
  const products = [
    {
      id: 1,
      title: "لپ تاپ ایسوس مدل VivoBook",
      price: "45,000,000",
      oldPrice: "50,000,000",
      discount: "14%",
      image: "/img/product1.png",
    },
    {
      id: 2,
      title: "لپ تاپ ایسوس مدل VivoBook",
      price: "14,300,000",
      oldPrice: "18,000,000",
      discount: "23%",
      image: "/img/product2.png",
    },
    {
      id: 3,
      title: "لپ تاپ ایسوس مدل VivoBook",
      price: "1,999,000",
      oldPrice: "3,850,000",
      discount: "48%",
      image: "/img/product3.png",
    },
    {
      id: 4,
      title: "لپ تاپ ایسوس مدل VivoBook",
      price: "1,499,000",
      oldPrice: "1,750,000",
      discount: "15%",
      image: "/img/product4.png",
    },
    {
      id: 5,
      title: "لپ تاپ ایسوس مدل VivoBook",
      price: "1,590,000",
      oldPrice: "1,749,000",
      discount: "10%",
      image: "/img/product5.png",
    },
    {
      id: 6,
      title: "لپ تاپ ایسوس مدل VivoBook",
      price: "1,880,000",
      oldPrice: "2,500,000",
      discount: "27%",
      image: "/img/product6.png",
    },
  ];

  return (
    <section className="max-w-[1526px] mx-auto mt-8 pl-8 pr-8">

      <div
        className="
         bg-gradient-to-tr
                  from-purple-950
                  via-pink-900
                  to-blue-950 
        rounded-2xl
        p-4
        relative
      "
      >
        {/* HEADER */}

        <div className="flex items-center justify-between text-white mb-4">

          <div className="font-bold text-xl">
            تکنوتایم
          </div>

          <button className="font-bold flex items-center gap-2 text-sm text-gray-200 hover:text-white cursor-pointer">
            نمایش همه
            <FiChevronLeft />
          </button>

        </div>

        {/* SWIPER */}

        <Swiper
          modules={[Navigation]}
          slidesPerView={5.3}
          spaceBetween={8}
          navigation={{
            prevEl: ".offer-prev",
            nextEl: ".offer-next",
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className="
                bg-white
                rounded-xl
                overflow-hidden
                min-h-[px]
                flex
                flex-col
              "
              >
                {/* BADGE */}

                <div className="flex justify-end p-3">
                  <span
                    className="
                    bg-gray-800
                    text-white
                    text-xs
                    px-3
                    py-1
                    rounded-full
                  "
                  >
                    تکنوتایم
                  </span>
                </div>

                {/* IMAGE */}

                <img
                  src={product.image}
                  alt={product.title}
                  className="
                  h-[220px]
                  object-contain
                  px-4
                "
                />

                {/* TITLE */}

                <div className="px-4 mt-4 flex-1">
                  <h3
                    className="
                    text-sm
                    text-right
                    leading-7
                    line-clamp-2
                  "
                  >
                    {product.title}
                  </h3>
                </div>

                {/* PRICE */}

                <div className="px-4">

                  <div className="flex items-center justify-between">

                    <span
                      className="
                      bg-red-700
                      text-white
                      px-2
                      rounded
                      text-sm
                    "
                    >
                      {product.discount}
                    </span>

                    <div className="font-bold">
                      {product.price}
                    </div>

                  </div>

                  <div
                    className="
                    text-gray-400
                    line-through
                    text-sm
                    mt-2
                  "
                  >
                    {product.oldPrice}
                  </div>

                </div>

                {/* FOOTER */}

                <div
                  className="
                  border-t
                  mt-4
                  p-4
                  flex
                  justify-between
                  text-sm
                "
                >
                  <span className="text-red-700 font-bold">
                    00:50:01
                  </span>

                  <span className="text-gray-500">
                    زمان باقی مانده
                  </span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION */}

        <button
          className="
          offer-prev
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          z-20
          w-12
          h-12
          rounded-full
          bg-white
          shadow-lg
          flex
          items-center
          justify-center
        "
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          className="
          offer-next
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          z-20
          w-12
          h-12
          rounded-full
          bg-white
          shadow-lg
          flex
          items-center
          justify-center
        "
        >
          <FiChevronRight size={24} />
        </button>

      </div>

    </section>
  );
}