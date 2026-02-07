import { Syne } from 'next/font/google';
import React from 'react'

const inter = Syne({ subsets: ["latin"] });
const HeadingWithRuler = ({title}) => {
  return (
    <div>
     <h3 className={`text-[#001325F2] font-medium text-[2rem] leading-8 sm:text-[44px] sm:leading-[44px] mb-6 ${inter.className}`}>
          {title}
        </h3>
        <div className='h-1 bg-[#F2F2F2] w-[100%] mt-5 mb-8' />
    </div>
  )
}

export default HeadingWithRuler