import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EditorialDetailBanner = ({ editorial }) => {
  const breadcrumb = <div><Link href="/" prefetch className="text-[#212121CC]">Home  / </Link> <Link href="/editorial" prefetch className="text-[#212121CC]">Editorial  / </Link><Link href={editorial?.slug} prefetch>{editorial?.title}</Link></div>
  return (
    <div className='w-full relative p-5 lg:px-[120px] sm:px-[70px] sm:py-16 z-1'>
      <div className='absolute top-0 left-0 right-0 h-[80%] sm:h-[65%] bottom-0  bg-primary z-0'></div>
      <div className='w-full max-w-[1280px] mx-auto z-10 relative'>
        <div className='text-sm leading-none text-[#212121] font-normal'>{breadcrumb}</div>
        <h1 className='text-3xl leading-tight leading-relaxed sm:text-[4rem] sm:leading-[80px] text-green-1 mt-5 font-semibold'>{editorial?.title}</h1>
        <p className='text-base leading-normal mt-6 text-black-3'>{editorial?.description}</p>
        <p className='leading-normal mt-5 text-black-3'><span className='text-[#9B9B9B] text-base mr-1 text-black-3'>BY </span> {editorial?.by}</p>
        <Image src={editorial?.headerImage || null} className='w-[100%] h-[100%] rounded-[20px] max-h-[420px] object-cover mt-6 sm:mt-12 min-h-[200px]' height={420} alt={editorial?.title} preload />
      </div>
    </div>
  )
}

export default EditorialDetailBanner