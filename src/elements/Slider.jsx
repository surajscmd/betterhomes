import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 import imgone from '../assets/a.jpg'
 import imgtwo from '../assets/b.jpg'
 import imgthree from '../assets/c.jpg'
 import imgfour from '../assets/heroimg.jpg'

import React from 'react'

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
 
    return (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={imgone} />
    <div data-src={imgtwo} />
    <div data-src={imgthree} />
    <div data-src={imgfour} />
  </AutoplaySlider>
);

}

export default Slider