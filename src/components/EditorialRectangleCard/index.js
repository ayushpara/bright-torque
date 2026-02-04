import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EditorialRectangleCard = ({ title, desc, imgPath, slug }) => {
  return (
    <div className='w-full flex flex-wrap mt-8 sm:mt-0'>
      <Link href={`editorial/${slug}`} prefetch className='flex flex-col-reverse sm:flex-row gap-8'>
        <div className='flex-1'>
          <h3 className='text-2xl sm:text-[40px] leading-8 sm:leading-[3rem]'>{title}</h3>
          <p className='text-base leading-6'>{desc}</p>
        </div>
        <div className='flex-1'>
          <Image className='rounded-xl max-h-[480px]' alt="editor" width={640} height={480} src={imgPath} />
        </div>
      </Link>
    </div>
  )
}

export default EditorialRectangleCard;