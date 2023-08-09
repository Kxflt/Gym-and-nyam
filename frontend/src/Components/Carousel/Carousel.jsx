import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagePaths = [
        '../images/banner.jpg',
        '../images/boxing.jpg',
        '../images/Chiquita.png',
        '../images/studio.jpg',
        '../images/banner2.png',
    ];
    const handlesSelect = (selectedIndex, e) => {
        setCurrentIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={currentIndex}
            onSelect={handlesSelect}
            controls={false}
        >
            {imagePaths.map((imagePath, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="banner"
                        src={imagePath}
                        alt={`Picture ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
