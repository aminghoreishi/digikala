import "../../style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export default function Bg() {
  return (
    <div className="mt-5 h-full hidden md:flex">
      <Swiper
        spaceBetween={1}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper mt-3"
      >
        <SwiperSlide className="h-full">
          <img
            className="w-full h-full object-cover"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/64db634e2e59c8583063cdc2250ce34a7377eeb4_1739026411.gif?x-oss-process=image"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            className="w-full h-full object-cover"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/85a9ec1107d6ac4ef9ac7898713e4b403df18401_1738991714.jpg?x-oss-process=image/quality,q_95"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
