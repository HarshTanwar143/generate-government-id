import React from 'react'
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div className='w-full shadow-lg'>
        <div className='flex justify-between items-center px-10 w-11/12 max-w-[1160px] mx-auto '>
            <img src={Logo} className=' cursor-pointer' height={50} width={100} />
            <p className=' uppercase font-bold text-3xl'>Get your ID</p>
        </div>
    </div>
  )
}

export default Navbar