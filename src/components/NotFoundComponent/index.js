import Image from 'next/image'
import React from 'react'
import notFound from "../../static/images/editorial/not_found.png"
import Link from 'next/link'
import { Plus_Jakarta_Sans, Satoshi } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const NotFoundComponent = () => {
  return (
    <div className='w-full relative p-5 lg:px-[120px] sm:px-[70px] sm:py-16 z-1'>
        <Image className='w-full h-full object-contain img-responsive' src={notFound} alt='not found' width={926} height={450} />
        <div className={`flex flex-col gap-8 ${jarkata.className} max-w-[550px] mx-auto mt-10`}>
            <h2 className={`text-center text-[28px] leading-[34px] font-bold`}>Yikes , This is awkward</h2>
            <p className='text-center text-base leading-tight'>The page you’re looking for appears to have been moved, deleted, or doesn’t exist.  We apologize for the inconveniences</p>
            <Link className='px-4 py-4 bg-green-1 text-white rounded-full text-center max-w-[130px] mx-auto' href="/">
            Go Home
            </Link>
        </div>
    </div>
  )
}

export default NotFoundComponent