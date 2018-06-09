import React from 'react';
import { Header, Footer, Wrapper } from './../components';

export default () => (
  <div id="thank-you">
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
  </div>
);
