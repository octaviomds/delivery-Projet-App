'use client'
import React, { useState } from 'react'
// component
import Footer from '@/layout/_user/footer'
import Navbar from '@/layout/_user/navbar'
// next
import { usePathname } from 'next/navigation'
import Sidebar from '@/layout/_user/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute = pathname === '/auth/login' || pathname === '/auth/signup'
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <div className='md:hidden block relative h-full'>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      {!isAuthRoute && (
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <main>{children}</main>
      {!isAuthRoute && <Footer />}
    </>
  )
}
