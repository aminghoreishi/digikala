import Story from "./Story/Story";
import Bg from "./bg/Bg";
import Banner from "../Main/Banner/Banner";

// Import Swiper styles
import "swiper/css";

import "../style.css";

export default function Header() {
  return (
    <div className="">
      <Story />
      <Banner/>
      <Bg />
    </div>
  );
}
