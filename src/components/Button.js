import React from 'react';
import PropTypes from 'prop-types';
import buttonClass from '../logic/buttonClass';

const Button = ({ name, onClick }) => {
  const buttonStyle = buttonClass(name);

  return (
    <>
      <button type="button" className={buttonStyle} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
