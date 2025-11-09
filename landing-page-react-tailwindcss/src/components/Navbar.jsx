import React from 'react'

const Navbar = () => {
  return (
    <nav className='pt-4'>
        <div className='flex items-center justify-between'>
            <h4 className='text-3xl font-bold text-sky-600 italic'>Logo</h4>
            <div className='space-x-6'>
              <a href="" className='hover:underline font-medium'>Home</a>
              <a href="" className='hover:underline font-medium'>Features</a> 
              <a href="" className='hover:underline font-medium'>About</a>  
              <a href="" className='hover:underline font-medium'>Contact</a>
            </div>
            <button className='px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar