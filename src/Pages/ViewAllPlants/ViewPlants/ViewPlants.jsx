import React from 'react';
import '../../Plants/PlantItem/PlantItem.css';

const ViwePlants = ({ id, name, desc, image }) => {
  return (
    <div className='PlantItem'>
      <div className="plant-item-image-container">
        <img className='Plant-item-img' src={image} alt="" />
      </div>
      <div className="plant-item-info">
        <div className="plant-item-info-rating">
          <h3>{name}</h3>
          <p>{desc}</p>
          <div className="plant-item-icon">
            <span className="material-symbols-outlined lap">rainy</span>
            <span className="material-symbols-outlined sun">sunny</span>
            <span className="material-symbols-outlined">water_drop</span>
            <span className="material-symbols-outlined green">spa</span>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViwePlants;
