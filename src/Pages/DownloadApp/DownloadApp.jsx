import React from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <div className='DownloadApp'>
      <div className="DowloadApp-header">
        <h2>Download App</h2>
        <div className="DowloadApp-Container">
          <div className="DA-container">
            <div className="DA-item">
            <div className="DA-item-img">
              <img src={require("./images//microsoft-removebg-preview.png")} alt="" />
            </div>
            <h3>Microsoft Store</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
            <button className='DA-btn'>Download Now</button>
            </div>
          </div>
          <div className="DA-container">
            <div className="DA-item">
            <div className="DA-item-img">
              <img src={require("./images/play-removebg-preview.png")} alt="" />
            </div>
            <h3>Google Play</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
            <button className='DA-btn'>Download Now</button>
            </div>
          </div>
          <div className="DA-container">
            <div className="DA-item">
            <div className="DA-item-img">
              <img src={require("./images/apple-removebg-preview.png")} alt="" />
            </div>
            <h3>apple store</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
            <button className='DA-btn'>Download Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
