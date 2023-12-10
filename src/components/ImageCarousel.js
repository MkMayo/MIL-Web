import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ imagePaths }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [imagePaths.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length);
  };

  return (
    <div className="carousel">
      <button class="carouselButtons" onClick={goToPrevSlide}><i className='fas fa-caret-left' /></button>
      <div className="slide">
        <img src={process.env.PUBLIC_URL + imagePaths[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button class="carouselButtons" onClick={goToNextSlide}><i className='fas fa-caret-right' /></button>
    </div>
  );
};

export default ImageCarousel;
