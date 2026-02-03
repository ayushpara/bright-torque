import React from 'react'
import EditorialRectangleCard from '../EditorialRectangleCard'

const FullWidthCardSection = ({editorials}) => {
    return (
        <div className='w-full max-w-[1280px] mx-auto pt-16'>
            <div className='flex flex-row gap-4 flex-wrap'>
                {editorials.map((editorial) => (
                    <EditorialRectangleCard imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} />
                ))}
            </div>
        </div>
    )
}

export default FullWidthCardSection 