import React, { Component } from 'react';

import { App, Header, Footer, Hero, Callout, Featured, Testimonials } from '../components';

export default class Index extends Component {
  static async getInitialProps({ pathname }) {
    return { path: pathname };
  }

  render() {
    const { path } = this.props;

    return (
      <App>
        <Header path={path} />
        <Hero />
        <div id="featured">
          <Featured />
        </div>
        <Testimonials />
        <Callout title="Ready to get started?" href="/contact" />
        <Footer />
      </App>
    );
  }
}
