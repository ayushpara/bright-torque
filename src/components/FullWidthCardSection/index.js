import React from 'react'
import EditorialRectangleCard from '../EditorialRectangleCard'
import { Plus_Jakarta_Sans } from "next/font/google";
import HeadingWithRuler from '../HeadingWithRuler';

const jarkata = Plus_Jakarta_Sans({
    weight: "400",
    subsets: ["latin"],
});
const FullWidthCardSection = ({ editorials }) => {
    return (
        <div className={`p-5 lg:px-[120px] sm:px-[70px] sm:py-16 ${jarkata.className}`}>
           <HeadingWithRuler title="Editorial" />
            <div className='flex flex-row gap-4 flex-wrap'>
                {editorials.map((editorial, index) => (
                    <EditorialRectangleCard key={index} explores={editorial.explores} imgPath={editorial.headerImage} slug={editorial.slug} title={editorial.title} desc={editorial.description} />
                ))}
            </div>
        </div>
    )
}

export default FullWidthCardSection 