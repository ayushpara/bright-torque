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
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true
};
const Testimonials = () => {
    return (
            <div>
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div className='p-4 '>

                            <div className='bg-white rounded-[20px] h-[320px] p-8 pr-0 pb-0 flex flex-col gap-4'>
                                <p>
                                    "{item.message}"
                                </p>
                                <div className='flex flex-row gap-2'>
                                    <Image src={item.client.clientImage} width={24} height={24} alt='client image' />
                                    <p>{item.client.name}</p>
                                </div>
                                <div className='flex flex-row justify-between items-end mt-auto'>
                                    <div className='pb-8'>
                                        <Image src={item.client.clientLogo} width={150} height={35} className='object-contain object-center' />
                                    </div>
                                    <div>
                                        <Image alt="feedback image" src={item.client.feedbackImage} width={130} height={160} />
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