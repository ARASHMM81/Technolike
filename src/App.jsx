import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import StorySlider from "./components/StorySlider";
import AmazingOffersSlider from "./components/AmazingOffersSlider";
import AmazingOffersSlider2 from "./components/AmazingOffersSlider2";
import AmazingOffersSlider3 from "./components/AmazingOffersSlider3.jsx";
import ImageSlider from "./components/ImageSlider";
import BestMobiles from "./components/BestMobiles";
import BigBanner from "./components/BigBanner";

function App() {
  const banner1 = [
    "/img/banner1.webp",
    "/img/banner2.png",
    "/img/banner3.png",
  ];

  const banner2 = [
    "/img/banner4.png",
    "/img/banner5.png",
    "/img/banner6.webp",
  ];

  return (
    <>
      <Header />
      <HeroSlider />
      <StorySlider />
      <AmazingOffersSlider />

      <ImageSlider images={banner1} />

      <AmazingOffersSlider2/>

      <ImageSlider images={banner2} />
      <BestMobiles />
      <BigBanner />
      <AmazingOffersSlider3/>
    </>
  );
}

export default App;