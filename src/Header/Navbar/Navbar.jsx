import "../../style.css";
import {
  ShoppingBagIcon,
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  PercentBadgeIcon,
  CurrencyEuroIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import NavbarLi from "./NavbarLi";

function Navbar() {
  return (
    <div>
      <div className="Navbar p-2 flex lg:justify-between ">
        <div className="Navbar__right w-full">
          <div className="Navbar__right-img">
            <img src="/digik.png" alt="" />
          </div>
          <div className="Navbar__right-Container-input">
            <input
              type="text"
              className="Navbar__right-input"
              placeholder="جستجو"
            />
            <MagnifyingGlassIcon className="size-5 absolute top-2.5 right-3" />
          </div>
        </div>
        <div className="Navbar__ledt">
          <button className="Navbar__ledt-btn">
            <ArrowLeftStartOnRectangleIcon className="size-5" />
            <p>ورود | ثبت نام</p>
          </button>
          <span>|</span>
          <ShoppingBagIcon className="size-5" />
        </div>
      </div>
      <div className="below__Navbar p-2 flex items-center justify-between border-b-2 border-b-gray-200">
        <ul className="font-DanaMedium text-sm flex items-center gap-6">
          <NavbarLi text={"دسته بندی کالاها"} />
          <NavbarLi text={"شگفت انگیز ها"} />
          <NavbarLi text={"سوپرمارکت"} />
          <NavbarLi text={"طلای دیجیتال"} />
          <li className="flex lg:hidden">انتخاب استان و شهر</li>
        </ul>
        <div className="hidden lg:flex ">
          <button className="text-sm flex items-center gap-x-1 bg-[#F57F17] p-2 rounded-md text-white font-DanaMedium cursor-pointer">
            <MapIcon className="size-5" />
            شهر خود را انتخاب کنید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
