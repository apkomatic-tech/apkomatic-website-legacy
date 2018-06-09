import React from 'react';
import { Header, Footer, Wrapper, FaqBlock } from './../components';
import { FAQ } from './../data/';

export default () => (
  <div id="faq">
    <Header />
    <Wrapper>
      <section>
        <h3>
          <i className="fa fa-lightbulb-o" /> Frequently Asked Questions
        </h3>
        <p className="lead">
          Please see the following questions and answers regarding our design and development services.
        </p>
        <section className="faq-wrapper" style={{ marginTop: '3rem' }}>
          {FAQ.map(faq => <FaqBlock {...faq} />)}
        </section>
      </section>
    </Wrapper>
    <Footer />
  </div>
);
