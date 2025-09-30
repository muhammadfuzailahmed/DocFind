import React from 'react'
import Aboutimg from '../../assets/Aboutimg.jpg'

function About() {
  return (
    <div className='bg-gray-950'>
        <div className='md:pt-32 pt-16 pb-[72px] md:px-40 px-4 md:flex items-center justify-between'>
            <div>
                <p className='text-white md:w-[600px]'>DocFind is a simple, interactive doctor-booking web app designed to help users easily search for doctors, view their profiles, and book appointments. Built with React, React Router, and Tailwind CSS, DocFind provides a seamless navigation experience with dynamic content rendering and routing.</p>
                <p className='text-white md:w-[600px] mt-5'>This project was created to practice front-end development techniques, particularly focusing on routing, component-based architecture, and user interface design. While the application is currently in the early stages, with features like the "Book Appointment" button providing basic error handling as a placeholder, it offers a great foundation for building more complex, production-ready applications.</p>
            </div>
            <div>
                <img className='md:mt-0 mt-5 w-[400px] rounded-md' src={Aboutimg} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default About