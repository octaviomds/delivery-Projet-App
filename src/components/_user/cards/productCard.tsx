import React from 'react'
// next
import Image from 'next/image'
import Link from 'next/link'
// icons
import { TiStar } from 'react-icons/ti'
import { FaOpencart } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

import ImageProdcut from '../../../../public/product.webp'

export default function ProductCard() {
  return (
    <div className='transition-all hover:scale-105'>
      <div className='mx-auto relative  flex w-full max-w-xs flex-col overflow-hidden  rounded-xl bg-white dark:bg-boxdark shadow-lg'>
        <Link
          className='relative flex h-60'
          href='#'
        >
          <Image
            src={ImageProdcut}
            alt='product'
            fill
            objectFit='cover'
          />
          <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 py-0.5 text-center text-sm font-medium text-white'>
            39% OFF
          </span>
        </Link>
        <div className='mt-4 px-5 pb-5'>
          <Link href='#'>
            <h5 className='text-xl tracking-tight font-medium  whitespace-nowrap overflow-hidden text-ellipsis'>
              Nike Air MX Super 2500 - Red
            </h5>
          </Link>
          <div className='mt-2 mb-5 flex items-center justify-between'>
            <div className='flex items-center'>
              <TiStar
                fontSize={24}
                className='text-secondary'
              />
              <span className=' text-lg font-bold'>5.0</span>
            </div>
            <p>
              <span className='text-2xl font-bold  '>$449</span>
              <span className='text-sm text-red line-through'>$699</span>
            </p>
          </div>
          <button className='w-full flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-all sm:w-auto bg-gradient-to-r from-primary to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900   '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
