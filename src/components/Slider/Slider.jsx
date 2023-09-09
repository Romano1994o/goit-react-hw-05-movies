import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {SliderContainer, Slide } from './Slider.styled';



export const SimpleSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};


