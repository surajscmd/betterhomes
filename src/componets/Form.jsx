import React, { useRef } from 'react'
import logo from '../assets/logo.webp'
import call from "../assets/call.svg"
import close from "../assets/circle.svg"
const Form = ({setOpenModal}) => {

  const modelref = useRef();

  const closemodel = (e) =>{
    if(modelref.current == e.target){
      setOpenModal();
    }
  }
  return (
      <div  ref={modelref}  onClick={closemodel} className='model-container'>
       <div  className='form-container' >
        <div className='image-close'> 
           <a onClick={()=>setOpenModal(false)}><img  className='close-imga'  src={close} alt=""/></a>  
         </div>  
        <div  className='flex-col'>  
          <img className='img-logop-form' src={logo}/>
           <h3 className='register-form-heading'>Register Here And Avail the Bestoffers!!</h3>
           <div className='input-container'>
                <input className='input-box' type="text"  placeholder='Name'/>
                <input className='input-box'type="number"  placeholder='Mobile No.'/>
                <input className='input-box'type="email"  placeholder='E-Mail Address'/>
                <textarea className='input-box your-requirement' placeholder='Your Requirements...' rows="4" cols="50" maxLength="40"></textarea>      
                <button className='btn-property'>Pre-Register Now</button>
           </div>
          
           <p className='terms-sec'> I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC</p>
           
           <a href='tel:2354689807086' className='form-call-anchor'><p className='call-icon-form'><img className='icon-eta' src={call} alt="mail"/>888 444 272</p></a>
           </div>
        </div>
      </div>

  )
}

export default Form