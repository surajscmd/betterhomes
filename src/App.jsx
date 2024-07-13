import './App.css'
import Headsec from './elements/Headsec'
import Ourprojexts from './elements/Ourprojexts'
import Partner from './elements/Partner'
import Footers from './elements/Footers'
import WhatsappIcon from './elements/WhatsappIcon'
function App() {

  return (
    <>
    <div className='page-container'>
      <Headsec/>
      <Partner/>
      <Ourprojexts/>
      <Footers/>   
      <WhatsappIcon/>
    </div>
    
    </>
  )
}

export default App
