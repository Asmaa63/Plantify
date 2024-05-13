import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='About'>
        <div className="About-content">
            <div className="About-img">
                <img src={require("./About1.png" )}alt="About" />
            </div>
            <div className="about-text">
                <h2>About Us</h2>
                <p>where beauty and knowledge come together in the world of plants!
                  Enjoy viewing the most beautiful pictures of various plants and benefit
                  from the useful information we provide to help you care for your plants better.</p>
                <p>On our 'About Us' page, we share our story about how plants impact our 
                    daily lives and how they can enhance the quality of life and overall health. Our mission is to raise awareness about the importance of plants and sustainable agriculture. We aim to provide the necessary information and 
                    tips for both beginners and enthusiasts alike to efficiently care for plants</p>
            </div>
        </div>
    </div>
  )
}

export default About
