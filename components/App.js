import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';
import { IS_DEV, SENTRY_KEY } from '../config/global';
import { ErrorBoundary } from '.';

export default class App extends Component {
  componentDidMount() {
    Sentry.init({
      dsn: SENTRY_KEY,
      debug: IS_DEV
    });
  }

  render() {
    return (
      <section {...this.props}>
        <ErrorBoundary>{this.props.children}</ErrorBoundary>
      </section>
    );
  }
}
