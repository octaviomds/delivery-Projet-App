import React from 'react'
import Marquee from 'react-fast-marquee'

import MainHeading from '../../MainHeading'
import Image from 'next/image'
export default function Brands() {
  return (
    <div className='container_main md:my-20 my-10'>
      <MainHeading
        secondaryText='Top'
        primarytext='Brands'
        buttonText='View All'
        href=''
        width='after:md:w-[130px]'
      />
      <div className='md:my-10 my-5'>
        <Marquee direction='left'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div
              key={index}
              className='mr-6'
            >
              <div className='relative w-20 h-20 rounded-md border border-lightGray2 overflow-hidden'>
                <Image
                  src='/brand.webp'
                  alt='brands'
                  fill
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL='/brand.webp'
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
