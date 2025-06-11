import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AppFeatures from './AppFeaturesSection/AppFeatures'
import MyImage from "/31and32r react/MyReactProject/ReactProject/src/assets/img5App.png"
import Download from './DownloadSection/Download'
import OurStaff from './OurStaff/OurStaff'
import ContactSection from './ContactSection/ContactSection'
import NewFeatures from './NewFeatures/NewFeatures'
import Footer from '../FooterComponent/Footer'
const Landingpage = ({setOpenState}) => {
  console.log(setOpenState);
  
    const navigate=useNavigate()
    console.log(setOpenState)
    const handleMainState=()=>{
      console.log("ertgyhjuk");
      
        setOpenState(true)
        navigate("/CurrentsignUpPage")
    }

  return (
    <div>
          <div>
      
    </div>
      <div id='mobileImg'  >
        <div>
          <img id='img'  src={MyImage} alt="" />
        </div>
        <div id='FindMyItem'>
          <h1>Find My Item</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, facere.</p>
          <div>
            <Button onClick={() => handleMainState()} id='blue'>Report</Button>
          </div>
        </div>
      </div>
      <AppFeatures></AppFeatures>
      <Download setOpenState={setOpenState}></Download>
      <OurStaff></OurStaff>
      <ContactSection setOpenState={setOpenState}></ContactSection>
      <NewFeatures/>
<Footer/>
    </div>
  )
}

export default Landingpage
