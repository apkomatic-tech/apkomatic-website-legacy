import React from 'react';
import { App, Header, Footer, Wrapper, FaqBlock, Splash } from '../components';
import { FAQ } from '../data';

import '../css/faq.scss';

const splashProps = {
  title: 'Apkomatic FAQ',
  isFaq: true,
  splashStyle: 'splash--alt2'
};

export default () => (
  <App>
    <Header path="/faq" />
    <Splash {...splashProps} />
    <Wrapper>
      <section className="faq-wrapper">
        {FAQ.map(faq => (
          <FaqBlock key={faq.id} {...faq} />
        ))}
      </section>
    </Wrapper>
    <Footer />
  </App>
);
