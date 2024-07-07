import React from 'react'
import Partnerlogo from '../componets/Partnerlogo'
import logoone from '../assets/Brigade.png'
import logotwo from '../assets/assetz.png'
import logothree from '../assets/Prestige.png'
import logofour from '../assets/Puravankara.png'
import logofive from '../assets/Sobha.jpg'
const partnerimg = [logoone, logotwo,logothree, logofour,logofive]
     

const Partner = () => {
  return (
    <div className='partner-container'>
        <p className='partner-header'>Our Partner</p>
        <div className='partner-scroll'>
          <div className='partner-logos-container'>
          {partnerimg.map((data,i)=>  <Partnerlogo imglogo={data} key={i}/>)}
          </div>
        </div>
       
    </div>
  )
}

export default Partner