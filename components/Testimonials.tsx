import React, { useEffect } from "react"
import Swiper from "swiper"
import testimonialsJson from "../data/testimonials.json"
import "./Testimonials.scss"

const Testimonials = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      grabCursor: true
    })
  }, [])
  return (
    <div className="testimonials swiper-container">
      <div className="testimonials__title">
        Customers Love Us{" "}
        <div className="testimonials__quote-label">
          <i className="fa fa-quote-left" />
        </div>
      </div>
      <div className="swiper-wrapper">
        {testimonialsJson.map((testimonial, index) => (
          <article
            key={testimonial.id}
            className="swiper-slide testimonials__item"
          >
            <div className="testimonials__inner">
              <section className="testimonials__body">
                <p className="testimonial__text">{testimonial.content}</p>
              </section>
              <section className="testimonials__footer">
                <div className="testimonials__author mb-1">
                  {testimonial.author.name}
                </div>
                <div className="testimonials__company">
                  {testimonial.author.company}
                </div>
              </section>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
