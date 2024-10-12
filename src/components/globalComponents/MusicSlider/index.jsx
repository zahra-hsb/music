import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import React, { createContext } from 'react';
import { Autoplay } from "swiper/modules";

const MusicSlider = ({ picsArray, isPopular }) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
                className="mySwiper"
            >
                {picsArray?.map(item => (
                    <>
                        <SwiperSlide>
                            <div>
                                <Image className="w-full" src={item.pic} key={item.id} alt="" />
                                {!isPopular && <h4 className="font-semibold pt-5">{item.audioTitle} از {item.singer}</h4>}
                                {isPopular && <h4 className="font-semibold pt-5">{item.singer}</h4>}
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </>
    )
}

export default MusicSlider