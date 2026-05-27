import Hero from "./components/Hero/Hero";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import DividerBottom from "./components/DividerBottom/DividerBottom";
import DividerTop from "./components/DividerTop/DividerTop";
import HomeTrustIcons from "./components/HomeTrustIcons/HomeTrustIcons";
import HomeReviews from "./components/HomeReviews/HomeReviews";
import HomeGallery from "./components/HomeGallery/HomeGallery";
import HomeFinalCall from "./components/HomeFinalCall/HomeFinalCall";
import HomeHoursLocation from "./components/HomeHoursLocation/HomeHoursLocation";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeAbout/>
      <DividerBottom/>
      <HomeMenu/>
      <HomeTrustIcons/>
      <HomeReviews/>
      <HomeGallery/>
      <HomeFinalCall/>
      <HomeHoursLocation/>
      <DividerTop/>
    </>
  );
}
