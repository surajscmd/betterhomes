import React, { useState } from 'react'
import whatsapp from "../assets/whatsapp.png" 
import Form from './Form'
import { BedDouble,  Group, KeySquare, LandPlot, MailSearch, MapPinHouse, Phone } from 'lucide-react'

const Projects = ({dataobject}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [viewmore , setviewmore] = useState(true);
  console.log(viewmore)
  return (
    <div className='property-container'>
        <div className='property-img-container'>
          <img className='propertyimg' src={dataobject?.url}/>
            { dataobject?.config == " "? null : <p className='property-img-type'>
              Apartments
                  <p className='config'>{dataobject?.config}</p>
              </p>}
           
            {dataobject?.date == " " ? null :
              <div className='date-img-sec'>
              <KeySquare color= "var(--coral)" />
              <p className='date-fonts'>{dataobject?.date}</p>
               </div>
            }  
            {dataobject?.price == " " ? null :
             <div className='amount-img-sec'>
              <p className='amount'>₹ {dataobject?.price}</p>
              <p className='launch'>onwards</p>
            </div>
            }  
        </div> 
        <div className='proerty-content'>
          <div className='first-part'>
              <p className='propertyname'>{dataobject?.name}</p> 
              {dataobject?.theme== " " ? null : <p className='proprtythem'> {dataobject?.theme}</p>}
              
              <div className='flex-align geo-locate'>
              <MapPinHouse color="var(--gold)" />
              <p className='locationname'>{dataobject?.location}</p>
              </div>
              <p className='type-ap'> Type : {dataobject?.type}</p>
          <div className='icon-and-dec'>
          <div className='room-dec flex-align'>
            <div><BedDouble color="#ff6b6b" /></div>
            <p className='bhk-dec'>{dataobject?.bedconfig}</p>  
          </div>
            
            <div className='room-dec flex-align'>
               <Group color="#ff6b6b" />
               <p className='bhk-dec'>{dataobject?.units} units</p>
            </div> 
             
             <div className='room-dec flex-align'>
                <div><LandPlot color="#ff6b6b" /></div>
                <p className='bhk-dec'>{dataobject?.pricepsq} per sqrft</p>
             </div>
          </div>
         </div>
            <div className='propery-dec-continer'>
               <p className='property-des' >{!viewmore? (dataobject?.dec) : (dataobject?.dec).substring(0, 105)  + "..."              
               }</p>
               <button className='btn-mrl' onClick={(e)=>{ e.preventDefault(); setviewmore(!viewmore)}}>  {!viewmore? "less"  : "more.." } </button>
            </div>   
        </div>
              
              
         <div className='button-container'>  
           <button onClick={() => setModalOpen(true)}  className='btn-eta  borleft'><MailSearch  size={19} color="var(--charcoal-gray)" />Enquire</button>    
           <a href='tel:8884447122' className='btn-eta '><Phone size={18} color="var(--charcoal-gray)" />Call</a>                
           <a href={"https://wa.me/8884447122?text=Hi - I Want to enquire about the property "+ " ' " + dataobject?.name + " '"} className='btn-eta borright'><img className='icon-eta' src={whatsapp} alt="mail"/> Whatsapp</a>
         </div> 
        
        {modalOpen && <Form setOpenModal={setModalOpen}/>}
    </div>
  )
}

export default Projects