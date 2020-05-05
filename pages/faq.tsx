import React from 'react'
import { Wrapper, Accordion, Splash } from '../components'
import faqJSON from '../data/faq.json'

import '../css/faq.scss'

const splashProps = {
  title: 'Frequently Asked Questions',
  splashStyle: 'splash--alt1'
}

export default () => (
  <React.Fragment>
    <Splash {...splashProps} />
    <Wrapper>
      <section className="faq-wrapper">
        <Accordion items={faqJSON} />
      </section>
    </Wrapper>
  </React.Fragment>
)
