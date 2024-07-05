import React from 'react'
import mail from "../assets/envelope.svg"
import call from "../assets/call.svg"
import whatsapp from "../assets/whatsapp.svg" 
const Footers = () => {
  return (
    <div className='footer-sec'>
         <div className='button-container'>
          <button className='btn-eta yellow'>  <img className='icon-eta' src={mail} alt="mail"/> Enquire</button>
      
      
          <button className='btn-eta green'>  <img className='icon-eta' src={whatsapp} alt="mail"/> Whatsapp</button>
         </div>
    </div>
  )
}

export default Footers