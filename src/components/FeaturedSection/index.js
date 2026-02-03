"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react'
import FeaturedSmallCard from '../FeaturedSmallCard'

const FeaturedSection = ({editorials}) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className='pt-8 bg-primary w-full'>
    <div className='w-full rounded-t-[20px] rounded-r-[20px] bg-white -mt-4'>
      <div className='w-full max-w-[1280px] mx-auto pt-16'>
        <div className='flex flex-row gap-4 flex-wrap'>
          {editorials.slice(0,4).map((editorial)=>(
            <FeaturedSmallCard imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} />
          ))}
        </div>
       <div className="flex flex-row sm:mt-10 mt-5 rounded-[20px]">
        {editorials.slice(0,4).map((editorial, index)=>(
                <motion.div
                key={index}
                className={`relative flex-grow transition-all duration-300 sm:h-[512px] h-[129px] hover:cursor-pointer  ${
                  selectedIndex === index ? "col-span-3" : "col-span-1"
                }`}
                onHoverStart={() => setSelectedIndex(index)}
                onHoverEnd={()=>setSelectedIndex(-1)}
                style={{
                  flex: selectedIndex === index ? "5" : "1",
                }}
              >
                <Image
                  src={editorial.headerImage}
                  alt={editorial.title}
                  className={`w-full h-full ${
                    selectedIndex === index
                      ? "object-cover w-full"
                      : "object-cover sm:w-auto  w-[49px]"
                  } sm:h-full h-[128px]`}
                />
                </motion.div>
          ))}
       </div>
      </div>

    </div>
    </div>

  )
}

export default FeaturedSection