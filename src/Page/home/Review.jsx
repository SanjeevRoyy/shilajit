import React from 'react'
import './ReviewPage.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa6';



const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto slide
    autoplaySpeed: 5000, // Time between slides in milliseconds (2 seconds)
    pauseOnHover: false

  };

  return (




    <div id='contact' className='Review'>
      <h1 >Testimonials</h1>
      <Slider {...settings}>
        <div className='FirstDiv'>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <div className='Content'>

              <img src="img/men2.jpg" alt="" />
              <div>               
              <div className='Stars'>
                <FaStar  style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                </div>
                <p  >"I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!"</p>             
              </div>  
            </div>
            <div className='Content'>
              <img src="img/men3.jpg" alt="" />
              <div>               
              <div className='Stars'>
                <FaStar  style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                </div>
                <p  >"I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!"</p>             
              </div>  

            </div>
            <div className='Content Hidden'>
              <img src="img/men4.jpg" alt="" />
              <div>               
              <div className='Stars'>
                <FaStar  style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                </div>
                <p  >"I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!"</p>             
              </div>  

            </div>
          </div>
        </div>
        <div className='SecondDiv'>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <div className='Content'>
              <img src="img/men1.jpg" alt="" />
              <div>
                         
              <div className='Stars'>
                <FaStar  style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                </div>
                <p  >"I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!"</p>             
              </div>  

            </div>
            <div className='Content'>
              <img src="img/men4.jpg" alt="" />
              <div>
                        
              <div className='Stars'>
                <FaStar  style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                </div>
                <p  >"I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!"</p>             
              </div>  

            </div>
            <div className='Content Hidden'>
              <img src="img/men5.jpg" alt="" />
              <div>
                           
              <div className='Stars'>
                <FaStar  style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                <FaStar style={{marginRight:'5px',color:'#ffd700'}}/>
                </div>
                <p  >"I've been using shilajit for a month now, and I can feel the difference in my energy levels. It's amazing!"</p>             
              </div>  

            </div>
          </div>
        </div>
      </Slider>
    </div>


  )
}

export default Review