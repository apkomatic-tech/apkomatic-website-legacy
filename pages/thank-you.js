import React from 'react';
import { App, Header, Footer, Wrapper } from '../components';

const ThankYou = props => (
  <App>
    <Header />
    <Wrapper>
      <section className="thanks">
        <h2>
          <i className="fa fa-smile-o" /> Thank you for contacting us.
        </h2>
        <p className="lead">Someone from our team will reach out to you shortly.</p>
      </section>
    </Wrapper>
    <Footer />
  </App>
);

ThankYou.getInitialProps = async ({ pathname }) => ({
  path: pathname
});

export default ThankYou;
