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
    <div className="px-8">
      <section className="max-w-[1526px] mx-auto mt-8 border rounded-2xl border-[#C6CEDE] overflow-hidden">

        <div className="bg-white p-4 relative">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-4" dir="rtl">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black font-bold" dir="rtl">
              نمایش همه
              <FiChevronLeft />
            </button>
          </div>

          {/* SWIPER */}
          <Swiper dir="rtl"
            className="!overflow-visible"
            modules={[Navigation]}
            slidesPerView={5.3}
            spaceBetween={0}
            navigation={{
              prevEl: ".offer-prev",
              nextEl: ".offer-next",
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={product.id}
                className={`
                  relative
                  ${index !== products.length - 1 ? "border-l border-gray-400" : ""}
                `}
              >
                <div className="bg-white flex flex-col px-3">

                  {/* BADGE */}
                  <div className="flex justify-end p-2">
                    <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                      تکنوتایم
                    </span>
                  </div>

                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[240px] object-contain px-2"
                  />

                  {/* TITLE */}
                  <div className="mt-3 flex-1">
                    <h3 className="text-sm text-right leading-6 text-gray-700 line-clamp-2">
                      {product.title}
                    </h3>
                  </div>

                  {/* PRICE */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                        {product.discount}
                      </span>

                      <div className="font-bold text-gray-900">
                        {product.price}
                      </div>
                    </div>

                    <div className="text-gray-400 line-through text-xs mt-1">
                      {product.oldPrice}
                    </div>
                  </div>

                  <div className="h-6" />

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION */}
          <button className="offer-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center">
            <FiChevronLeft size={20} />
          </button>

          <button className="offer-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center">
            <FiChevronRight size={20} />
          </button>

        </div>
      </section>
    </div>
  );
}