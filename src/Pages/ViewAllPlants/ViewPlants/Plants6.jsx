import React, { useState, useEffect } from 'react';
import './Plants.css';
import ViwePlants from './ViewPlants';

const Plants6= ({ category }) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://perenual.com/api/species-list?key=sk-QZsh66399c5511a8b5371&page=6')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setPlants(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='plant-display' id='plant-display'>
      <div className="plant-diplay-list">
      {plants.map((item) => (
  <ViwePlants
    key={item.id}
    id={item.id}
    name={item.common_name}
    desc={item.scientific_name}
    image={item.default_image && item.default_image.thumbnail !== null ? item.default_image.thumbnail :require('../../../Assets/null.jpg')}
  />
))}
      </div> 
      {error && <p>Error: {error}</p>}

    </div>
    
  );
  
};

export default Plants6 ;
