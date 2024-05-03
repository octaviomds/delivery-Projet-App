import React from 'react'
// next
import Link from 'next/link'
// type
import { ButtonType } from '@/types/buttons'

export default function PrimaryButton({
  buttonText,
  href,
  colorClasses,
  children,
}: ButtonType) {
  return (
    <Link
      href={href}
      className={`${colorClasses} inline-flex items-center justify-center 2xsm:text-sm xsm:text-base rounded-md xsm:px-5 xsm:py-3 xl:px-5  2xsm:px-3 2xsm:py-2 px-4 py-3 text-center font-medium text-base hover:bg-opacity-90 `}
    >
      {buttonText}
      {children}
    </Link>
  )
}
