import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'

class ErrorBoundary extends Component {
  state = {
    error: null
  }

  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, errorInfo: info, error }))
    Sentry.configureScope(scope => {
      Object.keys(info).forEach(key => {
        scope.setExtra(key, info[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return (
        <div className="site-error">
          <h1>
            We
            {"'"}
            re sorry,
          </h1>
          <p>Something went wrong on our end.</p>
          <button type="button" className="btn btn-muted" onClick={Sentry.showReportDialog}>
            Report this issue
          </button>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
