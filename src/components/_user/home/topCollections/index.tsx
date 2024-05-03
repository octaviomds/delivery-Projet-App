import React from 'react'
import MainHeading from '../../MainHeading'
import ProductCard from '../../cards/productCard'

export default function TopCollections() {
  return (
    <div className='container_main'>
      <MainHeading
        secondaryText='Our'
        primarytext='Top Collections'
        buttonText='View All'
        href=''
        width='md:after:w-[220px] after:w-[215px]'
      />
      <div className='my-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-4 gap-5 md:grid-cols-2 xsm:grid-cols-2 2xsm:grid-cols-1 '>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  )
}
