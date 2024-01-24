import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel2 () {
    return (
        <div className='sliderWrapper mx-auto'>
        <Swiper
            className=' h-[500px] '
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={700}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[ Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide className=''>
                <img className='w-full object-cover'  src="https://source.unsplash.com/random/450×700/?fruit" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full object-cover' src="https://source.unsplash.com/random/450×700/?animal" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full object-cover ' src="https://source.unsplash.com/random/450×700/?tree" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full object-cover' src="https://source.unsplash.com/random/450×700/?cat" alt="" srcset="" />
            </SwiperSlide>
            
        </Swiper>
        </div>
    );
};