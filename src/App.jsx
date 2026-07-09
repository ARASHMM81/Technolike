import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import StorySlider from "./components/StorySlider";
import AmazingOffersSlider from "./components/AmazingOffersSlider";
import AmazingOffersSlider2 from "./components/AmazingOffersSlider2";
import AmazingOffersSlider3 from "./components/AmazingOffersSlider3";
import ImageSlider from "./components/ImageSlider";
import BestMobiles from "./components/BestMobiles";
import BigBanner from "./components/BigBanner";
import BrandsSlider from "./components/BrandsSlider";

import { banner1, banner2 } from "./Data/Banners";

function App() {
  return (
    <>
      <Header />

      <main className="pt-46">
        <HeroSlider />
      </main>

      <StorySlider />

      <AmazingOffersSlider />

      <ImageSlider images={banner1} />

      <AmazingOffersSlider2 />

      <ImageSlider images={banner2} />

      <BestMobiles />

      <BigBanner />

      <AmazingOffersSlider3 />

      <BrandsSlider />
    </>
  );
}

export default App;