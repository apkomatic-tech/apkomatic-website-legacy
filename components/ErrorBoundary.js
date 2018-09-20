import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  state = {
    error: null
  };

  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, errorInfo: info, error }));
    Sentry.configureScope(scope => {
      Object.keys(info).forEach(key => {
        scope.setExtra(key, info[key]);
      });
    });
    Sentry.captureException(error);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="site-error">
          <h1>We're sorry :(</h1>
          <p>Something went wrong on our end.</p>
          <a
            href="#"
            className="btn btn-secondary"
            onClick={e => {
              e.preventDefault();
              Sentry.showReportDialog();
            }}
          >
            Report this issue
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {};

export default ErrorBoundary;
