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
async function Page({ params }) {
  const { slug } = await params;
  const editorial = editorials.find((item) => item?.slug === slug)
  const editor = editorial?.editor;
  return (
    <div>
      <EditorialDetailBanner editorial={editorial} />
      <div className='w-full p-5 lg:px-[120px] sm:px-[70px]'>
        <div className='flex flex-col md:flex-row gap-8'>
          <EditorialHtmlContent content={editorial?.content} />
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const editorial = editorials.find((item) => item.slug === slug)
  if (!editorial) {
    notFound()
  }
  return {
  title:editorial.title,
  description: editorial.description,
  keywords: ["AI-first product design",
    "UX for AI products",
    "human-centered AI design",
    "enterprise UX modernization",
    "design systems for scale",
    "conversion-focused UX design",
    "product branding agency",
    "brand identity for SaaS",
    "startup branding agency",
    "digital brand design studio",
    "B2B brand identity design"],
  authors: [{ name: "Ayush Parashar" }],
  openGraph: {
  title:editorial.title,
  description: editorial.description,
    url: `https://brightorque.com/editorial/${editorial.slug}`,
    siteName: "Bright Torque Design Studios",
    images: [
      {
        url: "/Meta_image_Bright_Torque.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  title:editorial.title,
  description: editorial.description,
    images: ["/Meta_image_Bright_Torque.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
}
}