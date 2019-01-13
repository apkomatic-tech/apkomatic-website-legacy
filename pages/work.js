import React from 'react';
import Link from 'next/link';
import projectsJSON from '../data/projects.json';
import { DISPLAY_WORK } from '../config/global';
import { Wrapper, Splash, PortfolioDisplay } from '../components';

const splashProps = {
  title: 'Our Work',
  text:
    "We work hard to deliver best possible websites. We've had amazing oportunities to work with great clients and we are looking forward to working with you."
};

export default () => (
  <React.Fragment>
    {DISPLAY_WORK && <Splash {...splashProps} />}

    <Wrapper>
      {DISPLAY_WORK && (
        <div className="row d-flex align-items-stretch mt-3 pt-3">
          <PortfolioDisplay items={projectsJSON} />
        </div>
      )}
      {!DISPLAY_WORK && (
        <div
          className="d-flex align-items-center justify-content-center flex-column"
          style={{ textAlign: 'center', minHeight: '300px' }}
        >
          <p className="lead">
            <i className="fa fa-exclamation-triangle text-danger" /> This page is under construction.
          </p>
          <Link href="/">
            <a className="btn btn-muted">Go Back</a>
          </Link>
        </div>
      )}
    </Wrapper>
  </React.Fragment>
);
