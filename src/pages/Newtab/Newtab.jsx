import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import background1 from '../../assets/img/bg-1.jpg';
import './Newtab.css';
import './Newtab.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Newtab = () => {
  return (
    <div className="App">
      <h2>English for Beginners</h2>
      <header className="App-header">
        <Carousel
          interval={4000}
          autoPlay={true}
          swipeable={true}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={false}
        >
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Queen Elizabeth II</h3>
              <p>
                It is often the small steps, not the giant leaps, that bring
                about the most lasting change.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Amanda Gorman</h3>
              <p>
                There is always light. If only we're brave enough to see it. If
                only we're brave enough to be it.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Nelson Mandela</h3>
              <p>
                Education is the most powerful weapon which you can use to
                change the world.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Booker T. Washington</h3>
              <p>If you want to lift yourself up, lift up someone else.</p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Cicely Tyson</h3>
              <p>I have learned not to allow rejection to move me.</p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>André Leon Talley</h3>
              <p>
                {' '}
                scorched the earth with my talent and I let my light shine.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>A.A. Milne</h3>
              <p>
                You’re braver than you believe, stronger than you seem, and
                smarter than you think.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Madeleine Albright</h3>
              <p>
                It took me quite a long time to develop a voice, and now that I
                have it, I am not going to be silent.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Lupita Nyong'o</h3>
              <p>
                You can't rely on how you look to sustain you, what sustains us,
                what is fundamentally beautiful is compassion; for yourself and
                your those around you.
              </p>
            </div>
          </div>
          <div className="slider-container">
            <img src={background1}  alt="img"/>
            <div className="legend">
              <h3>Winston Churchill</h3>
              <p>Attitude is the 'little' thing that makes a big difference.</p>
            </div>
          </div>
        </Carousel>
      </header>
      <footer className="App-footer">
        Copy rights to <a href="http://tlstudio.asia">TL Software</a>
      </footer>
    </div>
  );
};

export default Newtab;
