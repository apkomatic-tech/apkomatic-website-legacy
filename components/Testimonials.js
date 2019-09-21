import React from 'react';
import { Slider } from '.';
import testimonialsJson from '../data/testimonials.json';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonialSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    easing: 'cubic-bezier(.55,-0.16,.75,1.16)'
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
              {testimonial.author.company}
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
        <h2 className="testimonials__title text-center">What Customers are Saying About Us</h2>
        <div className="testimonials-slider">{testimonialsContent}</div>
      </div>
    </section>
  );
};

export default Testimonials;
