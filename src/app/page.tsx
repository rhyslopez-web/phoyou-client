import Image from "next/image";
import Hero from "./components/Hero/Hero";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import DividerBottom from "./components/DividerBottom/DividerBottom";
import DividerTop from "./components/DividerTop/DividerTop";
import HomeTrustIcons from "./components/HomeTrustIcons/HomeTrustIcons";

export default function Home() {
  return (
    <>
      <Hero/>
      <DividerTop/>
      <HomeAbout/>
      <DividerBottom/>
      <HomeMenu/>
      <HomeTrustIcons/>
    </>
  );
}
