export default function ImageSlider({ images }) {
  return (
    <section className="max-w-[1526px] mx-auto mt-6">
      <div className="grid grid-cols-3 gap-7 px-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`banner-${index}`}
            className="
              w-full
              h-[210px]
              object-cover
              rounded-2xl
              cursor-pointer
            "
          />
        ))}
      </div>
    </section>
  );
}