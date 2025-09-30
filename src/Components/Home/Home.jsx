import React from 'react'
import Homepagemain from '../../assets/Homepagemain.png'
import Homepageimg1 from '../../assets/Homepageimg1.jpg'
import Homepageimg2 from '../../assets/Homepageimg2.jpg'
import Homepageimg3 from '../../assets/Homepageimg3.jpg'
import Homepageimg4 from '../../assets/Homepageimg4.jpg'
import {motion} from 'motion/react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-gray-950 pt-2 pb-24 md:px-24 px-5'>
        {/* Image Container */}
        <motion.div initial={{opacity: 0}} animate = {{opacity: 1, y: -15}} transition={{delay: 1, duration: 2}} className='bg-blue-600 w-[100%] py-5 h-auto rounded-lg mt-18 md:flex items-center justify-between pl-4 pr-4'>
            <div className='md:ml-6 md:w-[40vw]'>
                <h1 className='md:text-6xl text-3xl text-white font-bold capitalize '>book appointment with trusted doctors</h1>
                <p className='text-white mt-4 font-bold text-justify'>Simply browse through our extensive list of trusted doctors, shedule your appointment hasssle-free now.</p>
                <Link to="/contact">
                <button className='p-2 border-2 border-white rounded-lg text-white mt-4 font-bold transition-all hover:border-gray-400 hover:text-gray-300  cursor-pointer'>Book Appointment</button>
                </Link>
            </div>
            <div>
                <img className='md:w-[30vw] bg-blend-color-burn' src={Homepagemain} alt="" />
            </div>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 25}} animate = {{opacity: 1, y: 0}} transition={{delay: 2, duration: 1}} className='mt-24 mb-0 md:w-[60vw] md:block hidden md:h-[23vh] m-auto'>
            <div className='md:flex items-center justify-around '> 
                <motion.img whileHover={{y:-15}} transition={{duration: 0.5}}  className='cursor-pointer w-[180px] h-[160px] rounded-full object-cover' src={Homepageimg1} alt="" />
                <motion.img whileHover={{y:-15}} transition={{duration: 0.5}} className='cursor-pointer w-[180px] h-[160px] rounded-full object-cover' src={Homepageimg2} alt="" />
                <motion.img whileHover={{y:-15}} transition={{duration: 0.5}} className='cursor-pointer w-[180px] h-[160px] rounded-full object-cover' src={Homepageimg3} alt="" />
                <motion.img whileHover={{y:-15}} transition={{duration: 0.5}} className='cursor-pointer w-[180px] h-[160px] rounded-full object-cover' src={Homepageimg4} alt="" />
            </div>

        </motion.div>
        <div className='w-[55vw] m-auto md:block hidden'>
            <div className='flex items-center justify-between'>
                <p className='text-white font-bold'>Blood Pressure Test</p>
                <p className='text-white font-bold'>Sugar Test</p>
                <p className='text-white relative left-[20px] font-bold'>Ambulance Service</p>
                <p className='text-white font-bold'>Emergency Wards</p>
            </div>
            
        </div>
    </div>
  )
}

export default Home