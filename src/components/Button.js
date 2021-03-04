import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <>
    <button type="button" className="buttons" onClick={onClick}>
      {name}
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,

};

export default Button;
