import React from 'react'
// meta
import { Metadata } from 'next'
// component
import Login from '@/components/_user/auth/login'

// meta for seo
export const metadata: Metadata = {
  title: 'Signup | Kharedo',
  description: 'Signup | Kharedo',
}

export default function page() {
  return <Login />
}
