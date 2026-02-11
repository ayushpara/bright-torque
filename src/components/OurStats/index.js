import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { motion } from 'framer-motion';
import { stats, clients } from '@/data';

const jarkata = Plus_Jakarta_Sans({
    weight: "400",
    subsets: ["latin"],
});


const OurStats = () => {
    return (
        <div className={`border border-1 border-[#90CCD4] w-full rounded rounded-[30px] overflow-hidden ${jarkata.className} mt-6`}>
            <div className='w-full flex flex-col sm:flex-row flex-wrap'>
                {stats.map((item, index) => (
                    <div className={`flex-1  ${index === stats.length - 1 ? "" : 'border border-r-1 border-r-[#90CCD4]'}  flex justify-between px-6 py-8`} key={index}>
                        <div className='flex flex-col items-start'>
                            <p className='text-5xl sm:text-6xl leading-[66px] text-green-1 font-medium'>{item.title}</p>
                            <p className='text-sm sm:text-lg text-green-1 leading-[27px]'>{item.subTitle}</p>
                        </div>
                        <div>
                            <Image src={item.image} alt={item.subTitle} width={36} height={36} key={index} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex-col sm:flex-row flex items-center border border-t-1 border-t-[#90CCD4]'>
                <div className='bg-green-1 w-full sm:w-[380px] text-white flex items-center pl-4 relative z-[2] h-[70px]'>
                    Trusted by B2B leaders
                </div>
                <div className="sm:w-[80%] overflow-hidden mx-auto">
                    <motion.div
                        className="flex gap-8 flex-1"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear',
                        }}
                    >
                        {[...clients, ...clients].map((item, index) => (
                            <div
                                key={index}
                                className="w-[130px] h-[50px] bg-contain bg-no-repeat bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${item.image.src})` }}
                                aria-label={item.alt}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default OurStats