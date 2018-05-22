import React, { Component } from 'react';
import { Wrapper } from './../components';
import './Featured.scss';

const featuredImageStyle = {
  boxShadow: '10px 12px 42px rgba(0,0,0,.2)',
  borderRadius: '4px'
};

export default class Featured extends Component {
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS;
    this.aos.init({ duration: 500 });
    this.aos.refresh();
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    return (
      <React.Fragment>
        <section className="featured">
          <section className="featured__about">
            <Wrapper data-aos="fade-up">
              <h1 className="title">Who are we?</h1>
              <p className="text lead">
                {' '}
                We are a group of passionate web designers and developers who love producing high quality and affordable
                web applications and sites for individuals and businesses. We strive to deliver high-quality work at low
                cost for small and mid-size businesses to better reach out to their customers through technology.
              </p>
            </Wrapper>
          </section>
          <section className="featured__section bg-dark--with-pattern">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <h3>You imagine. We design.</h3>
                  <p className="lead">
                    We recognize that good design is very important as it visually communicates with your users and
                    customers. We take it seriously. Whether you are a small business looking for a simple website to
                    promote your services or mid-size organization looking to refresh your website look or add new
                    features - we got you covered.
                  </p>
                </div>
                <div className="col-lg-6 d-none d-md-block d-lg-block d-xl-block" data-aos="fade-left">
                  <img
                    src="/static/images/featured-design.jpg"
                    className="img-fluid"
                    alt="ideas"
                    style={featuredImageStyle}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="featured__section bg-light--with-pattern">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-3 d-none d-md-block d-lg-block d-xl-block" data-aos="fade-right">
                  <img
                    src="/static/images/featured-dev.jpg"
                    className="img-fluid"
                    alt="development"
                    style={featuredImageStyle}
                  />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                  <h3>We build fast sites.</h3>
                  <p className="lead">
                    No one likes slow and unresponsive websites or apps. We don't build them slow. We deliver websites
                    and apps that are fast and optimized.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="featured__section bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <h3>We optimize for mobile.</h3>
                  <p className="lead">
                    It's no secret that more websites and web apps are accessed using mobile devices. We build websites
                    and web apps that are optimized for mobile.
                  </p>
                </div>
                <div className="col-lg-6 mb-3 d-none d-md-block d-lg-block d-xl-block" data-aos="fade-left">
                  <img
                    src="/static/images/featured-mobile.jpg"
                    className="img-fluid"
                    alt="mobile"
                    style={featuredImageStyle}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="featured__section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-3 d-none d-md-block d-lg-block d-xl-block" data-aos="fade-right">
                  <img
                    src="/static/images/featured-relationship.jpg"
                    alt="relationships"
                    className="img-fluid"
                    style={featuredImageStyle}
                  />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                  <h3>We nurture business relationships</h3>
                  <p className="lead">
                    We truly care about our customers and that{`'`}s why our work is not done after we build your
                    product. We will keep in touch with you if you need help maintaining your website or web
                    application. We value your time and business.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
