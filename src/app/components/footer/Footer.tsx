
import React from 'react'

const Footer = () => {


 
  return (
    <div>
    <div className='flex p-9 h-[555px] gap-5 pt-32'>
      <div className=''>
      <h1 className='text-gray-400 pt-20 mx-10'>400 University Drive Suite 200 Coral  <br /> Gables,<br />
      FL 33134 USA </h1>
      </div>

      {/* ***Links */}
      <div className="flex flex-col items-start space-y-2 gap-[24px] mx-10">
      <h1 className=" text-[#9F9F9F] text-base w-[40px] h-[24px] ">Links</h1>
          <h1 className="font-medium text-base w-[48px] h-[24px]">Home</h1>
          <h1 className="font-medium text-base w-[49px] h-[24px]">About</h1>
          <h1 className="font-medium text-base w-[68px] h-[24px]">Login </h1>
          <h1 className="font-medium text-base w-[48px] h-[24px]">Cart</h1>
          <h1 className="font-medium text-base w-[66px] h-[24px]">Wishlist</h1>
         
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start space-y-2 gap-[24px] mx-10">
          <h1 className="
          text-[#9F9F9F] text-[16px] w-[40px] h-[24px]">Help</h1>
          <h1 className="font-medium text-base w-[109px] h-[24px]">Privacy Policy</h1>
          <h1 className="font-medium w-[105px] h-[24px] text-base">Terms Of Use</h1>
          <h1 className="font-medium text-base w-[32px] h-[24px]">FAQ</h1>
          <h1 className="font-medium text-base w-[66px] h-[24px]">Contact</h1>
        </div>
        
<div className='text-[#9F9F9F] text-[16px] w-[66px] h-[24px]  mx-10'>
    Newsletter

        <div className=" w-[200px] gap-3 flex pt-8">
          <input
            type="text"
            placeholder="Enter your email Address"
            className="  border-white underline placeholder-gray-500  w-[200px] h-[26px]"
          />
          <h1 className='underline text-black text-medium w-[75px] h-[21px] text-[14px] '>Subscribe</h1>
          </div>
          </div>
          
      </div>
      <div className='border border-gray-300  flex'>

        {/* email input */}
     
      </div>
      <h1 className='text-black ml-16 text-[16px] 
      mb-10'>2022 Meubel House. All rights reverved</h1>
      </div>
  )
}

export default Footer
