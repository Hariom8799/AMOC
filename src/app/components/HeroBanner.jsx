import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack,BiArrowToRight } from 'react-icons/bi';


export default function HeroBanner() {
  return (
    <div className='text-white text-[20px] relative max-w-[1326px] w-full mx-auto  overflow-clip'>
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={1500}
        renderArrowPrev={(clickHandler,hasPrev)=>(
          <div onClick={clickHandler}
            className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex justify-center items-center hover:opacity-90 cursor-pointer'
          >
            <BiArrowBack className='text-sm md:text-lg'/>
          </div>
        )}

        renderArrowNext={(clickHandler,hasPrev)=>(
          <div onClick={clickHandler}
            className='absolute right-0 md:right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex justify-center items-center hover:opacity-90 cursor-pointer'
          >
            <BiArrowBack className='text-sm md:text-lg rotate-180'/>
          </div>
        )}

      >
                <div className=''>
                    <img src="/slide-1.png" className='aspect-[16/10] md:aspect-auto object-cover'/>
                    <button className='px-[15px] md:px-[40px] py-[10x] md:py-[25px] bg-white text-black
                    absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90 border-none'>
                      Shop Now
                    </button>
                </div>
                <div className=''>
                    <img src="/slide-2.png" className='aspect-[16/10] md:aspect-auto object-cover'/>
                    <button className='px-[15px] md:px-[40px] py-[10x] md:py-[25px] bg-white text-black
                    absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90 border-none'>
                      Shop Now
                    </button>
                </div>
                <div className=''>
                    <img src="/slide-3.png" className='aspect-[16/10] md:aspect-auto object-cover'/>
                    <button className='px-[15px] md:px-[40px] py-[10x] md:py-[25px] bg-white text-black
                    absolute bottom-[25px] md:bottom-[75px] left-0 text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90 border-none'>
                      Shop Now
                    </button>
                </div>
            </Carousel>
    </div>
  )
}

