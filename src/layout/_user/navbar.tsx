'use client'
// next
import Link from 'next/link'
// component
import DropdownUser from '../../components/userDropdown'
import ThemeSwitcher from '@/hooks/themeSwitcher'

// icons
import { FiSearch } from 'react-icons/fi'
import { FaOpencart } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

// component
import Logo from '@/components/assets/logo'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

const NAVBAR_LINKS = [
  {
    name: 'Home',
    urlPath: '/',
  },
  {
    name: 'Products',
    urlPath: '/products',
  },
  {
    name: 'Category',
    urlPath: '/category',
    icons: <MdKeyboardArrowDown className='mt-1.5' />,
  },
  {
    name: 'Contact',
    urlPath: '/contact-us',
  },
  {
    name: 'About',
    urlPath: '/about',
  },
]

const Navbar = (props: {
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}) => {
  const pathname = usePathname()
  return (
    <>
      <nav className='sticky top-0 z-999 flex w-full h-18 bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none'>
        <div className='flex justify-between items-center lg:px-5 md:px-5  px-4 w-full '>
          <div className='md:hidden block'>
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-controls='sidebar'
              onClick={(e) => {
                e.stopPropagation()
                props.setSidebarOpen(!props.sidebarOpen)
              }}
              className='z-99999 block rounded-sm border border-none bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden'
            >
              <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                <span className='du-block absolute right-0 h-full w-full'>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!w-full delay-300'
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && 'delay-400 !w-full'
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!w-full delay-500'
                    }`}
                  ></span>
                </span>
                <span className='absolute right-0 h-full w-full rotate-45'>
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!h-0 !delay-[0]'
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && '!h-0 !delay-200'
                    }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>
          <Link
            href='/'
            className='md:w-46 '
          >
            <Logo />
          </Link>

          <ul className='md:flex items-center gap-5 hidden '>
            {NAVBAR_LINKS.map((item, index) => (
              <li
                className='flex items-center gap-1.5'
                key={index}
              >
                <Link
                  href={item.urlPath}
                  className={`text-sm font-semibold ${
                    pathname === item.urlPath
                      ? 'text-primary dark:text-secondary'
                      : ''
                  }`}
                >
                  {item.name}{' '}
                </Link>
                {item.icons}
              </li>
            ))}
          </ul>
          <div>
            <ul className='flex items-center md:gap-2'>
              <li>
                <span className='w-10 h-10 md:flex hidden items-center justify-center cursor-pointer hover:bg-gray dark:bg-opacity-[0.2]   rounded-full transition ease-in-out'>
                  <FiSearch size={20} />
                </span>
              </li>
              <li>
                <span className='relative w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray dark:bg-opacity-[0.2]  rounded-full transition ease-in-out'>
                  <FaOpencart size={20} />
                  <span className='absolute top-0 right-0 bg-primary w-4 h-4 text-center rounded-full text-white text-xs'>
                    1
                  </span>
                </span>
              </li>
              <li>
                <span className='relative w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray dark:bg-opacity-[0.2]  rounded-full transition ease-in-out'>
                  <AiOutlineHeart size={20} />
                  <span className='absolute top-0 right-0 bg-secondary w-4 h-4 text-center rounded-full text-white text-xs'>
                    1
                  </span>
                </span>
              </li>

              <li>
                <span className='w-10 h-10 md:flex  items-center justify-center mx-auto cursor-pointer hover:bg-gray dark:bg-opacity-[0.2]  rounded-full transition ease-in-out'>
                  <ThemeSwitcher />
                </span>
              </li>
              <li>
                <span className='p-1.5 md:block hidden cursor-pointer hover:bg-gray dark:bg-opacity-[0.2]  rounded-full transition ease-in-out'>
                  <DropdownUser />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
