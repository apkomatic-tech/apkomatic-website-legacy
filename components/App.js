import React, { Component } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as Sentry from '@sentry/browser';
import { IS_DEV, SENTRY_KEY } from '../config/global';
import { ErrorBoundary } from '.';

NProgress.configure({
  showSpinner: true
});

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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
