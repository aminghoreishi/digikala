import "../../style.css";
import { StarIcon } from "@heroicons/react/24/solid";
import Brandli from "./Brandli";
export default function Brand() {
  return (
    <div className="container mx-auto font-DanaMedium mt-5">
      <div className="rounded-lg border-2 border-gray-200">
        <div className="flex items-center justify-center gap-x-1">
          <StarIcon className="size-5" />
          <h1>محبوب ترین برند ها</h1>
        </div>
        <ul className="flex justify-between items-center divide-x-2 divide-gray-200">
          <Brandli img={"/per.png"} />
          <Brandli img={"/persil.png"} />
          <Brandli img={"/adata.png"} />
        </ul>
      </div>
    </div>
  );
}
