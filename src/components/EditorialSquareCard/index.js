import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EditorialSquareCard = ({ title, desc, imgPath, slug, by }) => {
    return (
        <div className='w-1/2'>
            <Link href={`editorial/${slug}`} prefetch className='flex flex-col gap-4'>
                <div className='flex-1'>
                    <Image className='rounded-xl max-h-[480px] h-[480px] object-cover' width={640} height={480} src={imgPath} />
                </div>
                <div className='flex-1'>
                    <p>BY <span>{by}</span></p>
                    <h3 className='text-[40px] leading-12 line-clamp-2'>{title}</h3>
                    <p className='text-base leading-6 line-clamp-3'>{desc}</p>
                </div>
            </Link>
        </div>
    )
}

export default EditorialSquareCard;