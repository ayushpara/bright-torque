import Image from 'next/image'
import React from 'react'
import notFound from "../../static/images/editorial/not_found.png"

const NotFoundComponent = () => {
  return (
    <div>
        <Image fill className='w-full h-full object-contain' src={notFound} alt='not found' />
    </div>
  )
}

export default NotFoundComponent