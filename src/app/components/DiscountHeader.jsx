import Link from 'next/link'
import React from 'react'

const DiscountHeader = () => {
  return (
    <div className='flex items-center justify-center py-3 '>
      <p className='text-lg text-red-500'>FLAT 25% OFF ACROSS WEBSITE! USE COUPON- NCODE25</p>
      <button className='py-1 px-3 rounded-full mx-5 border border-black hover:text-white hover:bg-black transition-all duration-200'>
        <Link href="/products">
            Shop Now
        </Link>
      </button>
    </div>
  )
}

export default DiscountHeader
