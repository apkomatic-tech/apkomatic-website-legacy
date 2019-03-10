import React from 'react';
import { Slider } from '.';
import testimonialsJson from '../data/testimonials.json';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonialSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'cubic-bezier(.22,-0.12,.65,1.11)'
  };
  const testimonialsContent = (
    <Slider settings={testimonialSliderSettings}>
      {testimonialsJson.map(testimonial => (
        <article key={testimonial.id} className="testimonial">
          <section className="testimonial__body">
            <p className="testimonial__text">{testimonial.content}</p>
          </section>
          <section className="testimonial__footer">
            <div className="testimonial__author mb-1">{testimonial.author.name}</div>
            <div className="testimonial__company">
              <strong>{testimonial.author.company}</strong>
            </div>
          </section>
        </article>
      ))}
    </Slider>
  );

  return (
    <section className="testimonials bg-light">
      <div className="testimonials__quote-label">
        <i className="fa fa-quote-left" />
      </div>
      <div className="container testimonials__inner" data-aos="fade-up">
        <h3 className="testimonials__title text-center">What Customers are Saying About Us</h3>
        <div className="testimonials-slider">{testimonialsContent}</div>
      </div>
    </section>
  );
};

export default Testimonials;
