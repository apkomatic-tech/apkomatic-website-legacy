import React from 'react';
import projectsJSON from '../data/projects.json';
import { DISPLAY_WORK } from '../config/global';
import { Splash, PortfolioDisplay } from '../components';

const splashProps = {
  title: 'Our Work',
  text:
    "We work hard to deliver best possible websites. We've had amazing oportunities to work with great clients and we are looking forward to working with you."
};

export default () => (
  <React.Fragment>
    {DISPLAY_WORK && <Splash {...splashProps} />}

    <div style={{ maxWidth: '95%', padding: '0 1rem', margin: '2rem auto' }}>
      {DISPLAY_WORK && (
        <div className="row d-flex align-items-stretch mt-3 pt-3">
          <PortfolioDisplay items={projectsJSON} />
        </div>
      )}
    </div>
  </React.Fragment>
);
