import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// icons
import MainHeading from '../../MainHeading'

export default function Category() {
  return (
    <div className='container_main mx-auto my-20'>
      <MainHeading
        secondaryText='Top'
        primarytext='Category'
        buttonText='View All'
        href=''
        width='md:after:w-[150px] after:w-[130px]'
      />
      <div className='my-10'>
        <div className='grid md:grid-cols-6 2xsm:grid-cols-3 xsm:grid-cols-6 items-center gap-6'>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Link
              key={index}
              href=''
              className='flex items-center flex-col gap-4 group'
            >
              <div className='bg-white dark:bg-opacity-[0.2] drop-shadow-2 transetionClass border border-bodydark group-hover:border-primary transition ease-in-out md:w-[132px] md:h-[132px] w-20 h-20 rounded-full flex items-center justify-center'>
                <Image
                  src='/category.png'
                  alt='category'
                  width={132}
                  height={132}
                  placeholder='blur'
                  blurDataURL='/category.png'
                  objectFit='cover'
                />
              </div>
              Mobile
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
