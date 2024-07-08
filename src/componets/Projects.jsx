import React from 'react'
import location from '../assets/geo.svg'
import key from '../assets/key.svg'
import bed from '../assets/hotel.png'
import arrow from '../assets/box-arrow.svg'
import mail from "../assets/envelope.svg"
import call from "../assets/call.svg"
import whatsapp from "../assets/whatsapp.svg" 


const Projects = ({url , name , locate}) => {
  return (
    <div className='property-container'>
        <div className='property-img-container'>
          <img className='propertyimg' src={url}/>
             <p className='property-img-type'>Apartments</p>
             
             <svg class="abssvm" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>

            <div className='date-img-sec'>
                <img className='key-img' src={key}/>
                <p className='date-fonts'>DEC, 2022</p>
            </div>

            <div className='amount-img-sec'>
              <p className='amount'>₹ 87.26 lakhs</p>
              <p className='launch'>Launch</p>
            </div>
        </div> 
           <div className='proerty-content'>
              <p className='propertyname'>{name}</p> 
              <p className='launch'> By: Avi crop</p>
              <div className='flex-align geo-locate'>
             <img className='locationimg' src={location}/>
              <p className='locationname'>{locate}</p>
           </div>

          <div className='flex-align'>
          <div className='room-dec flex-align'>
            <div><img className='room-img' src={bed}/></div>
            <p className='bhk-dec'>2 BHK , 3 BHK</p>
          </div>
          
          <div className='room-dec flex-align'>
            <div><img className='room-img' src={arrow}/></div>
            <p className='bhk-dec'>600 sqft - 839 sqft</p>
          </div>

          </div>
        <p className='property-des' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt magni ipsum eum aspernatur minima sequi pariatur voluptatibus amet provident.</p>
              {/* <button className='btn-property'>Know more</button> */}

                <div className='button-container'>
                     <a href='tel:2354689807086' className='btn-eta borleft'><img className='icon-eta' src={call} alt="mail"/>Call</a>
                     <button className='btn-eta'><img className='icon-eta' src={mail} alt="mail"/> 
                                   Enquire</button>
                                   
                    
                      

                      <button className='btn-eta borright'><img className='icon-eta' src={whatsapp} alt="mail"/> Whatsapp</button>
                 </div>
              


        </div>
    </div>
  )
}

export default Projects