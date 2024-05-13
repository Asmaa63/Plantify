import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className='exploer-menu' id='exploer-menu'>
      <h2>Exploer Our <span>Plants</span>  </h2>
      <p className='exploer-menu-text'>There are many types of plants that we are familiar with, such as fruits, vegetables, herbs, flowers, shrubs, oil plants, and others that we can get to know.</p>
      <div className="exploer-menu-list">
        <div className="exploer-menu-list-item">
       <div className='image'>
        <img src={require('../../Assets/acacia.jpg')} alt='Acacia'></img>
        <p>Wild Plants </p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/apple.jpg')} alt='Apple'></img>
        <p>Fruits</p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/lily.jpg')} alt='lily'></img>
        <p>Ornamental Plants</p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/minit.jpg')} alt='minit'></img>
        <p>Herbs</p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/olive.jpg')}alt='olive'></img>
        <p>Shrubs</p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/rose.jpg')} alt='rose'></img>
        <p>Flowers</p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/tomato.jpg')} alt='tomato'></img>
        <p>Vegetables</p>
        </div>
        <div className='image'>
        <img src={require('../../Assets/wheat.jpg')} alt='wheat'></img>
        <p>Forage Plants</p>
        </div>
        </div>
        <div className="center-hr">
        <hr></hr>  
        </div>  
      </div>   
    </div>
    
  )
}

export default Menu
