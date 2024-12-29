
import Image from "next/image"
import Row1 from "../../../images/row (1).png"
import ColMd31 from "../../../images/col-md-3 (1).png"
import ColMd32 from "../../../images/col-md-3 (2).png"
import Pcard from "../../../images/Product card.png"
import ColMd33 from "../../../images/col-md-3 (3).png"
import Pcard1 from "../../../images/Product card (1).png"
import Pcard2 from "../../../images/Product card (2).png"
import Pcard3 from "../../../images/Product card (3).png"
import ColMd4 from "../../../images/col-md-3 (4).png"
import CarouSel2 from "../../../images/carousel 2 (1).png"

export default function Desk10 () {
    return (
        <div className="flex justify-center w-[1440px] h-[1652px]">
            <div className="w-[1124px] h-[1652px] left-[195px] py-20 gap-20 ml-24 ">
                <div className="w-[691px] h-[102px] gap-10 ml-64">
                    <Image src={Row1} alt="row(1)"/>
                </div>
                <div className=" flex w-[1049px] h-[615px] gap-[30px] mt-20">
                    <div className="w-[238px] h-[615px]">
                       <Image src={ColMd31} alt="col-md-3(1)"/>
                    </div>
                    <div className="w-[241px] h-[615]">
                        <Image src={ColMd32} alt="col-md-3(2)"/>
                    </div>
                    <div className="w-[240]px] h-[615px]">
                        <Image src={Pcard} alt="Product card"/>
                    </div>
                    <div className="w">
                        <Image src={ColMd33} alt="col-md-3(3)"/>
                    </div>
                </div>
                <div className="flex w-[1049px] h-[615px] gap-[30px]">
                    <div className="w-[238] h-[615]">
                        <Image src={Pcard1} alt="Product card(1)"/>
                    </div>
                    <div className="w-[239] h-[615px]">
                        <Image src={Pcard2} alt="Product card(2)"/>
                    </div>
                    <div className="w-[238] h-[615]">
                        <Image src={Pcard3} alt="Product card (3)"/>
                    </div>
                    <div className="w-[238] h-[615]">
                        <Image src={ColMd4} alt="col-md-4(2)"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}