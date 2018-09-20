import React from 'react';
import { App, Header, Footer, Wrapper, Splash, CardStack } from '../components';

export default class Services extends React.Component {
  static async getInitialProps({ pathname }) {
    return { path: pathname };
  }

  render() {
    const { path } = this.props;

    return (
      <App>
        <Header path={path} />
        <Splash
          title="Our Services"
          text="Part of our mission is to build affordable websites for all kind of businesses and organizations. We have different service plans tailored to your needs."
        />
        <Wrapper>
          <CardStack />
        </Wrapper>
        <Footer />
      </App>
    );
  }
}
