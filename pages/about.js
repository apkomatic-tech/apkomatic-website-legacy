import React from 'react';
import Link from 'next/link';
import { Wrapper, Splash } from '../components';

export default () => (
  <div className="about text-light text-center">
    <Wrapper className="container animated fadeIn" style={{ animationDelay: '400ms' }}>
      <div className="row">
        <div className="col-md-12 col-lg-6 mx-auto">
          <h3 className="mb-3 pb-3">About Apkomatic</h3>
          <p className="mb-3 pb-3">
            <strong>Apkomatic</strong> is a Los Angeles based web design and development group of professionals who love
            producing high quality and affordable web applications and sites for individuals and businesses. We strive
            to deliver high-quality work at low cost for small and mid-size businesses to better reach out to their
            customers through technology.
          </p>
          <p>
            <Link href="/contact">
              <a className="btn btn-tertiary btn--with-direction-right mx-auto" style={{ maxWidth: '300px' }}>
                Contact Us <i className="direction-icon fas fa-chevron-right" />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  </div>
);
