import './App.css'
import About from './Page/about/About'
import Banner from './Page/home/Banner'
import Benefits from './Page/home/Benefits'
import ShilajitBenefits from './Page/home/Benefits'
import Certificate from './Page/home/Certificate'
import Choose from './Page/home/Choose'
import Contact from './Page/home/Contact'
import RatingSection from './Page/home/RatingSection'
import Review from './Page/home/Review'

import Footer from './components/Footer'

function App() {
  return (
    <>    
    <Banner/> 
    <About/>
    <Certificate/>
    <Benefits/>
    {/* <ShilajitBenefits/> */}
   <Review/>
   {/* <RatingSection/> */}
    <Footer/>
    {/* <Contact/> */}
    {/* <Choose/>  */}
    </> 
  )
}

export default App
