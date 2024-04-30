import React from 'react'
import './footer.css'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div id='product' className='Footer'>
   <img src="img/shilajit.png" alt="" />

   <div className='Links'>
   <p style={{fontSize:'30px',color:'#E5B80B'}}> Links</p>
   {/* <p style={{marginTop:'10px'}}>Home</p> */}
   <Link smooth to='/#about'>About</Link>
      <Link smooth to='/#certificate'>Certificate</Link>
      <Link smooth to='/#contact'>Testimonials</Link>
   </div>

   <div className='GetIn'>
   <p style={{fontSize:'30px', color:'#E5B80B'}}>Contact</p>
   <p style={{marginTop:'10px'}}>Anamnagar, Kathmandu</p>
   <p>+997-9887437834,</p>
   {/* <p>987387273892893</p> */}
   <p>sijanshrestha@gmail.com</p>
   </div>
  
   </div>
  )
}

export default Footer