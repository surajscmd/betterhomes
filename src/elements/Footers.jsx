import React from 'react'
import mail from "../assets/envelope.svg"
import call from "../assets/call.svg"
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const Footers = () => {
  return (
    <div className='footer-sec'>
      <div className='btn-section'>
          <button className='btn-foot blue'><img className='icon-eta' src={call} alt="mail"/>Call</button>
          <button className='btn-foot yellow'><img className='icon-eta' src={mail} alt="mail"/> Enquire</button>
      </div>       
    </div>
  )
}

export default Footers