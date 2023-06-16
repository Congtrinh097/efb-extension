import React, { useState } from 'react';
import './Newtab.css';
import './Newtab.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import CarouselComponent from './compopnents/Carousel';
import FlipCard from './compopnents/FlipCard';
import { Switch } from '@mui/material';

const Newtab = () => {
  const [toggleButton, setToggleButton] = useState(true);
  const toggle = ($event) => {
    setToggleButton($event.target.checked);
  }
  return (
    <div className="App">
      <div>
        <span >Flip Mode</span>
        <span><Switch value={toggleButton} label={"Show Flip"} defaultChecked color="warning" onChange={toggle}/></span>
      </div>
      <body className="App-header">
        {toggleButton ? <FlipCard></FlipCard> :  <CarouselComponent></CarouselComponent> }
      </body>
      <footer className="App-footer">
        Copy rights to <a href="http://tlstudio.asia">TL Software</a>
      </footer>
    </div>
  );
};


export default Newtab;
