import React from 'react';
import Link from 'next/link';
import { Wrapper } from '.';

import './HeroCallout.scss';

export default () => (
  <section className="hero-callout text-center" data-aos="fade-up">
    <Wrapper>
      <h3>Ready to get started?</h3>
      <p>Drop us a line. It only takes a few minutes. We will take care of the rest.</p>
      <p className="mt-3">
        <Link href="/contact">
          <a
            className="btn btn-muted btn btn-lg btn-block mx-auto btn--with-direction-right"
            style={{
              maxWidth: '300px'
            }}
          >
            Get a quote <i className="direction-icon fas fa-chevron-right" />
          </a>
        </Link>
      </p>
    </Wrapper>
  </section>
);
