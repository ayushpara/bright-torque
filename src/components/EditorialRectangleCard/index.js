import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EditorialRectangleCard = ({title, desc, imgPath, slug}) => {
  return (
    <div className='w-full flex flex-wrap'>
       <Link href={`editorial/${slug}`} prefetch className='flex flex-row gap-4'>
        <div className='flex-1'>
            <h3 className='text-[40px] leading-12'>{title}</h3>
            <p className='text-base leading-6'>{desc}</p>
        </div>
        <div className='flex-1'>
        <Image className='rounded-xl max-h-[480px]' width={640} height={480} src={imgPath} />
        </div>
        </Link>
    </div>
  )
}

export default EditorialRectangleCard;