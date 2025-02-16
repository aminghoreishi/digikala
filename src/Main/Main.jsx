
import Brand from "./Brand/Brand";
import Cover from "./Cover/Cover";
import Cover2 from "./Cover2/Cover2";
import Discount from "./Discount/Discount";
import SuperMarketBanner from "./SuperMarketBanner/SuperMarketBanner";
export default function Main() {
  return (
    <div className="mt-3">
      <Discount />
      <Cover/>
      <SuperMarketBanner/>
      <Cover2/>
      <Brand/>
    </div>
  );
}
