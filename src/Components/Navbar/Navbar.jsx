import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

  const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <div className='Navbar'>
    <img src={require("./logo.png")} alt='logo' className='Img-Logo' />

    {/* Toggle Button */}
    <div className={`toggle ${menuOpen ? 'close' : ''}`} onClick={toggleMenu}>
        <span className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></span>
      </div>

    {/* Navbar Menu */}
    <ul className={`Navbar-menu ${menuOpen ? 'show' : ''}`}>
      <li>
        <Link id='link' to='/'>
          <div className="nav-icon">
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-house"></i>
          </div>
          <div className="nav-text">
            <span data-text="Home"> Home </span>
          </div>
        </Link>
      </li>
      <li>
        <Link id='link' to="/About" >
          <div className="nav-icon">
          <i className="fa-solid fa-file-circle-question"></i>
          <i className="fa-solid fa-file-circle-question"></i>
          </div>
          <div className="nav-text">
            <span data-text="About"> About </span>
          </div>
        </Link>
      </li>
      <li>
        <Link id='link' to="/plants">
          <div className="nav-icon">
          <i className="fa-solid fa-seedling"></i>
          <i className="fa-solid fa-seedling"></i>
          </div>
          <div className="nav-text">
            <span data-text="Plants"> Plants </span>
          </div>
        </Link>
      </li>
      <li>
        <Link id='link' to="/mobile">
          <div className="nav-icon">
          <i className="fa-solid fa-mobile"></i>
          <i className="fa-solid fa-mobile"></i>
          </div>
          <div className="nav-text">
            <span data-text="Mobile App"> Mobile App  </span>
          </div>
        </Link>
      </li>
      <li>
        <Link id='link'>
          <div className="nav-icon">
          <i className="fa-solid fa-object-ungroup"></i>
          <i className="fa-solid fa-object-ungroup"></i>
          </div>
          <div className="nav-text">
            <span data-text="Model"> Model</span>
          </div>
        </Link>
      </li>
      <li>
        <Link id='link'>
          <div className="nav-icon">
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="nav-text">
            <span data-text="Contact Us"> Contact Us </span>
          </div>
        </Link>
      </li>
     </ul>
     <div className="navber-right">
     <Link to="/login" className="button" onClick={()=>setShowLogin(true)}>Sign In</Link>
     </div>
    </div>
  )
}

export default Navbar
