import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import Button from '../../Components/Shared/Button/Button';
import meal from '../../assets/meal.jpeg';
import girl from '../../assets/girl.png';
import banner2 from '../../assets/banner2.png';
import ImageCarousel from '../../Components/Carousel/Carousel';

import './dashboard.css';

function Dashboard() {
    return (
        <main>
            <ImageCarousel />
            <div className="dashboard-container">
                <main className="main-content">
                    <Button text="ABOUT US" />
                    <div className="image-container">
                        <img src={girl} alt="secbanner1" className="banner2" />
                        <img src={meal} alt="secbanner2" className="banner3" />
                    </div>
                </main>
            </div>
        </main>
    );
}

export default Dashboard;
