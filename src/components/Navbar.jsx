import React from 'react';
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = ({ showBackground }) => {
  return (<>
 
    <nav className={showBackground ? 'orange-background' : ''}>
      <div>
      <img   src="img/logo.png" alt="" />
      </div>
      <div>
         {/* <Link smooth to='/#home'>Shop</Link> */}
      <Link smooth to='/#about'>About</Link>
      <Link smooth to='/#certificate'>Certificate</Link>
      <Link smooth to='/#contact'>Testimonials</Link>
      </div>
    </nav>
    </>
  
  );
};

export default Navbar;
