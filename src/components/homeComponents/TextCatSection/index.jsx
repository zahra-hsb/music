'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import React, { createContext } from 'react';
// Import Swiper styles
import 'swiper/css';

const catsArray = [
    {id: 1, title: 'پاپ'},
    {id: 2, title: 'سنتی'},
    {id: 3, title: 'جدید'},
    {id: 4, title: 'راک'},
    {id: 5, title: 'قدیمی'},
]

const TextCatSection = () => {
    return (
        <>
            <section className="p-5">
                <h4 className="pb-5">دسته بندی آهنگ ها</h4>
                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={15}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    {catsArray?.map(item => (
                        <>
                            <SwiperSlide>
                                <div className="text-center px-3 py-2 bg-gray-300 w-full rounded-2xl">
                                    {item.title}
                                </div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default TextCatSection