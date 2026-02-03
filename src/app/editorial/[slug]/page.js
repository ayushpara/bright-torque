import { editorials } from '@/data/editorials'
import React from 'react'

export async function generateStaticParams() {
 
  return editorials.map((editorial) => ({
    slug: editorial.slug,
  }))
}
const Page = ({params}) => {
  const editorial = editorials.find((item)=> item.slug ===params.slug)
  const breadcrumb = `Home  / Reading lists  / `
  return (
    <div>
      <p>{breadcrumb}</p>
      <h1>{editorial.title}</h1>
    </div>
  )
}

export default Page