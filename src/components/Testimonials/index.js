"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from '@/data';
import Image from 'next/image';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
     slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
};
const Testimonials = () => {
    return (
            <div>
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div className='p-2 sm:p-4 max-w-[280px] sm:max-w-[540px] w-full'>

                            <div className='bg-white rounded-[20px] h-[180px] sm:h-[320px] p-4 sm:p-8 pr-0 pb-0 flex flex-col gap-4'>
                                <p className='text-xs sm:text-lg leading-[14px] sm:leading-8'>
                                    "{item.message}"
                                </p>
                                <div className='flex flex-row gap-2'>
                                    <Image src={item.client.clientImage} width={24} height={24} alt='client image' className='w-3 h-3 sm:w-6 sm:h-6' />
                                    <p className='text-[7px] leading-[10px] sm:text-sm sm:leading-5'>{item.client.name}</p>
                                </div>
                                <div className='flex flex-row justify-between items-end mt-auto'>
                                    <div className='pb-8'>
                                        <Image src={item.client.clientLogo} width={150} height={35} className='object-contain object-center max-w-[50px] sm:max-w-[150px] max-h-[17px] sm:max-h-[35px]' alt='client logo' />
                                    </div>
                                    <div>
                                        <Image alt="feedback image" src={item.client.feedbackImage} width={130} height={160} className='max-w-[80px] sm:max-w-[130px] object-contain h-[80px] sm:h-[160px]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
    )
}

export default Testimonials