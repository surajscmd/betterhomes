import React, { useState } from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {

  
    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 500){ 
        setVisible(true) 
      }  
      else if (scrolled <= 500){ 
        setVisible(false) 
      } 
    };
  
    
    window.addEventListener('scroll', toggleVisible); 
  return (
    <>
    {visible && (<div className='navbar-continer-section'>
        <div className='nav-section'>
            <div className='logo-img-sec'>
                <img  src={logo} alt="logo"/>
            </div>

            <div className='com-name-sec'>
                <p className='com-name'>Better Homes Reality</p>
            </div>

        </div>
    </div>)}
    </>
  )
}

export default Navbar