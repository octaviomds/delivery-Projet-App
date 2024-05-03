import React from 'react'

// component
import HomeSlider from '@/components/_user/home/homeSlider'
import Cetagory from '@/components/_user/home/category'
import TopBanner from '@/components/_user/home/banners/TopBanner'
import TopCollections from '@/components/_user/home/topCollections'
import BannerBottom from '@/components/_user/home/banners/bannerBottom'
import NewsLetter from '@/components/_user/home/newsletter'
import Brands from '@/components/_user/home/brands'
import FeaturedProducts from '@/components/_user/home/featuredProducts'

// meta
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kharedo - Online Shopping Store',
  description: 'Kharedo - Online Shopping Store',
}

export default function page() {
  return (
    <>
      <HomeSlider />
      <Cetagory />
      <TopBanner />
      <TopCollections />
      <BannerBottom />
      <FeaturedProducts />
      <Brands />
      <NewsLetter />
    </>
  )
}
