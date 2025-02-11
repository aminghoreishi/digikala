import "../style.css";
import { ShoppingBagIcon , ArrowLeftStartOnRectangleIcon , MagnifyingGlassIcon } from "@heroicons/react/24/solid";
function Navbar () {
    return (
        <div className="Navbar p-2 flex lg:justify-between ">
            <div className="Navbar__right w-full">
                <div className="Navbar__right-img">
                    <img src="/digik.png" alt="" />
                </div>
                <div className="Navbar__right-Container-input">
                    <input type="text"  className="Navbar__right-input" placeholder="جستجو" />
                    <MagnifyingGlassIcon className="size-5 absolute top-2.5 right-3" />
                </div>
            </div>
            <div className="Navbar__ledt">
                <button className="Navbar__ledt-btn">
                    <ArrowLeftStartOnRectangleIcon className="size-5" />
                    <p>ورود | ثبت نام</p>
                </button>
                <span>|</span>
                <ShoppingBagIcon className="size-5"/>
            </div>
        </div>
    )
}

export default Navbar