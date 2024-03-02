'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navs from './Navs'
import { FaRegUser, FaSearch } from 'react-icons/fa'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from './MenuMobile';

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [categories, setCategories] = useState(null);

 

  return (
    <div className='w-full nav-shadow'> 
      <nav className=  "flex justify-between items-center w-11/12 py-5 h-[50px] md:h-[80px] mx-auto bg-white z-20 top-0 transition-transform duration-300 relative">
        {/* left most space  logo*/}
        <div>
          <Link href="/">
            <p>AMOC.</p>
          </Link>
        </div>

        {/* middle space for nav */}

        <Navs showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        { mobileMenu && 
          <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} />
          }

        {/* right most for icons */}
        <div className='flex justify-between space-x-2 items-center'>
          {/* icon 1 */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[19px] md:text-[24px] ' />
            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] bg-red-600 rounded-full absolute top-1 left-5 md:left-6 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] '>5</div>
          </div>

          {/* icon 2 */}
          <Link href="/cart">
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
              <BsCart className='text-[15px] md:text-[20px] ' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] bg-red-600 rounded-full absolute top-1 left-5 md:left-6 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] '>5</div>
            </div>
          </Link>

          <Link href="/login">
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
              <FaRegUser className='text-[15px] md:text-[20px] ' />
            </div>
          </Link>
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <FaSearch className='text-[15px] md:text-[20px] ' />
          </div>

          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative md:hidden '>
            {
              mobileMenu ? (
                <VscChromeClose className='text-[15px] md:text-[20px] ' onClick={()=> setMobileMenu(false)} />
              ) : (
                <BiMenuAltRight className='text-[15px] md:text-[20px] ' onClick={()=>setMobileMenu(true)} />
              )
            }
          </div>

        </div>

      </nav>
    </div>
  )
}

export default NavBar
