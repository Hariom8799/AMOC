import Link from 'next/link'
import React from 'react'

const Navs = () => {
  return (
    <div className='text-lg font-semibold '>
      <ul className='flex items-center space-x-5 justify-between'>
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
        <li>
            <Link href="/">
                Tote Bags
            </Link>
        </li>
        <li>
            <Link href="/products">
                All Products
            </Link>
        </li>
        <li>
            <Link href="/about">
                About Us
            </Link>
        </li>
        <li>
            <Link href="/contact">
                Contact Us 
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navs
