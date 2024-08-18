import React, { useState } from 'react'
import location from '../assets/geo.svg'
import key from '../assets/key.svg'
import bed from '../assets/hotel.png'
import arrow from '../assets/box-arrow.svg'
import mail from "../assets/envelope.svg"
import call from "../assets/call.svg"
import whatsapp from "../assets/whatsapp.svg" 
import Form from './Form'

const Projects = ({dataobject}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='property-container'>
        <div className='property-img-container'>
          <img className='propertyimg' src={dataobject?.url}/>
             <p className='property-img-type'>
              Apartments
              <p className='launch'>{dataobject?.config}</p>
              
              </p>
             
             <svg class="abssvm" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>

            <div className='date-img-sec'>
                <img className='key-img' src={key}/>
                <p className='date-fonts'>{dataobject?.date}</p>
            </div>

            <div className='amount-img-sec'>
              <p className='amount'>₹ {dataobject?.price}</p>
              <p className='launch'>onwards</p>
            </div>
        </div> 
           <div className='proerty-content'>
              <p className='propertyname'>{dataobject?.name}</p> 
              <p className='launch'> {dataobject?.theme}</p>
              <p className='launch'> Type Of Apartment : {dataobject?.type}</p>
              <p className='launch'> Units: {dataobject?.units}</p>
              <div className='flex-align geo-locate'>
             <img className='locationimg' src={location}/>
              <p className='locationname'>{dataobject?.location}</p>
           </div>

          <div className='flex-align'>
          <div className='room-dec flex-align'>
            <div><img className='room-img' src={bed}/></div>
            <p className='bhk-dec'>{dataobject?.bedconfig}</p>
          </div>
          
          <div className='room-dec flex-align'>
            <div><img className='room-img' src={arrow}/></div>
            <p className='bhk-dec'>{dataobject?.pricepsq} per sqrft</p>
          </div>

          </div>
        <p className='property-des' >{dataobject?.dec}</p>
              {/* <button className='btn-property'>Know more</button> */}

                <div className='button-container'>
                     <a href='tel:2354689807086' className='btn-eta borleft'><img className='icon-eta' src={call} alt="mail"/>Call</a>
                     <button onClick={() => setModalOpen(true)}   className='btn-eta'><img className='icon-eta' src={mail} alt="mail"/> 
                                   Enquire</button>                    
                      <a href={"https://wa.me/9148184670?text=Hi - I Want to enquire about the property "+ " ' " + name  + " '"} className='btn-eta borright'><img className='icon-eta' src={whatsapp} alt="mail"/> Whatsapp</a>
                 </div>
              
          

        </div>
        {modalOpen && <Form setOpenModal={setModalOpen}/>}
    </div>
  )
}

export default Projects