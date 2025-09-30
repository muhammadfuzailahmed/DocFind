import React from 'react'
import {NavLink} from 'react-router-dom'
import {motion} from 'motion/react'

function Header() {
  return (
    <motion.div initial={{opacity: 0, y: -15}} animate = {{opacity: 1, y: 0}} transition={{delay: 0.02, duration: 0.5}} className='bg-gray-950 flex items-center justify-between pt-2 pb-3 md:px-24 px-3'>
        <div className="logo">
            <h1 className='text-white font-bold text-3xl'>DocFind</h1>
        </div>
        <div>
            <ul className='flex gap-3.5 md:relative absolute md:top-0 md:left-0 top-20 left-14'>
                <li><NavLink to="" className={({isActive}) => `uppercase list-none transition-all cursor-pointer hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`}>Home</NavLink></li>
                <li><NavLink to="/doctors" className={({isActive}) => `uppercase list-none transition-all cursor-pointer hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`}>All Doctors</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => `uppercase list-none transition-all cursor-pointer hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`}>About</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => `uppercase list-none transition-all cursor-pointer hover:text-orange-700 ${isActive ? "text-orange-700" : "text-white"}`}>Contact</NavLink></li>
            </ul>
        </div>
        <div>
            <button className='text-white font-bold p-2 border-2 border-white rounded-md transition-all cursor-pointer hover:border-orange-700 hover:text-orange-700'>Create Account</button>
        </div>
    </motion.div>
  )
}

export default Header