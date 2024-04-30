import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Banner = () => {
  const [showNavbarBackground, setShowNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setShowNavbarBackground(true);
      } else {
        setShowNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='home' className='image'>
      <Navbar showBackground={showNavbarBackground} />
      <h1>GURKHA SHILAJIT</h1>
      <p className='top-p'>"Nature's secret to unstoppable energy"</p>
      <button className='buy'>Buy Now</button>
      {/* <img className='authentic' src='img/premium.jpg'></img> */}
    </div>
  );
};

export default Banner;
