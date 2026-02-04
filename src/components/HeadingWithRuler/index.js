import React from 'react'

const HeadingWithRuler = ({title}) => {
  return (
    <div>
     <h3 className="text-[#001325F2] font-medium text-[44px] leading-[44px] mb-6">
          {title}
        </h3>
        <div className='h-1 bg-[#F2F2F2] w-[100%] mt-5 mb-8' />
    </div>
  )
}

export default HeadingWithRuler