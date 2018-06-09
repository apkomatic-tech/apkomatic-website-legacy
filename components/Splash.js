import React from 'react';
import './Splash.scss';

const Splash = ({ title, text, splashStyle, children }) => (
  <div className={`jumbotron splash ${splashStyle}`}>
    <div className="container splash__inner">
      <div className="text-center">
        <h1
          className="splash__title animated fadeInDown text-center"
          style={{ animationDuration: '500ms', animationDelay: '200ms' }}
        >
          {title}
        </h1>
        <p className="lead animated fadeInUp" style={{ animationDelay: '700ms' }}>
          {text}
        </p>
        {children}
      </div>
    </div>
  </div>
);

Splash.defaultProps = {
  splashStyle: 'splash--alt1'
};

export default Splash;
