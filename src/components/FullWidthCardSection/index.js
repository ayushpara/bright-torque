import React from 'react'
import EditorialRectangleCard from '../EditorialRectangleCard'

const FullWidthCardSection = ({editorials}) => {
    return (
        <div className='p-5 lg:px-[120px] sm:px-[70px] sm:py-16'>
            <div className='flex flex-row gap-4 flex-wrap'>
                {editorials.map((editorial, index) => (
                    <EditorialRectangleCard key={index} imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} />
                ))}
            </div>
        </div>
    )
}

export default FullWidthCardSection 