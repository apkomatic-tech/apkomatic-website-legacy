import React from 'react';
import { Header, Footer, Wrapper, Splash, CardStack } from './../components/';

const Services = () => (
  <div id="services">
    <Header path="/services" />
    <Splash title="Services" text="We offer web design and development services." />
    <Wrapper>
      <CardStack />
    </Wrapper>
    <Footer />
  </div>
);

export default Services;
