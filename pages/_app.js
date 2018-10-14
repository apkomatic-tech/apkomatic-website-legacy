import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as Sentry from '@sentry/browser';
import { IS_DEV, SENTRY_KEY } from '../config/global';
import { Page, Header, Footer, ErrorBoundary } from '../components';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class ApkomaticApp extends App {
  componentDidMount() {
    Sentry.init({
      dsn: SENTRY_KEY,
      debug: IS_DEV
    });
  }

  render() {
    const { Component, router } = this.props;

    return (
      <Container>
        <Header path={router.pathname} fixed={router.pathname === '/'} />
        <ErrorBoundary>
          <Page>
            <Component />
          </Page>
        </ErrorBoundary>
        <Footer />
      </Container>
    );
  }
}
