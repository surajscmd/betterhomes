import React from 'react'
import logo from '../assets/logo.webp'
import call from "../assets/call.svg"
const Form = () => {
  return (

        <div className='form-container flex-col'>
           <img className='img-logop-form' src={logo}/>
           <h3 className='register-form-heading'>Register Here And Avail the Bestoffers!!</h3>
           <div className='input-container'>
                <input className='input-box' type="text"  placeholder='Name'/>
                <input className='input-box'type="number"  placeholder='Mobile No.'/>
                <input className='input-box'type="email"  placeholder='E-Mail Address'/>
                <textarea className='input-box your-requirement' placeholder='Your Requirements...' rows="4" cols="50" maxlength="40"></textarea>      
                <button className='btn-property'>Pre-Register Now</button>
           </div>
           <p className='terms-sec'> I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC</p>
           
           <p className='call-icon-form'><img className='icon-eta' src={call} alt="mail"/>888 444 272</p>
       
        </div>

  )
}

export default Form