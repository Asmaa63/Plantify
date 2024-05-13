import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-page' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={require("../Navbar/logo.png")} alt="logo" /> */}
                <p>we share our story about how plants impact our daily lives 
                  and how they can enhance the quality of life and overall health.
                   Our mission is to raise awareness about the importance of plants and sustainable 
                   agriculture.</p>
            <div class="bottom">
              <p>Copyright &#169; 2024 <a href="#">Plantify</a> All rights reserved</p>
            </div>       
            </div>
        </div>    </div>
  )
}

export default Footer
