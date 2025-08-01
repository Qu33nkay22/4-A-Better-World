import React, { useState } from 'react';
import './PhotoCarousel.css'; // Optional, see CSS below
import turtle from "./images/turtle-img.jpg";
import turtle2 from "./images/turtle-img2.jpg";
import turtle3 from "./images/turtle-img3.jpg";
import turtle4 from "./images/turtle-img4.jpg";
import turtle5 from "./images/turtle-img5.jpg"

const photos = [
  turtle,
  turtle2,
  turtle3,
  turtle4,
  turtle5
  
];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < photos.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex + 3 < photos.length) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  


  const visiblePhotos = photos.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {visiblePhotos.map((photo, idx) => (
          <img key={idx} src={photo} alt={`carousel-${idx}`} className="carousel-image" />
        ))}
      </div>
      <button onClick={handlePrev} className='prev-button'>
        Prev
      </button>
      <button onClick={handleNext} className="next-button">
        Next
      </button>
    </div>
  );
};

export default PhotoCarousel;