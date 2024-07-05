import React from 'react'
import blubelle from '../assets/Blubelle.jpg'
import location from '../assets/geo.svg'
const Projects = ({url , name , locate}) => {
  return (
    <div className='property-container'>
        <div><img className='propertyimg' src={url}/></div> 
           <div className='proerty-content'>
              <p className='propertyname'>{name}</p> 
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