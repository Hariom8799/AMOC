'use client';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack,BiArrowToRight } from 'react-icons/bi';

export default function ProductDetailCarousel() {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>

      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      
      >

        <img src="/product-1.webp" />
        <img src="/product-1.webp" />
        <img src="/product-1.webp" />
        <img src="/product-1.webp" />
        <img src="/product-1.webp" />
        <img src="/product-1.webp" />
        <img src="/product-1.webp" />
        
      </Carousel> 

      
      
    </div>
  )
}
