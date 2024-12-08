import Image from 'next/image'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa' 
export default function ProductDetail(){
  return (
    <div>
    <div className="flex gap-8 p-8">
      {/* Left Side: Small Images */}
      <div className="flex flex-col gap-4">
        <img src="/p2.png" alt="Image 1" className="w-20 h-20 object-cover" />
        <img src="/p3.png" alt="Image 2" className="w-20 h-20 object-cover" />
        <img src="/p2.png" alt="Image 3" className="w-20 h-20 object-cover" />
        <img src="/p3.png" alt="Image 4" className="w-20 h-20 object-cover" />
      </div>

      {/* Middle: Big Image */}
      <div className="flex-shrink-0">
        <img src="/p.png" alt="Big Product Image" className="w-[481px] h-[391px] object-cover" />
      </div>

      {/* Right Side: Product Details */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-[42px] w-[282px] h-[63px] font-semibold">Asgaard sofa</h1>
        
        <p className="text-xl font-bold text-red-600">Price: $199.99</p
        >
        <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <  FaStarHalfAlt className='text-yellow-500'/>
          </div>
        <p className="text-lg text-gray-700">
          This is a short description of the product. You can add specifications, details, and other information Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit animi consequatur id iste optio deserunt ab aperiam blanditiis consequuntur?.
        </p>
        <h1 className='text-gray-400'>Size</h1>
<div className='flex gap-5'>
    
        <div className='bg-[#FBEBB5] h-[30px] w-[30px] rounded-md p-5 flex items-center justify-center '>L</div>
        <div className='bg-[#FBEBB5] h-[30px] w-[30px] rounded-md p-5 flex items-center justify-center '>XL</div>
        <div className='bg-[#FBEBB5] h-[30px] w-[30px] rounded-md p-5 flex items-center justify-center '>XS</div>
        </div>

        <h1 className='text-gray-400'>Color</h1>
<div className='flex gap-5'>
    
        <div className='bg-[#816DFA] h-[30px] w-[30px] rounded-full  flex items-center justify-center '></div>
        <div className='bg-black h-[30px] w-[30px] rounded-full  flex items-center justify-center '></div>
        <div className='bg-[#CDBA7B] h-[30px] w-[30px] rounded-full  flex items-center justify-center '></div>
        </div>
        {/* Add to Cart Button */}
        <div className='flex gap-5 items-center'>
        <button className=" text-black py-2 px-6 rounded-md border border-gray-500 w-[123px] h-[64px]">
          - <span className='mx-4'> 1 </span>+
        </button>
        <button className=" text-black py-2 px-10 rounded-md border border-gray-500 w-[215px] h-[64px]">
          <h1 className='w-[119px] h-[30px] flex justify-center '>Add to Cart</h1>
        </button>
        </div>
        <div className='border border-gray-300 mt-6'></div>
        <div className=' text-gray-400 '>
    <h1>SKU <span className='mx-9 mt-5'> : 676 </span></h1>
    <h1 className='pt-5'>Category <span className='mx- mt-5'>: type </span></h1>
    <h1 className='pt-5'>Tags <span className='mx-9 ' > : Sofa, Chair, Home, Shop</span></h1>
</div>
      </div>
      </div>
      <div className='border border-gray-300 mt-6'></div>
<div className='text-black gap-10 flex justify-center pt-10 text-[24px]'>
    <h1 className='w-[136px] h-[36px]'>Description</h1>
    <h1 className='w-[269px] h-[36px] ml-3'>Additional Information</h1>
    <h1 className='w-[138px] h-[36px]'>Reviews(1)</h1>
   
</div>
<div className='text-left ml-24 text-[16px] w-[1026px] h-[96px] pt-5 text-gray-400'>
    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
</div>
<div className=' flex gap-4 mt-10 justify-center'>
    <Image src="/t.png" alt='' height={ 48} width={605}/>
    <Image src="/t.png" alt='' height={ 48} width={605}/>
</div>

<div>

</div>

<div className='border border-gray-300 mt-6'></div>
<div className='flex justify-center'>
<div className=' text-center font-semibold text-[36px] w-[309px] h-[54px] pt-5'>
    <h1>Related Products</h1>

</div>
</div>
<div className='flex gap-[20px] justify-center ml-16  h-[350px] w-[1170px]  font-poppins text-[#000000] font-semibold'>
       <div className='h-[350px] w-[270px]'>
        <Image src="/s.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>HAVIT HV-G table chair</h1>
        <h1 className='text-[#DB4444]'> $269</h1>
        </div>
<div className='h-[350px] w-[270px]'>
        <Image src="/side3.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>AK-900 Wired chair</h1>
        <h1 className='text-[#DB4444]'>$669</h1>
        </div>
        <div className='h-[350px] w-[270px]'>
        <Image src="/coffee-table.png" alt='' className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>IPS LCD chair</h1>
        <h1 className='text-[#DB4444]'>$169</h1>
        </div>
        <div className='h-[350px] w-[270px]'>
        <Image src="/side4.png" alt=''className='h-[250px] w-[270px]' height={250} width={270}/>
        <h1 className='mt-3'>S-Series Comfort Chair</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        </div>
        
      </div>
      <div className='text-center pt-20 ml-12  text-[20px] font-semibold underline'>View More</div>
    </div>
  );
}
