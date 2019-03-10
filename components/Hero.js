import React from 'react';
import Link from 'next/link';
import './Hero.scss';

export default () => (
  <>
    <div className="hero jumbotron d-flex align-items-center mb-0">
      <div className="container">
        <h1 className="hero-title text-center animated fadeInDown" style={{ animationDuration: '500ms' }}>
          Take your website <br /> to a whole new level.
        </h1>

        <div className="animated fadeInUp" style={{ animationDelay: '300ms' }}>
          <Link href="/contact">
            <a
              style={{ maxWidth: '300px' }}
              className="btn btn-tertiary mx-auto text-uppercase btn--with-direction-right btn-lg btn-block btn--hero"
            >
              Get a Quote <i className="direction-icon fas fa-chevron-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </>
);
