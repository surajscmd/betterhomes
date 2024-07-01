import React from 'react'
import logo from '../assets/logo.webp'
const Headsec = () => {
  return (
    <div className='head-container'>
        <div className='logo-sec'>
           <img className='imglogo' src={logo}/>
        </div>
        <div className='mainheader-sec'>
          <p className='main-header'>Find better homes, apartments and row houses with Better Homes Realty.</p>
          <p className='sub-main-header'>We bring you a collection of handpicked homes for its exceptional quality, architectural brilliance,& attention to details.</p>
          <p className='sub-main-header margin-top'>Call us on - 888 444 272</p>
        </div>
    </div>
  )
}
export default Headsec