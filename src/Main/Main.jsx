
import Cover from "./Cover/Cover";
import Discount from "./Discount/Discount";
import SuperMarketBanner from "./SuperMarketBanner/SuperMarketBanner";
export default function Main() {
  return (
    <div className="mt-3">
      <Discount />
      <Cover/>
      <SuperMarketBanner/>
    </div>
  );
}
