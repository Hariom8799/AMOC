import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <Link href={"/product"} className='hover:scale-105 cursor-pointer bg-white trasnform duration-200 overflow-hidden '>
        <img src="/product-1.webp" alt="product img" />
        <div className='p-4 text-black/[0.9]'>
          <h2 className='text-lg font-medium'>Product Name</h2>
          <div className='flex items-center text-black/[0.5]'>
            <p className='text-lg font-semibold mr-2'>$1000</p>
            <p className='text-base font-medium line-through'>$1000</p>
            <p className='ml-auto text-base font-medium  text-green-500'>28% off</p>

          </div>
        </div>
    </Link>
  )
}

export default Card
