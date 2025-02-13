export default function CategoryLi({ text }) {
  return (
    <li className="flex flex-col items-center gap-2">
      <div className="size-14">
        <img
          src="https://dkstatics-public.digikala.com/digikala-bellatrix/a6c150ebb721bf118a7b3d80351d59c8243891aa_1733655292.png"
          alt=""
        />
      </div>
      <p className="font-DanaMedium text-xs line-clamp-1">{text}</p>
    </li>
  );
}
