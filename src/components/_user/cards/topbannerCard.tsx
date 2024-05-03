import React from 'react'
// next
import Image from 'next/image'
// type
import { TopBannerCardType } from '@/types/cards'

export default function TopbannerCard({
  bgMainClass,
  tageClass,
  brandName,
  logoClass,
  icon,
  discountText,
  imagePath,
  imageAlt,
  discountClass,
}: TopBannerCardType) {
  return (
    <div
      className={`${bgMainClass} drop-shadow-2 p-5 rounded-2xl overflow-hidden relative flex after:absolute after:right-0 after:top-0 after:w-[226px] after:h-[226px] after:-z-0  after:rounded-full  after:translate-x-[20%] after:translate-y-[-20%]`}
    >
      <div className='flex items-center '>
        <div className='flex items-start flex-col justify-between 2xsm:gap-3 md:gap-5 xsm:w-[320px] md:w-[360px] 2xsm:w-[320px]'>
          <span
            className={`${tageClass} px-5 py-2 rounded-lg font-extralight tracking-wider uppercase`}
          >
            {brandName}
          </span>
          <div className={`${logoClass} flex items-center justify-center `}>
            {icon}
          </div>
          <h3 className={`font-medium text-2xl ${discountClass}`}>
            {discountText}
          </h3>
        </div>
        <div className={`relative w-full z-50 h-[170px] `}>
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            objectFit='contain'
            placeholder='blur'
            blurDataURL={imagePath}
          />
        </div>
      </div>
    </div>
  )
}
