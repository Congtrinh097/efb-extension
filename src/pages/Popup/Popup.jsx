import React from 'react';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to English For Beginners
          <Greetings></Greetings>
        </p>
        <a
          className="App-link"
          href="word-list.html"
          target="_blank"
          rel="noopener noreferrer"
        >
         Show Word List!
        </a>
      </header>
    </div>
  );
};

export default Popup;
