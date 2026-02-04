import Image from 'next/image'
import React from 'react'

const EditorialDetailBanner = ({ editorial }) => {
  const breadcrumb = `Home  / Reading lists  / ${editorial.title}`
  return (
    <div className='w-full relative'>
      <div className='absolute top-0 left-0 right-0 h-[557px] bottom-0  bg-primary z-0'></div>
      <div className='w-full max-w-[1280px] mx-auto pt-16 z-10 relative'>
        <p className='text-sm leading-none text-[#212121] font-normal'>{breadcrumb}</p>
        <h1 className='text-[4rem] leading-[80px] text-green-1 mt-5 font-semibold'>{editorial?.title}</h1>
        <p className='text-base leading-normal mt-6'>{editorial.description}</p>
        <p className='leading-normal mt-5'><span className='text-[#9B9B9B] text-base '>BY </span> {editorial.by} <span className='text-[#9B9B9B] text-base'>IN </span> {editorial.in}</p>
        <Image src={editorial?.headerImage || null} className='w-[100%] h-[100%] rounded-[20px] max-h-[420px] object-cover mt-16' height={420} alt={editorial?.title} />
      </div>
    </div>
  )
}

export default EditorialDetailBanner