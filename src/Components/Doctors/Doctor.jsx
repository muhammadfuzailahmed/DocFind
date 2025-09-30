import React from 'react'
import Card from '../Card/Card.jsx'
import Row from '../Row/Row.jsx'
import doctors from '../doctorslist.jsx' 

function Doctor() {
  
  let firstFour = doctors.slice(0,4);
  let secondFour = doctors.slice(4,8);
  return (
    <div>
      <Row item={
        doctors.map((doctor) => (<Card
        key={doctor.id}
        id={doctor.id} 
        img={doctor.img}
        name={doctor.name}
        description={doctor.description}
        fees={doctor.fees}
        />))}/>
    </div>
  )
}

export default Doctor