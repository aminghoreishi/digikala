import "../../style.css";
import "./Story.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default function Story() {
  return (
    <div className="container mx-auto">
      <Swiper
        freeMode={true}
        slidesPerView={"auto"}
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
            spaceBetween: 1,
          },
        }}
        className="mySwiper mt-5"
      >
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
        <SwiperSlide style={{width:"99px"}}>
          <div className="size-15 sm:size-20 overflow-hidden flex items-center justify-center border-2 border-red-700 rounded-full">
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
  );
}
