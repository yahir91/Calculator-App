import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttons }) => (
  <div>
    {buttons.map(symbol => (
      <button key={symbol.toString()} type="button" className="buttons">
        {symbol}
      </button>
    ))}
  </div>
);

Button.propTypes = {
  buttons: PropTypes.string.isRequired,

};

export default Button;
