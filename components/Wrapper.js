import React from 'react';
import PropTypes from 'prop-types';
import './../css/global.scss';

const Wrapper = ({ animated, children, ...rest }) => (
  <div
    className={`container${animated ? ' animated fadeIn' : ''}`}
    style={{ marginTop: '3rem', marginBottom: '3rem' }}
    {...rest}
  >
    {children}
  </div>
);

Wrapper.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.shape([]).isRequired
};

Wrapper.defaultProps = {
  animated: false
};

export default Wrapper;
