import { editorials } from '@/data/editorials'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {
 
  return editorials.map((editorial) => ({
    slug: editorial.slug,
  }))
}
export async function generateMetadata({ params }) {
   const editorial = editorials.find((item)=> item.slug ===params.slug)
     if (!editorial) {
    notFound()
  }
  return {
    title: editorial?.title,
    description:editorial?.description
  }
}
const Page = ({params}) => {
  const editorial = editorials.find((item)=> item?.slug ===params.slug)
  const breadcrumb = `Home  / Reading lists  / `
  return (
    <div>
      <p>{breadcrumb}</p>
      <h1>{editorial?.title}</h1>
    </div>
  )
}

export default Page