import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import background1 from '../../../assets/img/bg-1.jpg';
import './Carousel.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { DataStorageService } from '../../../services';

const CarouselComponent = () => {
  const words = DataStorageService.getListOfWords();
  return (
    <Carousel
      interval={4000}
      autoPlay={true}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      stopOnHover={false}
    >
      {words.map((word) => (
        <div key={word.id} className="slider-container">
          <img src={background1} alt="img" />
          <div className="legend">
            <h3>{word.text}</h3>
            <p>{word.description || word.meaning}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
