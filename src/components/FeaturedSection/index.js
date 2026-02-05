"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import React from 'react'
import FeaturedSmallCard from '../FeaturedSmallCard'
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const FeaturedSection = ({ editorials }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className={`pt-8 bg-primary w-full ${jarkata.className}`}>
      <div className='w-full rounded-t-[20px] rounded-r-[20px] bg-white -mt-4'>
        <div className='p-5 lg:px-[120px] sm:px-[70px] sm:py-16'>
          <div className='flex flex-row gap-6 sm:gap-4 flex-wrap'>
           {editorials
  .filter(item => item.featured === true)
  .map(editorial => (
    <FeaturedSmallCard
      key={editorial.slug}
      imgPath={editorial.headerImage}
      slug={editorial.slug}
      title={editorial.title}
      desc={editorial.description}
    />
  ))}
          </div>
          <div className="flex flex-row sm:mt-10 mt-8 rounded-[20px] overflow-hidden">
            {editorials.slice(0, 4).map((editorial, index) => (
              <motion.div
                key={index}
                className="relative flex-grow sm:h-[512px] h-[129px] hover:cursor-pointer bg-no-repeat bg-cover bg-center"
                onHoverStart={() => setSelectedIndex(index)}
                onHoverEnd={() => setSelectedIndex(-1)}
                style={{
                  // flex: selectedIndex === index ? "5" : "1",
                  backgroundImage: `url(${editorial.headerImage.src})`,
                }}
                initial={false}
                animate={{
                  backgroundPosition:
                    selectedIndex === index ? "40% center" : "20% center",
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>

  )
}

export default FeaturedSection