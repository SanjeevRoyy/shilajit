import React from 'react'
import './about.css'

const About = () => {
    return (<>

        <div id="about" className='AboutDiv'>
            <div className='TwoBack'>
                <div className='HeadingDiv' style={{}}>
                    <h1>About Gurkha Shilajit</h1>
                    {/* <div className="vl"></div> */}
                    {/* <h1 style={{ color: 'black' }}>Gurkha Shilajit</h1> */}
                </div>
                <p>Shilajit has a long history of use in traditional medicine systems, particularly in Ayurveda, where it's revered as a powerful rejuvenator and tonic for overall health. It's rich in minerals, fulvic acid, humic acid, and other organic compounds. These components are believed to contribute to its health benefits. Many people use shilajit to boost energy levels and enhance stamina, making it popular among athletes and those with demanding lifestyles. Shilajit contains compounds with anti-inflammatory properties, which may help reduce inflammation and alleviate pain. Some research suggests that shilajit may support cognitive function and memory, potentially due to its antioxidant properties. It's believed to strengthen the immune system, helping the body fight off infections and illnesses. Due to its rich mineral content and antioxidant properties, shilajit is sometimes referred to as a natural anti-aging remedy.
                </p>
            </div>
            <div style={{ textAlign: 'center',display:'flex',flexDirection:'column',alignItems:'center' }}>
                <img className='Image' src="img/baba.png" alt="" /> <br />
                <button className='Btn'>Buy Now</button>

            </div>
        </div>
    </>
    )
}

export default About