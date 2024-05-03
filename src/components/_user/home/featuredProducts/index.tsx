'use client'
import React from 'react'
// component
import MainHeading from '../../MainHeading'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination } from 'swiper/modules'
import ProductCard from '../../cards/productCard'

export default function FeaturedProducts() {
  return (
    <div className='container_main'>
      <MainHeading
        secondaryText='Featured'
        primarytext='Products'
        buttonText='View All'
        href=''
        width='after:md:w-[220px] after:w-[150px]'
      />
      <div className='my-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className='mySwiper border-none'
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <SwiperSlide
              className='rounded-2xl'
              key={index}
            >
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
