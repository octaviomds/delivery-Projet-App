import React from 'react'
// component
import PrimaryButton from '@/components/reuseableComponent/button'
// next
import Image from 'next/image'

const BANNER_DATA = [
  {
    imagePath: '/images/banners/banner-6.png',
    imageClasses:
      'relative w-full xl:h-[300px] lg:h-[240px] xsm:h-[250px] 2xsm:h-[200px] rounded-md overflow-hidden',
    name: 'boAt Bassheads 900',
    description: 'Wired On Ear Headphones with Mic',
    priceText: 'at Just',
    price: '$39 ',
    priceClasses: 'text-white',
    href: '',
    colorClasses: 'bg-success text-white max-w-30',
    textAbsoluteClasess:
      'xl:translate-y-[50%] lg:translate-y-[25%] xsm:translate-y-[30%] 2xsm:translate-y-[25%]',
  },
  {
    imagePath: '/images/banners/banner-7.png',
    imageClasses:
      'relative w-full xl:h-[375px] lg:h-[300px] xsm:h-[250px] 2xsm:h-[220px] rounded-md overflow-hidden lg:translate-y-[-10%] translate-y-[0%]',
    name: 'AirPods Pro',
    description: 'From ₹3095.00/mo. Per Month',
    priceText: 'MRP',
    price: '$239.00',
    priceClasses: 'text-black',
    href: '',
    colorClasses: 'bg-secondary text-white max-w-30',
    textAbsoluteClasess:
      'xl:translate-y-[65%] lg:translate-y-[45%] xsm:translate-y-[30%] 2xsm:translate-y-[45%]',
  },
]

export default function BannerBottom() {
  return (
    <div className='container_main md:my-20 my-10 '>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center'>
        {BANNER_DATA.map((item, index) => (
          <div
            className='relative'
            key={index}
          >
            <div className={item.imageClasses}>
              <Image
                src={item.imagePath}
                alt={item.name}
                fill
                placeholder='blur'
                blurDataURL={item.imagePath}
                objectFit='cover'
              />
            </div>
            <div
              className={`absolute top-0 flex flex-col gap-2 xsm:translate-x-10 translate-x-5 ${item.textAbsoluteClasess} `}
            >
              <h3 className='text-white font-semibold xsm:text-3xl text-xl'>
                {item.name}
              </h3>
              <p className='text-white font-light xsm:text-base text-sm'>
                {item.description}
              </p>
              <b className='text-white text-lg'>
                {item.priceText}{' '}
                <span className={item.priceClasses}>{item.price}</span>
              </b>
              <PrimaryButton
                buttonText='Shop Now'
                colorClasses={item.colorClasses}
                href={item.href}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
