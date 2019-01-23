import React from 'react';
import Link from 'next/link';
import { Wrapper } from '.';

import './HeroColumns.scss';

const HeroColumns = () => (
  <section className="hero-columns">
    <Wrapper>
      <header className="hero-columns__header">
        <div className="row">
          <div className="col-md-8 mb-3">
            <p className="lead">Web development company located in Los Angeles, CA</p>
            <p className="text-muted">
              We offer <strong>reliable</strong> and <strong>high-quality</strong> web development work.
            </p>
          </div>
          <div className="col-md-4">
            <Link href="/contact">
              <a className="btn btn-lg btn-muted btn-block btn--with-direction-right">
                Contact Us <i className="direction-icon fas fa-chevron-right" />
              </a>
            </Link>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-md-4" data-aos="fade-up">
          <i className="hero-columns__top-icon text-primary fas fa-pen-nib" />
          <h3 className="hero-columns__title">Design</h3>
          <p className="hero-columns__column-text text-muted">
            We recognize that good design is very important as it visually communicates with your users and customers.
            We take it seriously. Whether you are a small business looking for a simple website to promote your services
            or mid-size organization looking to refresh your website look or add new features - we got you covered.
          </p>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <i className="hero-columns__top-icon text-success fab fa-node-js" />
          <h3 className="hero-columns__title">Development</h3>
          <p className="hero-columns__column-text text-muted">
            Good design is important, but so is technical implementation. Our expertise in front end and backend
            technologies and languages is the key to build responsive and optimized websites and apps.
          </p>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <i className="hero-columns__top-icon text-ternary fas fa-handshake" />
          <h3 className="hero-columns__title">Relationships First</h3>
          <p className="hero-columns__column-text text-muted">
            We truly care about our customers and that
            {`'`}s why our work is not done after we build your product. We will keep in touch with you if you need help
            maintaining your website or web application. We value your time and business.
          </p>
        </div>
      </div>
    </Wrapper>
  </section>
);

export default HeroColumns;
