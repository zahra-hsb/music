import { Swiper, SwiperSlide } from "swiper/react"
import React, { createContext } from 'react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";

import pic1 from '../../../../public/pictures/Ellipse 4.png'
import pic2 from '../../../../public/pictures/Ellipse 5.png'
import pic3 from '../../../../public/pictures/Ellipse 7.png'
import pic4 from '../../../../public/pictures/Ellipse 8.png'
import Image from "next/image";

const picsArray = [
    { id: 1, pic: pic1 },
    { id: 2, pic: pic2 },
    { id: 3, pic: pic3 },
    { id: 4, pic: pic4 },
    { id: 5, pic: pic3 },
    { id: 6, pic: pic2 },
]

const CatSlider = () => {
    return (
        <>
            <div className="w-full py-5">
                <Swiper
                    slidesPerView={4}
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
                                <Image className="w-full" src={item.pic} key={item.id} alt="" />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default CatSlider