import "../../style.css";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import ItemSuperMarket from "./ItemSuperMarket";

export default function SuperMarketBanner() {
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-[#F0F0F1] p-2 flex flex-wrap items-center justify-between font-DanaMedium h-[160px] lg:h-[110px] bg-[url(/public/Group.png)] rounded-xl">
        <div className="flex items-center gap-x-1 max-sm:justify-between max-sm:w-full">
          <div className="flex items-center">
            <div className="max-sm:size-9">
              <img className="size-full" src="/public/q13.png" alt="" />
            </div>
            <h1 className="text-green-500 max-xs:text-sm max-sm:text-lg lg:text-2xl">
              شگفت انگیز سوپرمارکتی
            </h1>
          </div>
          <p className="text-white bg-green-500 max-sm:p-1 max-sm:text-[10px] lg:mx-2 p-2 rounded-2xl text-xs">
            تا 50 درصد تخفیف
          </p>
        </div>
        <div className="flex items-center max-sm:w-full max-sm:justify-between  md:gap-3">
          <div className="flex items-center max-sm:gap-x-1 gap-3 ">
            <ItemSuperMarket img={"/ew1.png"} />
            <ItemSuperMarket img={"/public/123.png"} />
            <ItemSuperMarket img={"/public/3w.png"} />
            <ItemSuperMarket img={"/public/4w.png"} />
          </div>
          <div className="">
            <button className="flex items-center gap-x-1 bg-white max-sm:text-[10px] text-green-500 max-sm:p-1 p-2 rounded-2xl cursor-pointer">
              <p className="md:text-xs">پیش از 100 کالا</p>
              <ArrowLeftIcon className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
