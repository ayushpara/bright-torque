import React from 'react'
import EditorialSquareCard from '../EditorialSquareCard'
import { editorials } from '@/data/editorials'

const YouMightAlsoLike = () => {
  return (
    <div className='mb-8'>
      <div className="p-5 lg:px-[120px] sm:px-[70px] sm:py-8">
       <h3 className="text-[#001325F2] font-medium text-[44px] leading-[44px] mb-6">
          You Might Also Like
        </h3>
        <div className='h-1 bg-[#F2F2F2] w-[100%] my-5' />
      </div>
      <div className="p-5 !pr-0 lg:pl-[120px] sm:pl-[70px] sm:py-8">
        <div className='flex flex-row overflow-x-auto gap-4 no-scrollbar'>
          {editorials.map((editorial, index) => (
            <div className='min-w-[45%]' key={index}>
              <EditorialSquareCard imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} by={editorial.by} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YouMightAlsoLike