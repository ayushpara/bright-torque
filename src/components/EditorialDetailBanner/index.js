import Image from 'next/image'
import React from 'react'

const EditorialDetailBanner = ({editorial}) => {
    const breadcrumb = `Home  / Reading lists  / `
  return (
    <div className='w-full h-screen '>
          <p>{breadcrumb}</p>
      <h1>{editorial?.title}</h1>
      <Image src={editorial?.headerImage||null} className='w-[100%] h-[100%]' alt={editorial?.title} />
    </div>
  )
}

export default EditorialDetailBanner