import React from 'react'
import EditorialSquareCard from '../EditorialSquareCard'

const EditorialSquareCardSection = ({editorials}) => {
  return (
     <div className='w-full max-w-[1280px] mx-auto pt-16'>
            <div className='flex flex-row flex-wrap'>
                {editorials.map((editorial) => (
                    <EditorialSquareCard imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} by={editorial.by} />
                ))}
            </div>
        </div>
  )
}

export default EditorialSquareCardSection