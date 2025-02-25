import "../../style.css";
import CoverItem2 from "./CoverItem2";

export default function Cover2() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CoverItem2 img={"https://dkstatics-public.digikala.com/digikala-adservice-banners/0b7ae60f3239ab832c1b57994464d6d71ed3f53f_1739874343.jpg?x-oss-process=image/quality,q_95"} />
        <CoverItem2 img={"https://dkstatics-public.digikala.com/digikala-adservice-banners/7b4e28de75b6e717eab57c617332b2bd9bfb2c6c_1739794139.jpg?x-oss-process=image/quality,q_95"} />
      </div>
    </div>
  );
}
