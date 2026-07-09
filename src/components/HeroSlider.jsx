import { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/img/slider1.png",
      alt: "Hero Slide 1",
    },
    {
      id: 2,
      image: "/img/slider2.png",
      alt: "Hero Slide 2",
    },
    {
      id: 3,
      image: "/img/slider3.png",
      alt: "Hero Slide 3",
    },
    {
      id: 4,
      image: "/img/slider4.png",
      alt: "Hero Slide 4",
    },
    {
      id: 5,
      image: "/img/slider5.png",
      alt: "Hero Slide 5",
    },
    {
      id: 6,
      image: "/img/slider6.png",
      alt: "Hero Slide 6",
    },
  ];

  useEffect(() => {
    if (!swiperRef.current?.swiper) return;

    const swiper = swiperRef.current.swiper;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section
      className="
        relative
        max-w-[1526px]
        mx-auto
      "
    >
      <Swiper
        ref={swiperRef}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              loading="eager"
              className="
                w-full
                h-[380px]
                object-cover
                select-none
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PREV BUTTON */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous Slide"
        className="
          absolute
          bottom-6
          right-20
          z-30
          w-11
          h-11
          rounded-full
          bg-white
          shadow-lg
          flex
          items-center
          justify-center
          cursor-pointer
          hover:scale-105
          transition
        "
      >
        <FiChevronLeft size={20} />
      </button>

      {/* NEXT BUTTON */}
      <button
        ref={nextRef}
        type="button"
        aria-label="Next Slide"
        className="
          absolute
          bottom-6
          right-6
          z-30
          w-11
          h-11
          rounded-full
          bg-white
          shadow-lg
          flex
          items-center
          justify-center
          cursor-pointer
          hover:scale-105
          transition
        "
      >
        <FiChevronRight size={20} />
      </button>
    </section>
  );
}
