import "../../style.css"

export default function ItemSuperMarket({img}) {
  return (
    <div className="rounded-full max-sm:size-[40px] size-[50px] lg:size-[74px]">
        <img className="size-full" src={`${img}`} alt="" />
    </div>
  )
}
