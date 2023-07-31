import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagePaths = [
    '../images/yoga.jpg',
    '../images/boxing.jpg',
    '../images/Chiquita.png',
    '../images/studio.jpg',
  ];
  const handlesSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={currentIndex} onSelect={handlesSelect}>
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
