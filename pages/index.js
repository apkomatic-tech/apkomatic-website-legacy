import React from 'react';

import { Header, Footer, Hero, Callout, Featured, ErrorBoundary, Testimonials } from './../components/';

export default () => (
  <div id="landing-page">
    <ErrorBoundary>
      <Header path="/" />
      <Hero />
      <div id="featured">
        <Featured />
      </div>
      <Testimonials />
      <Callout title="Ready to get started?" href="/contact#contact-form" />
      <Footer />
    </ErrorBoundary>
  </div>
);
