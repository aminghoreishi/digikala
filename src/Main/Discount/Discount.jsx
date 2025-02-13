import "../../style.css";
import SwiperP from "./Product/SwiperP";

export default function Discount() {
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-redCustom w-full gap-5 h-[300px] lg:h-[254px] rounded-md lg:flex items-center p-3">
        <div className="font-DanaMedium lg:w-[190px] text-white flex w-full lg:flex-col justify-between">
          <div className="lg:text-3xl flex lg:flex-col items-center">
            <p>پیشنهاد</p>
            <p>شگفت</p>
            <p>انگیز</p>
          </div>

          <p className="text-center text-sm mt-1">12:07:45</p>
          <div className="size-20 hidden lg:flex justify-center w-full">
            <img
              className="size-full"
              src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
              alt=""
            />
          </div>
          <button className="text-xs">مشاهده همه</button>
        </div>
        <div className="w-full h-full max-sm:mt-2 overflow-hidden">
          <SwiperP />
        </div>
      </div>
    </div>
  );
}
