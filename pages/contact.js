/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { DISPLAY_CONTACT_FORM } from './../config/global';
import { Header, Footer, Wrapper, Splash, ContactForm, ContactStatic } from './../components/';

export default () => (
  <div id="contact">
    <Header path="/contact" />
    <div className="animated fadeIn">
      <Splash title="Contact" text="Contact us for a quote or to just say hello." />
      <Wrapper animated>
        <div className="row">
          <div className="col-md-12 col-lg-8 mx-auto">
            {DISPLAY_CONTACT_FORM && <ContactForm />}
            {!DISPLAY_CONTACT_FORM && <ContactStatic />}
          </div>
        </div>
      </Wrapper>
    </div>
    <Footer />
  </div>
);
