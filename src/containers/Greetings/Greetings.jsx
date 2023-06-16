import React, { Component } from 'react';
import icon from '../../assets/img/icon-128.png';

class GreetingComponent extends Component {
  state = {
    name: 'TrinhTC',
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}!</p>
        <img width={100} src={icon} alt="extension icon" />
      </div>
    );
  }
}

export default GreetingComponent;
