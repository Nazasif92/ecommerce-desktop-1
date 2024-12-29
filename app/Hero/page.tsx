'use client'

import Image from "next/image"
import shophero1 from "../../../images/shop-hero-1-product-slide-1.jpg"

export default function Hero () {
  return (
    <div className="w-[1440px] h-[716px]">
        <div className="relative w-full h-96">
            <Image src={shophero1} alt="shop-hero-1"/>
            <div className="absolute w-[1044px] h-[651px] top-12 left-[197.5px] py-[112px] gap-20">
               <div className="w-[1044px] h-[427px] gap-[30px] py-12">
                    <div className="w-[599px] h-[331px] gap-[35px]">
                        <h5 className="transform -translate-x-1/2 -translate-y-1/2 font-bold size-4 leading-6 tracking-widest">SUMMER 2020</h5>
                        <h1 className="font-bold size-[58px] leading-[80px] tracking-[0.2px]">NEW COLLECTION</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
