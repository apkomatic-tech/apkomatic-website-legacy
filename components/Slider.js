import React from 'react';
import SlickSlider from 'react-slick';

const Slider = ({ settings, children }) => <SlickSlider {...settings}>{children}</SlickSlider>;

export default Slider;
