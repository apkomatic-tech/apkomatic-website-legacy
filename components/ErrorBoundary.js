import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInfo: null
  };

  componentDidCatch(error, info) {
    this.setState(
      state => ({ ...state, errorInfo: info, hasError: true }),
      () => {
        console.error('error', error);
        console.error('error info', info);
      }
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="site-error">
          <h1>Oops something went wrong.</h1>
          {/* <pre>{this.state.errorInfo}</pre> */}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {};

export default ErrorBoundary;
