import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import React, { createContext } from 'react';

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
                className="mySwiper"
            >
                {picsArray?.map(item => (
                    <>
                        <SwiperSlide>
                            <div>
                                <Image className="w-full" src={item.pic} key={item.id} alt="" />
                                {!isPopular && <h4 className="font-semibold">{item.audioTitle} از {item.singer}</h4>}
                                {isPopular && <h4 className="font-semibold">{item.singer}</h4>}
                            </div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </>
    )
}

export default MusicSlider