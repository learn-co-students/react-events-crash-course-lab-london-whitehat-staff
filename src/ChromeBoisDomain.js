import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    drawChromeBoiAtCoords(xPosition, yPosition);
  };

  handleEvent = () => {
  toggleCycling();
};

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */


  // resize = (event) => {
  //   console.log(event.keyCode);
  //   if(event.keyCode === 65){
  //     resize('+');
  //   } else if(event.keyCode === 83) {
  //     resize('-');
  //   }
  // };

  resize = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleEvent}
        onKeyDown={this.resize}
        onKeyPress={this.resize}
        onKeyUp={this.resize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
