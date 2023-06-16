import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './FlipCard.scss';
import './Carousel.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { DataStorageService } from '../../../services';

const FlipCard = () => {
  const words = DataStorageService.getListOfWords();
  return (
    <Carousel
      interval={4000}
      autoPlay={false}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      stopOnHover={false}
    >
      {words.map((word) => (
        <div key={word.id} className="slider-container">
          <Card word={word}></Card>
        </div>
      ))}
    </Carousel>
  );
};

const Card = (props) => { 

  return (
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h5>{props.word.text}</h5>
        <img class="image-view" src="https://picsum.photos/300/200" alt="Avatar"/>
      </div>
      <div class="flip-card-back">
        <h5>{props.word.text}</h5>
        <p>{props.word.description || props.word.meaning}</p>
      </div>
    </div>
  </div>
  )
}

export default FlipCard;
