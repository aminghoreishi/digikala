import "../../style.css";
import CategoryLi from "./CategoryLi";

export default function Category() {
  return (
    <div className="mt-3">
    <div className="container mx-auto">
        <ul className="flex overflow-hidden items-center gap-x-3 lg:justify-between">
            <CategoryLi text={"اخرین حراج سال"} />
            <CategoryLi text={"تخفیف موبایل کارکرده"} />
            <CategoryLi text={"خرید طلای دیجیتال"} />
            <CategoryLi text={"صرافی تبدیل"} />
            <CategoryLi text={"وقت دوست داشسته"} />
            <CategoryLi text={"هدیه با ارسال روز"} />
            <CategoryLi text={"4 قسطه"} />
            <CategoryLi text={"پلاس"} />
            <CategoryLi text={"لب تاب و تبلت"} />
        </ul>
    </div>
    </div>
  )
}
