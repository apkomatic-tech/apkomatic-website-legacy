import React from 'react';
import PropTypes from 'prop-types';

const CustomControl = ({ type, labelText, onChange, id, ...otherProps }) => (
  <div className="custom-control custom-checkbox">
    <input type={type} className="custom-control-input" id={id} onChange={onChange} {...otherProps} />
    <label className="custom-control-label" htmlFor={id}>
      {labelText}
    </label>
  </div>
);

CustomControl.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default CustomControl;
