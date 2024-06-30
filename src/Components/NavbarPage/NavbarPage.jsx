import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarPage.css';

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const refreshPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='Navbar'>
      <div className="Navbar-page">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <span className="fas fa-times"></span>
          ) : (
            <span className="fas fa-bars"></span>
          )}
        </div>
        <div className="logo" onClick={refreshPage}>
          <Link to="/">
            <img src={require("./logo.png")} alt='logo' className='Img-Logo' />
          </Link>
        </div>
        <ul className={`Navbar-menu nav-items ${isOpen ? 'active' : ''}`}>
          <li>
            <Link id='link' to='/'>
              <div className="nav-icon">
                <i className="fa-solid fa-house"></i>
                <i className="fa-solid fa-house"></i>
              </div>
              <div className="nav-text">
                <span data-text="Home" onClick={refreshPage}> Home </span>
              </div>
            </Link>
          </li>
          <li>
            <Link id='link' to="/About">
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
                <span data-text="Mobile App"> Mobile App </span>
              </div>
            </Link>
          </li>
          <li>
            <Link id='link' to="/Model">
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
            <Link id='link' to="/ContactUs">
              <div className="nav-icon">
                <i className="fa-solid fa-envelope"></i>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="nav-text">
                <span data-text="Contact Us"> Contact Us </span>
              </div>
            </Link>
          </li>
          <li>
            <Link id='link' to="/FAQ">
              <div className="nav-icon">
                <i className="fa-solid fa-circle-question"></i>
                <i className="fa-solid fa-circle-question"></i>
              </div>
              <div className="nav-text">
                <span data-text="FAQ"> FAQ </span>
              </div>
            </Link>
          </li>
        </ul>
        {/* <div className="navber-right">
          <Link to="/login" className="button">Sign In</Link>
        </div> */}
      </div>
    </div>
  );
}

export default NavbarPage;
