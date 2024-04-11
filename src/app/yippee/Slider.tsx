import React, { Component } from 'react';
import './Slider.css';
import Board from "./Board";

class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <header className="App-header">
          <Board/>
        </header>
      </div>
    );
  }
}

export default Slider;