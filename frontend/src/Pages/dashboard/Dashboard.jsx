import React from 'react';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer';
import Button from '../../Components/Shared/Button/Button';
import meal from '../../assets/meal.jpeg';
import girl from '../../assets/girl.png';
import banner2 from '../../assets/banner2.png'

import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBar className="nav-bar"/>
      <main className='main-content'>
      <div className="publi1">
      <img src={banner2} alt="imagenbanner" className='banner'/>
        </div> 
      
      <div className="image-container">
      <img src={girl} alt="secbanner1" className='banner2'/>
      <img src={meal} alt="secbanner2" className='banner3'/>
      </div> 
      <Button text='ABOUT US' />
        </main>
      <Footer className="footer" />
 
  </div>
  );
}

export default Dashboard;
