import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'owl.carousel/dist/owl.carousel';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Plant from './Pages/Plants/Plant/Plant';
import ScreenShot from './Pages/ScreenShot/ScreenShot';
import DownloadApp from './Pages/DownloadApp/DownloadApp';
import About from './Pages/About/About';
import Search from './Pages/Plants/SearchPlant/Search';
import PlantDetails from './Pages/Plants/PlantDetails/PlantDetails';
import Scroll from './Components/Scroll/Scroll';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import NavbarPage from './Components/NavbarPage/NavbarPage';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact/Contact';
import Model from './Pages/Model/Model';

function App() {
  const [showLogin, setShowLogin] =useState(false);
  return (
    <>
    {/* {showLogin? <Login setShowLogin={setShowLogin}></Login> : <></>} */}
    <div className="App">
      {/* <Navbar setShowLogin={setShowLogin}></Navbar> */}
      <NavbarPage></NavbarPage>
      <Scroll></Scroll>
      <Routes>
        <Route path='/' element={
          <>
          <Home></Home>
          <About></About>
          <Menu></Menu>
          <Plant></Plant>
          <ScreenShot></ScreenShot>
          <DownloadApp></DownloadApp>
          <Model></Model>
          <Contact></Contact>
          <FAQ></FAQ>
          <Footer></Footer>
          </>
        }></Route>
        <Route path='/plant-item' element={<Search></Search>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/plants' element={
          <>
          <Menu></Menu>
          <Plant></Plant>
          </>
        }></Route>
        <Route path='/mobile' element={
          <>
          <ScreenShot></ScreenShot>
          <DownloadApp></DownloadApp>
          </>
        }></Route>
        <Route path='/plants/:id' element={<PlantDetails></PlantDetails>}></Route>
        <Route path='/plant' element={<Plant></Plant>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>} ></Route>
        <Route path='/FAQ' element={<FAQ></FAQ>}></Route>
        <Route path='/ContactUs' element={<Contact></Contact>}></Route>
        <Route path='/Model' element={<Model></Model>}></Route>
        <Route path='/Getstart' element={<DownloadApp></DownloadApp>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
    </>
  )
}

export default App;
