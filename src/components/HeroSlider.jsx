import { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;

      swiperRef.current.swiper.navigation.destroy();
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="max-w-[1526px] mx-auto mt-4 relative">

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img
            src="/img/slider1.png"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/slider2.png"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/slider3.png"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src="/img/slider3.png"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src="/img/slider3.png"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src="/img/slider3.png"
            className="w-full h-[420px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* CUSTOM BUTTONS */}
<button
  ref={prevRef}
  className="absolute bottom-6 right-20 z-30 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
>
  <FiChevronLeft size={20} />
</button>

<button
  ref={nextRef}
  className="absolute bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
>
  <FiChevronRight size={20} />
</button>

    </div>
  );
}