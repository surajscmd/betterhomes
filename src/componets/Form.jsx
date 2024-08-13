import React, { useRef, useState } from 'react'
import logo from '../assets/logo.webp'
import call from "../assets/call.svg"
import close from "../assets/circle.svg"
const Form = ({setOpenModal}) => {
  const [Success, setsuccess] = useState(false);
  const modelref = useRef();
  function Submit(e) {
    const formEle = document.querySelector("form");

    const formDatab = new FormData(formEle);
     e.preventDefault()
     e.target.reset()
    fetch(
      "https://script.google.com/macros/s/AKfycbwFh9UixBLzV32Y26xQxjbwJ7KcRlnoTTh9tLDQs5V6eZUYOsJaWJhppXyYdVS-19NLtQ/exec",
      {
        method: "POST",
        body: formDatab
      }
    ).then((res) => res.json()).then((data) => {console.log(data)      
      }).catch((error) => {
        console.log(error);
      });
      setTimeout(() => {
        setOpenModal(false);
        
      }, 1000);
      setsuccess(true);
     
  }
  


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
         
           <form className='input-container' onSubmit={(e) => Submit(e)}>
                <input className='input-box' type="text"  placeholder='Name' name="Name" required />
                <input className='input-box'type="tel"  placeholder='Mobile No.' name="Mobile" required />
                <input className='input-box'type="email"  placeholder='E-Mail Address' name="Email" required/>
                <textarea className='input-box your-requirement' placeholder='Your Requirements...' name="Message" required rows="4" cols="50" maxLength="40"></textarea>
                {/* <input placeholder="Your Message" name="Message" type="text" /> */}
                <button className='btn-property' type="submit">Pre-Register Now</button>
           </form>
            {Success && (<div className='succes-bar'> Success !! </div>)}
           <p className='terms-sec'> I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC</p>
           
           <a href='tel:2354689807086' className='form-call-anchor'><p className='call-icon-form'><img className='icon-eta' src={call} alt="mail"/>888 444 272</p></a>
           </div>
        </div>
      </div>

  )
}

export default Form