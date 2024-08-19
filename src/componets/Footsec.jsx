import React from 'react'
import logo from '../assets/logo.webp'
export const Footsec = () => {
  return (
    <div className='footsec-continer'>
         <div className='foot-sec-logo'>
                <img  className='footsec-logo' src={logo}/>
          </div>
       <div className='foot-copy-sec'>
         <p className='copy-rights'>All Rights Reserved. © 2024 Better homes Realty Pvt. Ltd.</p>
         <p className='disc'>Disclaimer</p>
         <p className='info-dis'>The information provided on this website is exclusively intended for informational purposes and should not be construed as an offer of services and sale.</p>
       </div>
           
    </div>
  )
}
