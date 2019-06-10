import React from 'react';
import { Wrapper, Splash, ServiceOptions } from '../components';

const splashProps = {
  title: 'Our Services',
  text:
    'Part of our mission is to build affordable websites for all kind of businesses and organizations. We have different service plans tailored to your needs.'
};

export default () => (
  <React.Fragment>
    <Splash {...splashProps} />
    <Wrapper style={{ marginBottom: '3rem' }}>
      <ServiceOptions />
    </Wrapper>
  </React.Fragment>
);
