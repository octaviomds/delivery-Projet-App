'use client'

import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LuLayoutDashboard, LuUsers } from 'react-icons/lu'
import { TbCategory2 } from 'react-icons/tb'
import { FaRegBuilding } from 'react-icons/fa'
import { BsCart3, BsShop } from 'react-icons/bs'
import { RiCoupon5Line } from 'react-icons/ri'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'

// ===========DASHBOARD_DATA============ //
export const DASHBOARD_DATA = [
  {
    id: 1,
    title: 'Home',
    slug: '/',
    icon: <LuLayoutDashboard />,
  },
  {
    id: 2,
    title: 'Categories',
    slug: '/categories',
    icon: <TbCategory2 />,
  },
  {
    id: 3,
    title: 'Brands',
    slug: '/brands',
    icon: <FaRegBuilding />,
  },
  {
    id: 4,
    title: 'Products',
    slug: '/products',
    icon: <BsShop />,
  },

  {
    id: 5,
    title: 'Orders',
    slug: '/orders',
    icon: <BsCart3 />,
  },
  {
    id: 6,
    title: 'Users',
    slug: '/users',
    icon: <LuUsers />,
  },
  {
    id: 7,
    title: 'Newsletter',
    slug: '/newsletter',
    icon: <SlEnvolopeLetter />,
  },
  {
    id: 8,
    title: 'Settings',
    slug: '/settings',
    icon: <IoSettingsOutline />,
  },
]
// ============DASHBOARD_DATA=========== //

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  return (
    <aside
      ref={sidebar}
      className={`fixed left-0 top-0 z-9999 flex h-full w-60 flex-col overflow-y-hidden dark:border-r border-slate-700 bg-gray duration-300 ease-linear dark:bg-primary lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 px-4 py-5.5 border-b border-lightGray2'>
        <Link href='/'>
          <h1 className='text-black dark:text-white font-bold text-xl'>
            Kharedo
          </h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden text-2xl'
        >
          <IoClose />
        </button>
      </div>

      <div className='no_scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-0 lg:mt-0 lg:px-0'>
          {/* <!-- Menu Group --> */}
          <ul className='mb-6 flex flex-col gap-1.5 '>
            {DASHBOARD_DATA.map((item, id) => (
              <li key={id}>
                <Link
                  href={item.slug}
                  className={`group relative flex items-center gap-6 rounded-sm px-4 py-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4  ${
                    pathname === item.slug
                      ? 'bg-primaryLite border-l-4 border border-primary text-primary '
                      : 'text-black '
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
