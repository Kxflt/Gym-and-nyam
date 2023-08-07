import React from 'react';
import Button from '../../Components/Shared/Button/Button';
import meal from '../../assets/meal.jpeg';
import girl from '../../assets/girl.png';
import ImageCarousel from '../../Components/Carousel/Carousel';

import './dashboard.css';

function Dashboard() {
    return (
        <main>
            <ImageCarousel />
            <div className="dashboard-container">
                <main className="main-content">
                    <a className="about-us-a" href="/aboutUs">
                        <Button className="about-us" text="ABOUT US" />
                    </a>
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
