'use server'
import ClapButton from '@/components/ClapButton'
import EditorCard from '@/components/EditorCard'
import EditorialDetailBanner from '@/components/EditorialDetailBanner'
import EditorialHtmlContent from '@/components/EditorialHtmlContent'
import { editorials } from '@/data/editorials'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {
  return editorials.map((editorial) => ({
    slug: editorial.slug,
  }))
}
export async function generateMetadata({ params }) {
 const { slug } = await params;
  const editorial = editorials.find((item) => item.slug === slug )
  if (!editorial) {
    notFound()
  }
  return {
    title: editorial?.title,
    description: editorial?.description
  }
}
async function Page ({ params })  {
  const { slug } = await params;
  const editorial = editorials.find((item) => item?.slug === slug)
  const editor = editorial?.editor;
  return (
    <div>
    <EditorialDetailBanner editorial={editorial}  />
      <div className='w-full flex flex-row'>
     <EditorialHtmlContent editorial={editorial} />
    <EditorCard editor={editor} />
    <ClapButton />
      </div>
    </div>
  )
}

export default Page;