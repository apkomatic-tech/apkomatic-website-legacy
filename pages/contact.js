/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { DISPLAY_CONTACT_FORM } from '../config/global';
import { App, Header, Footer, Wrapper, ContactForm, ContactStatic, Splash } from '../components';

export default class Contact extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      path: pathname
    };
  }

  render() {
    const { path } = this.props;
    return (
      <App id="contact">
        <Header path={path} />
        <Splash title="Contact Us" />
        <div className="animated fadeIn">
          <Wrapper className="animated fadeInUp" style={{ animationDelay: '400ms' }}>
            <div className="row">
              <div className="col-md-12 col-lg-8 mx-auto" style={{ marginBottom: '3rem' }}>
                {DISPLAY_CONTACT_FORM && <ContactForm />}
                {!DISPLAY_CONTACT_FORM && <ContactStatic />}
              </div>
            </div>
          </Wrapper>
        </div>
        <Footer />
      </App>
    );
  }
}
