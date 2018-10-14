import React from 'react';
import Link from 'next/link';
import { Wrapper, Splash } from '../components';

import '../css/about.scss';

const splashProps = {
  title: 'About Us'
};

export default () => (
  <React.Fragment>
    <section className="about-us">
      <Wrapper>
        <div className="row">
          <div className="col-md-6">
            <h4>About Apkomatic</h4>
            <p className="text-muted small mb-3">
              <strong>Apkomatic</strong> is a Los Angeles based web design and development group of professionals who
              love producing high quality and affordable web applications and sites for individuals and businesses. We
              strive to deliver high-quality work at low cost for small and mid-size businesses to better reach out to
              their customers through technology.
            </p>
            <p>
              <Link href="/contact">
                <a className="btn btn-primary btn--with-direction-right" style={{ maxWidth: '300px' }}>
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
    </section>
  </React.Fragment>
);
