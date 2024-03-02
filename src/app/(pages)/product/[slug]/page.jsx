import ProductDetailCarousel from '@/app/components/ProductDetailCarousel'
import RelatedProduct from '@/app/components/RelatedProduct'
import React from 'react'

const productDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <div className='max-w-11/12 mx-auto flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

        {/* Left column start */}
          <div className='w-full md:w-auto mx-auto lg:mx-0 flex-[1.5] max-w-[500px] lg:max-w-full'>

            <ProductDetailCarousel/>
          </div>
        {/* Left column end */}


        {/* right column start */}
          <div className='flex-1 py-3 mt-10 text-center gap-8 flex flex-col w-full'>
            <div className=''>
                <div className='text-[34px] font-semibold mb-2'>
                  Tote Bag
                </div>

                <div className='text-lg font-semibold mb-5'>
                  Simple bag
                </div>

                <div className='text-lg font-semibold'>
                  MRP : ₹349.00 
                </div>

                <div className='text-base font-medium text-black/[0.5]'>
                  Incl. of all taxes
                </div>
            </div>
            

            <button className='rounded-full py-4 text-white font-medium text-lg bg-black transition-transform active:scale-95 mb-3 hover:opacity-75 text-center my-5'>
              Add To Cart
            </button>

            <div>
                <div className='text-lg font-bold mb-5'>
                  Product Details
                </div>

                <p className='text-md mb-5 text-justify'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, debitis hic, nobis perferendis eveniet quam consequatur porro officiis facilis veritatis vero dolorem in facere nemo exercitationem. Sequi aut beatae aliquid exercitationem sunt, quo culpa.
                </p>
            </div>
          </div>
        {/* right column end */}

        
      </div>

      <RelatedProduct/>

      
    </div>
  )
}

export default productDetails