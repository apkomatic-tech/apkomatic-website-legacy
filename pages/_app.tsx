import React, { useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import * as Sentry from '@sentry/browser'
import { IS_DEV, SENTRY_KEY } from '../config/global'
import { Page, ErrorBoundary } from '../components'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default props => {
  const { Component, router } = props
  useEffect(() => {
    if (!IS_DEV) {
      Sentry.init({
        dsn: SENTRY_KEY
      })
    }
  }, [])
  return (
    <React.Fragment>
      <ErrorBoundary>
        <Page {...router}>
          <Component />
        </Page>
      </ErrorBoundary>
    </React.Fragment>
  )
}
