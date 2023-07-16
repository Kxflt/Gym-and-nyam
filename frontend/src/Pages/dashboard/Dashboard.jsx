import React from 'react';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer';
import Button from '../../Components/Shared/Button/Button';
import banner from '../../assets/banner.jpg'
import imagensec1 from '../../assets/imagensec1.jpg'
import imagensec3 from '../../assets/imagensec2.jpg'
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBar className="nav-bar"/>
      <main className='main-content'>
      <div className="publi1">
      <img src={banner} alt="imagenbanner" className='banner'/>
        </div> 
        <Button text='About Us' />
      <div className="image-container">
      <img src={imagensec1} alt="secbanner1" className='banner2'/>
      <img src={imagensec3} alt="secbanner2" className='banner3'/>
      </div> 
      
        </main>
      <Footer className="footer" />
 
  </div>
  );
}

export default Dashboard;
