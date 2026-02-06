import React from 'react'
import EditorialSquareCard from '../EditorialSquareCard'
import { editorials } from '@/data/editorials'
import HeadingWithRuler from '../HeadingWithRuler'

const YouMightAlsoLike = () => {
  return (
    <div className='mb-8'>
      <div className="p-5 lg:px-[120px] sm:px-[70px] sm:py-8">
        <HeadingWithRuler title="You Might Also Like" />
      </div>
      <div className="p-5 !pr-0 lg:pl-[120px] sm:pl-[70px] sm:py-8">
        <div className='flex flex-row overflow-x-auto gap-4 no-scrollbar pr-8'>
          {editorials.map((editorial, index) => (
            <div className='min-w-[85%] sm:min-w-[45%]' key={index}>
              <EditorialSquareCard imgPath={editorial.cardImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} by={editorial.by} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YouMightAlsoLike