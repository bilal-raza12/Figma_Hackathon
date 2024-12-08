"use client"
import { FaTimes } from "react-icons/fa"
// import {Satoshi} from "@next/font/google"
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaBars  } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


  
    
const Header = () => {
  const  [isOpen,setIsOpen] = useState<boolean>(false);
  const toggle = () => {
       setIsOpen(!isOpen);
     }   
  return (
     
     
        <nav className=" w-[100vw] flex flex-col">
            <div className=" bg-black sm:w-full  sm:h-[38px] w-[390vw] h-[34px] md:mx-0 mx-auto   ">
                   <div className=" md:relative md:top-[9px]  md:left-[544px] md:px-0 md:py-0 px-[10px] py-[9px]">
                    <p className="text-white sm:text-[16px] text-[12px] z-20">Sign up and get 20% off to your first order. <span className="underline font-medium text-[12px] md:text-[16px]">Sign Up Now</span></p>
                   </div>
                   <div className="hidden md:inline-flex w-[20px] h-[20px] md:absolute md:left-[1320px] md:top-[9px]"><FaTimes className="w-[13.13px] h-[13.13px] text-white md:absolute md:top-[3.43px] md:left-[3.44px]"/></div>
            </div>
            <div className="flex absolute top-[57px] sm:top-[62px]  sm:left-[100px] sm:gap-[40px]  items-center ">
              <div className="md:hidden w-6 h-6 top-[54px] md:top-0 md:left-0 relative left-[16px]" >
                {isOpen ? <FaTimes className="w-6 h-6 text-black"/> : <FaBars className="w-6 h-6 text-black"/>}              
                </div>
                <div className="logo relative text-black md:text-[32px] leading-[38.4px] font-bold left-[56px] top-[57px] md:top-0 sm:left-0 text-[22px]">SHOP.CO</div>
                <ul className="flex gap-6  items-center hidden sm:inline-flex">
                    <div className="flex gap-[4px]">
                        <div className="text-[16px] leading-[21.6px] font-normal">Shop</div>
                        <div className="w-4 h-4 relative"><RiArrowDropDownLine className="w-[14.5px] h-[16.5px] absolute top-[4.25px] left-[2.25px]"/></div>

                    </div>
                  <li className="text-[16px] leading-[21.6px]">On Sale</li>
                  <li className="text-[16px] leading-[21.6px]">New Arrivals</li>
                  <li className="text-[16px] leading-[21.6px]">Brands</li>

                </ul>
                 <div className="flex px-[16px] py-[12px] bg-[#f0f0f0] w-[577px] h-[48px]">
                       <div className="w-6 h-6 relative"><CiSearch className="w-[20.27px] h-[20.27px] absolute top-[1.86px] left-[1.86px] text-black"/></div>
                       <input type="text" className="hidden sm:inline-flex bg-transparent outline-none text-[16px]
                       leading-[21.6px]"  placeholder="Search for products..."/>
                 </div>
                 <div className="flex gap-[14px] items-center">
                 <Link href={"/cart"}>
                 <div className="w-6 h-6 relative"><LuShoppingCart className="w-[22.13px] h-[20.25px] absolute top-[1.88px]"/></div>
                 </Link>   
                    <div className="w-6 h-6 relative"><CgProfile className="w-[20.25px] h-[20.25px] absolute top-[1.88px] left-[1.88px]"/></div>
                    
                    


                 </div>
            </div>
        </nav>
    
  )
}

export default Header