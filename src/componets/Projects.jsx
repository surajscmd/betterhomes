import React from 'react'
import location from '../assets/geo.svg'
import key from '../assets/key.svg'
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
              <p className='property-des' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt magni ipsum eum aspernatur minima sequi pariatur voluptatibus amet provident.</p>
              {/* <button className='btn-property'>Know more</button> */}


        </div>
    </div>
  )
}

export default Projects