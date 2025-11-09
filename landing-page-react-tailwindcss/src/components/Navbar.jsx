import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='pt-4 mb-8 md:mb-0'>
        <div className='flex items-center justify-between'>
            <h4 className='text-3xl font-bold text-sky-600 italic'>Logo</h4>
            <div className='space-x-6 hidden md:block'>
              <a href="" className='hover:underline font-medium'>Home</a>
              <a href="" className='hover:underline font-medium'>Features</a> 
              <a href="" className='hover:underline font-medium'>About</a>  
              <a href="" className='hover:underline font-medium'>Contact</a>
            </div>
            <button className='hidden md:block px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800'>Login</button>
            <button className='md:hidden font-medium text-lg' onClick={() => setIsOpen(!isOpen)}>|||</button>
        </div>
        {isOpen &&
            <div className='md:hidden flex flex-col items-center bg-white py-2 space-y-3'>
              <a href="" className='hover:underline font-medium'>Home</a>
              <a href="" className='hover:underline font-medium'>Features</a> 
              <a href="" className='hover:underline font-medium'>About</a>  
              <a href="" className='hover:underline font-medium'>Contact</a>
            <button className='px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800'>Login</button>

            </div>
        }
    </nav>
  )
}

export default Navbar