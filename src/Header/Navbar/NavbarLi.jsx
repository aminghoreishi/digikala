import "../../style.css";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function NavbarLi({text}) {
  return (
    <li className="lg:flex items-center gap-x-1 cursor-pointer hidden">
        <Bars3Icon className="size-5" />
        <span>{text}</span>
    </li>
  )
}
