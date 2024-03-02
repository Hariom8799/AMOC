import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

const CartItem = () => {
  return (
    <div className='flex gap-3 py-5 md:gap-5 border-b'>
      <div className='shrink-0 w-[50px] aspect-square md:w-[120px]'> 
            <img src="/product-1.webp" alt="" />
      </div>

      <div className='flex flex-col w-full'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>Tote Bag</div>

            <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>Simple one</div>

            <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>MRP : ₹349.00</div>
        </div>
        <div className='text-sm md:text-md font-medium text-black/[0.5] hidden md:block'>Simple one</div>
        
        <div className='flex mt-4 justify-between'>
            <div className='flex  gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                <div className='flex  gap-1'>
                    <div className='font-semibold'>Quantity</div>
                    <select className='hover:text-black'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
            </div>
             <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'/>
        </div>
      </div>
    </div>
  )
}

export default CartItem
