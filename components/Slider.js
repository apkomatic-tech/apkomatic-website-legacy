import React from 'react';
import SlickSlider from 'react-slick';

const Slider = ({ settings, children }) => {
  console.log(settings);
  return <SlickSlider {...settings}>{children}</SlickSlider>;
};

export default Slider;
