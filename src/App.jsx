import './App.css'
import Headsec from './elements/Headsec'
import Ourprojexts from './elements/Ourprojexts'
import Partner from './elements/Partner'
import Footers from './elements/Footers'
import WhatsappIcon from './elements/WhatsappIcon'
import { Footsec } from './componets/Footsec'
import VisionMission from './componets/Vision'
import Navbar from './componets/Navbar'
function App() {

  return (
    <>
    <div className='page-container'>
      <Headsec/>
      <Partner/>
      <Ourprojexts/>
      <VisionMission/>
      <Footsec/>
      <Navbar/>
      <Footers/>   
      <WhatsappIcon/>
    </div>
    
    </>
  )
}

export default App
