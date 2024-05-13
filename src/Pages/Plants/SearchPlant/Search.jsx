import React, { useEffect, useState } from 'react';
import './Search.css';
import PlantItem from './../PlantItem/PlantItem';

const Search = () => {
  const [query, setQuery] = useState("");
  const [plants, setPlants] = useState([]);
  const [originalPlants, setOriginalPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`https://perenual.com/api/species-list?key=sk-QZsh66399c5511a8b5371&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPlants(prevPlants => [...prevPlants, ...data.data]);
      setOriginalPlants(prevPlants => [...prevPlants, ...data.data]);
      setCurrentPage(page);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() === "") { // Check if the search query is empty or only contains spaces
      setPlants(originalPlants); // Reset the plants list to the original list when the search query is empty
    } else {
      const filteredPlants = originalPlants.filter(plant =>
        plant.common_name.toLowerCase().includes(query.toLowerCase())
      );
      setPlants(filteredPlants);
    }
  };

  const handleClear = () => {
    setQuery(""); 
    setPlants(originalPlants);
  };

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    fetchData(nextPage); 
  };

  return (
    <div className='SearchPlant'>
      <div className="search">
        <form id='search-form' onSubmit={handleSearch}>
          <input
            type='text'
            id="search-box"
            placeholder='Search here ...'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
          {/* <button type="button" onClick={handleClear}>Clear</button> */}
        </form>
        <div id="search-result">
          {plants.map((plant, index) => (
            <PlantItem
              key={index}
              id={plant.id}
              name={plant.common_name}
              desc={plant.scientific_name[0]}
              image={plant.default_image && plant.default_image.thumbnail !== null ? plant.default_image.thumbnail : require('../../../Assets/null.jpg')}
            />
          ))}
        </div>
        <button id='show-more-btn' onClick={handleShowMore}>Show More</button>
      </div>
    </div>
  );
};

export default Search;
