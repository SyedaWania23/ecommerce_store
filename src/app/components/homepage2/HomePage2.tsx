import React from 'react'
import Image from 'next/image'

const HomePage2 = () => {
  return (
    <div>
       <div className=''>
        <Image src="/h.png" alt='' className='' height={100} 
        width={1440} />
      </div>

      <div>
      <Image src="/side.png" alt='' className='' height={672} 
      width={1440} />

      </div>
{/* 3rd  */}
      <div className='text-center items-center'>
        <h1 className='font-medium text-[36px] pt-10'>Top Picks For You</h1>
        <h1 className='font-medium ml-64 px-7 text-[#9F9F9F] w-[773px] h-[24px] text-[16px] '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h1>
      </div>
      {/* ****cards with text */}
      <div>
      
      <div className='flex gap-[20px] justify-center ml-16  h-[350px] w-[1170px]  font-poppins text-[#000000] font-semibold'>
       <div className='h-[350px] w-[270px]'>
        <Image src="/side2.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>HAVIT HV-G92 Chairs</h1>
        <h1 className='text-[#DB4444]'> $269</h1>
        </div>
<div className='h-[350px] w-[270px]'>
        <Image src="/side3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>AK-900 Wired Chairs</h1>
        <h1 className='text-[#DB4444]'>$669</h1>
        </div>
        <div className='h-[350px] w-[270px]'>
        <Image src="/side4.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>IPS LCD chair table</h1>
        <h1 className='text-[#DB4444]'>$169</h1>
        </div>
        <div className='h-[350px] w-[270px]'>
        <Image src="/side5.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>S-Series Comfort Chair</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        </div>
        
      </div>
      </div>

      {/* *********add display */}
      <div>
      <Image src="/sofa.png" alt=''className='h-[799px] w-[1476px]' height={250} width={270}/>
      </div>
      {/* *********Blog section */}
      <div >
        <h1 className='font-medium text-[36px] pt-10 text-center'>Our Blogs</h1>
        <h1 className='font-medium ml-64 px-7 text-[#9F9F9F] w-[773px] h-[24px] text-[16px] '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h1>
      </div>
      {/* ***cards */}
      <div className='flex gap-[20px] justify-center ml-16  h-[350px] w-[1170px]  font-poppins text-[#000000] font-semibold pt-8'>
       <div className='h-[350px] w-[270px]'>
        <Image src="/b.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3 font-extralight'>    Going all-in with millennial type.....</h1>
        <h1 className='text-center underline mt-4'> Read More</h1>
        </div>
<div className='h-[350px] w-[270px]'>
        <Image src="/b2.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3 font-extralight'> 
            Going all-in with millennial type.....</h1>
        <h1 className='text-center mt-4 underline'>Read More</h1>
        </div>
        <div className='h-[350px] w-[270px]'>
        <Image src="/b3.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3 font-extralight'>
            Going all-in with millennial type.....</h1>
        <h1 className='text-center mt-4 underline '>Read More</h1>
        </div>
       
        
      </div>
      <div className='text-center pt-20 ml-12  text-[20px] font-semibold underline'>View All Post</div>
      
{/*add display  */}
      <div className='pt-14'>
      <Image src="/insta.png" alt='' className='h-[450px] w-[1440px]' height={250} width={270}/>
      </div>
      </div>
      
  
  )
}

export default HomePage2
