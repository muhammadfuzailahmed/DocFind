import React from 'react'
import { useParams } from 'react-router-dom'
import doctors from '../doctorslist'
import Card from '../Card/Card.jsx'
import Row from '../Row/Row.jsx'

function Doctorid() {
    const {userid} = useParams();
    const id = Number(userid)
    const doctor = doctors.find((d) => d.id === id)
    if(!doctor) return <h2>Doctor not found</h2>

    function  BookAppointment() {
      alert("Booked Successfully!")
    }

  return (
    <div>
        <div className='w-full bg-gray-950 py-5 '>
            <div className='md:w-[18vw] w-[90vw] m-auto border-2 border-orange-700 rounded-md md:mt-0 mt-10'>
              <img className='w-[100%] h-[240px] object-cover rounded-md' src={doctor.img} alt="" />
              <div className='px-2'>
              <h1 className='text-white font-bold text-2xl my-2'>{doctor.name}</h1>
              <p className='text-white mb-2'>{doctor.description}</p>
              <h2 className='text-white font-bold text-xl my-2'>${doctor.fees}</h2>
              <div className='mb-4'>
                <button onClick={BookAppointment} className='px-2 py-1.5 border-2 border-white rounded-md text-white hover:border-orange-700 hover:text-orange-700 transition-all hover:cursor-pointer'>Book Appointment</button>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Doctorid