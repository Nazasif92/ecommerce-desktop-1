import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBrand from"../../../images/navbar-brand.png"
import NavBar from "../../../images/navbar-nav.png"
import VecTor from "../../../images/Vector.png"

export default function NavbarLight () {
    return (
        <div className="flex items-center w-[1437px] h-[58px] top-[70px]">
          <div className="w-[187px] h-[58px] ml-[38px]">
            <Image src={NavBrand} alt="navbar-dark"/>
          </div>
          <div className="flex w-1155px h-58px left-265px">
            <div className="flex w-[361px] h-[25px] top-[16.5] gap-[15px] p-4">
              <div>
                <Link href="/Hero">Home</Link>
              </div>
            <div className="flex">
              <div className=" w-[63px] h-[25px] gap-[10]">
                <Link href="/">Shop</Link>
              </div>
              <div className="mt-3">
                <Image src={VecTor} alt="Vector"/>
              </div>
            </div>
            <div className="flex w-[45px] h-[24px]">
              <Link href="">About</Link>
            </div>
            <div>
            <Link href="">Blog</Link>
            </div>
            <div>
              <Link href="">Contact</Link>
            </div>
            <div>
              <Link href="">Pages</Link>
            </div>
          </div>  
          <div className=" w-[324px] h-[54px] top-2 ml-96 left-[832px]">
          <Image src={NavBar} alt="navbar-nav"/>
          </div>
        </div>
      </div>
    )
}