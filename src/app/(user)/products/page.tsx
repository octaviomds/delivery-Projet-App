import React from 'react'
// meta
import { Metadata } from 'next'
import Breadcrumbs from '@/components/reuseableComponent/breadcrumbs'

export const metadata: Metadata = {
  title: 'Products - Kharedo Online Shopping Store',
  description: 'Kharedo - Online Shopping Store',
}

export default function Page() {
  return (
    <div>
      <Breadcrumbs />
    </div>
  )
}
