import React from 'react'
import MainHeading from '../../MainHeading'
import TopbannerCard from '../../cards/topbannerCard'
import IphoneIcon from '@/components/assets/iphone-icon'
import ExiomeIcon from '@/components/assets/exiome-icon'
import ReaclmeIcon from '@/components/assets/reaclme-icon'

export default function TopBanner() {
  return (
    <div className='container_main md:my-30 2xsm:my-15 '>
      <MainHeading
        secondaryText='Top'
        primarytext='Electronics Brands'
        buttonText='View All'
        href=''
        width='md:after:w-[250px] after:w-[215px]'
      />
      <div className='grid xl:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-5 my-10'>
        <TopbannerCard
          bgMainClass='bg-[#FFF3CC] after:bg-[#F6DE8D] dark:after:bg-gray dark:after:bg-opacity-[0.2] dark:bg-gray dark:bg-opacity-[0.2] border border-lightGray2'
          brandName='REALME'
          discountText='UP to 80% OFF'
          discountClass=''
          imageAlt='REALME'
          imagePath='/images/top-banners/phone-2.png'
          tageClass='bg-[#F6DE8D]  dark:bg-gray dark:bg-opacity-[0.2]'
          icon={<ReaclmeIcon />}
          logoClass=' bg-[#FFC915] p-2'
        />
        <TopbannerCard
          bgMainClass='bg-[#313131] after:bg-[#404040] after:border after:border-bodydark border border-lightGray2'
          brandName='Iphone'
          discountText='UP to 80% OFF'
          discountClass='text-white'
          icon={<IphoneIcon />}
          imageAlt='iphone'
          imagePath='/images/top-banners/phone-1.png'
          logoClass='w-15 h-15 rounded-2xl bg-white'
          tageClass='bg-[#494949] text-white'
        />
        <TopbannerCard
          bgMainClass='bg-[#FFECDF] after:bg-[#FFD1B0] dark:after:bg-bodydark dark:after:bg-opacity-[0.2] dark:bg-bodydark dark:bg-opacity-[0.2] border border-lightGray2'
          brandName='XIAOMI'
          discountText='UP to 80% OFF'
          discountClass=''
          imageAlt='XIAOMI'
          imagePath='/images/top-banners/phone-3.png'
          tageClass='bg-[#FFD1B0] dark:bg-bodydark dark:bg-opacity-[0.2]'
          icon={<ExiomeIcon />}
          logoClass='w-15 h-15 bg-white rounded-[40px]'
        />
      </div>
    </div>
  )
}
