import React, {useState} from 'react';
import {images} from './imageData';
import Slider from 'react-animated-slider';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-animated-slider/build/horizontal.css';
import "../Styles/Slider.css";
import Girl_One from '../assets/img/girl-1.png';
import Girl_Two from '../assets/img/girl-2.png';

const slides = [
  { 
    title: 'smart products', 
    description: 'Lorem ipsum',
    text_one: 'Summer Offer 2021 Collection',
    text_two: 'Winter Offer 2021 Collection',
    image: `${Girl_Two}`,
    button: 'SHOP NOW'
  },
  { 
    title: 'smart products', 
    description: 'Lorem ipsum',
    text_one: 'Summer Offer 2021 Collection',
    text_two: 'Winter Offer 2021 Collection',
    image: `${Girl_One}`,
    button: 'SHOP NOW'
  }
];

function HeroSliderOne() {

  const [current, setCurrent] = useState(0);
  // const length = 

  return (
    <div>
    <AwesomeSlider animation="cubeAnimation">
      
    </AwesomeSlider>
      {/* <div className="wrapper">
      <Slider track className="slider_wrapper" infinite={true} autoplay={3000} >
      {slides.map((slide, index) =>
      <div key={index}>
        <div className="slider_container">
          <div className="slider_text_container">
            <p>{slide.title}</p>
            <h2>{slide.text_one}</h2>
            <button>{slide.button}</button>
          </div>
          <div className="slider_img_container">
              <img className="slider_img" src={slide.image} alt="" />
          </div>
        </div>
      </div>)}
    </Slider>
      </div> */}
    </div>
  )
}

export default HeroSliderOne
