export default function Product() {
  return (
    <div className="bg-white p-2 rounded-md  font-DanaMedium h-full flex flex-col justify-between items-center">
      <div className="size-25">
        <img
          className="size-full"
          src="https://dkstatics-public.digikala.com/digikala-products/2f09f56a773fb8bb3960a32d4a5507c9d29ebc2a_1737982897.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          alt=""
        />
      </div>
      <div className="text-xs mt-1">
        <p className="line-clamp-2">
          گوشی موبایل آنر مدل X5b دو سیم‌کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full items-center">
          <div className="bg-redCustom p-1 rounded-md text-white text-xs ">
            <p>8%</p>
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">6,355,000</p>
            <svg className="size-4">
              <use href="#toman"></use>
            </svg>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <del className="text-xs text-gray-400">6,899,999</del>
        </div>
      </div>
    </div>
  );
}
