import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const FeaturedSmallCard = ({imgPath, title, desc, slug}) => {
    const imgSize = 86.83984375;
  return (
        <div className='flex-1 min-w-[280px]'>
            <Link href={`editorial/${slug}`} prefetch className='flex flex-row gap-4'>
                <Image src={imgPath} width={imgSize} height={imgSize} alt={title||"--"} className={`rounded-[20px] min-w-[86.83984375]`}/>
                <div className='h-auto my-auto'>
                    <h3 className='text-sm font-semibold line-clamp-1 leading-6'>
                        {title||"--"}
                    </h3>
                    <p className="line-clamp-3 break-words text-xs leading-4 text-[#001325A3]">{desc||"--"}</p>
                </div>
            </Link>
            </div>
  )
}

export default FeaturedSmallCard