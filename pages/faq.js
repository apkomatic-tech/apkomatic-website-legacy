import React from 'react';
import { App, Splash, Header, Footer, Wrapper, FaqBlock } from '../components';
import { FAQ } from '../data';

export default () => (
  <App>
    <Header />
    <Splash title="Frequently Asked Questions" />

    <Wrapper>
      <section className="faq-wrapper" style={{ marginTop: '3rem' }}>
        {FAQ.map(faq => (
          <FaqBlock {...faq} />
        ))}
      </section>
    </Wrapper>
    <Footer />
  </App>
);
