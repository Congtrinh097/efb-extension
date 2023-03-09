import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Show the best inspiring quotes for English Beginners.
        </p>
        <h6>You are never too old to set another goal or to dream a new dream.</h6>
      </header>
      <footer className="App-footer">
        Copy rights to <a href="http://tlstudio.asia">TL Software</a>
      </footer>
    </div>
  );
};

export default Newtab;
