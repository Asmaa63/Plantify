import React from 'react';
import './PlantItem.css';
import { Link } from 'react-router-dom';

const PlantItem = ({ id, name, desc, image }) => {
  return (
    <div className='PlantItem'>
      <Link className="plant-item-image-container" to={`/plants/${id}`}>
        <img className='Plant-item-img' src={image} alt="" />
      </Link>
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

export default PlantItem;
