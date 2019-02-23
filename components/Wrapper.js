import React from 'react';
import PropTypes from 'prop-types';
import '../css/global.scss';

const Wrapper = ({ animated, fluid, children, ...rest }) => (
  <div className={`container${fluid ? ' container-fluid' : ''}${animated ? ' animated fadeIn' : ''}`} {...rest}>
    {children}
  </div>
);

Wrapper.propTypes = {
  fluid: PropTypes.bool,
  animated: PropTypes.bool
};

Wrapper.defaultProps = {
  animated: false,
  fluid: false
};

export default Wrapper;
