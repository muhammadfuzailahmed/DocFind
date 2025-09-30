import React from 'react'
import {motion} from 'motion/react'
import {Link} from 'react-router-dom'
import doctors from '../doctorslist'

function Card({id, img, name, description, fees}) {
  return (
    <motion.div initial={{y: -15}} animate={{y:0}} transition={{duration: 0.35}} whileHover={{y: -4, scale: 1.02}} className='cursor-pointer rounded-lg bg-gray-800 md:ml-4 md:w-[16vw] '>
        <Link to={`/doctor/${id}`}>
        <img className='w-[100%] object-cover rounded-lg mb-3 h-[200px]' src={img} alt="" />
        <div className='p-2'>
        <h3 className='text-white font-bold mb-4 text-2xl'>{name}</h3>
        <p className='text-white mb-4'>{description}</p>
        <p className='text-white mb-1.5 font-bold text-lg'>${fees}</p>
        </div>
        </Link>
    </motion.div>
  )
}

export default Card