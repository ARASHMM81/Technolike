import { FiChevronLeft, FiCheckCircle } from "react-icons/fi";

export default function BrandsSlider() {
  const brands = [
    "/img/philips.png",
    "/img/tsco.png",
    "/img/beem.png",
    "/img/energizer.png",
    "/img/siliconpower.png",
    "/img/tplink.png",
    "/img/life.png",
  ];

  return (
    <section className="max-w-[1526px] mx-auto px-8 mt-8">
      <div className="border border-[#D9E2F1] rounded-[28px] overflow-hidden bg-white">

        <div className="flex flex-row-reverse h-[130px]">

          {/* RIGHT PANEL */}

          <div
            className="
              w-[270px]
              shrink-0
              bg-gradient-to-b
              from-[#0C85C7]
              to-[#213B86]
              text-white
              flex
              flex-col
              items-center
              justify-center
              gap-3
            "
          >
            <FiCheckCircle size={42} />

            <h2 className="text-3xl font-bold">
              برندهای منتخب
            </h2>
          </div>

          {/* BRANDS */}

          <div className="flex-1 flex items-center" dir="rtl">

            {brands.map((brand, index) => (
              <div
                key={index}
                className="
                  flex-1
                  h-full
                  flex
                  items-center
                  justify-center
                  border-l
                  border-[#D9E2F1]
                  relative
                "
              >
                <img
                  src={brand}
                  alt="brand"
                  className="
                    max-w-[140px]
                    max-h-[60px]
                    object-contain
                  "
                />
              </div>
            ))}

            {/* ARROW */}

            <button
              className="
                absolute
                left-14
                w-12
                h-12
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              <FiChevronLeft size={24} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}