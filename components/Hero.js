import React from 'react';
import ReactGA from 'react-ga';
import Link from 'next/link';

import './Hero.scss';

export default () => (
  <div className="hero jumbotron d-flex align-items-center mb-0">
    <div className="container">
      <h1 className="hero-title">
        <span>We are Apkomatic.</span>
      </h1>

      <p className="lead hero-slogan text-center">
        Web design and development company <br /> based in Los Angeles.
      </p>

      <div className="animated tada" style={{ animationDuration: '1s', animationDelay: '300ms' }}>
        <Link href="/contact#contact-form">
          <a
            style={{ maxWidth: '200px' }}
            className="btn btn-tertiary text-uppercase btn-lg btn-block mx-auto hero-cta"
            onClick={() => {
              console.log('click-hero-button');
              ReactGA.event({ category: 'Navigation', action: 'hero-button-click' });
            }}
          >
            Get Started <i className="fa fa-angle-double-right" />
          </a>
        </Link>
      </div>
    </div>
  </div>
);
