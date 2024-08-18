import React from 'react'
import Partnerlogo from '../componets/Partnerlogo'
import logoone from '../assets/Brigade.png'
import logotwo from '../assets/assetz.png'
import logothree from '../assets/Prestige.png'
import logofour from '../assets/Puravankara.png'
import logofive from '../assets/Sobha.jpg'
const partnerimg = [logoone, logothree, logotwo,logofour,logofive,]
     

const Partner = () => {
  return (
    <div className='partner-container'>
        <p className='partner-header'>Our Partner</p>
        <div>  <p className='our-partner-dec'> Proudly collaborating with esteemed partners who share our
           commitment to excellence and innovation. Together, we elevate 
           standards and create lasting value in every endeavor.</p> 
        </div>       
        <div className='partner-scroll'>
          <div className='partner-logos-container'>
          {partnerimg.map((data,i)=>  <Partnerlogo imglogo={data} key={i}/>)}
          </div>
        </div>
       
    </div>
  )
}

export default Partner