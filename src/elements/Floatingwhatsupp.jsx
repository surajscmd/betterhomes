import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Floatingwhatsupp = () => {
  return (
   <div className='float-whatsup'>
        <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Better Home reality"
        statusMessage="we are happy to help"
        avatar={logofive}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />

      </div> 
  )
}

export default Floatingwhatsupp