'use client'

import Image from "next/image"
import Row from "../../../images/row.png"
import CoolMd3 from "../../../images/col-md-3.png"
import CoolMd6 from "../../../images/col-md-6.png"
import CardItem from "../../../images/card-item.png"
import CardTiem2 from "../../../images/card-item (2).png"
export default function Desk31 (){
    return (
        <div className="flex justify-center w-[1440px] h-[770px] bg-[#FAFAFA] ">
            <div className="w-[1050px] h-[770px] justify-center left-[195px] py-20 gap-12">
                <div className="w-[607px] h-[62px] ml-56 mb-10 ">
                    <Image src={Row} alt="row.png"/>
                </div>
                <div className="flex w-[1050px] h-[500px] gap-[30px] ">
                    <div className="w-[510] h-[500]">
                        <Image src ={CoolMd6} alt="col-md-6"/>
                    </div>
                    <div className="w-60 h-[500px]">
                        <Image src ={CoolMd3} alt="col-md-3"/>
                    </div>
                    <div className="grid w-60 h-[500px] gap-4">
                        <Image src={CardItem} alt="card-item"/>
                        <Image src={CardTiem2} alt="card-item (2)"/>
                    </div>
                </div>
            </div>
        </div>
    )
}