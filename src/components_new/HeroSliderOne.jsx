import React, {useState} from 'react';
import {images} from './imageData';
import Slider from 'react-animated-slider';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-animated-slider/build/horizontal.css';
import "../Styles/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
    <Carousel autoPlay={true} >
                <div>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-urus-mmp-1-1592423712.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/8a/82/d0/8a82d04c0c002bf7d74f17ec52a7edd2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
    </div>
  )
}

export default HeroSliderOne
