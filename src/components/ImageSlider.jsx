export default function ImageSlider() {
  return (
    <section className="max-w-[1526px] mx-auto mt-6">

      <div className="grid grid-cols-3 gap-7 pl-8 pr-8">

        <img
          src="/img/banner1.webp"
          alt="banner"
          className="
            w-full
            h-[210px]
            object-cover
            rounded-2xl
            cursor-pointer
          "
        />

        <img
          src="/img/banner2.png"
          alt="banner"
          className="
            w-full
            h-[210px]
            object-cover
            rounded-2xl
            cursor-pointer
          "
        />

        <img
          src="/img/banner3.png"
          alt="banner"
          className="
            w-full
            h-[210px]
            object-cover
            rounded-2xl
            cursor-pointer
          "
        />

      </div>

    </section>
  );
}