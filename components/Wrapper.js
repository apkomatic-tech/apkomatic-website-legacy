import React from 'react';
import PropTypes from 'prop-types';
import '../css/global.scss';

const Wrapper = ({ animated, children, ...rest }) => (
  <div className={`container${animated ? ' animated fadeIn' : ''}`} {...rest}>
    {children}
  </div>
);

Wrapper.propTypes = {
  animated: PropTypes.bool
};

Wrapper.defaultProps = {
  animated: false
};

export default Wrapper;
