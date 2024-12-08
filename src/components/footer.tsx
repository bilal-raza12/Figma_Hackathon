import { FaTwitter ,  } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";





const data = [
  {
    title:'COMPANY',
    links : ['About','Features','Works','Career'],

  },
  {
    title:'HELP',
    links:['Customer Support','Delivery Details','Terms & Conditions','Prvacy Policy']
  },
  {
    title:'FAQ',
    links:['Account','Manage Deliveries','Orders','Payments']
  },
  {
    title:'RESOURCES',
    links:['Free eBooks','Development Tuorials','How-to-Blog' , 'Youtube Playlist']
  }
]
const Footer = () => {
  return (
    <>
       <footer className="w-full absolute top-[3871px]  bg-bg2 h-full ">
          <div className="mx-auto my-[150px] flex  w-[1240px] h-[177px] justify-between">
               <div className="flex flex-col gap-[35px] w-[248px]">
                     <div className="flex flex-col gap-[25px]">
                         <h1 className="text-[33.15px] leading-[40.15px] font-bold">SHOP.CO</h1>
                         <p className='font-satoshi text-black opacity-[60%] text-[14px] leading-[22px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                         
                     </div>
                     <div className="flex w-[148px]  justify-between relative">
                      <div className="w-7 h-7 bg-white rounded-full   border-[1px] border-black 
                      "><FaTwitter className=" w-[15px] h-[13px] mx-auto my-2"/></div>
                      <div className="w-7 h-7 bg-black rounded-full   border-[1px] border-black 
                      "><LuFacebook className=" w-[15px] text-white h-[13px] mx-auto my-2"/></div>
                      <div className="w-7 h-7 bg-white rounded-full   border-[1px] border-black 
                      "><FaInstagram className=" w-[15px] h-[13px] mx-auto my-2"/></div>
                      <div className="w-7 h-7 bg-white rounded-full   border-[1px] border-black 
                      "><FaGithub className=" w-[15px] h-[13px] mx-auto my-2"/></div>

                     </div>

               </div>
               {data.map((d) => (

                 
                 <div className="flex flex-col gap-[26px]">
                  <div className="text-[16px] tracking-[3px] font-medium leading-[18px]">{d.title}</div>
                  {d.links.map((l) => (
                     <ul className="flex flex-col gap-[10px] ">
                       <li className="text-[16px] leading-[19px] font-normal">{l}</li>
                     </ul>     
                  ))}
               </div>
              ))}
               
          </div>
          <div className="flex justify-between  mx-[100px] border-t-[1px]  border-opacity-[10%] border-black">
                                <div className="text-[14px] mt-5 leading-[18.6px] opacity-[60%]">Shop.co © 2000-2023, All Rights Reserved</div>
                                <div className="flex mt-5 gap-[12px]">
                                  <div className="bg-white w-[46px]  h-[30px] rounded-[6px]">

                                  <img src="/images/visa.png" alt="" className="mx-auto my-2" />
                                  </div>
                                   
                                  
                                  <div className="bg-white w-[46px]  h-[30px] rounded-[6px]">

                                  <img src="/images/MasterCard.png" alt="" className="mx-auto my-2" />
                                  </div>
                                  <div className="bg-white w-[46px]  h-[30px] rounded-[6px]">

                                  <img src="/images/PayPal.png" alt="" className="mx-auto my-2" />
                                  </div>
                                  <div className="bg-white w-[46px]  h-[30px] rounded-[6px]">

                                  <img src="/images/Pay.png" alt="" className="mx-auto my-2" />
                                  </div>
                                  <div className="bg-white w-[46px]  h-[30px] rounded-[6px]">

                                  <img src="/images/G Pay.png" alt="" className="mx-auto my-2" />
                                  </div>
                                  </div> 
                                      
               </div>
         
       </footer>

   
    </>
  )
}

export default Footer