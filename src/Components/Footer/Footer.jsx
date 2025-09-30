import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full pt-8 md:px-40 h-auto bg-gray-950'>
        <hr className='text-white mb-8'/>
        <div className='md:flex items-center justify-between hidden'>
            <h2></h2>
            <h2 className='text-white font-bold text-2xl uppercase relative left-[85px]'>Company</h2>
            <h2 className='text-white font-bold text-2xl uppercase'>Get in touch</h2>
        </div>
        <div className='mt-6 md:flex items-center justify-between'>
            <div>
                <h1 className='text-white font-bold text-4xl md:ml-0 ml-5'>DocFind</h1>
            </div>
            <div>
                <ul className='md:text-left text-center my-5'>
                    <li className='list-none text-white transition-all hover:text-orange-700 cursor-pointer'><NavLink to="/">Home</NavLink></li>
                    <li className='list-none text-white transition-all hover:text-orange-700 cursor-pointer'><NavLink to="/doctors">All Doctors</NavLink></li>
                    <li className='list-none text-white transition-all hover:text-orange-700 cursor-pointer'><NavLink to="/contact">Contact</NavLink></li>
                    <li className='list-none text-white transition-all hover:text-orange-700 cursor-pointer'><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            <div className='relative right-[10px] md:text-left text-center'> 
                <p className='text-white transition-all hover:text-orange-700 cursor-pointer'>docfind@gmail.com</p>
            </div>
        </div>

        <div className='text-center text-white mt-6'>copyright 2025 <span>&#169;</span> DocFind | All Rights Reserved</div>
    </div>
  )
}

export default Footer