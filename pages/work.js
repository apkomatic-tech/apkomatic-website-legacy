import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '../data';
import { DISPLAY_WORK } from '../config/global';
import { App, Header, Footer, Wrapper, Splash, PortfolioDisplay } from '../components';

export default class Work extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      path: pathname
    };
  }

  render() {
    const { path } = this.props;

    return (
      <App>
        <Header path={path} />
        {DISPLAY_WORK && (
          <Splash
            title="Our Work"
            text="We work hard to deliver best possible websites. We've had amazing oportunities to work with great clients and we are looking forward to working with you."
          />
        )}

        <Wrapper>
          {DISPLAY_WORK && (
            <div className="row d-flex align-items-stretch mt-3 pt-3">
              <PortfolioDisplay items={PROJECTS} />
            </div>
          )}
          {!DISPLAY_WORK && (
            <div
              className="d-flex align-items-center justify-content-center flex-column"
              style={{ textAlign: 'center', minHeight: '300px' }}
            >
              <p className="lead">
                <i className="fa fa-exclamation-triangle text-danger" /> This page is under construction.
              </p>
              <Link href="/">
                <a className="btn btn-muted">Go Back</a>
              </Link>
            </div>
          )}
        </Wrapper>
        <Footer />
      </App>
    );
  }
}
