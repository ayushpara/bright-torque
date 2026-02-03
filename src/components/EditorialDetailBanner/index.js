import Image from 'next/image'
import React from 'react'

const EditorialDetailBanner = ({editorial}) => {
    const breadcrumb = `Home  / Reading lists  / `
  return (
    <div>
          <p>{breadcrumb}</p>
      <h1>{editorial?.title}</h1>
      <Image src={editorial?.headerImage} />
    </div>
  )
}

export default EditorialDetailBanner