import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Product from "./Product";

import "../../../style.css";
import "./SwiperP.css"

// import required modules
import { FreeMode } from "swiper/modules";

export default function SwiperP() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        breakpoints={{
          320: {
            spaceBetween: 3,
          },
          640: {
            spaceBetween: 5,
          },
          768: {
            spaceBetween: 5,
          },
          1024: {
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper w-full lg:h-full h-[240px] rounded-md"
      >
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <Product />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
