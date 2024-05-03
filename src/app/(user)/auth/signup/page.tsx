import React from 'react'
// meta
import { Metadata } from 'next'
// Component
import SignUp from '@/components/_user/auth/signup'

// meta for seo
export const metadata: Metadata = {
  title: 'Signup | Kharedo',
  description: 'Signup | Kharedo',
}

export default function page() {
  return <SignUp />
}
