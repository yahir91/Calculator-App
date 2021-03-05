import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ next, total }) => (
  <h1 className="d-result">
    { next || total }
  </h1>
);

Display.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};

Display.defaultProps = {
  next: '0',
  total: '0',
};

export default Display;
