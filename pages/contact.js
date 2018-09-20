/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { DISPLAY_CONTACT_FORM } from '../config/global';
import { Header, Footer, Wrapper, Splash, ContactForm, ContactStatic } from '../components';

export default class Contact extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      path: pathname
    };
  }

  render() {
    const { path } = this.props;
    return (
      <div id="contact">
        <Header path={path} />
        <div className="animated fadeIn">
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
  }
}
