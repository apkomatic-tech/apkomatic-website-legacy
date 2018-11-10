/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { DISPLAY_CONTACT_FORM } from '../config/global';
import { Wrapper, ContactForm, ContactStatic, Splash } from '../components';

export default () => (
  <React.Fragment>
    <Splash title="Contact Us" />
    <div className="animated fadeIn">
      <Wrapper>
        <div className="row">
          <div className="col-md-12 col-lg-8 mx-auto" style={{ marginBottom: '3rem' }}>
            {DISPLAY_CONTACT_FORM && <ContactForm />}
            {!DISPLAY_CONTACT_FORM && <ContactStatic />}
          </div>
        </div>
      </Wrapper>
    </div>
  </React.Fragment>
);
