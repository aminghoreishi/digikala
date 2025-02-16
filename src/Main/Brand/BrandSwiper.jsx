
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./BrandSwiper.css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper"
        freeMode={true}
        style={{ paddingInline: "10px" }}
        breakpoints={{
          320: {
            spaceBetween: 12,
          },
          640: {
            spaceBetween: 5,
          },
          768: {
            spaceBetween: 5,
          },
          1024: {
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>
          <img src="/peghah.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/huawi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/xvi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/anter.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/china.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/kingstar.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/per.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/china.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/china.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
