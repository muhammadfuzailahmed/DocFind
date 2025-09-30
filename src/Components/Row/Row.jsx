import React from 'react'

function Row({item}) {
  return (
    <div className='bg-gray-950 pt-16 w-full justify-center md:h-auto row grid md:grid-cols-5 grid-cols-2 gap-x-3 gap-y-5 px-2'>{item}</div>
  )
}

export default Row