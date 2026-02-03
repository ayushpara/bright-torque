import EditorCard from '@/components/EditorCard'
import EditorialDetailBanner from '@/components/EditorialDetailBanner'
import EditorialHtmlContent from '@/components/EditorialHtmlContent'
import { editorials } from '@/data/editorials'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {

  return editorials.map((editorial) => ({
    slug: editorial.slug,
  }))
}
export async function generateMetadata({ params }) {
  const editorial = editorials.find((item) => item.slug === params.slug)
  if (!editorial) {
    notFound()
  }
  return {
    title: editorial?.title,
    description: editorial?.description
  }
}
const Page = ({ params }) => {
  const editorial = editorials.find((item) => item?.slug === params.slug)
  const editor = editorial.editor;
  
  return (
    <div>
    <EditorialDetailBanner editorial={editorial}  />
      <div className='w-full flex flex-row'>
     <EditorialHtmlContent editorial={editorial} />
    <EditorCard editor={editor} />
      </div>
    </div>
  )
}

export default Page