import React, { Fragment } from 'react';
import Link from 'next/link';
import { Wrapper, Splash } from '../components';

import '../css/about.scss';

const contactBtnStyle = {
  maxWidth: '300px'
};

export default () => (
  <Fragment>
    <Splash title="About Us" />
    <Wrapper>
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <p className="text-muted small mb-3">
            <strong>Apkomatic</strong> is a Los Angeles based web design and development group of professionals who love
            producing high quality and affordable web applications and sites for individuals and businesses. We strive
            to deliver high-quality work at low cost for small and mid-size businesses to better reach out to their
            customers through technology.
          </p>
          <p>
            <Link href="/contact">
              <a className="btn btn-primary btn--with-direction-right mx-auto mx-md-0" style={contactBtnStyle}>
                Contact Us <i className="direction-icon fas fa-chevron-right" />
              </a>
            </Link>
          </p>
        </div>
        <div className="col-md-6">
          <img src="/static/images/about-splash.jpg" className="img-fluid" alt="About Apkomatic" />
        </div>
      </div>
    </Wrapper>
  </Fragment>
);
