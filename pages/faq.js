import React from 'react';
import { Splash, Header, Footer, Wrapper, FaqBlock } from './../components';
import { FAQ } from './../data/';

export default () => (
  <div id="faq">
    <Header />
    <Splash
      title="Frequently Asked Questions"
      text="Please see the following questions and answers regarding our design and development services."
    />

    <Wrapper>
      <section className="faq-wrapper" style={{ marginTop: '3rem' }}>
        {FAQ.map(faq => <FaqBlock {...faq} />)}
      </section>
    </Wrapper>
    <Footer />
  </div>
);
