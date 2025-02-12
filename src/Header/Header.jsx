import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation , Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "../style.css";

export default function Header() {
  return (
    <div className="">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-5"
        >
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
              <p>
                <img
                  src="https://images.interactify.live/e818ef9ec70e471ab4909f174b88e1fe.jpeg?width=115"
                  alt=""
                />
              </p>
              <p className="absolute bottom-0 text-xs text-white bg-red-600 p-1 rounded-md font-DanaMedium">
                زنده
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
          modules={[Pagination , Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper mt-5"
        >
          <SwiperSlide className="h-full">
            <img
              className="w-full h-full"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d32bd3a5185f0e118fdb8ab0047ee7dbf155fb2b_1739017057.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img
              className="w-full h-full"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/64db634e2e59c8583063cdc2250ce34a7377eeb4_1739026411.gif?x-oss-process=image"
              alt=""
            />
          </SwiperSlide >
          <SwiperSlide className="h-full">
            <img
              className="w-full h-full"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/85a9ec1107d6ac4ef9ac7898713e4b403df18401_1738991714.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
