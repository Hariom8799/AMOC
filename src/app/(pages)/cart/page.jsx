import CartItem from '@/app/components/CartItem'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div className='w-full md:py-20'>
        <div className='w-full max-w-11/12 px-5 md:px-10 mx-auto'> 

            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping Cart
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-12 py-10'>
                <div className='flex-[2]'>
                    <div className='text-lg font-bold'>Cart Items</div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className='flex-[1]'>
                    <div className='text-lg font-bold'>Cart Summary</div>

                    <div className='p-5 my-5 bg-black/[0.3] rounded-lg'>
                        <div className='flex justify-between'>
                            <div className='uppercase text-base md:text-lg font-medium text-black '>Subtotal</div>

                            <div className='text-base md:text-lg font-medium text-black '>₹349.00</div>
                        </div>

                        <div className='text-sm md:text-base py-5 mt-5 border-t text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a vero corrupti molestiae voluptates sed recusandae tenetur dolorem eum quaerat.
                        </div>

                    </div>

                    <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center'>
                        Checkout
                    </button>
                </div>
            </div>

        
            {/* Empty screen  */}
            <div className='flex flex-col items-center flex-[2] pb-[50px] md:-mt-14'>
                <Image src='/empty-cart.jpg' width={300} height={300} alt='empty-cart-image' className='max-w-[300px] md:max-w-[400px]' />

                <span className='text-xl font-bold'>
                    Your Cart is empty
                </span>
                <span className='text-center mt-4'>
                    Look like you have not added anything in your Cart
                    <br />
                    Go ahead and explore top categories
                </span>
                <Link href="/" className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                    Continue Shopping
                </Link>
            </div>

        </div>

    </div>
  )
}

export default page
