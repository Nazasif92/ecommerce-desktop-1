import Image from "next/image";
import ColMd4 from "../../../images/col-md-4.png"
import ColMd41 from "../../../images/col-md-4 (1).png"
import ColMd42 from "../../../images/col-md-4 (2).png"


export default function header () {
    return (
       <div className="flex  w-[1439px] h-[58px] bg-[#252B42] gap-64">
             <div className="w-[415px] h-[46px] gap-[10px] ml-6 p-2">
               <Image src={ColMd4} alt="col-md-4"/>
            </div>
            <div className="w-[332px] h-11 gap-10 p-[10px]">
                <Image src={ColMd41} alt="col-md-4(1)"/>
            </div>
            <div className="w-[233px] h-[46px] gap-10 p-[10px]">
                <Image src={ColMd42} alt="col-md-4(1)"/>
            </div>
       </div> 
    );
};