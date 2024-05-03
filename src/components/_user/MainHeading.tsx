import React from 'react'
// next
import Link from 'next/link'

// icons
import { MdChevronRight } from 'react-icons/md'
// type
import { MainHeadingType } from '@/types/home'

export default function MainHeading({
  secondaryText,
  primarytext,
  href,
  buttonText,
  width,
}: MainHeadingType) {
  return (
    <div
      className={`border-b border-lightGray dark:border-secondary dark:border-b afterClass after:bg-primary after:dark:bg-secondary ${width} after:h-[3px]`}
    >
      <div className='flex justify-between'>
        <h1 className='md:text-2xl text-xl font-bold'>
          {secondaryText}
          <span className='text-primary dark:text-secondary ml-1'>
            {primarytext}
          </span>
        </h1>
        <Link
          href={href}
          className='flex items-center gap-1 md:text-base text-sm hover:bg-gray hover:bg-opacity-[0.2] pl-2 pr-1 rounded hover:transition hover:ease-in-out '
        >
          {buttonText}
          <MdChevronRight className='text-primary dark:text-secondary md:text-xl text-base' />
        </Link>
      </div>
    </div>
  )
}
