import "../../style.css";
import { StarIcon } from "@heroicons/react/24/solid";
import BrandSwiper from "./BrandSwiper";
export default function Brand() {
  return (
    <div className="container mx-auto font-DanaMedium mt-5">
      <div className="rounded-lg border-2 border-gray-200 h-[133px] md:h-[223px] ">
        <div className="flex items-center justify-center gap-x-1 mt-5 mb-5 md:mb-10">
          <StarIcon className="size-5 fill-amber-400 max-sm:size-4" />
          <h1 className="max-sm:text-xs">محبوب ترین برند ها</h1>
        </div>
        <BrandSwiper />
      </div>
    </div>
  );
}
