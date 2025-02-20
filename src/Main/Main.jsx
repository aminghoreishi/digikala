
import Brand from "./Brand/Brand";
import CategoryDigital from "./CategoryDigital/CategoryDigital";
import Cover from "./Cover/Cover";
import Cover2 from "./Cover2/Cover2";
import Cover3 from "./Cover3/Cover3";
import Discount from "./Discount/Discount";
import OneCover from "./OneCover/OneCover";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
import Read from "./Read/Read";
import SuperMarketBanner from "./SuperMarketBanner/SuperMarketBanner";
export default function Main() {
  return (
    <div className="mt-3">
      <Discount />
      <Cover/>
      <SuperMarketBanner/>
      <Cover2/>
      <Brand/>
      <Cover3/>
      <CategoryDigital/>
      <OneCover/>
      <ProductDiscount/>
      <Read/>
    </div>
  );
}
