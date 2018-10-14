import React from 'react';
import PropTypes from 'prop-types';
import './Splash.scss';

const Splash = ({ title, text, splashStyle, isFaq, children }) => (
  <div className={`jumbotron splash ${splashStyle}`}>
    <div className="container splash__inner">
      <div className="text-center">
        <h2
          className="splash__title animated fadeInDown text-center"
          style={{ animationDuration: '500ms', animationDelay: '200ms' }}
        >
          {isFaq && <i className="fas fa-question-circle" />} {title}
        </h2>
        {text && (
          <p className="lead animated fadeInUp" style={{ animationDelay: '700ms' }}>
            {text}
          </p>
        )}
        {children}
      </div>
    </div>
  </div>
);
Splash.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  splashStyle: PropTypes.string,
  isFaq: PropTypes.bool
};

Splash.defaultProps = {
  splashStyle: 'splash--alt1',
  text: '',
  isFaq: false
};

export default Splash;
