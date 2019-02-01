import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { look, type, size, block, asLink, className, children, ...rest } = props;

  const btnClass = `btn btn-${look}${block ? ' btn-block' : ''}${size ? ` btn-${size}` : ''}${
    className ? ` ${className}` : ''
  }`;

  if (asLink) {
    return (
      <a className={btnClass} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={btnClass} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  look: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  block: PropTypes.bool,
  asLink: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  look: 'primary',
  type: '',
  size: '',
  block: false,
  asLink: false,
  className: ''
};

export default Button;
