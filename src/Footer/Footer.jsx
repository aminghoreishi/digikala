import "../style.css";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
export default function Footer() {
  return (
    <div className="border-t-2 mt-12 p-3 border-gray-300 font-DanaMedium">
      <div className="flex items-center justify-between ">
        <div className="">
          <img src="/public/digik.png" alt="" />
        </div>
        <div className="">
          <button className="flex items-center border-2 p-2 rounded-xl cursor-pointer text-gray-400 text-sm">
            <span className="font-light">برگشت به بالا</span>
            <ArrowLongUpIcon className="size-5" />
          </button>
        </div>
      </div>
      <div className="text-xs flex divide-x-2 mt-2 divide-gray-400 *:p-1 *:text-gray-500">
        <div className="">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
        </div>
        <div className="">
          <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
        </div>
        <div className="">
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-5 *:text-gray-500">
        <div className="text-xs flex flex-col items-center">
          <div className="">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg"
              alt=""
            />
          </div>
          <p>امکان تحویل اکسپرس</p>
        </div>
        <div className="text-xs flex flex-col items-center">
          <div className="">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg"
              alt=""
            />
          </div>
          <p>امکان پرداخت در محل</p>
        </div>
        <div className="text-xs flex flex-col items-center">
          <div className="">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/support.svg"
              alt=""
            />
          </div>
          <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
        </div>
        <div className="text-xs flex flex-col items-center">
          <div className="">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/days-return.svg"
              alt=""
            />
          </div>
          <p>هفت روز ضمانت بازگشت کالا</p>
        </div>
        <div className="text-xs flex flex-col items-center">
          <div className="">
            <img
              src="https://www.digikala.com/statics/img/svg/footer/original-products.svg"
              alt=""
            />
          </div>
          <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8">
        <div className="">
          <h1>با دیجی کالا</h1>
          <ul className="text-xs text-gray-500 flex flex-col gap-3 mt-2">
            <li>اتاق خبر دیجی کالا</li>
            <li>فروش در دیجی کالا</li>
            <li>فرصت های شغلی</li>
            <li>گزارش تخلف در دیجی کالا</li>
            <li>تماس با دیجی کالا</li>
          </ul>
        </div>
        <div className="">
          <h1>خدمات مشتریان</h1>
          <ul className="text-xs text-gray-500 flex flex-col gap-3 mt-2">
            <li>اتاق خبر دیجی کالا</li>
            <li>فروش در دیجی کالا</li>
            <li>فرصت های شغلی</li>
            <li>گزارش تخلف در دیجی کالا</li>
            <li>تماس با دیجی کالا</li>
          </ul>
        </div>
        <div className="">
          <h1>راهنمای خرید از دیجی‌کالا</h1>
          <ul className="text-xs text-gray-500 flex flex-col gap-3 mt-2">
            <li>اتاق خبر دیجی کالا</li>
            <li>فروش در دیجی کالا</li>
            <li>فرصت های شغلی</li>
            <li>گزارش تخلف در دیجی کالا</li>
            <li>تماس با دیجی کالا</li>
          </ul>
        </div>
        <div className="">
          <h1>همراه ما باشید!</h1>
          <div className="mt-2 flex items-center justify-evenly">
            <div className="">
              <svg className="size-9 fill-gray-400">
                <use href="#instagram"></use>
              </svg>
            </div>
            <div className="">
              <svg className="size-9 fill-gray-400">
                <use href="#twitter"></use>
              </svg>
            </div>
            <div className="">
              <svg className="size-9 fill-gray-400">
                <use href="#linkedin"></use>
              </svg>
            </div>
            <div className="">
              <svg className="size-9 fill-gray-400">
                <use href="#aparat"></use>
              </svg>
            </div>
          </div>
          <div className="mt-5">
            <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
          </div>
          <div className="flex mt-2 items-center w-full gap-1">
            <div className="w-[300px]">
              <input
                className="p-2 w-full border-2 border-gray-300 outline-none rounded-xl
            "
                type="text"
                placeholder="ایمیل شما"
              />
            </div>
            <div className="text-gray-400">
              <button className="border-2 p-2 border-gray-300 rounded-xl w-full">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-[#3C4B6D] p-3 rounded-xl text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="size-12">
              <img
                className="size-full"
                src="https://www.digikala.com/statics/img/png/footerlogo2.webp"
                alt=""
              />
            </div>
            <p>دانلود اپلیکیشن دیجی کالا</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[44px]">
              <img className="size-full" src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg" alt="" />
            </div>
            <div className="">
              <img src="https://www.digikala.com/statics/img/svg/appStores/myket.svg" alt="" />
            </div>
            <div className="">
              <img src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
