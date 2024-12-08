"use client"
import React from 'react'
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const HomePage = () => {
  return (
    <div className='w-screen bg-[#FBEBB5] h-[50px]'>
      <nav className='bg-[#FBEBB5] h-[100px] '>
        <ul className='flex justify-center items-center text-[16px] font-poppins pl-72 pt-9'>
          {/* Left side menu items */}
          <li className='mx-14 w-[48] h-[24]'> <Link href="/">Home
          </Link></li>
          <li className='mx-14 w-[48] h-[24]'> <Link href="/shop">Shop</Link></li>
          <li className='mx-14 w-[49] h-[24]'><Link href="">About</Link></li>
          <li className='mx-14 w-[48] h-[24]'><Link href="">Cart</Link></li>

          {/* Right side Heart and Cart icons */}

          <li className='ml-auto flex gap-6 pr-7'>
          
          <Link href="/favorites" className="text-xl text-gray-700 hover:text-teal-200">
          <MdOutlineAccountCircle className="h-[28px] w-[28px]" />
        </Link>
          <Link href="/favorites" className="text-xl text-gray-700 hover:text-teal-200">
          <IoIosSearch className="h-[28px] w-[28px]" />
        </Link>
          <Link href="/favorites" className="text-xl text-gray-700 hover:text-teal-200">
          <IoIosHeartEmpty className="h-[28px] w-[28px]" />
        </Link>

          <Link href="/cart" className="text-xl text-gray-700 hover:text-teal-200">
          <IoCartOutline className="h-[28px] w-[28px]" />
        </Link>

          </li>
        </ul>
      </nav>

     
      
    </div>
  );
}

export default HomePage;
