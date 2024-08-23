import React from 'react'
import whatsicon from "../assets/whatsapp.gif"
const WhatsappIcon = () => {
  return (
   <div className='whatsapp-container'>
    <a className='whatsapp-anchor' href="https://wa.me/8884447122?text=Hi - I am looking for a property"><img className='whatsappgif' src={whatsicon} alt="" /></a>   
   </div>
  )
}

export default WhatsappIcon