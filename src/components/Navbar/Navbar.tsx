// import React from 'react'

import Logo from '../../assets/Pro-AccX-logo-3.png'


const Navbar = () => {


  return (
    <div className='min-h-20 max-h-auto border-b-2 sticky'>
      <div className='flex justify-between h-20 m- px-4 py-2 '>
        <div className='w-1/3 h-full'>
          <img src={Logo} alt="Pro Accx logo" className='min-w-min max-w-xs h-16 mx-auto' />
        </div>
        <nav className='w-2/3'>
          <ul className='flex justify-end items-end h-full'>
            <a href=""><li className='mx-4'>Home</li></a>
            <a href=""><li className='mx-4'>About</li></a>
            <a href=""><li className='mx-4'>Contact</li></a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar