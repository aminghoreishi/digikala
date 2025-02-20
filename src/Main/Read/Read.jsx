import "../../style.css";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
export default function Read() {
  return (
    <div className="container mx-auto font-DanaMedium mt-5">
      <div className="flex justify-between">
        <h1>خواندنی</h1>
        <div className="flex items-center gap-x-1">
          <a href="" className="text-xs text-blue-400">
            مطالب بیشتر در دیجی‌کالا مگ
          </a>
          <ArrowLeftIcon className="size-4 fill-blue-400" />
        </div>
      </div>
      <div className="grid max-sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
        <div className="rounded-xl border-2 border-gray-300 overflow-hidden">
            <div className="">
                <img src="https://www.digikala.com/mag/wp-content/uploads/2025/01/Digikala-Mag-Tablet-Buying-guide-1403-11-Fix.jpg" alt="" />
            </div>
            <div className="text-xs  p-4">
                <p>راهنمای خرید بهترین تبلت؛ اسفند ۱۴۰۳</p>
            </div>
        </div>
        <div className="rounded-xl border-2 border-gray-300 overflow-hidden">
            <div className="">
                <img src="https://www.digikala.com/mag/wp-content/uploads/2025/01/Digikala-Mag-Smartphone-Buying-Guide-1403-12.jpg" alt="" />
            </div>
            <div className="text-xs  p-4">
                <p>بهترین گوشی‌ موبایل بازار ایران (اسفند ۱۴۰۳)</p>
            </div>
        </div>
        <div className="rounded-xl border-2 border-gray-300 overflow-hidden">
            <div className="">
                <img src="https://www.digikala.com/mag/wp-content/uploads/2025/02/xAI-Grok-GettyImages-1765893916_cropped.webp" alt="" />
            </div>
            <div className="text-xs  p-4">
                <p>ایلان ماسک از هوش مصنوعی Grok 3 رونمایی کرد؛ رقیب قدرتمند برای OpenAI</p>
            </div>
        </div>
        <div className="rounded-xl border-2 border-gray-300 overflow-hidden">
            <div className="">
                <img src="https://www.digikala.com/mag/wp-content/uploads/2025/02/iPhone-17-Roundup-Feature-2_cropped.webp" alt="" />
            </div>
            <div className="text-xs  p-4">
                <p>طراحی آیفون ۱۷ با تغییرات قابل توجهی روبرو می‌شود</p>
            </div>
        </div>
      </div>
    </div>
  );
}
