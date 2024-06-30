import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home-Page'>
      <div className="Home-container">
        <div className="Home-row">
            <div className="Home-text">
                <h1 data-text="Welcome To Plantify"> Welcome<br></br> To <br></br>Plantify</h1>
                <div className="home-btton">
                  <Link to="/Getstart">
                <button className='btn'> <span></span>Get Started</button>
                </Link>
                </div>
            </div>
            <div className="Home-img">
              <div className="home-content-span">
                <div>Care plan</div>
                <div>Recomindation</div>
                <div>Identify</div>
                <div>Diagnose</div>
              </div>
                <img src={require('../../Assets/scan.png')}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
