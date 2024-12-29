'use client'

import Image from "next/image"
import AsiaWoman from "../../../images/asian-woman-man-with-winter-clothes 1.png"
import H5 from "../../../images/h5 #header-tag .png"

export default function Fluid (){
    return (
        <div className="w-[1440px] h-[682px]">
            <div className="flex w-[1439px] h-[682px] gap-[30px]">
                <div className="w-[704px] h-[682px]">
                    <div className="w-[632px] h-[491.99px] top-[117px] ml-36 left-9">
                        <Image src={AsiaWoman} alt="asian-woman-man-with-winter-clothes 1"/>
                    </div>
                </div>
                <div className=" w-[573px] h-[326px] gap-[30px] ml-36 mt-36">
                    <h5 className="font-bold text-base text-[#BDBDBD]">SUMMER 2020</h5>        
                    <h1 className="font-bold text-[40px] text-[#252B42] gap-10 leading-10">Part of the Neural <br/>
                    Universe</h1>       
                    <h4 className="text-[#737373] font-normal text-xl mt-5">We know how large objects will act, <br/>
                    but things on a small scale.</h4>
                    <div className="flex w-[339px] h-[52px] gap-10">
                        <div className="w-[130px] h-[52px] gap-10 text-white">
                         <button className="w-Hug[156px] h-Hug[52px] bg-[#2DC071] rounded-[5px] px-10 py-[15px] gap-[10px]">
                            <div className="w-[76px] h-[22px] text-white-700 size-[14px] leading-[22px]">
                                BUY NOW
                            </div>
                         </button>
                        </div>
                        <div className="w-[173px] h-[52px] rounded-[5px] border-[1px] px-10 py-[15px] gap-[10px]">
                            <button className="w-[93px] h-[22px] font-bold size-[14px] tracking-[0.2px] text-center leading-[22px] text-[#2DC071]">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};