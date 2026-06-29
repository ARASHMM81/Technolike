import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function StorySlider() {
  const stories = [
    {
      id: 1,
      title: "موبایل",
      image: "/img/story1.png",
    },
    {
      id: 2,
      title: "لپ تاپ",
      image: "/img/story2.png",
    },
    {
      id: 3,
      title: "گیمینگ",
      image: "/img/story3.png",
    },
    {
      id: 4,
      title: "قابلومان",
      image: "/img/story4.png",
    },
    {
      id: 5,
      title: "کولر",
      image: "/img/story5.png",
    },
    {
      id: 6,
      title: "طلا",
      image: "/img/story6.png",
    },
    {
      id: 7,
      title: "پلی استیشن",
      image: "/img/story7.png",
    },
    {
      id: 8,
      title: "تکنو",
      image: "/img/story8.png",
    },
  ];

  return (
    <div className="max-w-[1526px] mx-auto mt-6">

      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        dir="rtl"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="flex flex-col items-center cursor-pointer">

              <div
                className="
                  w-30
                  h-30
                  rounded-full
                  p-[3px]
                  bg-gradient-to-tr
                  from-pink-500
                  via-red-500
                  to-yellow-400
                "
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                    border-2
                    border-white
                  "
                />
              </div>

              <span className="mt-2 text-sm">
                {story.title}
              </span>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}