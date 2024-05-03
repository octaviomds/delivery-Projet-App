'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

// import required modules
import { EffectCreative, Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import PrimaryButton from '@/components/reuseableComponent/button'
import { useState } from 'react'

const BANNER_DATA = [
  {
    imgPath: '/images/banners/banner-1.jpg',
    title: 'Ulina Fashionable Jeans',
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequa uis aute irure
                dolor`,
  },
  {
    imgPath: '/images/banners/banner-2.png',
    title: 'Top Products Of The Year!',
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequa uis aute irure
                dolor`,
  },
  {
    imgPath: '/images/banners/banner-3.jpg',
    title: 'Ulina Fashionable Jeans',
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequa uis aute irure
                dolor`,
  },
  {
    imgPath: '/images/banners/banner-4.jpg',
    title: 'Top Products Of The Year!',
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequa uis aute irure
                dolor`,
  },
  {
    imgPath: '/images/banners/banner-5.jpg',
    title: 'Ulina Fashionable Jeans',
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequa uis aute irure
                dolor`,
  },
]

const Index = () => {
  // State to manage the animation trigger
  const [animateText, setAnimateText] = useState(false)

  const handleSlideChange = () => {
    setAnimateText(true)
    setTimeout(() => setAnimateText(false), 1000) // Reset after animation duration
  }
  return (
    <>
      <Swiper
        grabCursor={true}
        navigation={true}
        effect={'creative'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Navigation]}
        className='mySwiper3'
        onSlideChange={handleSlideChange}
      >
        {BANNER_DATA.map((item, index) => (
          <SwiperSlide
            key={index}
            className='border-y border-lightGray2'
          >
            <div className='relative w-full md:h-[450px] xsm:h-[300px] 2xsm:h-[200px] object-cover'>
              <Image
                src={item.imgPath}
                alt={item.title}
                fill
                objectFit='cover'
                placeholder='blur'
                blurDataURL={item.imgPath}
              />
            </div>
            <div
              className={`banner_content absolute top-0 translate-y-[14%] xsm:translate-y-[30%] lg:pl-5 md:pl-5 2xsm:ml-5 w-full md:max-w-[650px] xsm:max-w-[400px] max-w-[320px] ${
                animateText ? 'animate-text ' : ''
              }`}
            >
              <h1 className='font-extrabold lg:text-6xl md:text-4xl xsm:text-3xl 2xsm:text-xl md:mb-4 mb-0 text-black '>
                {item.title}
              </h1>
              <p className='text-graydark font-normal xsm:text-base 2xsm:text-xs text-sm mb-4 '>
                {item.description}
              </p>
              <div className='flex items-center gap-4 '>
                <PrimaryButton
                  buttonText='Shop Now'
                  colorClasses='bg-primary text-white '
                  href=''
                />
                <PrimaryButton
                  buttonText='See All'
                  colorClasses='bg-secondary text-white '
                  href=''
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Index
