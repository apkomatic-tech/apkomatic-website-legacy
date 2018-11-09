import React from 'react';
import Link from 'next/link';
import { Wrapper } from '../components';

export default () => (
  <React.Fragment>
    <Wrapper>
      <section className="thanks">
        <h3>
          <i className="fa fa-smile-o" /> Thank you for contacting us.
        </h3>
        <p className="text-muted">Someone from our team will reach out to you shortly.</p>
        <Link href="/">
          <a className="btn btn-muted btn-block mx-auto" style={{ maxWidth: '200px' }}>
            Go Home
          </a>
        </Link>
      </section>
    </Wrapper>
  </React.Fragment>
);
