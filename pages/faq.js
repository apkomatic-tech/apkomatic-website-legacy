import React from 'react';
import { Wrapper, FaqAccordion, Splash } from '../components';
import faqJSON from '../data/faq.json';

import '../css/faq.scss';

const splashProps = {
  title: 'Apkomatic FAQ',
  isFaq: true,
  splashStyle: 'splash--alt1'
};

export default () => (
  <React.Fragment>
    <Splash {...splashProps} />
    <Wrapper>
      <section className="faq-wrapper">
        <FaqAccordion items={faqJSON} />
      </section>
    </Wrapper>
  </React.Fragment>
);
