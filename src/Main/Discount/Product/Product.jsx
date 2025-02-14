export default function Product() {
  return (
    <div className="bg-white p-2 rounded-md  font-DanaMedium h-full flex flex-col justify-between items-center">
      <div className="flex flex-col items-center">

      <div className="size-25">
        <img
          className="size-full"
          src="https://dkstatics-public.digikala.com/digikala-products/2f09f56a773fb8bb3960a32d4a5507c9d29ebc2a_1737982897.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          alt=""
        />
      </div>
      <div className="text-xs mt-3">
        <p className="line-clamp-3">
          گوشی موبایل آنر مدل X5b دو سیم‌کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت
        </p>
      </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center xs:justify-between w-full items-center">
          <div className="bg-redCustom hidden  xs:block p-0.5 sm:p-1 rounded-md text-white text-[10px] sm:text-xs ">
            <p>8%</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="flex items-center gap-x-1">
            <del className=" text-gray-400 text-[10px]">6,899,999</del>
            <p className="text-xs">6,355,000</p>

            </div>
            <svg className="size-4">
              <use href="#toman"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
