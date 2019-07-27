import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

const Grid = props => {
  const { children, columns, ...rest } = props;
  return (
    <div className={`grid c${columns}`} {...rest}>
      {children}
    </div>
  );
};
Grid.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node.isRequired
};
Grid.defaultProps = {
  columns: 2
};

export default Grid;
