import React from 'react'
// next
import Link from 'next/link'
// icons
import { GoLocation } from 'react-icons/go'
import { IoMailOutline } from 'react-icons/io5'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'

import Logo from '@/components/assets/logo'

const FOOTER_DATA = [
  {
    heading: 'Product',
    linkText1: 'Application',
    LinkPath1: '',
    linkText2: 'Features',
    LinkPath2: '',
    linkText3: 'Requirements',
    LinkPath3: '',
    linkText4: 'Technology',
    LinkPath4: '',
    linkText5: '',
    LinkPath5: '',
  },
  {
    heading: 'Company',
    linkText1: 'About Us',
    LinkPath1: '',
    linkText2: 'Contact Us',
    LinkPath2: '',
    linkText3: 'Blog',
    LinkPath3: '',
    linkText4: 'Team',
    LinkPath4: '',
    linkText5: 'Jobs',
    LinkPath5: '',
  },
  {
    heading: 'Online Shop',
    linkText1: 'Watch',
    LinkPath1: '',
    linkText2: 'Bag',
    LinkPath2: '',
    linkText3: 'Shoes',
    LinkPath3: '',
    linkText4: 'Women Dress',
    LinkPath4: '',
    linkText5: 'Men Dress',
    LinkPath5: '',
  },
]

const SOCIAL_MEDIA_DATA = [
  {
    linkPath: '',
    icon: <FaFacebookF />,
  },
  {
    linkPath: '',
    icon: <FaInstagram />,
  },
  {
    linkPath: '',
    icon: <FaXTwitter />,
  },
  {
    linkPath: '',
    icon: <FaLinkedinIn />,
  },
]

export default function Footer() {
  return (
    <footer className='bg-white dark:bg-boxdark dark:text-white border-t border-lightGray lg:block hidden'>
      <div className=' max-w-screen-xl space-y-8 lg:space-y-8 px-5 pt-12 pb-8 lg:px-20  '>
        <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
          <div>
            <div className=''>
              <h3 className='font-bold text-3xl'>Kharedo</h3>
            </div>

            <p className='mt-4 max-w-xs text-gray-500'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
            {/* locations  */}
            <div>
              <div className='flex mt-7 items-center group'>
                <GoLocation className='mr-3 text-lg text-black dark:text-white dark:group-hover:text-secondary group-hover:text-primary' />
                <p className=' hover:translate-x-2 capitalize text-sm transition-all  group-hover:text-primary text-black dark:text-white dark:group-hover:text-secondary'>
                  Phularwan, Sargodha, Paksitan
                </p>
              </div>
              <Link
                href='mailto:info@businessname.com'
                target='blank'
                className='flex mt-4 items-center group'
              >
                <IoMailOutline className='mr-3 text-lg text-black dark:text-white dark:group-hover:text-secondary group-hover:text-primary' />
                <p className=' hover:translate-x-2 capitalize text-sm transition-all  group-hover:text-primary text-black dark:text-white dark:group-hover:text-secondary'>
                  mrghulamabbas10@gmail.com
                </p>
              </Link>
              <Link
                href='https://wa.me/+923081001503'
                target='blank'
                className='flex mt-4 items-center group'
              >
                <MdOutlineWhatsapp className='mr-3 text-lg text-black dark:text-white dark:group-hover:text-secondary group-hover:text-primary ' />
                <p className=' capitalize text-sm hover:translate-x-2 transition-transform   group-hover:text-primary  text-black dark:text-white dark:group-hover:text-secondary'>
                  +92-308-1001503
                </p>
              </Link>
            </div>
            {/* locations  */}
          </div>
          {/* footer links  */}
          <div className='grid grid-cols-3 lg:gap-0 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3'>
            {FOOTER_DATA.map((item, index) => (
              <div key={index}>
                <h5 className='font-medium text-gray-900'>{item.heading}</h5>
                <ul className='mt-6 space-y-4 text-sm'>
                  <li className='transition hover:translate-x-2'>
                    <Link
                      href={item.LinkPath1}
                      className='text-black dark:text-white dark:hover:text-secondary hover:text-primary tracking-widest'
                    >
                      {item.linkText1}
                    </Link>
                  </li>
                  <li className='transition hover:translate-x-2'>
                    <Link
                      href={item.LinkPath2}
                      className='text-black dark:text-white dark:hover:text-secondary hover:text-primary tracking-widest'
                    >
                      {item.linkText2}
                    </Link>
                  </li>
                  <li className='transition hover:translate-x-2'>
                    <Link
                      href={item.LinkPath3}
                      className='text-black dark:text-white dark:hover:text-secondary hover:text-primary tracking-widest'
                    >
                      {item.linkText3}
                    </Link>
                  </li>
                  <li className='transition hover:translate-x-2'>
                    <Link
                      href={item.LinkPath4}
                      className='text-black dark:text-white dark:hover:text-secondary hover:text-primary tracking-widest'
                    >
                      {item.linkText4}
                    </Link>
                  </li>
                  <li className='transition hover:translate-x-2'>
                    <Link
                      href={item.LinkPath5}
                      className='text-black dark:text-white dark:hover:text-secondary hover:text-primary tracking-widest'
                    >
                      {item.linkText5}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          {/* footer links  */}
        </div>
        {/* social media  */}
        <div className='flex items-center justify-between border-t border-lightGray'>
          <p className='text-xs text-gray-500  pt-5'>
            &copy; 2024. Kharedo. All rights reserved.
          </p>
          <ul className='mt-8 flex gap-6'>
            {SOCIAL_MEDIA_DATA.map((item, index) => (
              <li
                key={index}
                className='bg-lightGray p-3 rounded hover:bg-gray text-boxdark-2 hover:text-blue-600 cursor-pointer'
              >
                <Link href={item.linkPath}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* social media  */}
      </div>
    </footer>
  )
}
