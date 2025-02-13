import Story from "./Story/Story";
import Bg from "./bg/Bg";

// Import Swiper styles
import "swiper/css";

import "../style.css";

export default function Header() {
  return (
    <div className="">
      <Story />
      <Bg />
    </div>
  );
}
