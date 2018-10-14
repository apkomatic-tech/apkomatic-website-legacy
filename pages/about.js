import React from 'react';
import Link from 'next/link';
import { App, Header, Footer, Wrapper, Splash } from '../components';

import '../css/about.scss';

export default () => (
  <App>
    <Header path="/about" />
    <Splash title="About Us" />
    <Wrapper className="animated fadeInUp" style={{ animationDelay: '400ms' }}>
      <section className="about-us">
        <p>
          <strong>Apkomatic</strong> is a Los Angeles based web design and development group of professionals who love
          producing high quality and affordable web applications and sites for individuals and businesses. We strive to
          deliver high-quality work at low cost for small and mid-size businesses to better reach out to their customers
          through technology.
        </p>
        <p>
          <Link href="/contact">
            <a className="btn btn-lg btn-primary">Contact Us</a>
          </Link>
        </p>
      </section>
    </Wrapper>
    <Footer />
  </App>
);
