"use client"
import EditorialBanner from '@/components/EditorialBannaer'
import EditorialSquareCardSection from '@/components/EditorialSquareCardSection'
import FeaturedSection from '@/components/FeaturedSection'
import FullWidthCardSection from '@/components/FullWidthCardSection'
import LetsChat from '@/components/LetsChat'
import { editorials } from '@/data/editorials'
import React from 'react'


const Page = () => {
  return (
    <div>
      <EditorialBanner />
      <FeaturedSection editorials={editorials} />
      <FullWidthCardSection editorials={editorials} />
      <EditorialSquareCardSection editorials={editorials} />
      <div className="px-5 sm:px-[70px] sm:pb-[70px] py-16 bg-primary">
        <LetsChat />
      </div>
    </div>
  )
}

export default Page