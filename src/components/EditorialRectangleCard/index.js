import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import EditorialHtmlContent from '../EditorialHtmlContent';

const EditorialRectangleCard = ({ title, subHeading, imgPath, slug, explores }) => {
  return (
    <div className='w-full flex flex-wrap mt-8 sm:mt-0'>
      <Link href={`editorial/${slug}`} prefetch className='flex flex-col-reverse sm:flex-row gap-8'>
        <div className='flex-1'>
          <h3 className='text-2xl sm:text-[40px] leading-8 sm:leading-[3rem] font-bold'>{title}</h3>
          <p className='text-base leading-6 text-[#001325CC] mt-2 line-clamp-2'>{subHeading}</p>
          <EditorialHtmlContent content={explores} id="card-content" />
        </div>
        <div className='flex-1'>
          <Image className='rounded-xl max-h-[280px] sm:max-h-[480px] h-[100%] object-cover img-responsive' alt="editor" width={640} height={480} src={imgPath} />
        </div>
      </Link>
      <style global jsx>
        {
          `
          #card-content ul li{
          font-size:16px;
          line-height:24px;
          color:#001325CC;
          }
          `
        }
      </style>
    </div>
  )
}

export default EditorialRectangleCard;