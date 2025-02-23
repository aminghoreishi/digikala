import "../style.css";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
export default function Footer() {
  return (
    <div className="border-t-2 mt-12 max-md:p-2 p-3 border-gray-300 font-DanaMedium">
      <div className="flex items-center justify-between ">
        <div className="">
          <img src="/public/digik.png" alt="" />
        </div>
        <div className="">
          <button className="flex items-center max-md:text-xs border-2 p-2 rounded-xl cursor-pointer text-gray-400 text-sm">
            <span className="font-light">برگشت به بالا</span>
            <ArrowLongUpIcon className="size-5 max-md:size-4" />
          </button>
        </div>
      </div>
      <div className="text-xs max-md:text-[10px] max-md: max-md:justify-between flex items-center max-md:divide-x-0  max-md:mt-5   divide-x-2 mt-2 divide-gray-400 max-md:*:p-0.5 *:p-1 *:text-gray-500">
        <div className="">
          <p className="w-full">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
        </div>
        <div className="max-md:hidden">
          <p className="w-full">۰۲۱-۹۱۰۰۰۱۰۰</p>
        </div>
        <div className="">
          <p className="w-full">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
      </div>
      <div className="grid max-md:grid-cols-2 max-md:gap-3 grid-cols-5 mt-5 *:text-gray-500">
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
      <div className="grid max-lg:hidden grid-cols-4 mt-8">
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
            <div className="max-md:size-8 size-12">
              <img
                className="size-full"
                src="https://www.digikala.com/statics/img/png/footerlogo2.webp"
                alt=""
              />
            </div>
            <p className="max-md:text-xs max-lg:text-sm">دانلود اپلیکیشن دیجی کالا</p>
          </div>
          <div className="flex items-center max-md:gap-1 gap-3">
            <div className="h-[44px] max-sm:h-[15px] max-md:h-[20px] max-lg:h-[30px]">
              <img
                className="size-full"
                src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"
                alt=""
              />
            </div>
            <div className="h-[44px] max-sm:h-[15px] max-md:h-[20px] max-lg:h-[30px]">
              <img
                className="size-full"
                src="https://www.digikala.com/statics/img/svg/appStores/myket.svg"
                alt=""
              />
            </div>
            <div className="h-[44px] max-sm:h-[15px] max-md:h-[20px] max-lg:h-[30px]">
              <img
                className="size-full"
                src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 mt-8 border-t-gray-300 p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  max-md:gap-5 max-md:justify-center justify-between">
          <div className="">
            <p className="max-md:text-base text-xl xl:text-2xl text-gray-500">
              فروشگاه اینترنتی دیجی کالا ، بررسی ، انتخاب و خرید انلاین
            </p>
            <p className="text-xs mt-3 text-gray-400">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
          <div className="grid max-md:grid-cols-2 max-md:gap-3 grid-cols-4 items-center *:flex *:justify-center">
            <div className="">
              <div className="size-28 p-2 border-2 border-gray-300 rounded-xl">
                <img
                  className="size-full"
                  src="https://www.digikala.com/statics/img/png/sapra.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="size-28 p-2 border-2 border-gray-300 rounded-xl">
                <img
                  className="size-full"
                  src="https://www.digikala.com/statics/img/png/sapra.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="size-28 p-2 border-2 border-gray-300 rounded-xl">
                <img
                  className="size-full"
                  src="https://www.digikala.com/statics/img/png/sapra.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="size-28 p-2 border-2 border-gray-300 rounded-xl">
                <img
                  className="size-full"
                  src="https://www.digikala.com/statics/img/png/sapra.webp"
                  alt=""
                />
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}
