import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
    return ( 
        <div>
        {name.map(symbol => (
          <button key={symbol.toString()} type="button" className="buttons">
            {symbol}
          </button>
        ))
        }
      </div>
     );
}
 
export default Button;