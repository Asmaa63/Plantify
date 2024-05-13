import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PlantDetails.css';

const PlantDetails = () => {
  
  const { id } = useParams();

  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        // استخدام الـ id الممرر لجلب التفاصيل المناسبة من الـ API
        const response = await fetch(`https://perenual.com/api/species/details/${id}?key=sk-QZsh66399c5511a8b5371`);
        const data = await response.json();
        setPlantDetails(data);
      } catch (error) {
        console.error('Error fetching plant details:', error);
      }
    };

    fetchPlantDetails();
  }, [id]);

  return (
    <div className="PlantDetails">
      {plantDetails ? (
        <div className='PlantDetailsCard'>
          <div className="plantdetails-img">
            <img src={plantDetails.default_image&& plantDetails.default_image.thumbnail !== null ? plantDetails.default_image.thumbnail :require('../../../Assets/null.jpg')} alt="" />
          </div>
          <div className="plantdetails-text">
          <h1>{plantDetails.common_name }</h1>
          <h3> {plantDetails.scientific_name}</h3>
          <p>{plantDetails.description}</p>
          <p className='grow'><span>Growth Rate: </span>{plantDetails.growth_rate}</p>  
          <Link className='btn' to="/plant"> Back </Link>  
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetails;
