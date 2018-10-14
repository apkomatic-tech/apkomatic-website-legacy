import React from 'react';
import { Wrapper, FaqBlock, Splash } from '../components';
import { FAQ } from '../data';

import '../css/faq.scss';

const splashProps = {
  title: 'Apkomatic FAQ',
  isFaq: true,
  splashStyle: 'splash--alt2'
};

export default () => (
  <React.Fragment>
    <Splash {...splashProps} />
    <Wrapper>
      <section className="faq-wrapper">
        {FAQ.map(faq => (
          <FaqBlock key={faq.id} {...faq} />
        ))}
      </section>
    </Wrapper>
  </React.Fragment>
);
