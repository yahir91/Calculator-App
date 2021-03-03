import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <>
    <button type="button" className="buttons">
      {name}
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,

};

export default Button;
