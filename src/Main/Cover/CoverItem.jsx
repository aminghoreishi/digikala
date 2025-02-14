import "../../style.css";

export default function CoverItem() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <li className="w-full">
        <img className="size-full" src="/ی.png" />
      </li>
      <li className="w-full">
        <img className="size-full" src="/ی2.png" />
      </li>
      <li className="w-full">
       <img  className="size-full"src="/ی3.png" />
      </li>
      <li className="w-full">
        <img className="size-full" src="/ی4.png" />
      </li>
    </ul>
  );
}
