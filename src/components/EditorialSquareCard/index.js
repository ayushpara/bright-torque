import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
const EditorialSquareCard = ({ title, desc, imgPath, slug, by }) => {
    return (
        <div className={`${jarkata.className}`}>
            <Link href={`editorial/${slug}`} prefetch className='flex flex-col gap-4'>
                <div className='flex-1'>
                    <Image className='rounded-xl max-h-[280px] sm:max-h-[480px] sm:h-[480px] h-[280px] object-cover' alt={title} width={640} height={480} src={imgPath} />
                </div>
                <div className='flex-1'>
                    <p className='text-sm sm:text-base'><span className='text-[#9B9B9B] mr-1'>BY </span><span>{by}</span></p>
                    <h3 className='text-xl sm:text-[2rem] leading-8 sm:leading-[3rem] line-clamp-2 font-bold'>{title}</h3>
                    <p className='text-base leading-6 line-clamp-3 text-[#001325CC] mt-4'>{desc}</p>
                </div>
            </Link>
        </div>
    )
}

export default EditorialSquareCard;