import CoverItem2 from "../Cover2/CoverItem2";
export default function Cover3() {
  return (
    <div className="container mx-auto mt-5">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <CoverItem2  img={"https://dkstatics-public.digikala.com/digikala-adservice-banners/c9261e53191448b03b856da85c42d6854bd6e5cf_1739340782.jpg?x-oss-process=image/quality,q_95  "} />
           <CoverItem2  img={"https://dkstatics-public.digikala.com/digikala-adservice-banners/48c5e5e1b3217523fa99ce603249a0ccb235de7b_1739803730.jpg?x-oss-process=image/quality,q_95"} />
         </div>
       </div>
  );
}