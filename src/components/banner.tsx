import { TfiEmail } from "react-icons/tfi";

const Banner = () => {
  return (
    <>  
    <div className="bg-black absolute w-[1240px] h-[180px] top-[3781px] z-20 left-[200px] text-white py-9 px-[64px] flex justify-between rounded-[20px]">
    <p className="font-bold text-[40px] w-[551px] h-[94px] leading-[45px] ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
    <div className="flex flex-col gap-[14px] g-white w-[350px] h-[109px] ">
      <div className="rounded-[62px] py-[12px] px-[16px] gap-[12px] bg-white w-[350px] items-center h-[48px] flex">
         <div className="w-6 h-6 text-black"><TfiEmail className="w-[19px] h-[19px]"/></div>
         <input type="text" className="text-black text-[16px] font-normal leading-[21.6px] " placeholder="Enter Your Email Address"/>
      </div>
      <div className="rounded-[62px] py-[12px] px-[16px] gap-[12px] bg-white w-[350px] items-center h-[48px] flex">
          <p className="font-medium text-black leading-[21.6px] mx-auto">Subscribe to Newsletter</p>
      </div>
    </div>

  </div></>
  )
}

export default Banner