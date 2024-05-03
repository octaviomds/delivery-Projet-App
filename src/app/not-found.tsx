import React from 'react'
// svg
import NotFountSvg from '@/components/assets/not-fount-svg'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center overflow-hidden flex-col pb-10 '>
      <NotFountSvg />
      <Link
        href='/'
        className='bg-primary py-2 px-5 text-white rounded-md'
      >
        Back Home
      </Link>
    </div>
  )
}
