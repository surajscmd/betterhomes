import React, { useState } from 'react'
import mail from "../assets/envelope.svg"
import call from "../assets/call.svg"
import 'reactjs-popup/dist/index.css';
import Form from '../componets/Form'
import { MailPlus, PhoneCall } from 'lucide-react';

const Footers = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 500){ 
      setVisible(true) 
    }  
    else if (scrolled <= 500){ 
      setVisible(false) 
    } 
  };

  
  window.addEventListener('scroll', toggleVisible); 
  

  return (
    <>
    {visible && (<div className='relativ-sign'> 
     <div className='footer-sec'>
        <div className='btn-section'>
                <a href='tel:2354689807086' className='btn-footer-sec border-r'><PhoneCall />Call Now</a>
                <button onClick={() => setModalOpen(true)} className='btn-footer-sec border-l'><MailPlus /> Enquire Now</button> 
                {modalOpen && <Form setOpenModal={setModalOpen}/>}
        </div>       
      </div>
    </div>)}
    </>
  )
}

export default Footers