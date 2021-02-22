import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ results }) => (
  <h1 className="d-result">
    { results }
  </h1>
);

Display.propTypes = {
  results: PropTypes.string,

};

Display.defaultProps = {
  results: '0',

};

export default Display;
