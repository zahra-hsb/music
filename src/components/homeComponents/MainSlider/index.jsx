'use client'
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import pic from '../../../../public/pictures/ghomeyshi.png'

const slides = [
    { src: pic, alt: '', id: 1 },
    { src: pic, alt: '', id: 2 },
    { src: pic, alt: '', id: 3 },
    { src: pic, alt: '', id: 4 },
    { src: pic, alt: '', id: 5 },
]

const MainSlider = () => {
    return (
        <>
            <div className=''>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {slides?.map(item => (
                        <>
                            <SwiperSlide>
                                <Image className='w-full' src={item.src} alt={item.alt} key={item.id} />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default MainSlider