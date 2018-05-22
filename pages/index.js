import React from 'react';

import { Header, Footer, Hero, Callout, Featured, ErrorBoundary, Wrapper } from './../components/';

export default () => (
  <div id="landing-page">
    <ErrorBoundary>
      <Header path="/" />
      <Hero tagLines={['Welcome.', 'Need a website?', 'Need a web app?', 'We got you.', 'We are Apkomatic.']} />
      <div id="featured">
        <Featured />
      </div>
      <Callout title="Ready to get started?" href="/contact#contact-form" />
      <Footer />
    </ErrorBoundary>
  </div>
);
