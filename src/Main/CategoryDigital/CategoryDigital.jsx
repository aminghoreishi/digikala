import "../../style.css"
import CategoryDigitalItem from "./CategoryDigitalItem"

export default function CategoryDigital() {
  return (
    <div className="container mx-auto mt-5">
        <div className="grid grid-cols-4 gap-3 justify-between border-2 border-gray-300 rounded-xl overflow-hidden p-3 divide-x-2 divide-gray-300">
            <CategoryDigitalItem header={"گوشی موبایل"}  img={"https://dkstatics-public.digikala.com/digikala-products/66891491c660e8b5438f00e8a54b69a92e3a5a27_1713258207.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}/>
            <CategoryDigitalItem header={"کیف و کاور گوشی"} img={""}/>
            <CategoryDigitalItem header={"هدفون، هدست و هنذفری"} img={""}/>
            <CategoryDigitalItem header={"جوراب مردانه"} img={""}/>
        </div>
    </div>
  )
}
