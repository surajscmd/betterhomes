import React from 'react'
import logo from '../assets/logo.webp'
import { PhoneCall } from 'lucide-react'
const Headsec = () => {
  return (
    <div className='head-container'>
        <div className='mainheader-sec'>
           
           <div className='center-items'>
            
              <div className='logo-sec'>
                <img className='imglogo' src={logo}/>
              </div>
            
            
            
              <div className='heder-disc'>
                <p className='main-header'>Discover the finest Homes, Apartments, and Row houses with Better Homes Realty.</p>
                <p className='sub-main-header'>Our curated selection showcases properties that stand out for their superior quality, stunning architectural design, and meticulous attention to detail.</p>              
              </div>
          
             <div className='head-call-btn'>
                 <a className='phonecall' href='tel:888 444 712'>
                 <p className='call-header'>For more information or to schedule a viewing  call us at </p>
                 <PhoneCall /> 888 444 7122 
                </a> 
             </div>
           
           </div>          
        </div>
    </div>
  )
}
export default Headsec