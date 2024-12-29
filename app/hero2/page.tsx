'use client'

import Image from "next/image"
import ColMd62 from "../../../images/col-md-6 (1).png"
import ShopH2 from "../../../images/shop-hero-2-png-picture-1.png"
import Hero from "../Hero/page"

export default function Hero2 () {
    return (
        <div className="flex justify-center w-[1440px] h-[709px] bg-[#23856D]">
            <div className="flex w-[1036px] h-[711px] left-[209px] py-[112px] gap-20">
                <div className="w-[1049px] h-[599px] gap-[30]">
                    <div className="flex w-[509px] h-[432px]">
                        <Image src={ColMd62} alt="col-md-6 (2)"/>
                    </div>
                </div>
                <div className="w-[510px] h-[685px]">
                    <div className="w-[443px] h-[685px]">
                        <Image src={ShopH2} alt="shop-hero-2-png-picture-1"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}