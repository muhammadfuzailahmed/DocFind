import React, { useState } from 'react'
import Aboutimg from '../../assets/Aboutimg.jpg'

function Contact() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [message, setMessage] = useState("")
    function submitForm() {
        if(!name || !age || !message) {
            alert("Enter required fields");
            return
        }
        alert("Query submitted Successfully!");
        setName("")
        setAge("")
        setMessage("")
    }

  return (
     <div className='bg-gray-950 md:flex items-center justify-between'>
        <div className='pt-24 md:px-40 px-5'>
            <h1 className='text-white font-bold text-4xl mb-1'>Contact Us</h1>
            <div className='w-48 h-2 bg-orange-700 mb-5 rounded-full'></div>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-gray-400 text-white p-1 rounded-sm w-96 name' type="text" placeholder='Enter name'/>
            </div>
            <div>
                <input value={age} onChange={(e) => setAge(e.target.value)} className='border-2 border-gray-400 text-white p-1 mt-4 rounded-sm w-96 age' type="number" min={1} max={110} placeholder='Enter age'/>
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='mt-4 contact-textarea border-2 border-gray-400 text-white p-1 rounded-sm' placeholder='Tell us about yourself' cols={40} rows={6}></textarea>
            <div className="btn mt-4">
                <button onClick={submitForm} className='cursor-pointer rounded-md border-2 border-white text-gray-300 p-2 font-bold transition-all hover:border-orange-700 hover:text-orange-700'>Submit</button>
            </div>
        </div>
            <div>
                <img className='md:w-[500px] w-[90vw] m-auto rounded-md md:mt-32 mt-10 md:mr-36' src={Aboutimg} alt="" />
            </div>
    </div>
  )
}

export default Contact