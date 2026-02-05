import React from 'react'
import EditorialSquareCard from '../EditorialSquareCard'
import HeadingWithRuler from '../HeadingWithRuler'

const EditorialSquareCardSection = ({editorials}) => {
  return (
     <div className='p-5 lg:px-[120px] sm:px-[70px] sm:py-16 mb-16 sm:mb-8'>
                <HeadingWithRuler title="You Might also Like" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {editorials.map((editorial, index) => (
                    <EditorialSquareCard key={index} imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} by={editorial.by} />
                ))}
            </div>
        </div>
  )
}

export default EditorialSquareCardSection