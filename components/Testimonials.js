import React, { Component } from 'react';
import { Slider } from '.';
import testimonialsJson from '../data/testimonials.json';
import './Testimonials.scss';

const testimonialSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 350,
  slidesToShow: 1,
  slidesToScroll: 1,
  easing: 'cubic-bezier(.22,-0.12,.65,1.11)'
};

export default class Testimonials extends Component {
  state = {
    loading: true,
    testimonials: []
  };

  componentDidMount() {
    this.setState({
      loading: false,
      testimonials: testimonialsJson
    });
  }

  render() {
    const { loading, testimonials } = this.state;
    return (
      <section className="testimonials bg-light">
        <div className="testimonials__quote-label">
          <i className="fa fa-quote-left" />
        </div>
        <div className="container testimonials__inner" data-aos="fade-up">
          <h3 className="testimonials__title text-center">What Customers are Saying About Us</h3>
          <div className="testimonials-slider">
            {loading && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '1rem 10rem',
                  fontStyle: 'italic'
                }}
              >
                Loading Testimonials...
              </div>
            )}
            {!loading &&
              testimonials.length > 0 && (
                <Slider settings={testimonialSliderSettings}>
                  {testimonials.map(testimonial => (
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
              )}
          </div>
        </div>
      </section>
    );
  }
}
