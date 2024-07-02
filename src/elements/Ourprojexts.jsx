import React from 'react'
import Projects from '../componets/Projects'
import blubelle from '../assets/Blubelle.jpg'
import atmos from "../assets/atmos.jpg"
import cri from "../assets/cri.jpg"
import mekri from "../assets/mekri.jpg"
import purva from "../assets/purvankara.jpg"
import spring from "../assets/spring.jpg"
import symp from "../assets/sympony.jpg"
import zen from "../assets/zenum.jpg"
import tia from "../assets/tiara.jpg"
 const Ourprojexts = () => {
  const projectlist = [{
    name: "Purva Blubelle",
    location: "Magadi Road, Bengaluru",
    url:blubelle
  },
  {
    name: "Purva Park Hill",
    location: "Off Kanakapura Road, Bengaluru",
     url:atmos
  },
  {
    name: "Purva Celestial",
    location: "International Airport Road, Bengaluru",
     url:cri
  },
  {
    name: "Purva Meraki",
    location: "Thanisandra Main Road, Bengaluru",
     url:mekri
  },
  {
    name: "Purva Atmosphere",
    location: "Off Bannerghatta Road, Bengaluru",
     url:purva
  },
  {
    name: "Purva Symphony",
    location: "Lalbagh Road, Bengaluru",
    url:spring
  },
  {
    name: "The Sound of Water",
    location: "JP Nagar, Bengaluru",
    url:symp
  },
  {
    name: "Purva Tiara",
    location: "Hennur Road, Bengaluru",
    url:zen
  },
  {
    name: "Purva Promenade",
    location: "Off Bannerghatta Road, Bengaluru",
    url:tia
  }


]




  return (
    <div className='ourproject-container'>
        <p className='partner-header'>Our Projects</p>      
        <div className='project-container-list'> 
        {projectlist.map((data)=><Projects  url={data.url} name={data.name} locate={data.location} />)}          
        </div>
    </div>
  )
}

export default Ourprojexts