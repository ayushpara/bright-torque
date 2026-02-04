"use client"
import EditorialBanner from '@/components/EditorialBannaer'
import EditorialSquareCardSection from '@/components/EditorialSquareCardSection'
import FeaturedSection from '@/components/FeaturedSection'
import FullWidthCardSection from '@/components/FullWidthCardSection'
import { editorials } from '@/data/editorials'
import React from 'react'


const Page = () => {
  return (
    <div>
        <EditorialBanner />
        <FeaturedSection editorials={editorials} />
        <FullWidthCardSection editorials={editorials} />
        <EditorialSquareCardSection editorials={editorials} />
    </div>
  )
}

export default Page