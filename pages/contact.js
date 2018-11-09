/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { DISPLAY_CONTACT_FORM } from '../config/global';
import { Wrapper, ContactForm } from '../components';

export default () => (
  <div className="contact">
    <Wrapper className="container animated fadeIn" style={{ animationDelay: '200ms' }}>
      {DISPLAY_CONTACT_FORM && <ContactForm />}
    </Wrapper>
  </div>
);
