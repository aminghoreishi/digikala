import CoverItem2 from "../Cover2/CoverItem2";
export default function Cover3() {
  return (
    <div className="container mx-auto mt-5">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <CoverItem2 img={"/public/d1.png"} />
           <CoverItem2 img={"/op56.png"} />
         </div>
       </div>
  );
}