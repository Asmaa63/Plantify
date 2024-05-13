import React from 'react';
import './AllPlants.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Plants1 from '../ViewPlants/Plants1';
import Plants2 from '../ViewPlants/Plants2';
import Plants3 from '../ViewPlants/Plants3';
import Plants4 from '../ViewPlants/Plants4';
import Plants5 from '../ViewPlants/Plants5';
import Plants6 from '../ViewPlants/Plants6';
import Search from '../../Plants/SearchPlant/Search';

const AllPlants = () => {
  return (
    <div className='App'>
      {/* <Navbar></Navbar> */}
      <Search></Search>
      <Plants1></Plants1>
      <Plants2></Plants2>
      <Plants3></Plants3>
      <Plants4></Plants4>
      <Plants5></Plants5>
      <Plants6></Plants6>
    </div>
  )
}

export default AllPlants
