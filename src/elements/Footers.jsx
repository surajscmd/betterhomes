import React, { useState } from 'react'
import mail from "../assets/envelope.svg"
import call from "../assets/call.svg"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Form from '../componets/Form'

const Footers = () => {
  
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='relativ-sign'> 
     <div className='footer-sec'>
        <div className='btn-section'>
          
          {/* <Popup trigger={<button className='btn-foot blue'><img className='icon-eta' src={call} alt="mail"/>Call</button>
                                   } 
                                    position="top center">
                                             
                                 Please Dial this no. <br/>
                                 888 444 272
                      </Popup> */}

           <a href='tel:2354689807086' className='btn-foot blue'><img className='icon-eta' src={call} alt="mail"/>Call</a>

         <button onClick={() => setModalOpen(true)} className='btn-foot yellow'><img className='icon-eta' src={mail} alt="mail"/> Enquire</button> 
       
         {modalOpen && <Form setOpenModal={setModalOpen}/>}
        </div>       
      </div>
    </div>
  )
}

export default Footers