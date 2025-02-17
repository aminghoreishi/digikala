import "../../style.css";
import CoverItem2 from "./CoverItem2";

export default function Cover2() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CoverItem2 img={"/c1.png"} />
        <CoverItem2 img={"/moz.png"} />
      </div>
    </div>
  );
}
