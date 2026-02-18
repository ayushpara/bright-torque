import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { motion } from 'framer-motion';
import { stats, clients } from '@/data';
import useMediaQuery from '../useMedia';

const jarkata = Plus_Jakarta_Sans({
    weight: "400",
    subsets: ["latin"],
});


const OurStats = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    return (
        <div className={`border border-1 border-[#90CCD4] w-full rounded rounded-[30px] overflow-hidden ${jarkata.className} mt-6`}>
            <div className='w-full flex flex-col sm:flex-row flex-wrap'>
                {stats.map((item, index) => (
                    <div className={`flex-1  ${index === stats.length - 1 ? "" : 'border-b border-b-1 border-b-[#90CCD4] sm:border-b-0 sm:border-r sm:border-r-1 sm:border-r-[#90CCD4]'}  flex justify-between px-6 py-5 sm:py-8`} key={index}>
                        <div className='flex flex-col items-start'>
                            <p className='text-5xl md:text-6xl leading-[66px] text-green-1 font-medium'>{item.title}</p>
                            <p className='text-sm sm:text-lg text-green-1 leading-[27px]'>{item.subTitle}</p>
                        </div>
                        <div>
                            <Image src={item.image} alt={item.subTitle} width={36} height={36} key={index} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex-col sm:flex-row flex items-center sm:border-t sm:border-t-1 sm:border-t-[#90CCD4]'>
                <div className='bg-green-1 w-full sm:w-[380px] text-white flex items-center pl-4 relative z-[2] h-[70px] sm:h-[95px]'>
                    Trusted by B2B leaders
                </div>
                <div className="sm:w-[80%] overflow-hidden mx-auto">
                    <motion.div
                        className="flex gap-16 flex-1 py-4 sm:py-0"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear',
                        }}
                    >
                        {[...clients, ...clients].map((item, index) => (
                            <Image src={item.image} alt={item.alt} width={200} height={isMobile?34:45} className='object-contain object-center max-h-[44px] w-auto' key={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default OurStats