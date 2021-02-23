import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div>
    {name.map(symbol => (
      <button key={symbol} type="button" className="buttons">
        {symbol}
      </button>
    ))}
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,

};

export default Button;
