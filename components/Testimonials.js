import React from 'react';
import { Slider } from './';
import { testimonialsData } from './../data';
import './Testimonials.scss';

const testimonialSliderSettings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  easing: 'cubic-bezier(.64,-0.09,.49,1.22)'
};

const Testimonials = () => (
  <section className="testimonials bg-dark bg-dark--with-pattern">
    <div className="container testimonials__inner">
      <div className="testimonials__quote-label">
        <i className="fa fa-quote-left" />
      </div>
      <h3 className="testimonials__title text-center">What Customers are Saying About Us</h3>
      <div className="testimonials-slider">
        <Slider settings={testimonialSliderSettings}>
          {testimonialsData.map(testimonial => (
            <article key={testimonial.id} className="testimonial">
              <section className="testimonial__body">
                <p className="testimonial__text">{testimonial.content}</p>
              </section>
              <section className="testimonial__footer">
                <div className="testimonial__author">{testimonial.author.name}</div>
                <div className="testimonial__company">{testimonial.author.company}</div>
              </section>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  </section>
);

export default Testimonials;
