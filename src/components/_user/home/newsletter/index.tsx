import React from 'react'

// icons
import { HiOutlineArrowSmRight } from 'react-icons/hi'

export default function NewsLetter() {
  return (
    <div className='container_main md:my-20 my-10 '>
      <div className='relative overflow-hidden bg-primary dark:bg-gray dark:bg-opacity-[0.2] p-10 rounded-2xl after:bg-secondary after:block after:md:w-[150px] after:xsm:w-[100px] after:2xsm:w-12 after:2xsm:h-12 after:md:h-[150px] after:xsm:h-[100px] before:2xsm:w-12 before:2xsm:h-12 after:absolute after:bottom-0 after:left-0 after:rounded-tr-full before:bg-secondary before:block before:md:w-[150px] before:xsm:w-[100px]   before:md:h-[150px] before:xsm:h-[100px]  before:absolute before:top-0 before:right-0 before:rounded-bl-full'>
        <h1 className='text-white md:text-2xl xsm:text-xl 2xsm:text-lg font-semibold uppercase text-center'>
          Subscribe on our newsletter
        </h1>
        <p className='text-gray text-center mt-2 md:text-base xsm:text-sm 2xsm:text-[8px]'>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className='flex items-center justify-center gap-4 mt-4 bg-white w-full md:max-w-[550px] max-w-[500px] mx-auto py-2 xsm:px-5 px-3'>
          <input
            type='email'
            placeholder='Enter Your Email'
            className='w-full outline-none bg-white'
          />
          <button className='xsm:px-5 xsm:text-base text-xs px-2 py-2 bg-secondary text-white rounded-md uppercase flex items-center gap-2'>
            Subscribe
            <HiOutlineArrowSmRight />
          </button>
        </div>
      </div>
    </div>
  )
}
