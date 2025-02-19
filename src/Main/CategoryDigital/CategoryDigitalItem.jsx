import "../../style.css"

export default function CategoryDigitalItem({header , img}) {
  return (
    <div className="font-DanaMedium">
        <h1>{header}</h1>
        <p className="text-xs text-gray-400 my-1">براساس سلیقه شما</p>
        <div className="grid grid-cols-2 gap-5">
            <div className="size-30">
                <img className="size-full" src={`${img}`} alt="" />
            </div>
            <div className="size-30">
                <img className="size-full" src={`${img}`} alt="" />
            </div>
            <div className="size-30">
                <img className="size-full" src={`${img}`} alt="" />
            </div>
            <div className="size-30">
                <img className="size-full" src={`${img}`} alt="" />
            </div>
        </div>
    </div>
  )
}
