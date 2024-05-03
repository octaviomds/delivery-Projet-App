import Link from 'next/link'
import React from 'react'

// icons
import { FaHome } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Breadcrumbs() {
  return (
    <div className='lg:py-8 md:py-6 py-4 bg-[#FFA600] bg-opacity-[0.8] dark:bg-opacity-100'>
      <div className='px-6 flex items-center gap-2 text-lg font-semibold'>
        <Link
          href=''
          className=' flex items-center gap-2'
        >
          <FaHome />
          Home
        </Link>
        <MdKeyboardArrowRight />
        <Link href=''>Proucts</Link>
        <MdKeyboardArrowRight />
        <p className='text-primary dark:text-boxdark-2'>Name</p>
      </div>
    </div>
  )
}
