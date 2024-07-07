import './App.css'
import Headsec from './elements/Headsec'
import Ourprojexts from './elements/Ourprojexts'
import Partner from './elements/Partner'
import Footers from './elements/Footers'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logofive from './assets/logo.webp'
import Form from './componets/Form'
function App() {

  return (
    <>
    <div className='page-container'>
      <Headsec/>
      <Partner/>
      <Ourprojexts/>
      <Form/>
      <Footers/>
      <div className='float-whatsup'>
        <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Better Home reality"
        statusMessage="we are happy to help"
        avatar={logofive}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />

      </div>
      
    </div>
    
    </>
  )
}

export default App
