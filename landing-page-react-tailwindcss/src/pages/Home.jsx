import React from 'react'
import Image from '/shirt.webp'
const Home = () => {

  return (
    <div className='flex flex-col md:flex-row md:space-x-6 items-center justify-between h-[calc(100vh-4rem)]'>
        <div className='md:w-1/2 text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-4 font-serif'>Ultimate Comfort Premium Cotton Shirt</h1>
            <p className='text-lg text-gray-700 mb-8 font-sans'>Discover the ultimate in comfort and style with our Premium Cotton Shirt 
                Made from 100% high-quality cotton. this shirt is designed to offer an
                unparelleled soft touch and breathability.
            </p>
            <div>
                <button className='bg-sky-600 text-amber-300 border border-sky-600 py-2 px-6 font-semibold hover:bg-sky-800 mr-4'>SHOP NOW</button>
                <button className='bg-white text-sky-600 py-2 font-semibold border border-sky-600 hover:bg-sky-100'>Learn More</button>
            </div>
        </div>
        <div className='md:w-1/2 flex justify-center mt-12 md:mt-0'>
            <img src={Image} alt="" className='h-130'/>
        </div>
    </div>
  )
}

export default Home