import React from 'react'
import logoone from '../assets/Brigade.png'

const Partnerlogo = ({imglogo}) => {
  return (
    <div>
       <img className='partnerlogo' src={imglogo}/>
    </div>
  )
}

export default Partnerlogo