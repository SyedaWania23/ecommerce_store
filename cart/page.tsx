import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div>
        <Image src="/ch.png" alt='' className='pt-10' height={316} width={1440} />
      </div>

      {/* Container for both sections */}
      <div className='flex flex-col lg:flex-row mt-20 lg:mx-16'>
        {/* Product Section */}
        <div className='w-full lg:w-[60%]'>
          {/* Product Table Header */}
          <div className='flex gap-3 sm:gap-12 lg:gap-14 sm:font-medium text-[16px] sm:text-[16px] bg-[#FFF9E5] h-[55px] items-center  px-16  lg:px-32 xl:px-40 xl:gap-20'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1 className=''>Total</h1>
          </div>

          {/* Product Row */}
          <div className='flex items-center gap-1 lg:gap-7 pt-10'>
            <Image src="/y.png" alt='' className='' height={106} width={106} />
            <h1 className='text-gray-400  text-xs sm:text-sm lg:text-base lg:ml-14'>Sofa</h1>
            <h1 className='text-gray-400 text-xs ml-2 sm:ml-6 lg:ml-12 lg:text-base'>
               25,0000</h1>
            <h1 className='border text-center py-1
             border-gray-400 rounded-lg w-[32px] lg:px-2 h-[32px] ml-3 sm:ml-16 lg:ml-10'>1</h1>
            <h1 className='text-gray-400 text-xs  lg:text-base 
              px-3 sm:px-12  '>25,0000</h1>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className='w-full lg:w-[393px] h-[390px] mx-0 lg:mx-10 bg-[#FFF9E5] mt-8 lg:mt-0 '>
          {/* Cart Totals Header */}
          <div className='flex justify-center font-bold text-[32px] items-center'>
            <h1 className='mt-5'>Cart Totals</h1>
          </div>

          {/* Subtotal Row */}
          <div className='flex gap-8 lg:gap-28 justify-center font-medium text-[16px] items-center mt-12'>
            <h1>SubTotal</h1>
            <h1 className='text-gray-400'>Rs 250,000</h1>
          </div>

          {/* Total Row */}
          <div className='flex justify-center gap-8 lg:gap-28 font-medium text-[16px] items-center mt-5'>
            <h1>Total</h1>
            <h1 className='text-[#B88E2F] text-[20px]'>Rs 250,000</h1>
          </div>
          <button className='border border-gray-400 rounded-lg w-full  lg:w-[222px] h-[55px] mt-8 lg:mt-16  lg:mx-20'>
            Check Out
          </button>
        </div>
      </div>

      <div className='bg-[#FAF4F4] mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[400px] items-center'>
        <div className='text-center'>
          <h1 className='text-[32px] font-semibold'>Free Delivery</h1>
          <p className='text-sm mx-8 lg:mx-20'>
            100% secure payment, consectetur <br />adipiscing elit
          </p>
        </div>
        <div className='text-center'>
          <h1 className='text-[32px] font-semibold'>90 Days Return</h1>
          <p className='text-sm mx-8 lg:mx-20'>
            If goods have problems, consectetur <br />adipiscing elit.
          </p>
        </div>
        <div className='text-center'>
          <h1 className='text-[32px] font-semibold'>Secure Payment</h1>
          <p className='text-sm mx-8 lg:mx-20'>
            For all orders over $50, consectetur <br />adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
