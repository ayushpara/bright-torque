'use server'
import ClapButton from '@/components/ClapButton'
import EditorCard from '@/components/EditorCard'
import EditorialDetailBanner from '@/components/EditorialDetailBanner'
import EditorialHtmlContent from '@/components/EditorialHtmlContent'
import LetsChat from '@/components/LetsChat'
import YouMightAlsoLike from '@/components/YouMightAlsoLike'
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
  const editorial = editorials.find((item) => item.slug === slug)
  if (!editorial) {
    notFound()
  }
  return {
    title: editorial?.title,
    description: editorial?.description
  }
}
async function Page({ params }) {
  const { slug } = await params;
  const editorial = editorials.find((item) => item?.slug === slug)
  const editor = editorial?.editor;
  return (
    <div>
      <EditorialDetailBanner editorial={editorial} />
      <div className='w-full p-5 lg:px-[120px] sm:px-[70px]'>
        <div className='flex flex-col md:flex-row gap-8'>
          <EditorialHtmlContent editorial={editorial?.content} />
          <EditorCard editor={editor} />
        </div>
      </div>
      <YouMightAlsoLike />
       <div className="px-5 sm:px-[70px] sm:pb-[70px] py-16 bg-primary">
        <LetsChat />
      </div>
      <ClapButton />
    </div>
  )
}

export default Page;