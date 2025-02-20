import React from 'react'
import Image from 'next/image'
import { VscListFilter } from "react-icons/vsc";
import { PiDotsSixBold } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";

const page = () => {
  return (
    <div>


        {/* <div className=' pt-11'>
      <Image src="/shop.png" alt="" width={1440} height={316} />
    </div> */}


<div className="pt-8 sm:pt-10 md:pt-11 lg:pt-12">
  <Image 
    src="/shop.png" 
    alt="Shop Banner" 
    width={1440} 
    height={316} 
    layout="responsive"
    className="w-full"  // Ensures the image takes the full width of the container
  />
</div>


    {/* <div className='bg-[#FAF4F4] gap-10 p-10  flex items-center  w-full  h-[100px]'> */}
       {/* menu bar */}


        {/* <VscListFilter  className=''/><h1>Filter</h1><PiDotsSixBold />
        
       <BsViewList /> <h1>|</h1>

       
        <p className='h-[24px] w-[203px] text-[16px]'>Showing 1-16 of 32 results</p>
        
        

    <div className='flex gap-4 px-28 ml-5 justify-end'>
        <h1 className='h-[30px]  w-[54px] pt-4 '>show </h1> */}
        {/* <p className='bg-white h-[55px] w-[55px] text-center
         pt-3'>16</p>
        <h1 className='pt-4  w-[50px] h-[30] ml-2'>short</h1>
        <h2 className='bg-white w-[188px] h-[55px] rounded-md
         text-start p-12 pt-3'>Default</h2>
    </div> */}

{/* 

    </div>  */}
{/* *******888 */}
<div className='bg-[#FAF4F4] gap-2 sm:gap-10 p-2 sm:p-6 md:p-10 flex items-center w-full h-[100px]'>
  {/* Menu bar */}
  <div className="flex  gap-2">
    <VscListFilter />
    <h1 className="text-xs sm:text-sm md:text-base hidden sm:block">Filter</h1>
    <PiDotsSixBold />
  </div>

  <BsViewList className="hidden sm:block" />
  <h1 className="hidden sm:block">|</h1>

  <p className=' text-[10px] sm:text-sm md:text-base'>
    Showing 1-16 of 32 results
  </p>

  <div className='flex items-center gap-2 sm:px-10  md:px-16 ml-5 justify-end'>
    <h1 className=' text-[10px] sm:text-sm md:text-base'>Show</h1>
    <p className='bg-white text-center  text-[10px] sm:text-sm md:text-base'>
      16
    </p>
    <h1 className='  ml-2 text-[10px] sm:text-sm md:text-base'>
      Short
    </h1>
    <h2 className='bg-white  rounded-md  text-start p-2 sm:p-4 md:p-6 text-[10px] sm:text-sm md:text-base'>
      Default
    </h2>
  </div>
</div>



    
    
    {/* cards section */}
    {/* <div>

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


    </div> */}


<div className="flex flex-wrap justify-center gap-[20px] px-4  w-full font-poppins text-[#000000] font-semibold">
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/ss2.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
    <h1 className="text-[#DB4444] text-center">$269</h1>
  </div>

  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side3.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
    <h1 className="text-[#DB4444] text-center">$669</h1>
  </div>

  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side2.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">IPS LCD chair</h1>
    <h1 className="text-[#DB4444] text-center">$169</h1>
  </div>

  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side4.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
    <h1 className="text-[#DB4444] text-center text-[16px]">$289</h1>
  </div>
</div>





    {/* 2nd column cards */}
{/* <div>
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

      
    </div> */}


<div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
  {/* First Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/coffee-table.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
    <h1 className="text-[#DB4444] text-center">$269</h1>
  </div>

  {/* Second Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side3.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
    <h1 className="text-[#DB4444] text-center">$669</h1>
  </div>

  {/* Third Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/ss2.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">IPS LCD chair</h1>
    <h1 className="text-[#DB4444] text-center">$169</h1>
  </div>

  {/* Fourth Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/ss.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
    <h1 className="text-[#DB4444] text-center text-[16px]">$289</h1>
  </div>
</div>

    {/* 3rd */}

    {/* <div className='flex gap-[20px] justify-center ml-16 
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
        
      </div> */}

<div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
  {/* First Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/ss3.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
    <h1 className="text-[#DB4444] text-center">$269</h1>
  </div>

  {/* Second Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side3.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
    <h1 className="text-[#DB4444] text-center">$669</h1>
  </div>

  {/* Third Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side2.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">IPS LCD chair</h1>
    <h1 className="text-[#DB4444] text-center">$169</h1>
  </div>

  {/* Fourth Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side4.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
    <h1 className="text-[#DB4444] text-center text-[16px]">$289</h1>
  </div>
</div>


      {/* 4th */}
      {/* <div className='flex gap-[20px] justify-center ml-16 
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
        
      </div> */}



<div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
  {/* First Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/s.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
    <h1 className="text-[#DB4444] text-center">$269</h1>
  </div>

  {/* Second Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side3.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
    <h1 className="text-[#DB4444] text-center">$669</h1>
  </div>

  {/* Third Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/coffee-table.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">IPS LCD chair</h1>
    <h1 className="text-[#DB4444] text-center">$169</h1>
  </div>

  {/* Fourth Product */}
  <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
    <Image
      src="/side4.png"
      alt=""
      className="h-[250px] w-full object-cover"
      height={250}
      width={270}
    />
    <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
    <h1 className="text-[#DB4444] text-center text-[16px]"></h1>
  </div>
</div>


{/* last */}
{/* <div className='flex gap-5 justify-center pt-10' >
<div className='bg-[#FBEBB5] h-[60px] w-[60px] rounded-md p-5 flex items-center justify-center '>1</div> */}
{/* 2nd */}
{/* <div className='bg-[#FBEBB5] h-[60px] w-[60px] rounded-md p-5 flex items-center justify-center'>2</div> */}
{/* 3rd */}
{/* <div className='bg-[#FBEBB5] h-[60px] w-[60px] rounded-md p-5 flex items-center justify-center '>3</div> */}
{/* 4 */}
{/* <div className='bg-[#FBEBB5] h-[60px] w-[98px] rounded-md p-5 flex items-center justify-center '>Next</div>
</div>  */}


<div className='flex flex-wrap justify-center gap-5 pt-10'>
  {/* 1st */}
  <div className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
    1
  </div>

  {/* 2nd */}
  <div className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
    2
  </div>

  {/* 3rd */}
  <div className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
    3
  </div>

  {/* 4th (Next button) */}
  <div className='bg-[#FBEBB5] h-[60px] w-[98px] sm:w-[120px] md:w-[150px] rounded-md p-5 flex items-center justify-center'>
    Next
  </div>
</div>


   

{/* <div className="flex justify-evenly bg-[#FAF4F4] mt-20 items-center space-x-6 py-8 pb-28"> */}
      {/* Free and Fast Delivery */}
      {/* <div className="text-center">
        <div className="items-center flex justify-center  w-[80px] h-[80px]  mx-auto">
         
           
        </div>
        <h1 className="text-[32px] font-medium">FAST DELIVERY</h1>
        <h1 className="text-[14px] text-gray-400">
        For all oders over $50, consectetur adipim scing elit.</h1>
      </div> */}

      {/* 24/7 Customer Service */}
      {/* <div className="text-center">
        <div className=" items-center flex justify-center  w-[80px] h-[80px] mb-4 mx-auto">
          
            
        </div>
        <h1 className="text-[32px] font-medium">
        90 Days Return</h1>
        <h1 className="text-[14px] text-gray-400">
            For all oders over $50, consectetur adipim scing elit.</h1>
      </div> */}

      {/* Money Back Guarantee */}
      {/* <div className="text-center ">
        <div className=" items-center flex justify-center  w-[80px] h-[80px] mb-4 mx-auto">
         
        </div>
        <h1 className="text-[32px] font-medium">Secure Payment</h1>
        <h1 className="text-[14px] text-gray-400">
            We return money within 30 days</h1>
      </div>
    </div> */}


<div className="flex flex-wrap justify-evenly bg-[#FAF4F4] mt-20 items-center py-8 pb-28">
  {/* Free and Fast Delivery */}
  <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
    <div className="items-center flex justify-center w-[80px] h-[80px] mx-auto mb-4">
      {/* Icon can be added here */}
    </div>
    <h1 className="text-[24px] sm:text-[32px] font-medium">FAST DELIVERY</h1>
    <h1 className="text-[12px] sm:text-[14px] text-gray-400">
      For all orders over $50, consectetur adipiscing elit.
    </h1>
  </div>

  {/* 90 Days Return */}
  <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
    <div className="items-center flex justify-center w-[80px] h-[80px] mx-auto mb-4">
      {/* Icon can be added here */}
    </div>
    <h1 className="text-[24px] sm:text-[32px] font-medium">90 Days Return</h1>
    <h1 className="text-[12px] sm:text-[14px] text-gray-400">
      For all orders over $50, consectetur adipiscing elit.
    </h1>
  </div>

  {/* Secure Payment */}
  <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
    <div className="items-center flex justify-center w-[80px] h-[80px] mx-auto mb-4">
      {/* Icon can be added here */}
    </div>
    <h1 className="text-[24px] sm:text-[32px] font-medium">Secure Payment</h1>
    <h1 className="text-[12px] sm:text-[14px] text-gray-400">
      We return money within 30 days.
    </h1>
  </div>
</div>


 </div>
    

    
    


  )
}

export default page



