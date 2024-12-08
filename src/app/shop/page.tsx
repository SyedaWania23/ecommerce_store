import React from 'react'
import Image from 'next/image'
import { VscListFilter } from "react-icons/vsc";
import { PiDotsSixBold } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";

const page = () => {
  return (
    <div>


        <div className=' pt-11'>
      <Image src="/shop.png" alt="" width={1440} height={316} />
    </div>

    <div className='bg-[#FAF4F4] gap-10 p-10  flex items-center  w-full  h-[100px]'>
       {/* menu bar */}


        <VscListFilter  className=''/><h1>Filter</h1><PiDotsSixBold />
        
       <BsViewList /> <h1>|</h1>

       
        <p className='h-[24px] w-[203px] text-[16px]'>Showing 1-16 of 32 results</p>
        
        

    <div className='flex gap-4 px-28 ml-5 justify-end'>
        <h1 className='h-[30px]  w-[54px] pt-4 '>show </h1>
        <p className='bg-white h-[55px] w-[55px] text-center
         pt-3'>16</p>
        <h1 className='pt-4  w-[50px] h-[30] ml-2'>short</h1>
        <h2 className='bg-white w-[188px] h-[55px] rounded-md
         text-start p-12 pt-3'>Default</h2>
    </div>



    </div> 
    
    
    {/* cards section */}
    <div>

    <div className='flex gap-[20px] justify-center ml-16  h-[372px] w-[1170px]  font-poppins text-[#000000] font-semibold'>
       <div className='h-[372px] w-[270px]'>
        <Image src="/ss2.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>HAVIT HV-G table chair</h1>
        <h1 className='text-[#DB4444]'> $269</h1>
        </div>
<div className='h-[372px] w-[270px]'>
        <Image src="/side3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>AK-900 Wired chair</h1>
        <h1 className='text-[#DB4444]'>$669</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/side2.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>IPS LCD chair</h1>
        <h1 className='text-[#DB4444]'>$169</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/side4.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>S-Series Comfort Chair</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        </div>
        
      </div>


    </div>


    {/* 2nd column cards */}
<div>
<div className='flex gap-[20px] justify-center ml-16  h-[372px]
 w-[1170px]  font-poppins text-[#000000] font-semibold'>
       <div className='h-[372px] w-[270px]'>
        <Image src="/coffee-table.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>HAVIT HV-G table chair</h1>
        <h1 className='text-[#DB4444]'> $269</h1>
        </div>
<div className='h-[372px] w-[270px]'>
        <Image src="/side3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>AK-900 Wired chair</h1>
        <h1 className='text-[#DB4444]'>$669</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/ss2.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>IPS LCD chair</h1>
        <h1 className='text-[#DB4444]'>$169</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/ss.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>S-Series Comfort Chair</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        </div>
        
      </div>

      
    </div>
    {/* 3rd */}

    <div className='flex gap-[20px] justify-center ml-16 
     h-[372px] w-[1170px]  font-poppins text-[#000000] font-semibold'>
       <div className='h-[372px] w-[270px]'>
        <Image src="/ss3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>HAVIT HV-G table chair</h1>
        <h1 className='text-[#DB4444]'> $269</h1>
        </div>
<div className='h-[372px] w-[270px]'>
        <Image src="/side3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>AK-900 Wired chair</h1>
        <h1 className='text-[#DB4444]'>$669</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/side2.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>IPS LCD chair</h1>
        <h1 className='text-[#DB4444]'>$169</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/side4.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>S-Series Comfort Chair</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        </div>
        
      </div>

      {/* 4th */}
      <div className='flex gap-[20px] justify-center ml-16 
       h-[372px] w-[1170px]  font-poppins text-[#000000] font-semibold'>
       <div className='h-[372px] w-[270px]'>
        <Image src="/s.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>HAVIT HV-G table chair</h1>
        <h1 className='text-[#DB4444]'> $269</h1>
        </div>
<div className='h-[372px] w-[270px]'>
        <Image src="/side3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>AK-900 Wired chair</h1>
        <h1 className='text-[#DB4444]'>$669</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/coffee-table.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>IPS LCD chair</h1>
        <h1 className='text-[#DB4444]'>$169</h1>
        </div>
        <div className='h-[372px] w-[270px]'>
        <Image src="/side4.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>S-Series Comfort Chair</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        </div>
        
      </div>
{/* last */}
<div className='flex gap-5 justify-center pt-10' >
<div className='bg-[#FBEBB5] h-[60px] w-[60px] rounded-md p-5 flex items-center justify-center '>1</div>
{/* 2nd */}
<div className='bg-[#FBEBB5] h-[60px] w-[60px] rounded-md p-5 flex items-center justify-center'>2</div>
{/* 3rd */}
<div className='bg-[#FBEBB5] h-[60px] w-[60px] rounded-md p-5 flex items-center justify-center '>3</div>
{/* 4 */}
<div className='bg-[#FBEBB5] h-[60px] w-[98px] rounded-md p-5 flex items-center justify-center '>Next</div>
</div> 


   

<div className="flex justify-evenly bg-[#FAF4F4] mt-20 items-center space-x-6 py-8 pb-28">
      {/* Free and Fast Delivery */}
      <div className="text-center">
        <div className="items-center flex justify-center  w-[80px] h-[80px]  mx-auto">
         
           
        </div>
        <h1 className="text-[32px] font-medium">FAST DELIVERY</h1>
        <h1 className="text-[14px] text-gray-400">
        For all oders over $50, consectetur adipim scing elit.</h1>
      </div>

      {/* 24/7 Customer Service */}
      <div className="text-center">
        <div className=" items-center flex justify-center  w-[80px] h-[80px] mb-4 mx-auto">
          
            
        </div>
        <h1 className="text-[32px] font-medium">
        90 Days Return</h1>
        <h1 className="text-[14px] text-gray-400">
            For all oders over $50, consectetur adipim scing elit.</h1>
      </div>

      {/* Money Back Guarantee */}
      <div className="text-center ">
        <div className=" items-center flex justify-center  w-[80px] h-[80px] mb-4 mx-auto">
         
        </div>
        <h1 className="text-[32px] font-medium">Secure Payment</h1>
        <h1 className="text-[14px] text-gray-400">
            We return money within 30 days</h1>
      </div>
    </div>

 </div>
    

    
    


  )
}

export default page
