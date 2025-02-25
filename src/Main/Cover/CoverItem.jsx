import "../../style.css";

export default function CoverItem() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <li className="w-full">
        <img className="size-full rounded-xl" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4bc12cfc03080e42189239a4f779bb2584a31094_1740407557.jpg?x-oss-process=image/quality,q_95" />
      </li>
      <li className="w-full">
        <img className="size-full rounded-xl" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f3b8023038534b7a12623297cb9fd6b8702fdf14_1739953936.jpg?x-oss-process=image/quality,q_95" />
      </li>
      <li className="w-full">
       <img  className="size-full rounded-xl"src="https://dkstatics-public.digikala.com/digikala-adservice-banners/879bbf326a77928db699189292b655a6b037ada5_1739888901.jpg?x-oss-process=image/quality,q_95" />
      </li>
      <li className="w-full">
        <img className="size-full rounded-xl" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c3285f442d6a7a5e6a50787d3e9b2eb6ebdb1aed_1740234786.jpg?x-oss-process=image/quality,q_95" />
      </li>
    </ul>
  );
}
