import React, { useEffect } from 'react'
import { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import * as Sentry from '@sentry/browser'
import { IS_DEV, SENTRY_KEY } from '../config/global'
import { Page, ErrorBoundary } from '../components'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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
    <Container>
      <ErrorBoundary>
        <Page {...router}>
          <Component />
        </Page>
      </ErrorBoundary>
    </Container>
  )
}
